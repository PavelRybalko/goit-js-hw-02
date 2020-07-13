const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16){
  	return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
 if (allLogins.includes(login)){
 	return false;
 }
 return true;
};

const addLogin = function (allLogins, login) {
  if(isLoginValid(login)){

  	if(isLoginUnique(allLogins, login)){
  	allLogins.push(login);
  	return "Логин Успешно добавлен";
  	}
  	return 'Такой логин уже используется!';
}

  else {
  return "Ошибка! Логин должен быть от 4 до 16 символов";
}
};


console.log(addLogin(logins, "Ajax")); 
console.log(addLogin(logins, "robotGoogles")); 
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
