var no =0
for(var i=0;i<1000000000;i++){
        no =i
}
//when this thread has finsihed execution it should inform main thread
postMessage(no)