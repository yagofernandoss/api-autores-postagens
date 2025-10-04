import { Request, Response } from "express";
import { autores } from "../modelos/Bancodedados";



export default class AutorControlador {
    

    listar(req: Request, res: Response){
        return res.json(autores)

    }
}