
export class Employee {
  constructor(public firstName: string, public lastName: string, public company: string, public email: string, public password: string, public points: number, public awards: Array<{award: string, points: number}>){}
}
