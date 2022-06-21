import books from "../models/Book.js";

class BookController {

  static listBooks = (req, res) => {
    books.find()
      .populate('author')
      .exec((err, books) => {
      if(err){
        res.status(500).send({message: `${err.message} - falha ao listar os livros.`});
      }else{
        res.status(200).json(books);
      };
    });
  };

  static listBookId = (req, res) => {
    const id = req.params.id;
    books.findById(id)
      .populate('author', 'name')
      .exec((err, books) => {
      if(err){
        res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
      }else {
        res.status(200).send(books);
      };
    });
  };

  static listBooksByPublisher = (req, res) => {
    const publishingCompany = req.query.publishingCompany;

    books.find({'publishingCompany':publishingCompany}, {}, (err, books) => {
      if (err){
        res.status(500).send({message:`${err.message} - Erro durante a busca pela editora`})
      }else {
        res.status(200).send(books)
      }
    });
  };

  static registerBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) =>{
      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar o livro.`});
      }else{
        res.status(201).send(book.toJSON());
      };
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        res.status(500).send({message: err.message})
      }else{
        res.status(200).send({message: 'Livro atualizado com sucesso.'})
      };
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id, (err) => {
      if (err){
        res.status(500).send({message: `${err.message} - O id do livro não foi encontrado, consequentemente ocorreu um erro na remoção.`})
      }else{
        res.status(200).send({message:"Livro removido com sucesso"});
      };
    });
  };

};

export default BookController;