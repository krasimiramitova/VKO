

function GetTime() {
    let time = new Date();
    let clickTime = `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} ${time.toLocaleTimeString()}`;
    console.log(clickTime);
    return ( clickTime );
}

export default GetTime;