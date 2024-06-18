'use client';

import { useState } from "react";
import Button from "./Button";
import { Input } from "./Input";
import Join from "./Join";
import { Create } from "./Create";

export default function FormWrapper(){
    const [selectedRoom, setSelectedRoom] = useState<'join' | 'create'>('join');
    const handleSelectRoom = (room: 'join' | 'create') => {
        setSelectedRoom(room)
    }
    return(
        <div className="w-full">
            <div className="flex items-center text-center">
                <span className={`w-1/2 p-4 cursor-pointer ${selectedRoom === 'join' && 'rounded-t-lg bg-secondary text-primary'}`} onClick={() => handleSelectRoom('join')}>Ingressar</span>
                <span className={`w-1/2 p-4 cursor-pointer ${selectedRoom === 'create' && 'rounded-t-lg bg-secondary text-primary'}`} onClick={() => handleSelectRoom('create')}>Nova Reunião</span>
            </div>
            <div className="bg-secondary rounded-b-lg max-w-[580px] w-screen p-10">
                <RoomSelector selectedRoom={selectedRoom} />
            </div>
        </div>
    );
}

const RoomSelector = ({selectedRoom}: {selectedRoom: 'join' | 'create'}) => {
    switch(selectedRoom){
        case 'join':
            return <Join />
        case 'create':
            return <Create />
        default:
            return <Join />
    }
}