import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { BatchComponent } from './components/batch/batch.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ReportComponent } from './components/report/report.component';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import { ExamResultsComponent } from './components/exam-results/exam-results.component';
import { DailyClassUpdatesComponent } from './components/daily-class-updates/daily-class-updates.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { HelpCenterComponent } from './components/help-center/help-center.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { ShowAttendanceComponent } from './components/show-attendance/show-attendance.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { VieeDailyClassDetailsComponent } from './components/viee-daily-class-details/viee-daily-class-details.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { ViewMarksComponent } from './components/view-marks/view-marks.component';

const routes: Routes = [
 {
path:"",
redirectTo:"/admin-home-page",pathMatch:"full"
 },
  {
    path:"admin-home-page",component:AdminHomeComponent
  },
  {
    path:"batch",component:BatchComponent
  },
  {
    path:"students-details/:id",component:StudentDetailsComponent
  },
  {
    path:"report",component:ReportComponent
  },
  {
    path:"addstudents",component:AddstudentsComponent
  },{
path:"examresult",component:ExamResultsComponent
  },{
    path:'daily-class-updates',component:DailyClassUpdatesComponent
  },
  {
path:"add-attendance",component:AttendanceComponent
  },
  {
    path:"chatbox",component:ChatboxComponent
  },
  {
    path:"help-center",component:HelpCenterComponent
  },{
    path:'leader-board',component:LeaderBoardComponent
  },
  {
    path:"showAttendance",component:ShowAttendanceComponent
  },
  {
    path:"viewStudent",component:ViewStudentComponent
  },
  {
    path:"viewstudentDailyUpdates",component:VieeDailyClassDetailsComponent
  },
  {
    path:"viewAttendnace",component:ViewAttendanceComponent
  },{
    path:"leaderboard",component:LeaderBoardComponent
  },
  {
    path:"viewMarks",component:ViewMarksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
