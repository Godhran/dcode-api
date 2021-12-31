const express = require('express'),
    router = express.Router();
const fetch = require("node-fetch");
const {
    getWord,
    checkWord,
    buildFile
} = require("./actions");


router.get('/', function (req, res) {
    const {query} = req;
    const {length} = query;

    console.log({length})

    try {
        getWord(length).then(response=>{
            console.log({response})
            res.status(200).send(JSON.stringify(response))
        });
    } catch (error) {
        res.status(200).send({error: `Oops...something's gone awry 😵‍💫`})
    }
})

router.get('/check', function (req, res) {
    const {query} = req;
    const {word} = query;

    console.log({word})

    try {
        checkWord(word).then(response=>{
            console.log({response})
            res.status(200).send(JSON.stringify(response))
        });
    } catch (error) {
        res.status(200).send({error: `Oops...something's gone awry 😵‍💫`})
    }
})

router.get('/build', function (req, res) {
    const {query} = req;
    const {word} = query;

    console.log({word})

    try {
        buildFile().then(response=>{
            console.log({response})
            res.status(200).send(JSON.stringify(response))
        });
    } catch (error) {
        res.status(200).send({error: `Oops...something's gone awry 😵‍💫`})
    }
})

module.exports = router;
