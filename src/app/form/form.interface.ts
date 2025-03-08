export class ApplicantRegisterWithResumeDTO {
  Firstname: string = '';
  Lastname: string = '';
  Experience: number = 0;
  HighestQualification: string = '';
  Email: string = '';
  CurrentAddress: string = '';
  Pincode: string = '';
  City: string = '';
  PhoneNumber: string = '';
  PreviousCompanyName: string = '';
  CurrentCompanyName: string = '';
  Platform: string = '';
  ResumeFile?: File;
  JobId: number = 0;
}

