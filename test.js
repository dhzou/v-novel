//





function max () {
  const opt = [];
  for (let j = 0 ; j < 5;j++) {
    var child = [];
    for (let i = 0 ; i < 33 ; i ++) {
      child.push(0);
    }
    opt.push(child);
  }

  const v = [50,220,60,110];
  const w   = [5 , 20 , 10 , 12];
  var targer = 32;
  for( let i = 1; i <= w.length; i++) {
    for( let j = 1; j<= targer; j++){
      if(j<w[i])
        opt[i][j] = opt[i-1][j];
      else{
        opt[i][j] = Math.max(opt[i-1][j] , opt[i-1][j-w[i]] + v[i]);
      }
    }
  }
  return opt[3][32];
}
console.log(max());
