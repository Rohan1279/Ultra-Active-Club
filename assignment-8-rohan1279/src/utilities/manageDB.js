// use local storage to manage cart data
const addToDb = duration =>{
    let selectedActivity = {};

    //get the shopping cart from local storage
    const storedActivity = localStorage.getItem('selected-break-time');
    if(storedActivity){
        selectedActivity = JSON.parse(storedActivity);
    }
    // // add quantity
    // const quantity = selectedActivityList[id];
    // if(quantity){
    //     const newQuantity = quantity + 1;
    //     selectedActivityList[id] = newQuantity;
    // }
    // else{
    //     selectedActivityList[id] = 1;
    // }

    localStorage.setItem('selected-break-time', JSON.stringify(duration));
}

const getStoredList = () => {
    let selectedActivityList = {};

    //get the shopping cart from local storage
    const storedActivityList = localStorage.getItem('shopping-cart');
    if(storedActivityList){
        selectedActivityList = JSON.parse(storedActivityList);
    }
    return selectedActivityList;
}


export {
    addToDb,
    getStoredList
}