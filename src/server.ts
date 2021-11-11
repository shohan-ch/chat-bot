require('dotenv').config();

import express,{Express} from 'express'
import { connection } from './config/Database';
import authRoutes from './routes/authRoutes'
import accountRoutes from './routes/accountRoutes'
import uploadRoutes from './routes/uploadRoutes'
import 'reflect-metadata'
import fileUpload from 'express-fileupload'
import Cors from 'cors'
import { logger } from 'ex-helpers';
import http, { createServer } from 'http'

import {Server} from 'socket.io'


export type IPort = number | string
const PORT = process.env.PORT || 3000

async function igniteServer(){
    /**
     * @function database connection check
     * @return void
    */
    try {
        await connection.authenticate()
        await connection.sync({force:false});
        //await connection.models.PasswordReset.sync({force:true})
    } catch (error) {
        logger.error(error)
        process.exit(1);
    }


    const server:Express = express();
    const httpServer = createServer(server)
    const io = new Server(httpServer,{

    });

   
    io.on('connection', (socket) => {
        socket.emit('news',{
            news:"Yahoo we did it"
        })
        console.log(socket.id);
        // socket.on("private message", (anotherSocketId, msg) => {
        //     socket.to(anotherSocketId).emit("private message", socket.id, msg);
        // });
    });
    server.use(express.json())
    server.use(fileUpload({}));

    server.use(Cors())
    server.use('/chat', express.static('public/chat'))
    server.use('/static', express.static('public'))

    server.use("/auth", authRoutes)
    server.use("/account", accountRoutes)
    server.use("/upload", uploadRoutes)
    
    return httpServer

}
igniteServer().then((server)=>{
    
    logger.info("Server listen at: "+ PORT)
    server.listen(PORT)
}).catch(err=>{
    logger.error(err)
    process.exit(1)
})
