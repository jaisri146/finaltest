function fn(inp,num){
    const arr = inp.reduce((total,data)=>{
      return total + data
    })
    console.log(arr);
  }
  const inp = add(1,2,5,6,8,9)
  add();
  fn(inp,num);
  