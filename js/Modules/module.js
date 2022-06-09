class ListElement {
  constructor(lastName, next = null, index) {
    this.lastName = lastName;
    this.next = next;
    this.index = index;
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

  Print(index) {
    //for for empty list
    if (!this.start) {
      return console.log(`Employees list is empty`);
    }
    //for whole list
    if (index === undefined) {
      let element = this.start;
      while (element) {
        console.log(element.lastName);
        element = element.next;
      }
    }
    //for any element
    let element = this.start;
    while (element !== null) {
      if (element.index === index) return console.log(element.lastName);
      element = element.next;
    }
    return console.log(
      `There is no element with index ${index} in Employees list`
    );
  }

  Count() {
    console.log(`Employees list has ${this.size} elements`);
  }

  Add(lastName) {
    const element = new ListElement(lastName);
    //for empty list
    if (this.size === 0) {
      this.start = element;
      element.index = this.size;
      this.size++;
      return;
    }
    //for list with only 1 element
    if (this.size === 1) {
      this.start.next = element;
      this.end = element;
      element.index = this.size;
      this.size++;
      return;
    }
    //for all other cases
    if (this.end) {
      this.end.next = element;
      element.index = this.size;
    }
    this.size++;
    this.end = element;
  }
}
