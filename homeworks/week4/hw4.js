const request = require('request');

const login = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'r2jjx5tnh2693m7rx5duge8gqkwd0t',
  },
};

function callback(error, response, body) {
  const info = JSON.parse(body);
  for (let i = 0; i < info.top.length; i += 1) {
    console.log(`${info.top[i].viewers} ${info.top[i].game.name}`);
  }
}

request.get(login, callback);
