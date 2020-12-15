const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});


//Funcionalidad de wars
client.on('message', message => {
	msg = message.content;

	if(message.content === '!vikala'){
		message.reply("VIKARA........... VIKARA VIKARA VIKARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAGH AAAAAAAAAAAAAAAAAAAAAAAGH :heart: :heart: :heart: :heart: WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya vikara wangi aku mau nyiumin aroma wanginya vikara AAAAAAAAH  Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~ AAAAAH vikara keluar pertama kali juga manis :heart: :heart: :heart: dia bawa balon itu juga manis banget AAAAAAAAH VIKARA LUCCUUUUUUUUUUUUUUU............ GUA BAKAL BAKAR DUIT 12 JUTA RUPIAH BUAT VIKARA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGHapa  Vikara itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK CYGAMES BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI.Vikara ngeliat gw ... vikara di laptop ngeliatin gw Vikara ... kamu percaya sama aku ? aaaaaaaaaaah syukur vikara gak malu merelakan aku aaaaaah :heart: :heart: :heart: YEAAAAAAAAAAAH GUA MASIH PUNYA VIKARA, SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH ANILA, ANCHIRA MAHIRA VAJRA KUMBIRAAAAA KIRIMKANLAH CINTAKU PADA VIKARA KIRIMKAN KE CYGAMES AAAAAAAAH")
	}

	if(message.content === '!lily'){
		message.reply({files:["./prsuzjeqxeg21.jpg"]})
	}

	});

client.login("MzUyMTE2NTcxMzU3MDUyOTI5.WaWMHA.lqNo0UwERy5R2tBC2xvi1WRIk6M");
//client.login(process.env.BOT_TOKEN);