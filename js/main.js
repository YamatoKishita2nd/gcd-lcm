'use strict';

{
  let value1;
  let value2;
  let gcd;
  let lcm;

  let calculate = document.querySelector('.calculate');
  let result = document.querySelector('.result');

  calculate.addEventListener('click', () => {
    value1 = Number(document.querySelector('.value1').value);
    value2 = Number(document.querySelector('.value2').value);

    if (value1 === 0 || value2 === 0) {
      result.innerHTML = '半角で数値を入力してください。';
      if (!result.classList.contains('error')) {
        result.classList.add('error');
      }
    } else {
      gcd = getGcd(value1, value2);
      lcm = getLcm(value1, value2);
      result.innerHTML = `最大公約数は${gcd}です。<br>最小公倍数は${lcm}です。`;
      if (result.classList.contains('error')) {
        result.classList.remove('error');
      }
    }
  });

  function getGcd(x, y){
    if (x % y) {
      return getGcd(y, x % y);
    } else {
      return y;
    }
  }

  function getLcm(x, y){
    return x * y / getGcd(value1, value2);
  }
}