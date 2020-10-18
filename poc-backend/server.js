const express = require('express');
const config = require('./config');
var body_parser = require('body-parser');
const app = express();

app.use(require('cors')());
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

// list the first 9 tweets
app.get('/tweets', (req, res) => {
    const params = {
        count: 9,
        tweet_mode: 'extended',
    };
    config.apiClient.get('statuses/home_timeline', params)
        .then(timeline => {
            res.send(timeline);
        })
        .catch(error => {
            res.send(error)
        })
});

// Search by keyword
app.get('/tweets-search/:word', (req, res) => {
    const params = {
        count: 9,
        tweet_mode: 'extended',
        q: req.params.word,
        result_type: 'recent',
        lang: 'es'
    };
    config.apiClient.get('search/tweets', params)
        .then(results => {
            res.send(results);
        })
        .catch(error => {
            res.send(error)
        })
});

// Mark tweet create favorite
app.post('/tweet-favorite-create', (req, res) => {
    const body = {
        id: req.body.id,
        tweet_mode: 'extended',
    }
    config.apiClient.post('favorites/create', body)
        .then(resultFavorite => {
            res.send(resultFavorite);
        })
        .catch(error => {
            res.send(error)
        })
});
// Mark tweet destroy  favorite
app.post('/tweet-favorite-destroy', (req, res) => {
    const body = {
        id: req.params.id,
        tweet_mode: 'extended',
    }
    config.apiClient.post('favorites/destroy', body)
        .then(resultFavorite => {
            res.send(resultFavorite);
        })
        .catch(error => {
            res.send(error)
        })


});

app.listen(config.port, () => {
    console.log('server' + config.port);
});
