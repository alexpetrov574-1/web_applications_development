/**
 * Класс, отражающий информацию об ученике
 */
class Person {
  /**
   * Конструктор класса Person
   * @param {string} surname - фамилия ученика
   * @param {string} name - имя ученика
   * @param {string} patronymic - отчество ученика
   * @param {string} dateOfBirth - дата рождения ученика
   * @param {string} phoneNumber - номер телефона ученика
   * @param {string} email - адрес электронной почты ученика
   */
  constructor(surname, name, patronymic, dateOfBirth, phoneNumber, email) {
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  /**
   * Геттер и сеттер для фамилии ученика
   */
  get surname() {
    return this._surname;
  }
  set surname(value) {
    if (value.length < 2) {
      alert("Фамилия слишком короткая");
      return;
    }
    this._surname = value;
  }

  /**
   * Геттер и сеттер для имени ученика
   */
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 2) {
      alert("Имя слишком короткое");
      return;
    }
    this._name = value;
  }

  /**
   * Геттер и сеттер для отчества ученика
   */
  get patronymic() {
    return this._patronymic;
  }
  set patronymic(value) {
    if (value.length < 2) {
      alert("Отчество слишком короткое");
      return;
    }
    this._patronymic = value;
  }

  /**
   * Геттер и сеттер для даты рождения ученика
   */
  get dateOfBirth() {
    return this._dateOfBirth;
  }
  set dateOfBirth(value) {
    const currentDate = new Date();
    let dateOfBirth = new Date(value);
    if (dateOfBirth > currentDate) {
      alert("Дата рождения не может быть больше текущей даты");
      return;
    }
    this._dateOfBirth = dateOfBirth;
  }

  /**
   * Геттер и сеттер для номера телефона ученика
   */
  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(value) {
    const exp = /\+7\(9(\d){2}\)(\d){3}-(\d){2}-(\d){2}$/;
    if (!exp.match(value)) {
      alert("Неверный формат номера телефона");
      return;
    }
    this._phoneNumber = value;
  }

  /**
   * Геттер и сеттер для адреса электронной почты ученика
   */
  get email() {
    return this._email;
  }
  set email(value) {
    const exp = /^[^@\s]+@[^@\s]+\.[^@\s]$/;
    if (!exp.match(value)) {
      alert("Неверный формат адреса электронной почты");
      return;
    }
    this._email = value;
  }
}
