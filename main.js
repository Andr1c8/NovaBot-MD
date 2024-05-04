//Código desde cero y comentarios hecho por: 
// @gata_dios   
// @Skidy89  
// @elrebelde21 
// @Andr1c8
                    
//--------------------[ IMPORTACIONES ]-----------------------          
const baileys = require('@whiskeysockets/baileys'); // trabajar a través de descargas por Whatsapp 
const { WaMessageStubType, areJidsSameUser, downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, relayMessage} = require('@whiskeysockets/baileys'); // Importa los objetos 'makeWASocket' y 'proto' desde el módulo '@whiskeysockets/baileys'   
const { default: makeWASocket, proto } = require("@whiskeysockets/baileys") 
const moment = require('moment-timezone') // Trabajar con fechas y horas en diferentes zonas horarias
const gradient = require('gradient-string') // Aplicar gradientes de color al texto     
const { exec, spawn, execSync } =  require("child_process")// Función 'execSync' del módulo 'child_process' para ejecutar comandos en el sistema operativo 
const chalk = require('chalk') // Estilizar el texto en la consola  
const os = require('os') // Proporciona información del sistema operativo 
const fs = require('fs') // Trabajar con el sistema de archivos    
const fetch = require('node-fetch')
const axios = require('axios') 
const cheerio = require('cheerio')
const gpt = require('api-dylux')
const util = require('util')
const createHash = require('crypto') 
const mimetype = require("mime-types")  
const ws = require('ws')
const JavaScriptObfuscator = require('javascript-obfuscator')
const webp = require("node-webpmux")
const Jimp = require('jimp')
const { File } = require("megajs")
const speed = require("performance-now")
const ffmpeg = require("fluent-ffmpeg")
const similarity = require('similarity') 
const translate = require('@vitalets/google-translate-api') 
const { canLevelUp, xpRange } = require('./libs/levelling.js')
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, msToTime, downloadMediaMessage, convertirMsADiasHorasMinutosSegundos, pickRandom, getUserBio, asyncgetUserProfilePic} = require('./libs/fuctions')
const {jadibot, listJadibot, killJadibot} = require('./plugins/serbot.js')    
const {menu} = require('./plugins/menu.js') 
const {info} = require('./plugins/info.js')
const {reg, rpg} = require('./plugins/rpg.js') 
const {game, game2, game3} = require('./plugins/juegos.js')   
const {buscadores} = require('./plugins/buscadores.js')
const {efec, convertidores} = require('./plugins/convertidores.js') 
const {grupo} = require('./plugins/grupos.js')
const {nsfw} = require('./plugins/nsfw.js') 
const {randow, randow2} = require('./plugins/randow.js') 
const {descarga} = require('./plugins/descargas.js')   
const {stickers} = require('./plugins/stickers.js') 
const {owner} = require('./plugins/propietario.js')  
const {enable} = require('./plugins/enable.js')

const msgs = (message) => { 
if (message.length >= 10) { 
return `${message.substr(0, 500)}` 
} else { 
return `${message}`}}
const getFileBuffer = async (mediakey, MediaType) => {  
const stream = await downloadContentFromMessage(mediakey, MediaType)  
let buffer = Buffer.from([])  
for await(const chunk of stream) {  
buffer = Buffer.concat([buffer, chunk]) }  
return buffer
}  

module.exports = conn = async (conn, m, chatUpdate, mek, store) => {  
var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  
//----------------------[ ATRIBUTOS ]-------------------------
if (m.key.id.startsWith("BAE5")) return  
var body = (typeof m.text == 'string' ? m.text : '')
//var _prefix = /^[°•÷×™+✓_=|~!?@#%^.©^]/gi.test(body) ? body.match(/^[°•÷×™+✓_=|~!?@#%^.©^]/gi)[0] : ""
global.prefix = body.match(/^[/.*#]/) 
const isCmd = body.startsWith(prefix)   
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const args = body.trim().split(/ +/).slice(1) 
const from = m.chat 
const msg = JSON.parse(JSON.stringify(m, undefined, 2)) 
const content = JSON.stringify(m.message) 
const type = m.mtype 
let t = m.messageTimestamp 
const pushname = m.pushName || "Sin nombre" 
const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"  
const _isBot = conn.user.jid
const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid  
const isCreator = [conn.decodeJid(conn.user.id), ...global.owner.map(([numero]) => numero)].map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const isOwner = isCreator || m.fromMe;
const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
//const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) 
const itsMe = m.sender == conn.user.id ? true : false 
const text = args.join(" ") 
const quoted = m.quoted ? m.quoted : m 
const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const mime = (quoted.msg || quoted).mimetype || ''  
const isMedia = /image|video|sticker|audio/.test(mime)
const mentions = []  
if (m.message[type].contextInfo) {   
if (m.message[type].contextInfo.mentionedJid) {  
const msd = m.message[type].contextInfo.mentionedJid  
for (let i = 0; i < msd.length; i++) {  
mentions.push(msd[i])}}} 
  
//----------------------[ FUNCION/GRUPO ]-------------------------
const groupMetadata = m.isGroup ? await conn.groupMetadata(from) : ''
const groupName = m.isGroup ? groupMetadata.subject : '' 
const participants = m.isGroup ? await groupMetadata.participants : '' 
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '' 
const isBotAdmins = m.isGroup ? groupAdmins.includes(botnm) : false  
const isGroupAdmins = m.isGroup ? groupAdmins.includes(userSender) : false 
const isBaneed = m.isGroup ? blockList.includes(userSender) : false 
const isPremium = m.isGroup ? premium.includes(userSender) : false   
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
const thumb = fs.readFileSync("./media/test.jpg")
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${userSender.split('@')[0]}:${userSender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: "ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ", orderTitle: "sᴜᴘᴇʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ", sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname, jpegThumbnail: null}}}
const kick = function (from, orangnya) {  
for (let i of orangnya) {  
conn.groupParticipantsUpdate(m.chat, [i], "remove")}}  
const time = moment(Number(msg.messageTimestamp + "000")).locale("es-mx").tz("America/Asuncion").format('MMMM Do YYYY, h:mm:ss a')  
  
const reply = (text) => {  
m.reply(text)} 
const sendAdMessage = (text, title, body, image, url) => { conn.sendMessage(m.chat, {text: text, contextInfo: { externalAdReply: { title: title, body: body, mediaUrl: url, sourceUrl: url, previewType: 'PHOTO', showAdAttribution: true, thumbnail: image, sourceUrl: url }}}, {})}  
const sendImage = ( image, caption ) => { conn.sendMessage(m.chat, { image: image, caption: caption }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}  
const sendImageAsUrl = ( url, caption ) => { conn.sendMessage(m.chat, { image:  {url: url }, caption: caption }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}  

//-------------[ TIPOS DE MENSAJES Y CITADOS ]----------------
const isAudio = type == 'audioMessage' // Mensaje de Audio  
const isSticker = type == 'stickerMessage' // Mensaje de Sticker  
const isContact = type == 'contactMessage' // Mensaje de Contacto  
const isLocation = type == 'locationMessage' // Mensaje de Localización   
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')  
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')  
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')  
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')  
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')  
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message') // Mensaje citado de cualquier tipo  
const isViewOnce = (type === 'viewOnceMessage') // Verifica si el tipo de mensaje es (mensaje de vista única)  
  
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {userJid: conn.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {...chatUpdate, messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)}
   
//--------------------[ INFO CONSOLE ]-----------------------
if (m.message) {
console.log(chalk.bold.cyanBright(`▣────────────···\n│+${conn.user.jid.split`@`[0]} ➢ ${botname} ${conn.user.id == global.numBot2 ? '' : '(SubBot)'} ${vs}`), 
chalk.bold.magenta(`\n│────────────\n│⏰HORARIO: `) + chalk.magentaBright(moment(t * 1000).tz(place).format('DD/MM/YY HH:mm:ss'),
chalk.bold.red('\n️│🏷️ MODO: ') + chalk.bold.white(`[${conn.public ? 'Publico' : 'Privado'}]`), 
chalk.bold.yellow('\n│📑TIPO (SMS): ') + chalk.yellowBright(`${type}`),  
chalk.bold.cyan('\n│📊USUARIO: ') + chalk.cyanBright(pushname) + ' ➜', gradient.rainbow(userSender), 
m.isGroup ? chalk.bold.greenBright('\n│📤GRUPO: ') + chalk.greenBright(groupName) + ' ➜ ' + gradient.rainbow(from) : chalk.bold.greenBright('\n│📥PRIVADO'), 
//chalk.bold.red('\nETIQUETA: ') + chalk.redBright(`[${isBaneed ? 'Banned' : ''}]`),
chalk.bold.white('\n│💬MENSAJE: ') + chalk.whiteBright(`\n▣────────────···\n${msgs(m.text)}\n`))
)}          

//--------------------[ AUTOBIO ]----------------------- 
if (global.db.data.settings[numBot].autobio) {
let setting = global.db.data.settings[numBot]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
var timestamp = speed();   
var latensi = speed() - timestamp 
let text = [`${lenguaje.Bio.text} ${Object.keys(global.db.data.users).length} ${lenguaje.Bio.text2} ${latensi.toFixed(4)} 🚀`, `${lenguaje.Bio.text3} ${runtime(process.uptime())}\n\n${lenguaje.Bio.text4}`, `${lenguaje.Bio.text5}`, `👑 NovaBot uso: ${conn.public ? 'Publico' : 'Privado'} | ${lenguaje.Bio.text6} ${runtime(process.uptime())} | ${lenguaje.Bio.text7} ${Object.keys(global.db.data.users).length}`]
let bio = text[Math.floor(Math.random() * text.length)]
try {
await conn.updateProfileStatus(bio)
setting.status = new Date() * 1
} catch {
console.log(`[UPDATE]\nPing: ${latensi.toFixed(4)}`) 
}}} 
 
//--------------------[ AUTOREAD ]-----------------------
if (!conn.autoread && m.message && prefix) {
await delay(1 * 1000) 
await conn.sendPresenceUpdate('composing', m.chat)
conn.readMessages([m.key])}
          
//--------------------[ ANTIFAKES ]-----------------------
if (global.db.data.chats[m.chat].antifake && !isGroupAdmins) {	
let forbidPrefixes = ["1", "994", "48", "43", "40", "41", "49"];
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply(`${lenguaje['smsAntiFake']()}`, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}}
if (global.db.data.chats[m.chat].antiarabe && !isGroupAdmins) {
let forbidPrefixes = ["212", "265", "234", "258", "263", "967", "20", "92", "91"];
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply(`${lenguaje['smsAntiArabe']()}`, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}} 

//--------------------[ ANTILINK ]-----------------------
if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n➥ ');
let delet = m.key.participant
let bang = m.key.id
user = m.sender
conn.sendMessage(m.chat, {text: `${lenguaje['smsAntiLink']()} @${user.split("@")[0]} ${lenguaje['smsAntiLink2']()}`, mentions: [user], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (!isBotAdmins) return conn.sendMessage(m.chat, { text: `${lenguaje['smsAntiLink3']()}\n${listAdmin}\n\n${lenguaje['smsAntiLink4']()}`, mentions: participants.map(a => a.id) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})  
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
if (isGroupAdmins) return reply(`${lenguaje['smsAntiLink5']()}`) 
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}
  
//-------[ MODO PUBLIC/PRIVADO ]-----------
if (!conn.public && !isCreator) {
if (!m.key.fromMe) return }        	

//--------------------[ BANCHAT ]---------------------
if (global.db.data.chats[m.chat].isBanned && isCreator) {
return }

//----------------[ MODOADMINS ]------------------
if (global.db.data.chats[m.chat].modeadmin && !isGroupAdmins) {
return }

//----------------[ AUTOSTICKERS]--------------------
if (global.db.data.chats[m.chat].autosticker) {  
if (/image/.test(mime)) {  
await conn.sendPresenceUpdate('composing', m.chat)
//m.reply(`_Calma crack estoy haciendo tu sticker 👏_\n\n_*Autosticker esta activado*_`)   
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}}, { quoted: m })
await fs.unlinkSync(encmedia)   
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 25) return reply(lenguaje['smsAutoSicker']())  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: goblal.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}}, { quoted: m })
await new Promise((resolve) => setTimeout(resolve, 2000));   
await fs.unlinkSync(encmedia)  
}}

//----------------[ AUTOLEVELUP/AUTONIVEL ]-------------------
if (global.db.data.users[m.sender].autolevelup) {	
let user = global.db.data.users[m.sender]
if (!user.autolevelup)
return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier))
user.level++
//user.role = global.rpg.role(user.level).name
if (before !== user.level) { 
let text = [`${lenguaje['smsAutonivel']()} @${sender.split`@`[0]} ${lenguaje['smsAutonivel2']()}\n${lenguaje['smsAutonivel3']()} ${before} ⟿ ${user.level}\n${lenguaje['smsAutonivel6']()} ${user.role}\n${lenguaje['smsAutonivel7']()} ${new Date().toLocaleString('id-ID')}\n\n${lenguaje['smsAutonivel8']()}`, `${lenguaje['smsAutonivel9']()}\n${lenguaje['smsAutonivel4']()} ${before}\n${lenguaje['smsAutonivel5']()} ${user.level}\n${lenguaje['smsAutonivel6']()} ${user.role}\n${lenguaje['smsAutonivel7']()} ${new Date().toLocaleString('id-ID')}`]
let str = text[Math.floor(Math.random() * text.length)]
return conn.sendMessage(m.chat, { text: str, contextInfo:{mentionedJid:[sender]}},{quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}
 
//----------------[ CHATBOT/AUTOMATICO ]-------------------
if (global.db.data.chats[m.chat].simi) {
let textodem = budy
try {
await conn.sendPresenceUpdate('composing', m.chat)
const ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(textodem)}&lc=es`)
const data = await ressimi.json()
if (data.success == 'No s\u00e9 lo qu\u00e9 est\u00e1s diciendo. Por favor ense\u00f1ame.') return m.reply(`${lol}`); /* EL TEXTO "lol" NO ESTA DEFINIDO PARA DAR ERROR Y USAR LA OTRA API */
await m.reply(data.success)
} catch {
/*🟢 SI DA ERROR USARA ESTA OTRA OPCION DE API DE IA QUE RECUERDA EL NOMBRE DE LA PERSONA */
if (textodem.includes('Hola')) textodem = textodem.replace('Hola', 'Hello')
if (textodem.includes('hola')) textodem = textodem.replace('hola', 'hello')
if (textodem.includes('HOLA')) textodem = textodem.replace('HOLA', 'HELLO')
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + textodem)
const resu = await reis.json()
const nama = m.pushName || '1'
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0])
const res = await api.json()
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt)
const resu2 = await reis2.json()
await m.reply(resu2[0][0][0])}}

//---------------------[ ANTIPRIVADO ]------------------------
if (global.db.data.chats[m.chat].antiprivado && !isCreator) {
if (m.isBaileys && m.fromMe) return !0;
if (m.isGroup) return !1;
if (!m.message) return !0;
if (budy.includes('menu') || budy.includes('estado') || budy.includes('bots') ||  budy.includes('serbot') || budy.includes('jadibot')) return !0
const chat = global.db.data.chats[m.chat];
const bot = global.db.data.setting[numBot]
await conn.sendMessage(m.chat, {text: `*${lenguaje['smsWel']()}* @${sender.split`@`[0]}, ${lenguaje['smsAntiPv']()}\n${nn2}`, mentions: [sender], },{quoted: m}) 
await conn.updateBlockStatus(m.chat, 'block')
return !1;
}

//---------------------[ MULTILENGUAJE ]------------------------
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js')
let user = global.db.data.users[m.sender]
if (user.Language == 'es') {
global.lenguaje = es
} else if (user.Language == 'en') {
global.lenguaje = en
} else if (user.Language == 'ar') {
global.lenguaje = ar 
} else if (user.Language == 'id') { 
global.lenguaje = id
} else if (user.Language == 'pt') { 
global.lenguaje = pt
} else if (user.Language == 'rs') { 
global.lenguaje = rs
} else {
global.lenguaje = es
}   

if (!conn.user.mensaje) {
conn.sendMessage(m.chat, { text: `*Hola @${sender.split`@`[0]} 👋😄 Mi nombre es ${botname} Soy un bot de WhatsApp con multi funcione 👾, registrarte para poder usar mi comando 👌*

*💫 MI INFO:*
👑 *Mi creador es: wa.me/59173315260*
👥 Tengo: ${Object.keys(global.db.data.users).length} usuario usandome puedo ser lenta :v
*🤖 Estoy activa desde:* ${runtime(process.uptime())}
*⚠️ PD:* No hagan spam del comando o te van baneado
  
• *PORFAVOR LEE LAS REGLAS:*
${prefix}reglas

• *QUIERES VER QUE HAY DE NUEVO?*
*Escribe: ${prefix}nuevo*

*💫 ¿Quieres apoyar este proyecto para que siga actualizándose? puede apoyar con una donación voluntaria por nuestro Mercado pago:
• Alias: Andr1c8
• CVU: 0000003100059201491917

*⚡ subscriberte a nuestro canal del youtube*
${global.yt}

*💕 visitar nuestro repositorio oficial para mas infomarcion*
${md}`, contextInfo:{mentionedJid:[sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": wm, thumbnail: imagen2, sourceUrl: md}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
conn.user.mensaje = true
}

//ARRANCA LA DIVERSIÓN 
switch (command) { 
case 'yts': case 'ytsearch': case 'acortar': case 'google': case 'imagen': case 'traducir': case 'translate': case "tts": case 'ia': case 'chatgpt': case 'dalle': case 'ia2': case 'aimg': case 'imagine': case 'dall-e': case 'ss': case 'ssweb': case 'wallpaper': case 'hd': await buscadores(m, command, conn, text, from, fkontak, prefix, args, quoted, lolkeysapi)
break 

global.authFile = `Session`
const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = global.botNumberCode

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

//const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
//const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: '' })
const question = (texto) => {
return new Promise((resolver) => {
rl.question(texto, (respuesta) => {
resolver(respuesta.trim())
}) })
}

let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./${authFile}/creds.json`)) {
do {
let lineM = '┎━─━──━──━─━─━─◈─━─━─━──━─━─━≫'
opcion = await question(`╭${lineM}  
│ ${chalk.blueBright('╔════❖•ೋ°¡Hola!°ೋ•❖════╗')}
│ ${chalk.blueBright('┊')} ${chalk.blue.bgBlue.bold.cyan('MÉTODO DE VINCULACIÓN')}
│ ${chalk.blueBright('╚════❖•ೋ° ♥️ °ೋ•❖════╝')}   
│ ${chalk.blueBright('╔─━━━━━━░ ░━━━━━━─╗')}     
│ ${chalk.blueBright('▎')} ${chalk.green.bgMagenta.bold.yellow('¿CÓMO DESEA CONECTARSE?')}
│ ${chalk.blueBright('▎')} ${chalk.bold.redBright('⇢  Opción 1:')} ${chalk.greenBright('Código QR.')}
│ ${chalk.blueBright('▎')} ${chalk.bold.redBright('⇢  Opción 2:')} ${chalk.greenBright('Código de 8 digitos.')}
│ ${chalk.blueBright('╚─━━━━━━░★░━━━━━━─╝')}
│ ${chalk.blueBright('╔─━━━━━━░ ░━━━━━━─╗')}     
│ ${chalk.blueBright('▎')} ${chalk.italic.magenta('Escriba sólo el número de')}
│ ${chalk.blueBright('▎')} ${chalk.italic.magenta('la opción para conectarse.')}
│ ${chalk.blueBright('╚─━━━━━━░★░━━━━━━─╝')} 
│ ${chalk.blueBright('╔─━━━━━━░ ░━━━━━━─╗')}    
│ ${chalk.blueBright('▎')} ${chalk.red.bgRed.bold.green('CONSEJO:')}
│ ${chalk.blueBright('▎')} ${chalk.italic.cyan('Si usa Termux, Replit, Linux, o Windows')}
│ ${chalk.blueBright('▎')} ${chalk.italic.cyan('Use estos comandos para una ejecución directa:')}
│ ${chalk.blueBright('▎')} ${chalk.bold.yellow(`npm run qr ${chalk.italic.magenta('(Inicia con código QR)')}`)}
│ ${chalk.blueBright('▎')} ${chalk.bold.yellow(`npm run code ${chalk.italic.magenta('(Inicia con código de 8 dígitos)')}`)}
│ ${chalk.blueBright('▎')} ${chalk.bold.yellow(`npm start ${chalk.italic.magenta('(Inicio predeterminado con opciones)')}`)}
│ ${chalk.blueBright('╚─━━━━━━░★░━━━━━━─╝')} 
╰${lineM}\n${chalk.bold.magentaBright('--->')}`)
//if (fs.existsSync(`./${authFile}/creds.json`)) {
//console.log(chalk.bold.redBright(`PRIMERO BORRE EL ARCHIVO ${chalk.bold.greenBright("creds.json")} QUE SE ENCUENTRA EN LA CARPETA ${chalk.bold.greenBright(authFile)} Y REINICIE.`))
//process.exit()
if (!/^[1-2]$/.test(opcion)) {
console.log(chalk.bold.redBright(mid.methodCode11(chalk)))
}} while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./${authFile}/creds.json`))
}

console.info = () => {} // Las "PreKeys"
console.debug = () => {} 

const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile, 
browser: opcion == '1' ? ['FantasyBot-MD', 'Edge', '2.0.0'] : methodCodeQR ? ['FantasyBot-MD', 'Edge', '2.0.0'] : ['Ubuntu', 'Edge', '110.0.1587.56'],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
msgRetryCounterMap,
defaultQueryTimeoutMs: undefined,   
version
}


global.conn = makeWASocket(connectionOptions)
if (!fs.existsSync(`./${authFile}/creds.json`)) {
if (opcion === '2' || methodCode) {
opcion = '2'
if (!conn.authState.creds.registered) {
let addNumber
if (!!phoneNumber) {
addNumber = phoneNumber.replace(/[^0-9]/g, '')
} else {
do {
phoneNumber = await question(chalk.bgBlack(chalk.bold.greenBright(mid.phNumber2(chalk))))
phoneNumber = phoneNumber.replace(/\D/g,'')
} while (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v)))
rl.close()
addNumber = phoneNumber.replace(/\D/g, '')

setTimeout(async () => {
let codeBot = await conn.requestPairingCode(addNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
console.log(chalk.bold.white(chalk.bgMagenta(mid.pairingCode)), chalk.bold.white(chalk.white(codeBot)))
}, 2000)
}}}
}

conn.isInit = false
conn.well = false

if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', "FantasyJadiBot"], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '2', '-type', 'f', '-delete'])))}, 30 * 1000)}
if (global.obtenerQrWeb === 1) (await import('./server.js')).default(global.conn, PORT)


async function connectionUpdate(update) {  
const {connection, lastDisconnect, isNewLogin} = update
global.stopped = connection
if (isNewLogin) conn.isInit = true
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
await global.reloadHandler(true).catch(console.error)
//console.log(await global.reloadHandler(true).catch(console.error));
global.timestamp.connect = new Date
}
if (global.db.data == null) loadDatabase()
if (update.qr != 0 && update.qr != undefined || methodCodeQR) {
if (opcion == '1' || methodCodeQR) {
console.log(chalk.bold.yellow(mid.mCodigoQR))}
}
if (connection == 'open') {
console.log(chalk.bold.greenBright(mid.mConexion))}
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
if (reason == 405) {
await fs.unlinkSync("./FantasySession/" + "creds.json")
console.log(chalk.bold.redBright(mid.mConexionOFF)) 
process.send('reset')}
if (connection === 'close') {
if (reason === DisconnectReason.badSession) {
console.log(chalk.bold.cyanBright(lenguajeCD['smsConexionOFF']()))
} else if (reason === DisconnectReason.connectionClosed) {
console.log(chalk.bold.magentaBright(lenguajeCD['smsConexioncerrar']()))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.connectionLost) {
console.log(chalk.bold.blueBright(lenguajeCD['smsConexionperdida']()))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(chalk.bold.yellowBright(lenguajeCD['smsConexionreem']()))
} else if (reason === DisconnectReason.loggedOut) {
console.log(chalk.bold.redBright(lenguajeCD['smsConexionOFF']()))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.restartRequired) {
console.log(chalk.bold.cyanBright(lenguajeCD['smsConexionreinicio']()))
await global.reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.timedOut) {
console.log(chalk.bold.yellowBright(lenguajeCD['smsConexiontiem']()))
await global.reloadHandler(true).catch(console.error) //process.send('reset')
} else {
console.log(chalk.bold.redBright(lenguajeCD['smsConexiondescon'](reason, connection)))
}}
}
process.on('uncaughtException', console.error);
//process.on('uncaughtException', (err) => {
//console.error('Se ha cerrado la conexión:\n', err)
//process.send('reset') })


let isInit = true;
let handler = await import('./handler.js');
global.reloadHandler = async function(restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error);
if (Object.keys(Handler || {}).length) handler = Handler;
} catch (e) {
console.error(e);
}
if (restatConn) {
const oldChats = global.conn.chats;
try {
global.conn.ws.close();
} catch { }
conn.ev.removeAllListeners();
global.conn = makeWASocket(connectionOptions, {chats: oldChats});
isInit = true;
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler);
conn.ev.off('group-participants.update', conn.participantsUpdate);
conn.ev.off('groups.update', conn.groupsUpdate);
conn.ev.off('message.delete', conn.onDelete);
conn.ev.off('call', conn.onCall);
conn.ev.off('connection.update', conn.connectionUpdate);
conn.ev.off('creds.update', conn.credsUpdate);
}

//Información para Grupos
conn.welcome = lenguajeCD['smsWelcome']() 
conn.bye = lenguajeCD['smsBye']() 
conn.spromote = lenguajeCD['smsSpromote']() 
conn.sdemote = lenguajeCD['smsSdemote']() 
conn.sDesc = lenguajeCD['smsSdesc']() 
conn.sSubject = lenguajeCD['smsSsubject']() 
conn.sIcon = lenguajeCD['smsSicon']() 
conn.sRevoke = lenguajeCD['smsSrevoke']() 

conn.handler = handler.handler.bind(global.conn);
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
conn.onDelete = handler.deleteUpdate.bind(global.conn);
conn.onCall = handler.callUpdate.bind(global.conn);
conn.connectionUpdate = connectionUpdate.bind(global.conn);
conn.credsUpdate = saveCreds.bind(global.conn, true);

conn.ev.on('messages.upsert', conn.handler);
conn.ev.on('group-participants.update', conn.participantsUpdate);
conn.ev.on('groups.update', conn.groupsUpdate);
conn.ev.on('message.delete', conn.onDelete);
conn.ev.on('call', conn.onCall);
conn.ev.on('connection.update', conn.connectionUpdate);
conn.ev.on('creds.update', conn.credsUpdate);
isInit = false
return true
}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {};
async function filesInit() {
for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
const file = global.__filename(join(pluginFolder, filename));
const module = await import(file);
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(e);
delete global.plugins[filename];
}}}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error)

global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
const dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(` SE ACTULIZADO - '${filename}' CON ÉXITO`)
else {
conn.logger.warn(`SE ELIMINO UN ARCHIVO : '${filename}'`)
return delete global.plugins[filename];
}
} else conn.logger.info(`SE DETECTO UN NUEVO PLUGINS : '${filename}'`)
const err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true,
});
if (err) conn.logger.error(`SE DETECTO UN ERROR DE SINTAXIS | SYNTAX ERROR WHILE LOADING '${filename}'\n${format(err)}`);
else {
try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`));
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(`HAY UN ERROR REQUIERE EL PLUGINS '${filename}\n${format(e)}'`);
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)));
}}}};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
const test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version']),
].map((p) => {
return Promise.race([
new Promise((resolve) => {
p.on('close', (code) => {
resolve(code !== 127);
});
}),
new Promise((resolve) => {
p.on('error', (_) => resolve(false));
})]);
}));
const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find};
Object.freeze(global.support);
}

function clearTmp() {
const tmpDir = join(__dirname, 'tmp')
const filenames = readdirSync(tmpDir)
filenames.forEach(file => {
const filePath = join(tmpDir, file)
unlinkSync(filePath)})
}

function purgeSession() {
let prekey = []
let directorio = readdirSync("./FantasySession")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-')
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./FantasySession/${files}`)
})
} 

function purgeSessionSB() {
try {
const listaDirectorios = readdirSync('./FantasyJadiBot/');
let SBprekey = [];
listaDirectorios.forEach(directorio => {
if (statSync(`./FantasyJadiBot/${directorio}`).isDirectory()) {
const DSBPreKeys = readdirSync(`./FantasyJadiBot/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-')
})
SBprekey = [...SBprekey, ...DSBPreKeys];
DSBPreKeys.forEach(fileInDir => {
if (fileInDir !== 'creds.json') {
unlinkSync(`./FantasyJadiBot/${directorio}/${fileInDir}`)
}})
}})
if (SBprekey.length === 0) {
console.log(chalk.bold.green(lenguajeCD.smspurgeSessionSB1()))
} else {
console.log(chalk.bold.cyanBright(lenguajeCD.smspurgeSessionSB2()))
}} catch (err) {
console.log(chalk.bold.red(lenguajeCD.smspurgeSessionSB3() + err))
}}

function purgeOldFiles() {
const directories = ['./FantasySession/', './FantasyJadiBot/']
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
if (file !== 'creds.json') {
const filePath = path.join(dir, file);
unlinkSync(filePath, err => {
if (err) {
console.log(chalk.bold.red(`${lenguajeCD.smspurgeOldFiles3()} ${file} ${lenguajeCD.smspurgeOldFiles4()}` + err))
} else {
console.log(chalk.bold.green(`${lenguajeCD.smspurgeOldFiles1()} ${file} ${lenguajeCD.smspurgeOldFiles2()}`))
} }) }
}) }) }) }

setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await clearTmp()
console.log(chalk.bold.cyanBright(lenguajeCD.smsClearTmp()))}, 1000 * 60 * 4) // 4 min 

//setInterval(async () => {
//if (stopped === 'close' || !conn || !conn.user) return
//await purgeSession()
//console.log(chalk.bold.cyanBright(lenguajeCD.smspurgeSession()))}, 1000 * 60 * 10) // 10 min

//setInterval(async () => {
//if (stopped === 'close' || !conn || !conn.user) return
//await purgeSessionSB()}, 1000 * 60 * 10) 

setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return
await purgeOldFiles()
console.log(chalk.bold.cyanBright(lenguajeCD.smspurgeOldFiles()))}, 1000 * 60 * 10)

_quickTest().then(() => conn.logger.info(chalk.bold(lenguajeCD['smsCargando']().trim()))).catch(console.error)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeCD['smsMainBot']().trim()))
import(`${file}?update=${Date.now()}`)
})

//Info
case 'menu': case 'help': case 'menucompleto': case 'menu2': case 'audio': case 'nuevo': case 'extreno': case 'reglas': menu(m, command, conn, prefix, pushname, sender, pickRandom, fkontak) 
break  
case 'estado': case 'infobot': case 'owner': case 'creador': case 'contacto': case 'grupos': case 'grupoficiales': case 'instalarbot': case 'crearbot': case 'ping': case '5492266613038': case '593980586516': case '595975740803': case 'report': case 'sc': case 'donar': info(command, conn, m, speed, sender, fkontak, pickRandom, pushname, from, msg, text) 
break 
 
//activar/desactivar
case 'welcome': case 'bienvenida': case 'antilink': case 'antienlace': case 'antifake': case 'antiFake': case 'antiarabe': case 'antiArabe': case 'autodetect': case 'detect': case 'audios': case 'autosticker': case 'stickers': case 'modocaliente': case 'antinsfw': case 'modoadmin': case 'modoadmins': case 'soloadmin': case 'antiprivado': case 'antipv': case 'anticall': case 'antillamada': case 'modojadibot': case 'jadibot': case 'autoread': case 'autovisto': case 'antispam': case 'chatbot': case 'simsimi': case 'autolevelup': case 'autonivel': enable(m, command, isGroupAdmins, text, command, args, isBotAdmins, isGroupAdmins, isCreator) 
break

//Grupos 
case 'grupo': case 'delete': case 'del': case 'join': case 'unete': case 'hidetag': case 'notificar': case 'tag': case 'setppgroup': case 'setpp': case 'setppname': case 'nuevonombre': case 'newnombre': case 'setdesc': case 'descripción': case 'anularlink': case 'resetlink': case 'revoke': case 'add': case 'agregar': case 'invitar': case 'kick': case 'echar': case 'sacar': case 'promote': case 'darpoder': case 'demote': case 'quitarpoder': case 'link': case 'linkgc': case 'banchat': case 'tagall': case 'invocar': case 'todos': case 'admins': case 'administradores': case 'infogrupo': case 'groupinfo': case 'warn': case 'advertencia': case 'unwarn': case 'quitardvertencia': case 'listwarn': case 'enline': case 'online': case 'listonine': case 'listaenlinea': case 'enlinea': case 'listonline': grupo(m, command, isGroupAdmins, text, conn, participants, isBotAdmins, args, isCreator, delay, sender, quoted, mime, from, isCreator, groupMetadata, fkontak, delay) 
break    

//juegos 
case 'simi': case 'alexa': case 'Bot': case 'siri': case 'pregunta': case 'preg': case 'gay': case 'pareja': case 'formarpareja': case 'follar': case 'violar': case 'coger': case 'doxear': case 'doxxeo': case 'personalidad': case 'top': case 'topgays': case 'topotakus': case 'racista': case 'love': case 'ship': case 'formartrio': case 'formapareja5': game(m, command, text, pickRandom, pushname, conn, participants, sender, who, body, sendImageAsUrl)  
break                
case 'verdad': case 'reto': case 'piropo': game2(m, command, sendImageAsUrl, pickRandom)
break
case 'slot': case 'apuesta':  case 'fake': case 'ppt': case 'suit': game3(m, command, conn, args, prefix, msToTime, text, body, from, sender, quoted, pushname)
break    
              
//convertidores
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel': efec(conn, command, mime, quoted, exec, prefix, m, from)  
break   
case 'toaudio': case 'tomp3': case 'toimg': case 'toimagen': case 'tourl': case 'toanime': convertidores(conn, command, mime, quoted, util, m, exec, lolkeysapi) 
break    

//nsfw
case 'hentai': case 'nsfwloli': case 'lewd': case 'feed': case 'gasm': case 'anal': case 'holo': case 'tits': case 'kuni': case 'kiss': case 'erok': case 'smug': case 'solog': case 'feetg': case 'lewdk': case 'waifu': case 'pussy': case 'femdom': case 'cuddle': case 'eroyuri': case 'cum_jpg': case 'blowjob': case 'holoero': case 'erokemo': case 'fox_girl': case 'futanari': case 'wallpaper': case 'hentai2': case 'porno': case 'pack': case 'pack2': case 'pack3': case 'videoxxx': case 'vídeoxxx': case 'videoxxxlesbi': case 'videolesbixxx': case 'pornolesbivid': case 'pornolesbianavid': case 'pornolesbiv': case 'pornolesbianav': case 'tetas': case 'pechos': nsfw(conn, m, command, pickRandom, sendImageAsUrl)
break  

//randow
case 'memes': case 'loli': case 'lolivid': case 'neko': case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chiho': case 'chitoge': case 'deidara': case 'erza': case 'elaina': case 'eba': case 'emilia': case 'hestia': case 'hinata': case 'inori': case 'isuzu': case 'itachi': case 'itori': case 'kaga': case 'kagura': case 'kaori': case 'keneki': case 'kotori': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'nezuko': case 'sagiri': case 'sasuke': case 'sakura': case 'cosplay': case 'blackpink': case 'navidad': randow(m, sender, command, sendImageAsUrl, pickRandom, conn)
break   
case 'horny': case 'simp': case 'lolice': case 'comentar': case 'comment': randow2(conn, m, command, text, sender, pushname)  
break 
     
//descargas
case 'play': case 'musica': case 'play2': case 'video': case 'play3': case 'playdoc': case 'playaudiodoc': case 'ytmp3doc': case 'play4': case 'playdoc2': case 'playvideodoc': case 'ytmp4doc': case "ytmp3": case "ytaudio": case 'ytmp4': case 'ytvideo': case 'music': case 'spotify': case 'gitclone': case 'tiktok': case 'tt': case 'lyrics': case 'letra': case 'mediafire': case 'facebook': case 'fb': case 'instagram': case 'ig': case 'igstalk': case 'apk': case 'modoapk': case 'gdrive': case 'tiktokimg': case 'ttimg': case 'play.1': case 'play.2': descarga(m, command, conn, text, command, args, fkontak, from, lolkeysapi)    
break    

//rpg 
case 'reg': case 'verificar': case 'unreg': case 'myns': await reg(command, conn, m, sender, text, budy, fkontak, delay, args)
break   
case 'lb': case 'leaderboard': case 'afk': case 'rob': case 'robar': case 'buy': case 'buyall': case 'bal': case 'balance': case 'diamond': case 'minar': case 'mine': case 'trabajar': case 'work': case 'w': case 'claim': case 'daily': case 'perfil': case 'levelup': case 'nivel': case 'cofre': case 'minar2': case 'mine2': rpg(m, command, participants, args, sender, pushname, text, conn, fkontak, who)   
break    
   
//stickers
case 's': case 'sticker': case 'wm': case 'take': case 'attp': case 'dado': stickers(m, command, conn, mime, quoted, args, text, lolkeysapi, fkontak) 
break
 
//idiomas 
case 'idioma': case 'Language': case 'idiomas': { 
let user = global.db.data.users[m.sender]
if (!text) return m.reply(lenguaje.AvisoMG() + lenguaje.idioma(prefix)) 
if (budy.includes(`1`)) { 
idioma = 'es' 
idiomas = 'español'
}
if (budy.includes(`2`)) {
idioma = 'en'
idiomas = 'ingles'
}
if (budy.includes(`3`)) {
idioma = 'ar'
idiomas = 'arabe'
}
if (budy.includes(`4`)) {
idioma = 'id'
idiomas = 'indonesio'
}
if (budy.includes(`5`)) {
idioma = 'pt'
idiomas = 'portugues'
}
if (budy.includes(`6`)) {
idioma = 'rs'
idiomas = 'ruso'
}
user.Language = idioma
m.reply(lenguaje.idioma2() + idiomas)}  
break 

//propietario/owner
case 'bcgc': case 'bcgroup': case 'bc': case 'broadcast': case 'bcall': case 'block': case 'bloquear': case 'unblock': case 'desbloquear': case 'setcmd':  case 'addcmd': case 'delcmd': case 'listcmd': case 'añadirdiamantes': case 'dardiamantes': case 'addlimit': case 'añadirxp': case 'addexp': case 'addxp': owner(isCreator, m, command, conn, text, delay, fkontak, store, quoted, sender) 
break 

case 'banuser': {  
if (!isCreator) return reply(info.owner)
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) return m.reply(lenguaje.owner.text15) 
let users = global.db.data.users
users[who].banned = true
m.reply(lenguaje.owner.text22)}
break
case 'unbanuser': {
if (!isCreator) return reply(info.owner)
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) return m.reply(lenguaje.owner.text15) 
let users = global.db.data.users
users[who].banned = false
m.reply(lenguaje.owner.text23)}
break
case 'public': case 'publico': {
if (!isCreator) return reply(info.owner)
conn.public = true
m.reply(lenguaje.owner.text24)}
break
case 'self': case 'privado': {
if (!isCreator) return reply(info.owner)
conn.public = false
m.reply(lenguaje.owner.text25)}
break	 
case 'autoadmin': case 'tenerpoder': {
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isCreator) return reply(info.owner)
reply(`${pickRandom(['Ya eres admin mi jefe 😎', '*LISTO YA ERES ADMIN MI PROPIETARIO/DESARROLLADO 😎*'])}`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")}  
break 
case 'leave': {  
if (!isCreator) return reply(info.owner)
reply(lenguaje.owner.text26)
await delay(3 * 3000)
await conn.groupLeave(m.chat)}
break
case 'backup': case 'respaldo': case 'copia':
if (!isCreator) return reply(info.owner)
try {
let d = new Date
let date = d.toLocaleDateString('fr', { day: 'numeric', month: 'long', year: 'numeric' })
let database = await fs.readFileSync(`./database.json`)
let creds = await fs.readFileSync(`./sessions/creds.json`)
await m.reply(lenguaje.owner.text27)
await conn.sendMessage(m.sender, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.sender, {document: creds, mimetype: 'application/json', fileName: `creds.json`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)}   
break 
case 'update':  
if (!isCreator) return reply(info.owner)
try {    
let stdout = execSync('git pull' + (m.fromMe && q ? ' ' + q : ''))
await m.reply(stdout.toString())
} catch { 
let updatee = execSync('git remote set-url origin https://github.com/Andr1c8/NovaBot-MD.git && git pull')
await m.reply(updatee.toString())}  
break
case 'reiniciar': case 'restart': { 
if (!isCreator) return reply(info.owner) 
m.reply(lenguaje.owner.text28)
await delay(3 * 3000) 
conn.ws.close()}   
break  
/////////////////////////////////  
   
//--------------------[ FUNCIONES ]-----------------------
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}  

//-------------------[ AUDIO/TEXTOS ]----------------------
//🟢Comando que responde sin prefix  
default:  
if (budy.includes(`Todo bien`)) {
conn.sendPresenceUpdate('composing', m.chat)
await m.reply(`${pickRandom(['Si amigo todo bien, vite', 'Todo bien capo y tu 😎'])}`)} 
if (budy.includes(`Buenos dias`)) {
conn.sendPresenceUpdate('composing', m.chat)
m.reply(`${pickRandom(['Buenos Dias trolos de mierda', '*Buen dias mi amor 😘*', '*Buenos Dias hermosa mañana 🥰*'])}`)}  
if (budy.includes(`autodestruction`)) { 
let e = fs.readFileSync('./src/autodestruction.webp')
let or = ['texto', 'sticker'];
let media = or[Math.floor(Math.random() * 2)]
if (media === 'texto')
m.reply('*Mi jefe no me quiere 😢*') 
if (media === 'sticker')
conn.sendFile(m.chat, e, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: 'ᶜ ᴬᵘᵗᵒᵈᵉˢᶜʳᵘʸᵉ', mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (budy.includes(`NovaBot`) || budy.includes(`novabot`)) {
m.react(`${pickRandom(['🌟', '👀', '🤑'])}`)}
if (budy.includes(`Avisos`) || budy.includes(`Atencion`)) {
m.react(`${pickRandom(['📢', '👀', '⚠️'])}`)}
if (budy.includes(`Bot`)) { 
await conn.sendPresenceUpdate('composing', m.chat)
m.reply(`${pickRandom([ '*Hola soy un bot yo puedo ayudar?*', 'Hello hablemos un ratito justos ☺, que me cuenta?', 'Hola 👋😄 aqui estoy para hacerte reir un rato, mi amigo me dices que soy muy Divertida 😆', 'Que onda perro tdo bien?', 'Hey estoy aburrida podemos hablar un rato?'])}`)}
if (m.mentionedJid.includes(conn.user.jid)) {
let noetiqueta = fs.readFileSync('./src/etiqueta.webp')
let or = ['texto', 'sticker']; 
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker')     
conn.sendFile(m.chat, noetiqueta, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: 'Yo que?', mediaType: 2, sourceUrl: nna, thumbnail: imagen1}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (media === 'texto')
await conn.sendMessage(m.chat, {text: `${pickRandom(['*QUE YO QUE?*', 'Que?'])}`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (budy.includes(`Yaoi`)) {
m.reply(`${pickRandom(['Que mamada? vete a estudiar mejor', 'Soy un bot hetero, no pida mamada (︶｡︶)zzZ '])}`)}
if (budy.startsWith(`a`)) {
if (!global.db.data.chats[m.chat].audios) return
let vn = './media/a.mp3'
await conn.sendPresenceUpdate('recording', m.chat)
conn.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": botname, "body": ``, "previewType": "PHOTO", "thumbnailUrl": null,"thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true}}, seconds: '4556', ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
if (budy.startsWith(`Hola`)) {
const vn = './media/Hola.mp3'
conn.sendAudio(m.chat, vn, m)} 
if (budy.startsWith(`hola`)) {
const vn = './media/Hola.mp3'
conn.sendAudio(m.chat, vn, m)} 
if (budy.startsWith(`Feliz cumpleaños`)) {
const vn = './media/Feliz cumple.mp3'
conn.sendAudio(m.chat, vn, m)} 
if (budy.startsWith(`Feliz navidad`) || budy.startsWith(`Merry Christmas`) || budy.startsWith(`feliz navidad`)) {
const vn = './media/navidad.mp3'
conn.sendAudio(m.chat, vn, m)} 
if (budy.startsWith(`Vete a la verga`)) {
const vn = './media/vete a la verga.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Uwu`)) {
const vn = './media/UwU.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Siuuu`)) {
const vn = './media/siu.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pasa pack`)) {
const vn = './media/Elmo.mp3';
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Audio hentai`)) {
const vn = './media/hentai.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pasen porno`)) {
const vn = './media/maau2.mp3'
conn.sendAudio(m.chat, vn, m)}			
if (budy.startsWith(`VAMOOO`)) {
const vn = './media/vamo.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Hora del sexito`)) {
const vn = './media/maau1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Cuentate un chiste`)) {
const vn = './media/dylan2.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Admin party`)) {
const vn = './media/fiesta.mp3' 
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Fiesta del admin`)) {
const vn = './media/admin.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Viernes`)) {
const vn = './media/viernes.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`:v`)) {
const vn = './media/viejo1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`La toca 7w7`)) {
const vn = './media/anime5.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Quien es tu sempai botsito`)) {
const vn = './media/anime4.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Me gimes 7u7`)) {
const vn = './media/anime3.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Te amo botsito uwu`)) {
const vn = './media/anime2.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Onichan`)) {
const vn = './media/anime1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pasen sexo`)) {
const vn = './media/fernan.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Paraguayo`)) {
const vn = './media/gaspi11.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Venezolano`)) {
const vn = './media/gaspi10.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi corte`)) {
const vn = './media/gaspi12.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi buenos dias`)) {
const vn = './media/gaspi13.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Enano`)) {
const vn = './media/gaspi14.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Buenas noches`)) {
const vn = './media/gaspi15.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Peruano`)) {
const vn = './media/gaspi16.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Alto temazo`)) {
const vn = './media/sombare14.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`GOOOOD`)) {
const vn = './media/sombare13.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Ya me voy a dormir`)) {
const vn = './media/sombare12.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Calefon`)) {
const vn = './media/sombare11.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Bot de mierda`)) {
const vn = './media/sombare10.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Apurate bot`)) {
const vn = './media/sombare9.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Un chino`)) {
const vn = './media/sombare7.mp3'
conn.sendAudio(m.chat, vn, m)}				
if (budy.startsWith(`No funciona`)) {
const vn = './media/sombare8.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Boliviano`)) {
const vn = './media/gaspi3.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Corte`)) {
const vn = './media/gaspi2.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi me saludas`)) {
const vn = './media/gaspi4.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi y las minitas`)) {
const vn = './media/gaspi6.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi todo bien`)) {
const vn = './media/gaspi7.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Me quiero suicidar`)) {
const vn = './media/gaspi81.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Gaspi ya no aguanto`)) {
const vn = './media/gaspi9.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Contate algo bot`)) {
const vn = './media/gaspi5.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Sexo`)) { 
const vn = './media/sexo.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Pongan cuties`)) { 
const vn = './media/neymar1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Momento epico`)) {
const vn = './media/sombare1.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`El bot del orto no funciona`)) {
const vn = './media/sombare2.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Epicardo`)) {
const vn = './media/sombare3.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Insta de la minita`)) {
const vn = './media/sombare4.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Una mierda de bot`)) {
const vn = './media/sombare5.mp3'
conn.sendAudio(m.chat, vn, m)}
if (budy.startsWith(`Ultimo momento`)) {
const vn = './media/sombare6.mp3'
conn.sendAudio(m.chat, vn, m)}			
if (budy.startsWith(`Nefasto`)) {
const vn = './media/gaspi1.mp3'
conn.sendAudio(m.chat, vn, m)}
                  
//--------------------[ OWNER ]-----------------------     
if (budy.startsWith('>')) {
if (!isCreator) return reply(info.owner)
try {
return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
return reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))  
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('$')) {
if (!isCreator) return reply(info.owner)
try {
return reply(String(execSync(budy.slice(2), { encoding: 'utf-8' })))
} catch (err) {
console.log(util.format(err)) 

//--------------------[ REPORTE/ERRORS ]-----------------------     
let e = String(err) 
conn.sendMessage("59173315260@s.whatsapp.net", { text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲\n\n" + util.format(e), 
contextInfo:{forwardingScore: 9999999, isForwarded: true }})
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)})}}}}

//--------------------[ UPDATE/CONSOLA ]-----------------------     

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
