const listUploads = async (req, res) => {
    const { 
      db: { Upload } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const uploads = await Upload.list();
    res.send(uploads);
  };
  
  module.exports = listUploads;
  