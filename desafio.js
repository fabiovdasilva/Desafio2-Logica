let resultado = calculadoraRanked(2000, 90);


function calculadoraRanked(vitorias, derrotas) {
  return vitorias - derrotas;
}

switch (true) {
  case resultado < 10:
    console.log(`Seu numero de vitórias é ${resultado} e você está no Ferro`);
    break;
  case resultado >= 10 && resultado <= 20:
    console.log(`Seu numero de vitórias é ${resultado} e você está no Bronze`);
    break;
  case resultado >= 21 && resultado <= 50:
    console.log(`Seu numero de vitórias é ${resultado} e você está no Prata`);
    break;
  case resultado >= 51 && resultado <= 80:
    console.log(`Seu numero de vitórias é ${resultado} e você está no Ouro`);
    break;
  case resultado >= 81 && resultado <= 90:
    console.log(`Seu numero de vitórias é ${resultado} e você está no Diamante`);
    break;
  case resultado >= 91 && resultado <= 100:
    console.log(`Seu numero de vitórias é ${resultado} e você está no Lendário`);
    break;
  case resultado >= 101:
    console.log(`Seu numero de vitórias é ${resultado} e você está no Imortal`);
    break;
}
