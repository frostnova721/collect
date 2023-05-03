const qrcode = require('qrcode-terminal')
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js')

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on('ready', () => {
    console.log('Ready To Run')
})

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

client.on('message', (message) => {
    console.log(message.body)
})

client.on('message', (message) => {
    if(message.isForwarded === false) {
        if(message.body.includes('A Collectable card Appeared!') && message.body.includes(`*Tier:* 5`)) {
            message.reply('!claim')
        }
        else if(message.body.includes('A Collectable card Appeared!') && message.body.includes(`*Tier:* 6`)) {
            message.reply('!claim')
        }
        else if(message.body.includes('An S tier Card Appeared!')) {
            message.reply('!claim')
        }
    }
})

client.initialize()