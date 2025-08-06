1. The taskScheduler(tasks) function takes an array of task functions.
2. Each task accepts a done callback and only calls it when the task is complete.
3. The scheduler runs the first task.
4. When the task finishes (calls done()), the next task is triggered.
5. This continues until all tasks are completed.