'use client'

import { useRef } from "react";
import Button from "./Button";
import { Input } from "./Input";

export default function Join(){
    const name = useRef<HTMLInputElement>(null);
    const id = useRef<HTMLInputElement>(null);
    return(
        <div className="space-y-8">
            <Input placeholder="Seu nome" type="text" ref={name} />
            <Input placeholder="Seu ID da reunião" type="text" ref={id} />
            <Button title="Entrar" type="button" />
        </div>
    )
}