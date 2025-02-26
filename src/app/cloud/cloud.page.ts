import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { MyHeaderComponent } from '../my-header/my-header.component';
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  imports: [IonicModule,  
    CommonModule, 
    MyHeaderComponent, 
    HttpClientModule,] 
})
export class CloudPage implements OnInit {
  students: any[] = [];
  groupedStudents: { [key: string]: any[] } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    const jsonUrl = 'https://api.jsonbin.io/v3/b/67bdf44fad19ca34f811cf76'; 
  
    this.http.get(jsonUrl).subscribe((data: any) => {
      if (data && data.record && data.record.students) {
        this.students = data.record.students;
        this.groupStudents();
        setTimeout(() => this.createChart(), 500); 
      } else {
        console.error('Помилка: JSON не містить "students"');
        this.students = [];
      }
    }, error => {
      console.error('Помилка завантаження JSON:', error);
    });
  }

  groupStudents() {
    this.groupedStudents = this.students.reduce((acc: { [key: string]: any[] }, student) => {
      acc[student.group] = acc[student.group] || [];
      acc[student.group].push(student);
      return acc;
    }, {});
  }
  
  ngAfterViewInit() {
    this.createChart();
  }
  chartInstance: any; 

  createChart() {
    const ctx = document.getElementById('studentsChart') as HTMLCanvasElement;
    if (!ctx) return;
    if (this.chartInstance) {
          this.chartInstance.destroy(); 
    }
    const labels = Object.keys(this.groupedStudents);
    const data = Object.values(this.groupedStudents).map(group => group.length);
  
    this.chartInstance = new Chart(ctx, { 
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Кількість студентів у групах',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      }
    });
  }
}


