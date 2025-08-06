function taskScheduler(tasks){
    function runTask(index){
        if(index>=tasks.length)return;
        const task=tasks[index];

        task(()=>{
            runTask(index+1);
        });
    }
    runTask(0);
}

const task1=(done)=>{
    setTimeout(()=>{
        console.log("Task1 completed");
        done();
    },1000);
};
const task2=(done)=>{
    setTimeout(()=>{
        console.log("Task2 completed");
        done();
    },500);
};
const task3=(done)=>{
    setTimeout(()=>{
        console.log("Task3 completed");
        done();
    },200);
}
taskScheduler([task1, task2, task3]);
