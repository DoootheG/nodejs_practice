export const localsMiddleware = (req, res, next) => {
  //   if (req.session.loggedIn === true) {
  //     res.locals.loggedIn = true;
  //   }
  //   위 조건식은 아래와 같이 표현 가능하다.
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  next();
};
