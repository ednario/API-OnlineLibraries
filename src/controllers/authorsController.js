import authors from "../models/Author.js";

class AuthorController {

  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      if(err){
        res.status(500).send({message: `${err.message} - falha ao listar os autores.`});
      }else{
        res.status(200).json(authors);
      };
    });
  };

  static listAuthorId = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, authors) => {
      if(err){
        res.status(400).send({message: `${err.message} - Id do autor não localizado.`})
      }else {
        res.status(200).send(authors);
      };
    });
  };

  static registerAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) =>{
      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar o autor.`});
      }else{
        res.status(201).send(author.toJSON());
      };
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        res.status(500).send({message: err.message})
      }else{
        res.status(200).send({message: 'autor atualizado com sucesso.'})
      };
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (err) => {
      if (err){
        res.status(500).send({message: `${err.message} - O id do autor não foi encontrado, consequentemente ocorreu um erro na remoção.`})
      }else{
        res.status(200).send({message:"autor removido com sucesso"});
      };
    });
  };

};

export default AuthorController;