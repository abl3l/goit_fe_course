const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = login => login.length < 4 || login.length > 16;   

const isLoginUnique = (allLogins, login) => logins.includes(login);

const addLogin = function(allLogins, login) {
    if (isLoginValid(login)){   
        return('Ошибка! Логин должен быть от 4 до 16 символов');
    }
    else if (isLoginUnique(logins, login)){
        return('Такой логин уже используется!');
    }
    else
    logins.push(login)
    return ('Логин успешно добавлен!');
}

// Вызовы функции для проверки
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов
console.log(logins)