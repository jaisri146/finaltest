const users = [
    {
      "id":1,
      "name":"Leanne Graham",
      "username":"Bret",
      "company":"VM Ware",
      "position":"Director",
      "joiningYear":"2010"
    },
    {
      "id":2,
      "name":"Clementine Bauch",
      "username":"Clementine",
      "company":"VM Ware",
      "position":"Asst. Director",
      "joiningYear":"2010"
    },
    {
      "id":3,
      "name":"Kurtis Weissnat",
      "username":"Kurtis",
      "company":"Dell",
      "position":"Manager",
      "joiningYear":"2012"
    },
    {
      "id":4,
      "name":"Nicholas Runolfsdottir V",
      "username":"Nicholas",
      "company":"Dell",
      "position":"Asst. Manager",
      "joiningYear":"2012"
    },
    {
      "id":5,
      "name":"Glenna Reichert",
      "username":"Glenna",
      "company":"Dell",
      "position":"Team leaderr",
      "joiningYear":"2012"
    },
    {
      "id":6,
      "name":"John Beckam",
      "username":"Beckam",
      "company":"Dell",
      "position":"Team leader",
      "joiningYear":"2014"
    },
    {
      "id":7,
      "name":"Harry Potter",
      "username":"Harry",
      "company":"Dell",
      "position":"Team leader",
      "joiningYear":"2014"
    },
    {
      "id":8,
      "name":"John snow",
      "username":"snow",
      "company":"VM Ware",
      "position":"Senior Software Engineer",
      "joiningYear":"2014"
    }]
    function arr(users){
      const vm = users.filter((data)=>{
        return data.company === "VM Ware" 
      })
      const list = []
      const yr = vm.filter((data)=>{
        return data.joiningYear === "2014"
      })
      list.push(yr);
      console.log(yr)
      const yrs = vm.filter((data)=>{
        return data.joiningYear !== "2014"
      })
     
      const del = users.filter((data)=>{
        return data.company === "Dell" 
      })
      const yer = del.filter((data)=>{
        return data.joiningYear === "2012"
      })
       const yers = del.filter((data)=>{
        return data.joiningYear !== "2012"
      })
       
    }
    arr(users);