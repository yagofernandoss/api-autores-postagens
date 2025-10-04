import { Request, Response } from "express";
import { autores, posts } from "../modelos/Bancodedados";
import Post from "../modelos/Post";



export default class PostControlador {

    listar(req: Request, res: Response){
        return res.json(posts)
    }

    detalhar(req: Request, res: Response){
        const {id} = req.params

        const post = posts.find((elemento)=>{
            return elemento.id === id
        })

        if (!post){
            return res.status(404).json({
                mensagem: 'A postagem não existe'
            })
        }
        return res.json(post)
    }

    cadastrar(req: Request, res: Response){
       const {titulo, descricao,autor_id} = req.body

       if(!titulo || !descricao || !autor_id){
        return res.status(400).json({
            mensagem: 'O Título, Descrição e Autor são obrigatórios'
        })
       }
       const autor = autores.find ((elemento) => {
        return elemento.id === autor_id
       })
       if(!autor){
        return res.status(404).json({
            mensagem: 'O autor não existe'
        })
       }
       const post = new Post({
        titulo,
        descricao,
        autor
       })

       posts.push(post)
       return res.status(201).json(post)
        
    }

    editar(req: Request, res: Response){
      const {id} = req.params
      const {titulo, descricao} = req.body

         if(!titulo || !descricao){
        return res.status(400).json({
            mensagem: 'O Título e Descrição são obrigatórios'
        })
       }      

      const post = posts.find((elemento)=>{
            return elemento.id === id
        })

        if (!post){
            return res.status(404).json({
                mensagem: 'A postagem não existe'
            })
        }

        post.titulo = titulo
        post.descricao = descricao

        return res.status(204).send()
    }


    excluir (req: Request, res: Response){
        const {id} = req.params

        const postIndice = posts.findIndex((elemento)=>{
            return elemento.id === id
        })

        if (postIndice === -1){
            return res.status(404).json({
                mensagem: 'A postagem não existe'
            })
        }

        posts.splice(postIndice,1)

        return res.status(204).send()
    }
    
}