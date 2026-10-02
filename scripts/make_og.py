"""Generates a 1200x630 Open Graph share card for the wedding site."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
IVORY = (255, 249, 239)
GOLD = (181, 150, 90)
MAROON_TOP = (66, 19, 30)
MAROON_BOT = (104, 31, 45)

DIDOT = "/System/Library/Fonts/Supplemental/Didot.ttc"
GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"
FUTURA = "/System/Library/Fonts/Supplemental/Futura.ttc"

GROOM = "Rahul"
BRIDE = "Sravani"
DATE = "03 December 2026"
EYEBROW = "A CELEBRATION OF LOVE"
HASHTAG = "#RahulWedsSravani"


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


# Vertical maroon gradient background.
base = Image.new("RGB", (W, H))
px = base.load()
for y in range(H):
    row = lerp(MAROON_TOP, MAROON_BOT, y / H)
    for x in range(W):
        px[x, y] = row

# Temple blended into the right band.
band_w = 500
temple = Image.open("public/temple.png").convert("RGB")
scale = max(band_w / temple.width, H / temple.height)
tw, th = int(temple.width * scale), int(temple.height * scale)
temple = temple.resize((tw, th), Image.LANCZOS)
top = (th - H) // 2
temple = temple.crop((0, top, band_w if band_w <= tw else tw, top + H))
if temple.width < band_w:
    temple = temple.resize((band_w, H), Image.LANCZOS)

mask = Image.new("L", (band_w, H), 0)
mp = mask.load()
for x in range(band_w):
    a = max(0, min(255, int((x - 40) / 280 * 255)))
    for y in range(H):
        mp[x, y] = a
base.paste(temple, (W - band_w, 0), mask)

draw = ImageDraw.Draw(base)

# Thin gold frame.
m = 30
draw.rectangle([m, m, W - m, H - m], outline=GOLD, width=2)
draw.rectangle([m + 8, m + 8, W - m - 8, H - m - 8], outline=(GOLD[0], GOLD[1], GOLD[2]), width=1)


def tracked(xy, text, font, fill, tracking=0, anchor_left=True):
    x, y = xy
    if not anchor_left:
        total = sum(draw.textlength(c, font=font) + tracking for c in text) - tracking
        x -= 0
    for c in text:
        draw.text((x, y), c, font=font, fill=fill)
        x += draw.textlength(c, font=font) + tracking


f_eyebrow = ImageFont.truetype(FUTURA, 24)
f_names = ImageFont.truetype(DIDOT, 92)
f_amp = ImageFont.truetype(DIDOT, 48)
f_date = ImageFont.truetype(GEORGIA, 30)
f_hash = ImageFont.truetype(FUTURA, 22)
f_seal = ImageFont.truetype(DIDOT, 34)

LX = 95

# Small monogram seal.
sc = (LX + 35, 120)
draw.ellipse([sc[0] - 38, sc[1] - 38, sc[0] + 38, sc[1] + 38], outline=GOLD, width=2)
draw.ellipse([sc[0] - 31, sc[1] - 31, sc[0] + 31, sc[1] + 31], outline=GOLD, width=1)
seal = "R&S"
sw = draw.textlength(seal, font=f_seal)
draw.text((sc[0] - sw / 2, sc[1]), seal, font=f_seal, fill=GOLD, anchor="lm")

# Eyebrow.
tracked((LX, 210), EYEBROW, f_eyebrow, GOLD, tracking=6)

# Names (stacked for elegance).
draw.text((LX, 250), GROOM, font=f_names, fill=IVORY)
draw.text((LX, 335), "&", font=f_amp, fill=GOLD)
draw.text((LX + 55, 330), BRIDE, font=f_names, fill=IVORY)

# Divider.
draw.line([LX, 455, LX + 150, 455], fill=GOLD, width=1)

# Date + hashtag.
tracked((LX, 475), DATE, f_date, IVORY, tracking=2)
tracked((LX, 525), HASHTAG, f_hash, (GOLD[0], GOLD[1], GOLD[2]), tracking=3)

base.save("public/og-image.jpg", quality=90)
print("Wrote public/og-image.jpg", base.size)
