class ListElement {
  constructor(lastName, next = null) {
    this.lastName = lastName;
    this.next = next;
  }
}

class EmployeesList {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  Insert(index, lastName) {}

  Delete(index) {}

  Print(index) {}

  Count() {}

  Add(lastName) {
    const element = new ListElement(lastName);
    if (this.size === 0) {
      this.start = element;
      this.size++;
      return;
    }

    if (this.size === 1) {
      this.start.next = element;
      this.end = element;
      this.size++;
      return;
    }

    if (this.end) {
      this.end.next = element;
    }

    this.size++;
    this.end = element;
  }
}
