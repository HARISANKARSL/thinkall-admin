import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BatchComponent } from './components/batch/batch.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import {MatTableModule} from '@angular/material/table';
import { ReportComponent } from './components/report/report.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import {PlatformModule} from '@angular/cdk/platform';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ExamResultsComponent } from './components/exam-results/exam-results.component';
import { DailyClassUpdatesComponent } from './components/daily-class-updates/daily-class-updates.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { PopupComponent } from './components/shared/popup/popup.component';
import { AddexamComponent } from './components/shared/addexam/addexam.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ChatboxComponent } from './components/chatbox/chatbox.component';

import { HelpCenterComponent } from './components/help-center/help-center.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { DeletealertComponent } from './components/shared/deletealert/deletealert.component';
import { ShowAttendanceComponent } from './components/show-attendance/show-attendance.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { VieeDailyClassDetailsComponent } from './components/viee-daily-class-details/viee-daily-class-details.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewMarksComponent } from './components/view-marks/view-marks.component';
import { AddMarksComponent } from './components/exam-results/add-marks/add-marks.component';
@NgModule({
  declarations: [
    AdminHomeComponent,
  
    BatchComponent,
    StudentDetailsComponent,
    ReportComponent,
    ExamResultsComponent,
    DailyClassUpdatesComponent,
    AttendanceComponent,
    AddstudentsComponent,
    PopupComponent,
    AddexamComponent,
    ChatboxComponent,
 
    HelpCenterComponent,
    LeaderBoardComponent,
    DeletealertComponent,
    ShowAttendanceComponent,
    ViewStudentComponent,
    VieeDailyClassDetailsComponent,
    ViewAttendanceComponent,
    ViewMarksComponent,
    AddMarksComponent,
    

    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
   MatDialogModule,
   MatSidenavModule,
   MatListModule,
   MatDatepickerModule,
   MatNativeDateModule,
   PlatformModule,
   MatTabsModule
  ]
})
export class AdminModule { }
