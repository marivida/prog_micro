var x = [8, 7, 9, 6]

for (let i = 1; i < x.length; i++) {
  for (j = 0; j < i; j++) {
    // subistituição===== for (j = 0; j < i; j++)

    if (x[i] < x[j]) {
      // subistituição===== if( x[1] < x[0])  ===== if(7<8)

      v = x[j] // subistituição=====    v=x[0];        =====   v=8

      x[j] = x[i] // subistituição=====    x[0]=x[1];     =====   x[0]=7

      x[i] = v // subistituição=====    x[1]=v;        =====   x[1]=8
    }
  }
  console.log(x)
}
