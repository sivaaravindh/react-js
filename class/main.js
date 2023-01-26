//class methods
class Main{
  constructor(){
    this.name="siva";
  }
  getData(){
    console.log("name",this.name);
  }
}

class child extends Main{
  getName(){
    super.getData();
  }
}
const obj=new Main();
obj.getData();
const obj1=new child();
bbj1.getName();