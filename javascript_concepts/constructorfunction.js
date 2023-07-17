const Detail  = function (first_name, last_name) {
    this.first_name=first_name;
    this.last_name=last_name;
}

const detail_1 = new Detail("Anurag", "Rawat")

console.log(detail_1 instanceof Detail)


const namePrint={
    firstname:"anurag",
    lastname:"rawat"
}


// prototype in heritance
Detail.prototype.print = function (){
    console.log(this.first_name,"", this.last_name)
}
detail_1.print()

console.log(detail_1.__proto__)