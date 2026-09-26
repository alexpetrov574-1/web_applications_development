/**
 * Класс, отражающий информацию об ученике
 */
class Person {
  /**
   * Конструктор класса Person
   * @param {string} surname
   * @param {string} name
   * @param {string} patronymic
   * @param {string} dateOfBirth
   * @param {string} phoneNumber
   * @param {string} email
   */
  constructor(surname, name, patronymic, dateOfBirth, phoneNumber, email) {
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
