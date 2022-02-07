const inp = [
    {
     "id":1,
     "name":"Leanne Graham",
     "username":"Bret",
     "age":"23",
     "company":"Google"
  },
  {
    "id":2,
    "name":"Ervin Howell",
     "nusernameame":"Antonette",
     "age":"27",
     "company":"Google"
  },
  {
    "id":3,
    "name":"Clementine Bauch",
     "username":"Samantha",
     "age":"30",
     "company":"Microsoft"
  },
  {
    "id":4,
    "name":"Patricia Lebsack",
     "username":"Karianne",
     "age":"22",
     "company":"Microsoft"
  },
  {
    "id":5,
    "name":"Chelsey Dietrich",
     "username":"Kamren",
     "age":"36",
     "company":"Google"
  }]
  function user(inp){
    list = inp.length;
    const num = inp.reduce((total,data)=>{
      return total + data.age/list
    },0);
    console.log(num);
  }
  user(inp);