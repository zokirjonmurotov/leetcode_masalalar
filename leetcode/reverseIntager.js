//7. Reverse Integer

function reverseInt(x) {
    let newX = String(x);
    let a = "";
    if (x < 0) a = a.replace("-", "");
    for (let i = newX.length - 1; i >= 0; i--) {
      a += newX[i];
    }
    if (a[0] == "0") {
      let j = 0;
      let tr = true;
      while (tr) {
        if (a[j] != "0") {
          a = a.replace("0", "");
          j++;
        } else tr = false;
      }
    }
    a = x > 0 ? +a : +Number(a.replace("-", "")) * -1;
    if (a > 2 ** 31 - 1 && a < -(2 ** 31)) return 0;
    return a;
  }
  
  console.log(reverseInt(-605090));
  