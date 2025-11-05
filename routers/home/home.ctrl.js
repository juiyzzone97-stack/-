const users = {
  id : ["오하얀", "김현아"],
  password : ["1234", "5678"]
}

const output = {
    hello : (req, res) => {
    res.render("home/index");
   },

    login : (req, res) => {
    res.render("home/login");
    },
}

const process = {
  login : (req, res) => {
    const id = req.body.id
    const password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.password[idx] === password) {
        return res.json({
          success : true,
        })
      }
    }
        return res.json({
          success : false,
          message : "로그인이 실패하셨습니다",
    })
  }
}

module.exports = {
  output,
  process,
}