'use client'

import { useRef } from "react";
import Button from "./Button";
import { Input } from "./Input";

export function Create(){
    const name = useRef<HTMLInputElement>(null);
    return(
        <div className="space-y-8">
            <Input placeholder="Seu nome" type="text" ref={name} />
            <Button title="Entrar" type="button" />
        </div>
    )
}