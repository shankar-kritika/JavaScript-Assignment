class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
    class Moderator extends User{
        constructor(name, age,email,coins){
            super(name, age,email);
            this.luCoins = 0;
            
        }
        addCoins(){
            this.luCoins++;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
        rmCoins(){
            this.luCoins--;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }



        
    }

    class Admin extends Moderator{
        
        addCourse(user,course){
            user.courses.push(course);
            console.log(`user has added ${course}`);
            return this;
        }
        deletecourse(user,course){
            user.courses=user.courses.filter(courses=>courses!==course);
            console.log(`User has succefully deleted ${course}`);
            return this;
            // users = users.filter(u =>{
            //     return u.email != user.email; 
            // })
     }
    }

   
    let user1 = new User('Sagar',25,'sagar@gmail.com');
    let mod=new Moderator('Sagar',25,'sagar@gmail.com');
    let admin = new Admin('ABC',22,'abc@gmail.com');
    let users = [user1,mod,admin];
    user1.login();
    mod.addCoins().addCoins().rmCoins();
    console.log(mod);
    // mod.addCoins();
    // mod.rmCoins();
    // mod.rmCoins();
    admin.addCourse(admin,"History");
    admin.addCourse(admin,"python");
    admin.deletecourse(admin,"python");
    console.log(admin);