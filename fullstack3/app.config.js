import 'dotenv/config';

export default {
   name: 'fullstack3',
   // rest of the configuration...
   extra: {
    env: process.env.ENV,
    apollo_uri: process.env.APOLLO_URI 
   },
};