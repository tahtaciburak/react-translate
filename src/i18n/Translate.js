import tr from './tr';
import en from './en';

export default {
    translate: function(key,extras){
        let splittedKeys = key.split('.');
        
        let target = en; // set your langugage

        splittedKeys.forEach(element => {
            target = target[element];      
        });
        
        if(typeof target === "undefined"){
            return key
        }else if(typeof extras !== "undefined"){
            extras.forEach(element => {
                target = target.replace("%s",element);
            });
        }
        
        return target;
    },
};