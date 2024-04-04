function getData(empid, username, dob) {
  (this.empid = empid),
    (this.username = username),
    (this.dob = dob),
    (this.greeting = () => {
      console.log("Welcome", this.username);
    });
}

const user1 = new getData(2, "Mohammed", "24/07/1996");
const user2 = new getData(3, "Kabir", "2/03/1930");
const user3 = new getData(4, "ALi", "04/02/1936");
console.log(user1.username);
console.log(user1.empid);
console.log(user1.dob);
user1.username = "Mohammed Hussain";
user1.greeting();
