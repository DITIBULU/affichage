"""Met à jour horaires-officiels.js avec le calendrier officiel Diyanet de Montargis.

Lit la page publique namazvakitleri.diyanet.gov.tr (Montargis, n° 13328), qui contient
l'année en cours, et ajoute / met à jour les jours trouvés sans effacer les autres.
Utilisé chaque semaine par .github/workflows/horaires-diyanet.yml.
"""
import html
import re
import sys
import urllib.request

URL = "https://namazvakitleri.diyanet.gov.tr/tr-TR/13328/montargis-icin-namaz-vakti"
FICHIER = "horaires-officiels.js"
MOIS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

ENTETE = """/* =====================================================================
   HORAIRES OFFICIELS DIYANET — MONTARGIS · RESMÎ NAMAZ VAKİTLERİ
   Source : namazvakitleri.diyanet.gov.tr (Montargis, n° 13328)
   Mis à jour automatiquement chaque semaine (outils/maj_horaires_diyanet.py).
   Ces horaires sont prioritaires sur le calcul automatique.
   Pour les jours absents de cette liste, l'écran calcule lui-même.
   Ordre : İmsak, Güneş, Öğle, İkindi, Akşam, Yatsı
   ===================================================================== */
"""


def lire_page():
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0 (affichage DITIB Montargis)"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode("utf-8", "replace")


def extraire(page):
    cellules = [html.unescape(c).strip() for c in re.findall(r"<td[^>]*>([^<]*)</td>", page)]
    jours, date, heures = {}, None, []
    for c in cellules:
        m = re.match(r"^(\d{2}) (\S+) (\d{4})", c)
        if m and m.group(2) in MOIS:
            date = f"{m.group(3)}-{MOIS.index(m.group(2)) + 1:02d}-{m.group(1)}"
            heures = []
            continue
        if date and re.fullmatch(r"\d{2}:\d{2}", c):
            heures.append(c)
            if len(heures) == 6:
                jours.setdefault(date, heures)
                date = None
    return jours


def lire_existant():
    try:
        with open(FICHIER, encoding="utf-8") as f:
            texte = f.read()
    except FileNotFoundError:
        return {}
    return {d: re.findall(r'"(\d{2}:\d{2})"', h)
            for d, h in re.findall(r'"(\d{4}-\d{2}-\d{2})":\s*\[([^\]]*)\]', texte)}


def main():
    nouveaux = extraire(lire_page())
    if len(nouveaux) < 7:
        sys.exit(f"Page Diyanet illisible : seulement {len(nouveaux)} jours trouvés, fichier inchangé.")
    jours = lire_existant()
    avant = dict(jours)
    jours.update(nouveaux)
    lignes = [f'  "{d}": [{", ".join(chr(34) + h + chr(34) for h in jours[d])}]' for d in sorted(jours)]
    with open(FICHIER, "w", encoding="utf-8", newline="\n") as f:
        f.write(ENTETE + "window.HORAIRES_OFFICIELS = {\n" + ",\n".join(lignes) + "\n};\n")
    ajoutes = len(set(jours) - set(avant))
    modifies = sum(1 for d in avant if avant[d] != jours[d])
    print(f"{len(nouveaux)} jours lus sur Diyanet ({min(nouveaux)} → {max(nouveaux)}) : "
          f"{ajoutes} ajoutés, {modifies} modifiés, {len(jours)} au total.")


if __name__ == "__main__":
    main()
