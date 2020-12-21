/*


Bot List Diamon Bangcin Store 
Buat Menu Extensi js (javascript)
Install Package : npm i whatsapp-web.js


*/

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});
// LIST MOBILE LEGENDS
client.on('message', msg => {
    if (msg.body == 'listml') {
        msg.reply(`🔰 --[ *MENU DM ML BANGCIN* ]-- 🔰
             
Hi,👋️
INI MENU DIAMON MOBILE LEGENDS ! ✨
           
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
           
*♻ : DIAMOND MOBILE LEGEND A* 
              
70💎  : 14k
141💎 : 27k
281💎 : 54k
345💎 : 68k
415💎 : 82k
708💎 : 140k
1446💎: 280k
2976💎: 560k
7502💎: 1400k
           
*♻ : DIAMOND MOBILE LEGEND B* 
86💎  : 18,5K
172💎 : 37K
257💎 : 55,5K
706💎 : 143,5K
2195💎: 426K
3688💎: 708,5K
5532💎: 1064K
9288💎: 1772,5K
SL    : 112K
SL +  : 224K
TP    : 112K
       
 ⚠️*PAYMENT*⚠️
A/N VIRGIAWAN PERDANA
*- SCAN BARCODE = BANGCIN*
*- BCA = 8790283792*
*- JENIUS = 90140014614*
*- DANA = 085811054157 (LIMIT)*
*- OVO = 085811054157*
*- GOPAY = 085811054157*
*- LINKAJA = 085811054157*
*- SHOPEEPAY = 085811054157*
*- INDOMARET / ALFAMART = KODE KE PM*
             
🔰 --[ *BangCin Store* ]-- 🔰`);
    }
});
//LIST PUBG
client.on('message', msg => {
    if (msg.body == 'listpubg') {
        msg.reply(`
🔰 --[ *MENU UC PUBG BANGCIN* ]-- 🔰
          
Hi,👋️
INI MENU UC PUBG ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : UC PUBG REG INDO* 
       
74  💵 : 13K
221 💵 : 38,5k
770 💵 : 127k
2013💵 : 316k
4200💵 : 630k
8750💵 : 1255k
RP  : 135K
EP+ : 325K
    
*♻  : UC PUBG REG GLOBAL* 
    
63  💵 : 13K
198 💵 : 38,5k
690 💵 : 128k
1875💵 : 320,5k
4000💵 : 640,5k
8400💵 : 1280k
RP  : 135K
EP+ : 325K
        
⚠️*PAYMENT*⚠️
 A/N VIRGIAWAN PERDANA
*- SCAN BARCODE = BANGCIN*
*- BCA = 8790283792*
*- JENIUS = 90140014614*
*- DANA = 085811054157 (LIMIT)*
*- OVO = 085811054157*
*- GOPAY = 085811054157*
*- LINKAJA = 085811054157*
*- SHOPEEPAY = 085811054157*
*- INDOMARET / ALFAMART = KODE KE PM*
          
🔰 --[ *BANGCIN BOT* ]-- 🔰`);
    }
});
//LIST FF
client.on('message', msg => {
    if (msg.body == 'listff') {
        msg.reply(`
🔰 --[ *MENU DM FF BANGCIN* ]-- 🔰
          
Hi, 👋️
INI MENU DIAMON FREE FIRE ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : DIAMOND FREE FIRE* 
           
70💎  : 9,5K
100💎 : 14k
140💎 : 18k
150💎 : 20,5k
210💎 : 27,5k
280💎 : 36k
355💎 : 46,5k
425💎 : 56k
500💎 : 65,5k
720💎 : 92K
2000💎: 252K
MM    : 28K
MB    : 112K
        
⚠️*PAYMENT*⚠️
A/N VIRGIAWAN PERDANA
*- SCAN BARCODE = BANGCIN*
*- BCA = 8790283792*
*- JENIUS = 90140014614*
*- DANA = 085811054157 (LIMIT)*
*- OVO = 085811054157*
*- GOPAY = 085811054157*
*- LINKAJA = 085811054157*
*- SHOPEEPAY = 085811054157*
*- INDOMARET / ALFAMART = KODE KE PM*
         
🔰 --[ *BANGCIN STORE* ]-- 🔰`);
    }
});
// LIST MENU
client.on('message', msg => {
    if (msg.body == 'menu') {
        msg.reply(`
╔══✪〘 INFORMATION 〙✪══
║
╠➥ BangCin Store Bot
╠➥ 2.0
╠➥ CREATOR : irfnadi_
╠➥ wa.me/6285811054157
║
╠══✪〘 BANGCIN STORE 〙✪═
║
╠➥ *listff*
╠➥ *listml*
╠➥ *listpubg*
╠➥ *listcodm*
╠➥ *listvalo*
╠➥ *listcv*
║
╚═〘 BangCin Store 〙`);
    }
});
//LIST CODM
client.on('message', msg => {
    if (msg.body == 'listcodm') {
        msg.reply(`
🔰 --[ *MENU CP CODM* ]-- 🔰
          
Hi,👋️
INI MENU CP CODM ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : CP COD MOBILE* 
       
53  💵 : 7k
112 💵 : 13,5k
278 💵 : 33k
581 💵 : 66k
1268💵 : 132k
1901💵 : 198k
3300💵 : 330k
7128💵 : 660k

⚠️*PAYMENT*⚠️
 A/N VIRGIAWAN PERDANA
*- SCAN BARCODE = BANGCIN*
*- BCA = 8790283792*
*- JENIUS = 90140014614*
*- DANA = 085811054157 (LIMIT)*
*- OVO = 085811054157*
*- GOPAY = 085811054157*
*- LINKAJA = 085811054157*
*- SHOPEEPAY = 085811054157*
*- INDOMARET / ALFAMART = KODE KE PM*
          
🔰 --[ *BANGCIN BOT* ]-- 🔰`);
    }
});
//LIST VALORANT
client.on('message', msg => {
    if (msg.body == 'listvalo') {
        msg.reply(`
🔰 --[ *MENU POINT VALORANT* ]-- 🔰
          
Hi,👋️
INI MENU POINT VALORANT ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : POINT VALORANT* 
       
300 🪙 : 28k
625 🪙 : 56k
1125🪙 : 100k
1650🪙 : 140k
3400🪙 : 280k
7000🪙 : 560k

⚠️*PAYMENT*⚠️
 A/N VIRGIAWAN PERDANA
*- SCAN BARCODE = BANGCIN*
*- BCA = 8790283792*
*- JENIUS = 90140014614*
*- DANA = 085811054157 (LIMIT)*
*- OVO = 085811054157*
*- GOPAY = 085811054157*
*- LINKAJA = 085811054157*
*- SHOPEEPAY = 085811054157*
*- INDOMARET / ALFAMART = KODE KE PM*
          
🔰 --[ *BANGCIN BOT* ]-- 🔰`);
    }
});
//list AOV
client.on('message', msg => {
    if (msg.body == 'listaov') {
        msg.reply(`
🔰 --[ *MENU VOUCHER AOV* ]-- 🔰
          
Hi,👋️
INI MENU VOUCHER AOV ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : VOUCHER AOV* 
       
40  🎫 : 7k
90  🎫 : 13,5k
230 🎫 : 33k
470 🎫 : 66k
950 🎫 : 132k
1430🎫 : 198k
2390🎫 : 330k
4800🎫 : 660k

⚠️*PAYMENT*⚠️
 A/N VIRGIAWAN PERDANA
*- SCAN BARCODE = BANGCIN*
*- BCA = 8790283792*
*- JENIUS = 90140014614*
*- DANA = 085811054157 (LIMIT)*
*- OVO = 085811054157*
*- GOPAY = 085811054157*
*- LINKAJA = 085811054157*
*- SHOPEEPAY = 085811054157*
*- INDOMARET / ALFAMART = KODE KE PM*
          
🔰 --[ *BANGCIN BOT* ]-- 🔰`);
    }
});
//LIST CONVERT PULSA TELKOMSEL
client.on('message', msg => {
    if (msg.body == 'listcv') {
        msg.reply(`
🔰 --[ *MENU CV PULSA TELKOMSEL* ]-- 🔰
          
Hi,👋️
INI MENU CV PULSA TELKOMSEL ! ✨
        
⚠️ *BOT INI HANYA MENAMPILKAN LIST!*
⚠️ *JANGAN TRANSFER APAPUN KE NOMOR BOT!*
        
*♻  : RATE CONVERT TELKOMSEL* 
       
50K         : 0.70
51 - 100K   : 0.72
101k - 200k : 0.74
201k - 500k : 0.76
500k +      : 0.80

⚠️*PAYMENT*⚠️
 A/N VIRGIAWAN PERDANA
*- SCAN BARCODE = BANGCIN*
*- BCA = 8790283792*
*- JENIUS = 90140014614*
*- DANA = 085811054157 (LIMIT)*
*- OVO = 085811054157*
*- GOPAY = 085811054157*
*- LINKAJA = 085811054157*
*- SHOPEEPAY = 085811054157*
*- INDOMARET / ALFAMART = KODE KE PM*
          
🔰 --[ *BANGCIN BOT* ]-- 🔰`);
    }
});

client.initialize();
