const ARRAY_LENGTH = 7

function changeArray(arr, value) {
    //Редактирует поля с нагрузкой процессора и временем
       if (arr.length < ARRAY_LENGTH) {
            arr.push(value);
        } else {
            arr.shift();
            arr.push(value);
        }
}

let socket =new WebSocket('ws://localhost:8000/ws/polData/');
    socket.onopen =function(e){
        alert('Connection established');
    };

    socket.onmessage = function(e){
        var recData=JSON.parse(e.data);
        dataObjNew=dataObj['data']['datasets'][0]['data'];
        timeObjNew = dataObj['data']['labels'];
        changeArray(dataObjNew, recData.value);
        changeArray(timeObjNew, recData.time);
        dataObj['data']['datasets'][0]['data']=dataObjNew;
        dataObj['data']['labels'] = timeObjNew;
        window.myLine.update();


    };

    socket.onclose = function(e){
        alert('Connection CLosed');
    };