/**
 * Метод для добавления ученика в таблицу
 * @param {Person} person - ученик, которого нужно добавить в таблицу
 */
function addPerson(person) {
  const tbody = document
    .getElementById("tableOfPersons")
    .querySelector("tbody");
  const newRow = tbody.insertRow();

  newRow.insertCell().textContent = person.Surname;
  newRow.insertCell().textContent = person.Name;
  newRow.insertCell().textContent = person.Patronymic;
  newRow.insertCell().textContent = person.DateOfBirth;
  newRow.insertCell().textContent = person.PhoneNumber;
  newRow.insertCell().textContent = person.Email;
}

/**
 * Метод для выполнения действия
 */
function execute(event) {
  event.preventDefault();

  let surname = document.getElementById("surname").value;
  let name = document.getElementById("name").value;
  let patronymic = document.getElementById("patronymic").value;
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let email = document.getElementById("email").value;

  // Сбрасываем подсветку ошибок с предыдущей попытки
  document
    .querySelectorAll("input.invalid")
    .forEach((input) => input.classList.remove("invalid"));

  try {
    let newPerson = new Person(
      surname,
      name,
      patronymic,
      dateOfBirth,
      phoneNumber,
      email,
    );
    addPerson(newPerson);
    document.getElementById("form-student").reset();
  } catch (error) {
    alert(error.message);

    // Подсвечиваем и фокусируем поле, в котором обнаружена ошибка
    if (error.fieldId) {
      const field = document.getElementById(error.fieldId);
      if (field) {
        field.classList.add("invalid");
        field.focus();
        // Как только пользователь начнёт исправлять поле, подсветка исчезнет
        field.addEventListener(
          "input",
          () => field.classList.remove("invalid"),
          { once: true },
        );
      }
    }
  }
}
