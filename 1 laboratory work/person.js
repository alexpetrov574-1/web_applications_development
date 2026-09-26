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
   * Геттер для фамилии ученика
   */
  get Surname() {
    return this._surname;
  }

  /**
   * Сеттер для фамилии ученика
   * @param {string} value - значение фамилии ученика
   */
  set Surname(value) {
    if (value === "") {
      return;
    }
    this._surname = value;
  }

  /**
   * Геттер для имени ученика
   */
  get Name() {
    return this._name;
  }

  /**
   * Сеттер для имени ученика
   * @param {string} value - значение имени ученика
   */
  set Name(value) {
    if (value === "") {
      return;
    }
    this._name = value;
  }

  /**
   * Геттер для отчества ученика
   */
  get Patronymic() {
    return this._patronymic;
  }

  /**
   * Сеттер для отчества ученика
   * @param {string} value - значение отчества ученика
   */
  set Patronymic(value) {
    if (value === "") {
      return;
    }
    this._patronymic = value;
  }

  /**
   * Геттер для даты рождения ученика
   */
  get DateOfBirth() {
    return this._dateOfBirth;
  }

  /**
   * Сеттер для даты рождения ученика
   * @param {string} value - значение даты рождения ученика
   */
  set DateOfBirth(value) {
    const currentDate = new Date();
    let dateOfBirth = new Date(value);
    if (dateOfBirth > currentDate) {
      return;
    }
    if (value === "") {
      return;
    }
    this._dateOfBirth = new Intl.DateTimeFormat("ru", {
      dateStyle: "medium",
    }).format(dateOfBirth);
  }

  /**
   * Геттер для номера телефона ученика
   */
  get PhoneNumber() {
    return this._phoneNumber;
  }

  /**
   * Сеттер для номера телефона ученика
   * @param {string} value - значение номера телефона ученика
   */
  set PhoneNumber(value) {
    const exp = /\+79(\d){2}(\d){3}(\d){2}(\d){2}$/;
    if (!exp.test(value)) {
      return;
    } else if (value === "") {
      return;
    }
    this._phoneNumber = value;
  }

  /**
   * Геттер для адреса электронной почты ученика
   */
  get Email() {
    return this._email;
  }

  /**
   * Сеттер для адреса электронной почты ученика
   * @param {string} value - значение адреса электронной почты ученика
   */
  set Email(value) {
    const exp = /[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!exp.test(value)) {
      return;
    } else if (value === "") {
      return;
    }
    this._email = value;
  }
}
