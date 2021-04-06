const withAuth = (req, res, next) => {
    // If the chef is not logged in, redirect the user to the login pag
    if (!req.session.logge_in) {
      res.redirect('/login');
    } else {
      // If the user is logged in, execute the route function that will allow them to view the gallery
      // We call next() if the user is authenticated
      next();
    }
  };
  
  module.exports = withAuth;
  