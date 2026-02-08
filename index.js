const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('Escaneie o QR Code no WhatsApp');
});

client.on('ready', () => {
  console.log('Bot conectado com sucesso!');
});

client.on('message', message => {

  // teste simples
  if (message.body === '!ping') {
    message.reply('pong 🟢');
  }

  // exemplo comando ficha
  if (message.body === '!ficha messi') {
    message.reply('Lionel Messi - Ficha exemplo do bot');
  }

});

client.initialize();
