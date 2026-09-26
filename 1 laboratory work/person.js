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
    this.Surname = surname;
    this.Name = name;
    this.Patronymic = patronymic;
    this.DateOfBirth = dateOfBirth;
    this.PhoneNumber = phoneNumber;
    this.Email = email;
  }

  /**
   * Сеттер для фамилии ученика
   * @param {string} value - значение фамилии ученика
   */
  set Surname(value) {
    if (value === "") {
      alert("Строка пустая!!!!!");
      return;
    }
    this._surname = value;
  }

  /**
   * Геттер для фамилии ученика
   */
  get Surname() {
    return this._surname;
  }

  /**
   * Сеттер для имени ученика
   * @param {string} value - значение имени ученика
   */
  set Name(value) {
    if (value === "") {
      alert("Строка пустая!!!!!");
      return;
    }
    this._name = value;
  }

  /**
   * Геттер для имени ученика
   */
  get Name() {
    return this._name;
  }

  /**
   * Сеттер для отчества ученика
   * @param {string} value - значение отчества ученика
   */
  set Patronymic(value) {
    if (value === "") {
      alert("Строка пустая!!!!!");
      return;
    }
    this._patronymic = value;
  }

  /**
   * Геттер для отчества ученика
   */
  get Patronymic() {
    return this._patronymic;
  }

  /**
   * Сеттер для даты рождения ученика
   * @param {string} value - значение даты рождения ученика
   */
  set DateOfBirth(value) {
    const currentDate = new Date();
    let dateOfBirth = new Date(value);
    if (dateOfBirth > currentDate) {
      alert("Дата рождения не может быть больше текущей даты");
      return;
    }
    this._dateOfBirth = new Intl.DateTimeFormat("ru", {
      dateStyle: "medium",
    }).format(dateOfBirth);
  }

  /**
   * Геттер для даты рождения ученика
   */
  get DateOfBirth() {
    return this._dateOfBirth;
  }

  /**
   * Сеттер для номера телефона ученика
   * @param {string} value - значение номера телефона ученика
   */
  set PhoneNumber(value) {
    const exp = /\+79(\d){2}(\d){3}(\d){2}(\d){2}$/;
    if (!exp.test(value)) {
      alert("Неверный формат номера телефона");
      return;
    } else if (value === "") {
      alert("Строка пустая!!!!!");
      return;
    }
    this._phoneNumber = value;
  }

  /**
   * Геттер для номера телефона ученика
   */
  get PhoneNumber() {
    return this._phoneNumber;
  }

  /**
   * Сеттер для адреса электронной почты ученика
   * @param {string} value - значение адреса электронной почты ученика
   */
  set Email(value) {
    const exp = /[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!exp.test(value)) {
      alert("Неверный формат адреса электронной почты");
      return;
    } else if (value === "") {
      alert("Строка пустая!!!!!");
      return;
    }
    this._email = value;
  }

  /**
   * Геттер для адреса электронной почты ученика
   */
  get Email() {
    return this._email;
  }
}
