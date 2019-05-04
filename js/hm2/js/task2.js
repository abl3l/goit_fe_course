const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userPassword

do{
    userPassword = prompt('Введите пароль','');
    if(!userPassword){
        break;
    }
    else if(userPassword == passwords){
        alert('Добро пожаловать');
        break
}
attemptsLeft -=1;
if(attemptsLeft === 0){
    alert('У вас закончились попытки, аккаунт заблокирован!');
}
else{
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
}
}while (attemptsLeft);
    
