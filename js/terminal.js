ip = "http://13.232.240.65:80"
path = "cgi-bin/kube.py"

function showImages(){
    var xhrRequest = new XMLHttpRequest();
    cmd = 'docker images'
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}

function showPods(){
    cmd = 'kubectl get pods'
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}

function deleteImage(){
    imgname = document.getElementById('imgname').value;
    cmd = `docker rmi -f ${imgname}`
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}
function downloadImage(){
    imgname = document.getElementById('imgname').value;
    cmd = `docker pull ${imgname}`
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}

function runPod(){
    contname = document.getElementById('contname').value;
    imgname = document.getElementById('cimgname').value;
    if(contname==null){
        cmd = `kubectl run --image=${imgname}`
    }
    else{
        cmd = `kubectl run ${contname} --image=${imgname}`
    }
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}
function delPod(){
    contname = document.getElementById('contname').value;
    cmd = `kubectl delete pod ${contname}`;
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}

function runCommand(){
    cmd = document.getElementById('command').value;
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}