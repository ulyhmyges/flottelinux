import {config} from "dotenv";
config({
    path: ".env.local"
});

import * as express from 'express';
import mongoose, {connect, Schema} from 'mongoose';
import {ExpressController} from "./controllers";


async function launchAPI(): Promise<void> {
    await connect(process.env.MONGO_URI as string, {
        auth: {
            username: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD,
        },
        authSource: "admin",
    });

    const app = express();
    const controllers: ExpressController[] = [

    ]
    for (let controller of controllers) {
        const router = controller.buildRoutes();
        app.use(controller._path, router);
    }

    app.listen(process.env.PORT, function() {
        console.log(`API Listening on port ${process.env.PORT}...`);
    });

}

launchAPI().catch(console.error);