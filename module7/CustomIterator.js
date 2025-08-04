function createIterator(start,end,step){
    let current=start;
    return{
        next:function(){
            if(current<=end){
                const value=current;
                current+=step;
                return {value,done:false};
            }
            else{
                return {done:true};
            }
        }
    }
}
function runIterator(iterator,callback){
    let result=iterator.next();
    while(!result.done){
        callback(result.value); 
        result=iterator.next();
    }
}

const myIterator=createIterator(1,10,2);
runIterator(myIterator,(val)=>{
    console.log(val);
});