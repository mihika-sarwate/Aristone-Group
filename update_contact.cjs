const fs = require('fs');

// Update Footer.tsx
let footer = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
footer = footer.replace(/<a\s+href="https:\/\/wa\.me\/918779282801"[\s\S]*?>\s*\+91 8779 282 801\s*<\/a>/s, '<span>To be updated soon</span>');
footer = footer.replace(/info@aristonegroup\.com/g, 'aristonebd@gmail.com');
footer = footer.replace(/Aristone Tower, Bandra West<br \/>\s*Mumbai, Maharashtra 400050/s, 'Mira Road, Palghar');
fs.writeFileSync('src/components/layout/Footer.tsx', footer, 'utf8');

// Update Enquire.tsx
let enquire = fs.readFileSync('src/pages/Enquire.tsx', 'utf8');
enquire = enquire.replace(/\+91 8779 282 801/g, 'To be updated soon');
enquire = enquire.replace(/info@aristonegroup\.com/g, 'aristonebd@gmail.com');
enquire = enquire.replace(/Aristone Tower[\s\S]*?Bandra West, Mumbai/s, 'Mira Road, Palghar');
// Remove WhatsApp chat button in Enquire if it exists
enquire = enquire.replace(/<Button[^>]*>\s*<a href=\{`https:\/\/wa\.me\/918779282801\?text=\$\{WHATSAPP_MESSAGE\}`\}[^>]*>\s*Chat on WhatsApp\s*<\/a>\s*<\/Button>/s, '');
enquire = enquire.replace(/const WHATSAPP_MESSAGE = encodeURIComponent\([^)]+\);/s, '');
fs.writeFileSync('src/pages/Enquire.tsx', enquire, 'utf8');
