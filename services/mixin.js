export const observerMixin = { 
    addObserver(obs){
        this.observers.add(obs);
    },
    removeObserver(obs){
        this.observers.delete(obs);
    },
    notify(){
    //separar por funcionalidad
        this.observers.forEach((obs)=> obs());
    },
};