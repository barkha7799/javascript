function cur_date()
{
var today=new Date();
var dd=today.getDate();
var mm=today.getMonth()+1;
var yy=today.getFullYear();
if( dd<10)
{
dd='0'+dd;
}
if(mm<10)
{
mm='0'+mm;
}
today = mm+'/'+dd+'/'+yyyy;
document.write(today);
today=mm+'-'+dd+'-'+yyyy;
document.write(today);
today=`${dd}-${mm}-${yyyy}`;
document.write(today);
today=`${dd}/${mm}/${yyyy}`;
document.write(today);
today = mm+'-'+add+'-'+yyyy;
document.write(today);
}
