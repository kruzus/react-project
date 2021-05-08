

//test
export class Fetch {
  private status: boolean;
  constructor(status: boolean){
    this.status = false;
  }

  init(): void {
    this.status = true;
    console.log("It's on iguess")
  }

  shutDown(): void {
    this.status = false;
    console.log("Offline...")
  }
  
}