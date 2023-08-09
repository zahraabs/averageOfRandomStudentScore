//make variables
var container = document.getElementById("container");
var rows;
var students = [];
var totalAvg = 0;

//give student numbers from teacher
while (rows != Number(rows) || rows == "") {
    rows = prompt("Enter student's number from 0 to 10.").trimStart("");
}

// show the header of table in html and output
container.innerHTML += `<div class="flex_horizental header ">
<p class="boxHeader boxShadow">شماره دانش آموز </p>
<p class="boxHeader boxShadow"> نمره اول </p>
<p class="boxHeader boxShadow"> نمره دوم</p>
<p class="boxHeader boxShadow"> نمره سوم </p> 
<P class="boxHeader boxShadow">میانگین هر دانش آموز </P>
</div>`;

// loop for number of students 
for (var i = 0; i < rows; i++) {
    //make an array for each students scores
    var numbers = [];
    //give 3 random numbers for each student
    for (var j = 0; j < 3; j++) {
        //make variable for random numbers
        var number = Number((Math.random() * 20).toFixed(1));
        //add scores one by one in numbers array
        numbers.push(number);

    }
    //call studentScore function in number of students loop
    studentScore(numbers[0], numbers[1], numbers[2], i + 1);
    //empty numbers array for another student
    numbers.splice(0, numbers.length)

}

//make function for id and scores and average of scores
function studentScore(num1, num2, num3, id) {
    //make an abject for saving each student content
    var studentScoreObj = {
        id: id,
        num1: num1,
        num2: num2,
        num3: num3,
        avg: Number(((num1 + num2 + num3) / 3).toFixed(1)),
    };
    //make variable for each student for html codes
    var eachStudent = `<div class="flex_horizental">
        <p class="box">${studentScoreObj.id}</p>
        <p class="box">${studentScoreObj.num1}</p>
        <p class="box"> ${studentScoreObj.num2}</p>
        <p class="box">${studentScoreObj.num3}</p>
        <p class="box"> ${studentScoreObj.avg}</p>
        </div>`;
    //show each student row in output
    container.innerHTML += eachStudent;
    //add all students object in students array 
    students.push(studentScoreObj);
}

//loop for students average
for (var studentCount = 0; studentCount < students.length; studentCount++) {
    // add students array's average in totalAvg 
    totalAvg += students[studentCount].avg;

}
//make the whole students average (class average)
totalAvg = (totalAvg / students.length).toFixed(1);

//sort student's average in descending
students.sort(function (a, b) {
    return b.avg - a.avg;
})

//show total average and sorted averages of students in output
container.innerHTML += `
<h1 class="top green">Average total : ${totalAvg}</h1>
<div class="top right">
<p><strong class="green">نفر اول کلاس</strong> : دانش آموز شماره ${students[0].id} میانگین: ${students[0].avg}</p>
<p><strong class="red">نفر آخر کلاس</strong> : دانش آموز شماره ${students[students.length - 1].id} میانگین: ${students[students.length - 1].avg}</p>
</div>`;
