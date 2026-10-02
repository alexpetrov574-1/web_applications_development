/**
 * Ошибка валидации значения поля.
 * Помимо текста ошибки содержит id поля формы, к которому она относится.
 */
class ValueError extends Error {
  /**
   * @param {string} message - текст ошибки
   * @param {string} [fieldId] - id поля формы, которому соответствует ошибка
   */
  constructor(message, fieldId = null) {
    super(message);
    this.name = "ValueError";
    this.fieldId = fieldId;
  }
}

/**
 * Класс, отражающий информацию об ученике
 */
class Person {
  /**
   * Конструктор класса Person
   * @param {string} surname - фамилия ученика
   * @param {string} name - имя ученика
   * @param {string} patronymic - отчество ученика
   * @param {Date} dateOfBirth - дата рождения ученика
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
    if (this.isValidSurname(value)) {
      this._surname = value;
    } else {
      throw new ValueError("Пустое поле фамилии", "surname");
    }
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
    if (this.isValidName(value)) {
      this._name = value;
    } else {
      throw new ValueError("Пустое поле имени", "name");
    }
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
    if (this.isValidPatronymic(value)) {
      this._patronymic = value;
    } else {
      throw new ValueError("Пустое поле отчества", "patronymic");
    }
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
    let dateOfBirth = new Date(value);
    if (this.isValidDateOfBirth(value)) {
      this._dateOfBirth = new Intl.DateTimeFormat("ru", {
        dateStyle: "medium",
      }).format(dateOfBirth);
    } else {
      throw new ValueError(
        "Поле пустое или дата рождения не может быть больше, чем сегодняшняя дата",
        "dateOfBirth",
      );
    }
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
    if (this.isValidPhoneNumber(value)) {
      this._phoneNumber = value;
    } else {
      throw new ValueError("Неверный формат номера телефона", "phoneNumber");
    }
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
    if (this.isValidEmail(value)) {
      this._email = value;
    } else {
      throw new ValueError("Неверный формат адреса email", "email");
    }
  }

  isValidSurname(value) {
    return value !== "";
  }

  isValidName(value) {
    return value !== "";
  }

  isValidPatronymic(value) {
    return value !== "";
  }

  isValidDateOfBirth(value) {
    const currentDate = new Date();
    let dateOfBirth = new Date(value);
    return dateOfBirth <= currentDate && value !== "";
  }

  isValidPhoneNumber(value) {
    const exp = /\+79(\d){2}(\d){3}(\d){2}(\d){2}$/;
    return exp.test(value) && value !== "";
  }

  isValidEmail(value) {
    const exp = /[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return exp.test(value) && value !== "";
  }
}
