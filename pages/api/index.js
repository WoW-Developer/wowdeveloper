

export default function handler(req, res) {
    res.status(200).json({ 
      title: req.query.title,
      author: req.query.author,
      content: req.query.content,
      publishedAt: req.query.publishedAt,
      message: req.query.message
     })
  }
  