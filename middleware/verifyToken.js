exports.authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
  
    jwt.verify(token, 'your-secret-key', (err, user) => {
      if (err) return res.status(403).json({ message: 'Forbidden' });
  
      req.user = user;
      next();
    });
  };
  
  /* Example of using the middleware in a protected route
  app.get('/profile', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Access granted', user: req.user });
  });*/