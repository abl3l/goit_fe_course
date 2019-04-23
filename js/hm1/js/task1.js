const ADMIN_PASSWORD = 'm4ng0h4ckz';
let password;
let message;
password = prompt ('Enter password');
if (!password){
    message = 'Canceled by user!';
}else if (password === ADMIN_PASSWORD){
    message = 'Welcome!';
}else{      
    message = 'Access denied, wrong password!';
}
alert(message);