document.getElementById('todo1').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText1");
  
  if (this.checked)
  {
    textTodo.innerHTML = " Không ăn 3 điểm giữa kỳ<del>không</del>";
  }
  else
  {
    textTodo.innerHTML = " ăn 3 điểm giữa kỳ";
  }
}


document.getElementById('todo2').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText2");

  if (this.checked)
  {
    textTodo.innerHTML = "Tiết kiệm 200.000<del>.000</del>";
  }
  else
  {
    textTodo.innerHTML = "Tiết kiệm 200.000.000";
  }
}

document.getElementById('todo3').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText3");

  if (this.checked)
  {
    textTodo.innerHTML = "Thay ốp điện thoại mới";
  }
  else
  {
    textTodo.innerHTML = "Thay điện thoại mới";
  }
}

document.getElementById('todo4').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText4");

  if (this.checked)
  {
    textTodo.innerHTML = "<del>u</del> Già";
  }
  else
  {
    textTodo.innerHTML = "Giàu";
  }
}

document.getElementById('todo5').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText5");

  if (this.checked)
  {
    textTodo.innerHTML = "Sống <del>cuộc sống an nhàn</del>";
  }
  else
  {
    textTodo.innerHTML = "Sống cuộc sống an nhàn";
  }
}
