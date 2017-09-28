module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {name, description, price, imageurl} = req.body;

    dbInstance.create_product([name, description, price, imageurl])
      .then(() => {
        res.status(200).send();
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      })
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params;

    dbInstance.read_product([id])
      .then(product => {
        res.status(200).json(product);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      })
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
      .then(products => {
        res.status(200).json(products);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      })
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params;
    const {desc:description} = req.query;


    dbInstance.update_product([id, description])
      .then(product => {
        res.status(200).send();
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      })
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params;

    dbInstance.delete_product([id])
      .then(product => {
        res.status(200).send();
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      })
  }
}
