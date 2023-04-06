let data=[];
let currentSize = data.length;
let maxSize = 5;
function push(newVal){
    if(currentSize>=maxSize){
        console.log("Stack is Full");
    }
    data[currentSize]=newVal;
    currentSize++;
}

function pop(){
    if(currentSize>0){
        currentSize--;
        data.length=currentSize;
    }else{
        console.log("Stack is already Empty");
    }
}

function Peek(){
    if(currentSize>0){
        console.log(data[currentSize-1]);
    }else{
        console.log("Stack is Empty");
    }

}

function size(){
    if(currentSize>0 && currentSize<=maxSize){
        console.log("Size of the Stack is"+ currentSize);
    }else{
        console.log("Stack is empty");
    }
}

function isEmpty(){     
    if(currentSize>0 && currentSize<=maxSize){
        console.log("Stack is not empty");
    }
    else if(currentSize === 0){
        console.log(
            "Stack is Emplty"
        );
    }
}

function clear(){
    if (currentSize===0){
        console.log("Stack is already Cleared");
    }
    else{
        currentSize = 0;
        console.log("Stack is Cleared");
    }
}
