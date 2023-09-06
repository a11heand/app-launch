/*
File: sophisticatedCode.js
Description: This code implements a highly sophisticated and complex system for managing employee data in a fictional company.
*/

// Employee class definition
class Employee {
  constructor(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  promote(newPosition) {
    this.position = newPosition;
    console.log(`${this.name} has been promoted to ${newPosition}`);
  }

  raiseSalary(amount) {
    this.salary += amount;
    console.log(`${this.name} received a raise of ${amount} units`);
  }
}

// Company class definition
class Company {
  constructor() {
    this.employees = [];
  }

  hireEmployee(id, name, position, salary) {
    const employee = new Employee(id, name, position, salary);
    this.employees.push(employee);
    console.log(`${name} has been hired as a ${position}`);
  }

  fireEmployee(id) {
    const index = this.employees.findIndex(e => e.id === id);
    if (index !== -1) {
      const employee = this.employees[index];
      this.employees.splice(index, 1);
      console.log(`${employee.name} has been fired`);
    } else {
      console.log(`Employee with id ${id} not found`);
    }
  }

  getEmployeeCount() {
    return this.employees.length;
  }

  getAverageSalary() {
    const totalSalary = this.employees.reduce((sum, e) => sum + e.salary, 0);
    return totalSalary / this.getEmployeeCount();
  }
}

// Creating company instance
const company = new Company();

// Hiring employees
company.hireEmployee(1, "John Doe", "Manager", 8000);
company.hireEmployee(2, "Jane Smith", "Engineer", 6000);
company.hireEmployee(3, "Robert Johnson", "Analyst", 5000);
company.hireEmployee(4, "Alice Brown", "Designer", 5500);

// Promoting an employee
company.employees[0].promote("Senior Manager");

// Giving a raise to an employee
company.employees[1].raiseSalary(1000);

// Firing an employee
company.fireEmployee(3);

// Outputting employee count and average salary
console.log(`Number of employees: ${company.getEmployeeCount()}`);
console.log(`Average salary: ${company.getAverageSalary()}`);
