import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT      = path.join(__dirname, '..')
const PHOTOS    = path.join(ROOT, 'public', 'photos')
const RAW       = path.join(PHOTOS, 'raw')

// Each entry: Instagram post screenshot → output name
// topPct / botPct = fraction of height to remove from top/bottom
const crops = [
  { in: '2.jpg', out: 'about.jpg',       topPct: 0.08, botPct: 0.35 },
  { in: '3.jpg', out: 'hero.jpg',         topPct: 0.08, botPct: 0.35 },
  { in: '4.jpg', out: 'portfolio-1.jpg',  topPct: 0.08, botPct: 0.35 },
  { in: '5.jpg', out: 'portfolio-2.jpg',  topPct: 0.08, botPct: 0.35 },
  { in: '6.jpg', out: 'portfolio-3.jpg',  topPct: 0.08, botPct: 0.35 },
]

// OG image: landscape crop from hero (1200x630)
const OG_SOURCE = path.join(PHOTOS, 'hero.jpg')
const OG_OUT    = path.join(ROOT, 'public', 'og-image.jpg')

for (const crop of crops) {
  const inPath  = path.join(RAW, crop.in)
  const outPath = path.join(PHOTOS, crop.out)

  if (!fs.existsSync(inPath)) {
    console.warn(`  skip ${crop.in} (not found)`)
    continue
  }

  const { width, height } = await sharp(inPath).metadata()
  const top        = Math.round(height * crop.topPct)
  const bot        = Math.round(height * crop.botPct)
  const cropHeight = height - top - bot

  await sharp(inPath)
    .extract({ left: 0, top, width, height: cropHeight })
    .jpeg({ quality: 92 })
    .toFile(outPath)

  console.log(`  ${crop.out}  (${width}x${cropHeight}px  from ${width}x${height}px)`)
}

// Generate OG image from hero (center-crop to 1200x630)
if (fs.existsSync(OG_SOURCE)) {
  await sharp(OG_SOURCE)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 90 })
    .toFile(OG_OUT)
  console.log('  og-image.jpg  (1200x630)')
} else {
  console.warn('  og-image.jpg skipped (hero.jpg not ready yet)')
}

console.log('\nDone. Photos in public/photos/')
