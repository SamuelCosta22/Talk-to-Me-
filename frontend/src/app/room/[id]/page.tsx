'use client'

import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SocketContext } from "@/contexts/SocketContent";
import { useContext, useEffect, useRef } from "react";

export default function Room({params}: {params: {id: string}}){
    const { socket } = useContext(SocketContext);
    useEffect(() => {
      socket?.on('connect', async () => {
        console.log('conectado');
        socket?.emit('subscribe', {
          roomId: params.id,
          socketId: socket.id,
        });
      });
    }, [socket]);
    
    return(
        <div className="h-screen">
            <Header />
            <div className="flex h-[70%]">
                <div className="md:w-[85%] w-full m-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-950 w-full rounded-md h-full p-2 relative ">
                            <video className="h-full w-full"></video>
                            <span className="absolute bottom-3">Alexia Kattah</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full p-2 relative ">
                            <video className="h-full w-full"></video>
                            <span className="absolute bottom-3">Alexia Kattah</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full p-2 relative ">
                            <video className="h-full w-full"></video>
                            <span className="absolute bottom-3">Alexia Kattah</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full p-2 relative ">
                            <video className="h-full w-full"></video>
                            <span className="absolute bottom-3">Alexia Kattah</span>
                        </div>
                    </div>
                </div>
                <Chat roomId={params.id} />
            </div>
            <Footer />
        </div>
    )
}