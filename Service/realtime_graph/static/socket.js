let socket =new WebSocket('ws://localhost:8000/ws/polData/');
    socket.onopen =function(e){
        alert('Connection established');
    };

    socket.onmessage = function(e){
        console.log(dataObj);
        var recData=JSON.parse(e.data);
        dataObjNew=dataObj['data']['datasets'][0]['data'];
        timeObjNew = dataObj['data']['labels'];
        console.log(dataObjNew);
        if (dataObjNew.length < 7) {
            dataObjNew.push(recData.value);
        } else {
            dataObjNew.shift();
            dataObjNew.push(recData.value);
        }

        if (timeObjNew.length < 7) {
            timeObjNew.push(recData.time);
        } else {
            timeObjNew.shift();
            timeObjNew.push(recData.time);
        }


        dataObj['data']['datasets'][0]['data']=dataObjNew;
        dataObj['data']['labels'] = timeObjNew;
        console.log(dataObj);
        window.myLine.update();


    };

    socket.onclose = function(e){
        alert('Connection CLosed');
    };