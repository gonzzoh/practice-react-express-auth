const createUpload = async (req, res) => {
    const {// this req.session property is put here by the handleCookieSessions middleware
      db: { Upload }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { title, created_by, before_image, job_description, location, under_contract }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const upload = await Upload.create(title, created_by, before_image, job_description, location, under_contract);
    res.send(upload);
  };
  
  module.exports = createUpload;
  