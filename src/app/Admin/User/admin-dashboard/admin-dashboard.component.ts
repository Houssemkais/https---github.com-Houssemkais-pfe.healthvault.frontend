import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from '../../../../api/services/user-controller.service';
import { User } from '../../../../api/models/user';
import { Secretary } from '../../../../api/models/secretary';
import { Admin } from '../../../../api/models/admin';
import { Patient } from '../../../../api/models/patient';
import { Doctor } from '../../../../api/models/doctor';

import {MatTableDataSource,} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  {

}


