$(document).ready(function () {
  $("#btn12").click(function () {
    myFunction();

  });
});

function myFunction() {
  let str1 = $("#a1").val();
  localStorage.setItem('inp1', str1);
  let str2 = $("#a2").val();
  localStorage.setItem('inp2', str2);


  if (document.getElementById("a3").checked) {
    var str3 = document.getElementById("a3").value;
    localStorage.setItem("inp3", str3);
  }
  else if (document.getElementById("a11").checked) {
    var str3 = document.getElementById("a11").value;
    localStorage.setItem("inp3", str3);
  }
  else {
    var str3 = "yes";
    localStorage.setItem("inp3", str3);
  }
  let str4 = $("#a4").val();
  localStorage.setItem('inp4', str4);
  let str5 = $("#a5").val();
  localStorage.setItem('inp5', str5);
  let str6 = $("#a6").val();
  localStorage.setItem('inp6', str6);
  let str7 = $("#a7").val();
  localStorage.setItem('inp7', str7);
  let str8 = $("#a8").val();
  localStorage.setItem('inp8', str8);
  let str9 = $("#a9").val();
  localStorage.setItem('inp9', str9);
  let str10 = $("#a10").val();
  localStorage.setItem('inp10', str10);
}

  $(".tiger").html(localStorage.getItem('inp1'));
  $(".lion").html(localStorage.getItem('inp2'));


$(".yes").html(localStorage.getItem('inp3'));
$(".quick").html(localStorage.getItem('inp4'));
$(".alarm").html(localStorage.getItem('inp5'));
$(".dog").html(localStorage.getItem('inp6'));
$(".exam").html(localStorage.getItem('inp7'));

$(".two").html(localStorage.getItem('inp9'));
$(".msg1").html(localStorage.getItem('inp10'));





