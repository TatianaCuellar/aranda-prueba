const Twitter = require('twit');
const port = process.env.PORT || 3000;

const apiKey = '21qHL9Wyxq5DfMQTQEitiEfW8';
const apiSecretKey = 'UYuSH6ZeDPupMZoLPSGTqp4akf8nf7yfG7bmpBJG5nFVwzeqlH';
const accessToken = '882742479434518531-eiRk3XY33Eqkxv9CkK1pO0DlWglMFbU';
const accessTokenSecret = 'oJDxYgK6wwEKrOmMQ1cxvzPieia4CYmYTIdLsHikMBMdJ';


const apiClient = new Twitter({
    consumer_key: apiKey,
    consumer_secret: apiSecretKey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret
});

module.exports = {
    port,
    apiClient
}
