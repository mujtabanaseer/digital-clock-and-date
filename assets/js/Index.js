// let a= new Date()
// let b=a.toLocaleDateString()
// console.log(b)
//----------------------------------------------------------------------------------------------------------------------
// const option={weekday:'long',year:'numeric',month:'long',day:'numeric'}
// let a = new Date()
// a.toLocaleDateString(undefined,option)
// setInterval(()=>{document.getElementById('date').innerText=a.toLocaleDateString(undefined,option),1000})
//----------------------------------------------------------------------------------------------------------------------
setInterval(()=>{document.getElementById('date').innerText=new Date().toLocaleString(),1000})
//----------------------------------------------------------------------------------------------------------------------
// setInterval(()=>{document.getElementById('date').innerText=new Date().toLocaleDateString(),1000})
//----------------------------------------------------------------------------------------------------------------------
// let a,date,time;
// setInterval(()=>{
//     a= new Date();
//     date=a.toLocaleDateString();
//     document.getElementById('date').innerText=date;
// },1000)
//----------------------------------------------------------------------------------------------------------------------
// timer: function () {
//     var currentDate = new Date;
//     var hours = currentDate.getHours();
//     var slot  = hours <=11 ? 'AM':'PM';
//     var minutes = currentDate.getMinutes();
//     var seconds = currentDate.getSeconds();
//     var current_time  =  [hours > 12 ? hours - 12 : hours,
//         (minutes < 10 ? "0" + minutes : minutes),
//         (seconds < 10 ? "0" + seconds : seconds)]
//         .join(':') + slot;
//     var dd = String(currentDate.getDate()).padStart(2, '0');
//     var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = currentDate.getFullYear();
//     var today = mm + '/' + dd + '/' + yyyy;
//     document.getElementById('date_span').innerHTML = today;
//     document.getElementById('time_span').innerHTML = current_time;
//     setTimeout(DashboardServer.timer, 1000);
// }
//----------------------------------------------------------------------------------------------------------------------