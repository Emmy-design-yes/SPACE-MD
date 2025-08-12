require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIANejDFt4hod5VAQAAG4HAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3nFGkFBlKquGkQUEBRBRd2ahwgBIp+GgOJU**ct7Onuedid7eUpJKlzzz3n3PwEeYErtEQtkH6CkuAGUtQtaVsiIIFpHYaIgB4IIIVAAq7VeHCv2TPFjwaG+JhctcYcn9deu1PX0DhGjTURhFhPk+QFvPZAWZ9T7P8BMOGyW4Br97oPYy5VkTeZrpanSquPl3BhhOXywM108TAyZx1ghwgxwXmkljHKEIHpErU2xORr9JPZYRhth4bhqG69chhFvXnuTDRPR9GfY6tJ4SCMjyUZ7sdfo8*sVG0nkv5skl3OO4tPBIMfKkmDYAQv7cwbyM1tv9wbxeP2Rr*CUY4CPUA5xbT9su66orC1LTfrYXXz3avlZIxbCw8sM9tqvy5OieIz04Edeh7*NeI7c8OZtcHFnj8c6zcO9ZvV1o0PHmSujj+lu4pn1nJTz55KfBC3yXtWkv+jez1vw7u5f1y5CR+OB311wkF*oXGXYGlfq8wUBO16KOSk0PSv0ffqyDskmZ9b+abvJlPaOkEMTb1*yuo+FcYDwbnT7Vg5DtRP+pDW5E8srXanwdRUL*rjvgj2bT*u+w2cLGTKxIK8Dk4FNUb2Eqtshs9OakY0PCbqUfAM+cgns9oi+mWlIF0pa9iOj2JT+8t48*LsKEGtHgCJe+0BgiJcUQIpLvLn3nDUAzBoXOQTRJ*yglNgCtfT+S6sYm+72tA5*zgY*flGZ13iG1lWxkHT8I91bWxeQA+UpPBRVaFAwxUtSGuhqoIRqoD0148eyNGdvhnXlRtyPRBiUtFdXpdpAYN3V98Poe8XdU7dNveVboEIkNjPbUQpzqOq07HOIfFj3CAlhrQCUgjTCn10iAgKgERJjT6mVimCp*C8quy9qQp6IHsaggMggcGQF9kxPxL4CTeWxO*Vt1sHC8vyW44o6IH0eU0csSOeF*kxN+BHI0n83m2*fvDr4AJEIU4rIAFF91a5bS1U29TFarNYyGokK5EMPvt5D8ab8JCMGdpO5v4ZN*NZI7d4cWHlqeHrbHjmx6V9uPVrc+6bqfryDyBAApudxt+2Al*IWcFsw*NhpGXyrbSMwaJ0BuTUIGvPcows1oV+MV1rdO0fx4v4MVpZ6eWqM4UePpyptjEDe661intXJk18e+mqBajBPvq92Lo2To8odhaha6Vi7VpBVdL7QT9ta2eqrHzMYLwK5kM2dpVpyQvFcsjv+TM63sLwsfO2WN876o5cp8tE0yvWOl32dfQrss+RSX89VfgZps6p7jfE6Dn5Oez8+2*n3oh3AWNfe79h*HpL*mUep961bxO*cQ4Lntw34s0q4mIiy+5BWWkDxl5uubEt4vtBERzw+vqjB8oU0rAgGZAALuMiR6AHSFF3gdXzsPhDLUVmdTV6azyFFZU*h2CLM1RRmJVA4kRBYIfsiBfebtmkKDVYxUACeTacnrtAt3JZuhTS95ECcvepsAGvfwNQSwECFAMUAAAICADXowxbeIaHeVQEAABuBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB8BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2347084654918',
  
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
