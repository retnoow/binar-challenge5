const express = require("express");
const router = express();

router.use(express.Router());
router.use(express.json());

router.get("/", (req, res, next) =>
  res.render("login", { title: "Login Page" })
);

router.post("/", (req, res) => {
  console.log(req.query);
  return res.status(200);
  
  // const data = await axios({
  //   url: "http://localhost:8000/login",
  //   method: "POST",
  //   data:{
  //     name,
  //     email,
  //     password
  //   }
  // })

  // res.status(200);
});

module.exports = router;
