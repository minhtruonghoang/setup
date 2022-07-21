// Design generic data model for a generic TODO management system
// A todo item could be one of many variations, for example LegalTodo, WorkTodo, PersonalTodo
// Legal, Work, Personal each has its own characteristic and methods
// The system should be able to manage those todo items, with features such as
// - counting total, pending, completed items.
// - Add/remove/update those item.
// - Queue of todo item to process in sequel (configurable)
// for example:
// - TodoSytem(2); TodoSystem.nextItem() -> [LegalTodo, WorkTodo];
// - TodoSytem.work() -> Work on nextItems and return result after all those items finished.

// Try to integrate this system with React application without using external library.
// For example: calling TodoIte

const delay = (time) = >{
    return new Promise(res=>{
        setTimeout(()=>res("hello"))
    })
}