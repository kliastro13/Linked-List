class ListElement {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class EmployeesList {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }
}
