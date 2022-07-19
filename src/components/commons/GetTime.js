

function GetTime() {
    let time = new Date();
    let clickTime = `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} ${time.toLocaleTimeString()}`;

    return ( clickTime );
}

export default GetTime;