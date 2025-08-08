require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAAVbCFs71XExTwQAAG8HAAAKAAAAY3JlZHMuanNvbpVU2a6jOBD9F78m6hDWgHSlIWQhC1wI2Uf94IABJ2yxTQi08u8jkr59+2GmdYcnUy6dOnXqlH+ALMcULVANtB+gIPgGGWqPrC4Q0MCwDENEQBcEkEGgAd1uOmU9irZZjGN5SupFAK9+sycVXMedwEbp0PZdQ0l3+ht4dEFRnhLs*wHwPNvGk4014*K8PLr9reGOLmLCDSfifNKxqkRPjhHX99QAW2*g0SJCTHAWjYsYpYjAZIFqB2LyNfrypN71Ok6Q88KNY9UkiML1GPL5Ibfu72d9z46N4sHULqfi1+iPzRnF8dTx08H7+nKz7F1QnzN5kHHhedhbZ0rhjPq0N1km7os+xVGGglmAMoZZ*WXdXdNfGvp7Q47NUXTsAcdtR8p417kSYScv6*HAsU7XWDyPJl8kzvxBz5zmHeXu6nqdxGN6vpL7bV3uzSGZ6vdbz5Puljw+GNzvxB3y4ZXL*9HdWxxKeYn1sg+T4cQx0pXqWUFBb1LSGRo7dXTauYZT5be++zX60tDeVJdSvOhrhTC2uCx7QrVV52ZlLipVv+CaX0k03nTOl0*6kJXkTyzPe*1watILdQ9L5tr3xGlWmA9ZtZjkuiszqsTKrW91iH+IeN7D6ppbF*Det*R8SyW72Q7kVd*eKZebeSvO4vKUXmfD6u3Z0QXVswBo*UcXEBRhyghkOM+eMV7oAhjcPOQTxJ7ygtswC*nBgZc27t5ex2N1bAauqkBUT*wmNY0N8+q7fZQ4nnsDXVCQ3EeUosDElOWkthClMEIUaH9*74IM3dlrcG05od8FISaUbbKySHIYfEz14xL6fl5mzKsz32gPiACN+wwjxnAW0VbHMoPEj*ENGTFkFGghTCj61SEiKAAaIyX6tbVGHrTCT3nPG2+3B9AF6XMgOAAa4AVR5foCLymqJGnCX*Rb1cLCoviWIQa6IHmmqQNOVgSVUyVV4du8Nvz4xa+FCxCDOKFAA4a1GIlBNRxb*KA*cKdTfRzpRqSDz34+jPESvvGs+iB5tZikdPe+HyEaLzZ1Zue8aIbi3nOjkSzZJjF1+vYvIG0buuNK06CZh9EKsuUh28XbMBUoOpzG2UFFa7SMQjeeqYN5XNZlTFa1fIiidLZdTHubxSWCEOunnSo3XqYWdnI1Vo0evbXVAnTDPvq9GFOmR+e+43krDGSbzsrL+tjxjwpdWyNuNW0UNtYbFTlV38jmZQfxTCidpB4IbEqu890oKBSHSqYvDpSIH+XIy+fIiF6Wfa5M8vOpwk8ztZNqf0OMnpufwRR9ZXIv4q3BuEf3N4yfb8l*7OPQ585W+r6h5fxIJuekEsjMS6yigXY5FDoT7jLTO+V6Jd+rJXg8vndBkUAW5iQFGoBZQHIcgC4gedk6dpaF+R+KGfpmNnJfnSeQMv1zC9Y4RZTBtABaX5FEWeJ5kXtlOSQvTEhjoIEsFYan1tG1XhQeg+xjp4DefnNsgMc*UEsBAhQDFAAACAgABVsIWzvVcTFPBAAAbwcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  
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
