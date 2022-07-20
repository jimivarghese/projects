var screen=document.getElementById('screen');
function btnClick(value)
{
    screen.value+=value;
}

function clearScreen()
{
    screen.value='';
}

function result()
{
    try{

   
    var output=eval(screen.value);
    screen.value=output;
    }
    catch(err)
    {
        alert('invalid');
    }
}
function del()
{
    screen.value=screen.value.slice(0,-1);
}