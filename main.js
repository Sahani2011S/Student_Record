friends_array=[]
function submit(){
    var friend1=document.getElementById("name_of_the_student_1").value;
    var friend2=document.getElementById("name_of_the_student_2").value;
    var friend3=document.getElementById("name_of_the_student_3").value;
    var friend4=document.getElementById("name_of_the_student_4").value;
    var friend5=document.getElementById("name_of_the_student_5").value;
    var friend6=document.getElementById("name_of_the_student_6").value;

    console.log(friend4)
    friends_array.push(friend1);
    friends_array.push(friend2);
    friends_array.push(friend3);
    friends_array.push(friend4);
    friends_array.push(friend5);
    friends_array.push(friend6);
    console.log(friends_array);
    document.getElementById("Student_Details").innerHTML= friends_array;
}
