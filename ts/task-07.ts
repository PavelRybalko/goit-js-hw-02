const logins: string[] = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login: string) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins: string[], login: string) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins: string[], login: string) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  }

  allLogins.push(login);
  return 'Логин Успешно добавлен';
};

console.log(addLogin(logins, 'Ajax'));
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'Zod'));
console.log(addLogin(logins, 'jqueryisextremelyfast'));
