require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAE8MDFvgkMMWUAQAAG0HAAAKAAAAY3JlZHMuanNvbpVVTZOiSBD9L3XVmEYBFSM6YvlqEARFsEU39lBKgSVY0FWFghP+9w3s6ek57M72ciqSjKyX771MvgNSYoZc1ILpd1BRfIEcdUfeVghMgVanKaKgDxLIIZgCqMnhcRg5t02j1etoxldxM1+i0Ivt215w18WKEGf0ChMheAb3PqjqfYEPvyk4XolPsVL5T*XcnjGnzoarSCpnZmGhtOlFiSl73i0uHScsn8G9qwgxxSQzqyM6IwoLF7VLiOnX4JuzN+gpE+0a1Gs3GBQLtvKt87ysq42+6l3O7ckRxhPncrPUr8HfKfu3sIJoHVJy6m13rVn0XLYxbHdO9KU50Yp9bMGNLsbZO3yGM4KSWYIIx7z9Mu+hp165GRcJDdate21XE4+wbERKTe41c7Ex55WuhqN8b0tfAy5WVqu3imVVA8cT49adx4ec1JOtuNRPOaouqyDXs+06DtRfgS*ph1fy*8O7pKfpSzscHee7N22liMVwxeRzJiP++uapO6yGb8KTMcEn+*o1+Hq+eDGXlulYfkVtO8vapb2ISz+SXpd5ScRwO5B3aZTapvcJH*Ka*g5lu5N8ss8qXKbhKgmYKoXzurQn2y3x42FDXgYHN81OvhResevI1UjRtsfZrD1xBQe5FUPscV0nzoUM5q*I2yWWImrZ86OjHLWzBEwH9z6gKMOMU8hxSbrYsA9gcgnRgSL+IBcch+Yy7LnKzXB3m+qQO1JzhLB2e23hGdv6gluTLS80OlyzZ9AHFS0PiDGU2JjxkrYeYgxmiIHpn3*1AUENf5etu0wc9EGKKeNrUldFCZMPTT8+wsOhrAkPW3LQuwOiYCp8hhHnmGSsY7EmkB6O+IL0I+QMTFNYMPSzP0RRAqac1ujnzOpl0tG+8Te+YYwc0Afnhxw4AVMwFCVFGIhDeazI8lT6g327dmVhVX0jiIM+KB5pykQYjUVFUGRlPOzyuvD9J76uXII4xAXrXOItDCm5aqaDhBELLEs1M1XPVPDZz4ct3om*hV67lcNWKs5ss4gNxI7uuiV+OZTsVIrDIDNGsm9TW2XP*1AETIF8Ft7WgZg1tesdFaIar25TrA*GYJzqzYY+Ta5NfOnNiFFGp4D0VjeURzUNtJriiPp7OYnZy*BM0NZSMqe93doJKbXgubstQRd8QL9eNpDEvPFyYeXRY2ZAe6Pku6M21lCFNrmyW4ZsbGQzgccOL8XI0sVtT8WN*5SP*DAol4tci8u3YEQjTdfERZ2SlVeqPwz7GJjix6LCDzN1SnWvKUaPuSew0++*lXsH3hlMuPd*qfFjk*zLNGoH4eSdF2tWOzv6ciquIp2FhVfdoF9rYu9FyGdqr45Wo+Y6B*f7X31QFZCnJT13*ymS0BInoA9oWXeOnZG0*N0+UdczI3jvvICMq59TEOEzYhyeKzAdjGVJGQ0lefKetaRlZUN2BFNAzqK27xzdqlUVcsg*Zgqo3aOHEbj*DVBLAQIUAxQAAAgIAE8MDFvgkMMWUAQAAG0HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2349013257955',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Emmy-design-yes',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
