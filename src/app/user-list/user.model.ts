export class User {
  
  constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public email: string,
      public profession: string,
      public dob: Date,
      public imageUrl: string)
    {}
}
