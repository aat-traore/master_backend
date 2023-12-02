const jwt = require('jsonwebtoken');
const secret= process.env.JWT_KEY

// Middleware pour vérifier le token et le rôle
 //exports.verifyTokenAndRole = (req, res, next) => {
  // Récupérer le token du header Authorization
  //const token = req.headers.authorization;
  //if (!token) {
    //return res.status(401).json({ message: 'Token non fourni. Authentification requise.' });
  //}

  // Vérifier et décoder le token
   //const decodedToken= jwt.verify(token.split(' ')[1], secret) 
   //console.log(decodedToken)
    
   //req.user = decodedToken;

    // Vérifier le rôle de l'utilisateur
    //if (req.user.role !== "admin") {
      //return res.status(403).json({ message: 'Accès refusé. Rôle insuffisant.' });
    //}

//    next(); // Passer à la prochaine étape
  
//};



module.exports.verifyTokenAndRole = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }
    // console.log(token.split(" ")[1]);
    const decodedToken = jwt.verify(token.split(" ")[1], process.env.JWT_KEY);
    req.user = decodedToken.data; // L'utilisateur connecté est maintenant disponible dans req.user
    console.log("-------------------",decodedToken.data);
    if (req.user.role !== "admin"){
        return res.status(403).json({ message: 'Your are not authorized on this request' });
    }
    next();

  }