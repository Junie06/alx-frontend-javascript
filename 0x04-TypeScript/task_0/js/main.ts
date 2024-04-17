interface Student {
        firstName: string;
        lastName: string;
        age: number;
        location: String
}

const student1: Student = {
        firstName: 'Doe',
        lastName: 'John',
        age: 22,
        location: 'San Francisco'
};      

const student2: Student = {
        firstName: 'James',
        lastName: 'Bush',
        age: 25,
        location: 'Delaware'
};      
        
const studentsList: student[] = [student1, student2];

function renderTable() {
  const table = document.createElement("table");
  studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(table);
}

renderTable();
