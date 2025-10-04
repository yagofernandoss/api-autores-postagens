import { Request, Response } from "express";
import { autores } from "../modelos/Bancodedados";



export default class AutorControlador {
    

    listar(req: Request, res: Response){
        return res.json(autores)

    }

    detalhar(req: Request, res: Response){
        const {id} = req.params

        const autor = autores.find((elemento) => {
            return elemento.id === id 
        } )

        if(!autor){
            return res.status(404).json({
                mensagem: "Autor não encontrado"
            })
        }
        return res.json(autor)
    }
    
}