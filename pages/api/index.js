

export default function handler(req, res) {
    res.status(200).json({ 
      title: req.query.title,
      desc: req.query.description,
      image: req.query.image,
      date: req.query.date,
      uuid: req.query.uuid,
     })
  }
  