let socket =new WebSocket('ws://localhost:8000/ws/polData/');
    socket.onopen =function(e){
        alert('Connection established');
    };

    socket.onmessage = function(e){
        console.log(e.data);
        var recData=JSON.parse(e.data);
        dataObjNew=dataObj['data']['datasets'][0]['data'];
        dataObjNew.shift();
        dataObjNew.push(recData.value);
        dataObj['data']['datasets'][0]['data']=dataObjNew;
        window.myLine.update();

    };

    socket.onclose = function(e){
        alert('Connection CLosed');
    };