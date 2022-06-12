class MyListElement {
  constructor(data, next = null, index) {
    this.data = data;
    this.next = next;
    this.index = index;
  }
}

class MyLinkedList {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  firstIndex = (() => 0)();
  secondIndex = (() => 1)();

  Insert(index, data) {
    //for empty list
    if (this.size === this.firstIndex || index >= this.size) {
      this.Add(data);
      return;
    }

    //for any element
    let element = this.start;
    let prevElement = null;

    while (element !== null) {
      if (element.index === index) {
        prevElement.next = new MyListElement(data, element, element.index);
      }

      prevElement = element;

      if (element.index >= index) {
        element.index++;
      }

      element = element.next;
    }

    this.size++;
  }

  Delete(index) {
    let element = this.start;
    let prevElement = null;

    //for first element
    if (element !== null && element.index === index) {
      this.start = element.next;
      while (element != null) {
        element.index--;
        prevElement = element;
        element = element.next;
      }
      this.size--;
      console.log(`Element ${index} deleted`);
      return;
    }

    if (index >= this.size) {
      console.log(`There is no element with index ${index} in Employees list`);
      return;
    }

    while (element !== null) {
      if (element.index === index) {
        prevElement.next = element.next;
        element = element.next;
      }

      prevElement = element;

      if (element.index > index) {
        element.index--;
      }
      element = element.next;
    }

    console.log(`Element ${index} deleted`);
    this.size--;
  }

  Print(index) {
    //for empty list
    if (!this.start) {
      return console.log(`Employees list is empty`);
    }
    //for whole list
    if (index === undefined || index === null) {
      let element = this.start;
      while (element) {
        console.log(element.data);
        element = element.next;
      }
    }

    //for any element
    let element = this.start;
    while (element !== null) {
      if (element.index === index) {
        console.log(element.data);
        return;
      }
      element = element.next;
    }

    console.log(`There is no element with index ${index} in Employees list`);
  }

  Count() {
    console.log(`Employees list has ${this.size} elements`);
    return this.size;
  }

  Add(data) {
    const element = new MyListElement(data);
    element.index = this.size;

    //for empty list
    if (this.size === this.firstIndex) {
      this.start = element;
      this.size++;
      return;
    }

    //for list with only 1 element
    if (this.size === this.secondIndex) {
      this.start.next = element;
      this.end = element;
      this.size++;
      return;
    }

    //for all other cases
    if (this.end) {
      this.end.next = element;
    }

    this.size++;
    this.end = element;
  }
}
