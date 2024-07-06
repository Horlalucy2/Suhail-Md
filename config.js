const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347032059986";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_49_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwLFxuICAgICAgICA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxODksXG4gICAgICAgIDcxLFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZNSWx5b0tETTYyWlk5eThMNXI0N1BaNTJ2ajJiMm5kWlAxMHZoVXdYT0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZTMUxMRGhCUUVHTGxsazBUUmZ1endcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjk2ODVlZjQtYmQzOC00MjAxLWFmYTEtMTM0ZWFhYjk4MDQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDIzMixcbiAgICAgIDE0MixcbiAgICAgIDc2LFxuICAgICAgMTI0LFxuICAgICAgMTcwLFxuICAgICAgNTQsXG4gICAgICAxNTMsXG4gICAgICA5OSxcbiAgICAgIDIwNyxcbiAgICAgIDE5NyxcbiAgICAgIDE3MCxcbiAgICAgIDEzOCxcbiAgICAgIDEwNCxcbiAgICAgIDEwNixcbiAgICAgIDIxNSxcbiAgICAgIDEwNCxcbiAgICAgIDEwNyxcbiAgICAgIDk0LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDM4LFxuICAgICAgNSxcbiAgICAgIDk2LFxuICAgICAgOCxcbiAgICAgIDIxMSxcbiAgICAgIDQ0LFxuICAgICAgMTg1LFxuICAgICAgMjUxLFxuICAgICAgOTQsXG4gICAgICA0MCxcbiAgICAgIDE0MixcbiAgICAgIDIzNixcbiAgICAgIDE4MixcbiAgICAgIDE2OSxcbiAgICAgIDE1MyxcbiAgICAgIDE1MyxcbiAgICAgIDEzNSxcbiAgICAgIDE2OCxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BHTXlNVUtFTytXcGJRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieUs5WitBQ3VCVmpweUNyNGZhOFI5NUoveXV0SnExMWhiV1YwL252Z1J3VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsZmgyVGdWMU42bTZxZ1NXRUpZQmpPQmYzN0toZk52Z3NmamxjdDllV3c5Y09HTXlLbDA5VnZTMS94UWJ0RXcyR1JROTRSeHMvM3NldVpmdHY0ZjRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVaE5manhtcER5WWsvSUE3YXB2SzRnWmRscU5YWUNhL09DcnhaT1c0YTdLbWszVEhJOWphaEdaVE80a1Y3NlBWL0RpaXhLZ3M0Vy9OT2tKVG5IWFpCQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwODAyOTAzNDQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhvcmxhIEx1Y3kgMDJcIixcbiAgICBcImxpZFwiOiBcIjU1MzM2NzQ0NTc1MTgxOjNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDgwMjkwMzQ0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjczNzgxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjJRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBRUZnMFpHT2RUWHhiUFhDSXFGQ3pWUDhsTjF6dWoxWW1KdGxMY1Z6Zm04PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MzAyMzkzNDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODc4OTE2OTk4MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU4yTi5qc29uIjogIntcImtleURhdGFcIjpcIjBVeFY0bktveUZ3Vlg5M2VsY1hNR3R0MHRlSWpuVWN6QmIxWWl4T2JHdHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgzMDIzOTM0NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxNDc1MTc2MjJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5MlFVRkN5MXVxMXFOOWhjZnpuK055VENYR25UTUZXUjQzZlNaSlBUS05vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MzAyMzkzNDUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE0NzUxOTI0N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU4yUS5qc29uIjogIntcImtleURhdGFcIjpcInZLdXhQNFRsZ3pOS0NISUdrNzhRNE5NbFdRTVdrOVdaUU1rMEwwdC9lVXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgzMDIzOTM0NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwMTE5ODMxNDg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
