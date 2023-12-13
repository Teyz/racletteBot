import cron from 'node-cron';
import { TwitterApi } from 'twitter-api-v2';
import dotenv from "dotenv";

dotenv.config();

const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const rwClient = client.readWrite;

const postTweet = async () => {    
    try {
        await rwClient.v2.tweet({
            text: "C'est l'heure de la raclette !",
        });
    } catch (err) {
        console.log(err);    
    }
}

cron.schedule('0 19 * * *', postTweet);