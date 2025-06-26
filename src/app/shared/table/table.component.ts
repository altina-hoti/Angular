import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapButtonComponent } from '../bootstrap-button/bootstrap-button.component';

interface User {
  id: number;
  name: string;
  date: string;
  country: string;
  role: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, BootstrapButtonComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users: User[] = [];
  page = 1;
  pageSize = 20;

  names = ['Arben Dauti', 'Julia Smith', 'Liam Müller', 'Emily Johnson', 'Elira Kelmendi', 'Max Bauer', 'Sophie Brown', 'Jon Gashi', 'Ariana Veliu'];
  countries = ['Germany', 'Albania', 'USA', 'UK', 'France'];
  roles = ['Admin', 'User', 'Editor', 'Viewer', 'Manager'];

  constructor() {
   
    for (let i = 1; i <= 50; i++) {
      const randomName = this.names[Math.floor(Math.random() * this.names.length)];
      const randomCountry = this.countries[Math.floor(Math.random() * this.countries.length)];
      const randomRole = this.roles[Math.floor(Math.random() * this.roles.length)];

      this.users.push({
        id: i,
        name: randomName,
        date: new Date().toLocaleDateString(),
        country: randomCountry,
        role: randomRole
      });
    }
  }

  get pagedUsers() {
    const start = (this.page - 1) * this.pageSize;
    return this.users.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.page * this.pageSize < this.users.length) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    if (this.page > 1 && this.pagedUsers.length === 0) this.page--;
  }

  addUser() {
    const newId = this.users.length + 1;
    const randomName = this.names[Math.floor(Math.random() * this.names.length)];
    const randomCountry = this.countries[Math.floor(Math.random() * this.countries.length)];
    const randomRole = this.roles[Math.floor(Math.random() * this.roles.length)];

    this.users.push({
      id: newId,
      name: randomName,
      date: new Date().toLocaleDateString(),
      country: randomCountry,
      role: randomRole
    });
  }
}
