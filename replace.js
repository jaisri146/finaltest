const inp = ['dog','cat','elephant','lion','tiger'];
function fn(inp){
   inp.splice(2,1,'zebra')
  console.log(inp);
}

fn(inp);