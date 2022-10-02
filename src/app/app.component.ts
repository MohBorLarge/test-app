import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { JSONPlaceholderService } from './services/jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-app';
  formObject = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };
  data: Array<any>;

  constructor(
    private JSONPlaceholder: JSONPlaceholderService,
    private dialog: MatDialog
  ) {
    this.data = new Array<any>();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  createNew() {
    console.log('khgfghjh', this.formObject);
    this.JSONPlaceholder.postData(this.data).subscribe((data: any) => {
      this.data = data;
    });
  }

  getDataFromApi() {
    this.JSONPlaceholder.getData().subscribe((data) => {
      this.data = data;
    });
  }
  removeDataFromApi(id: any) {
    
     this.JSONPlaceholder.deleteData(this.formObject).subscribe((data) => {
       this.data = data;
       this.data = this.data.filter((item) => item.id !== id);
     });
  }
  updateDataFromApi(id: any) {
    
     this.JSONPlaceholder.updateData(this.formObject).subscribe((data) => {
       this.data = data;
        
     });
  }
}
