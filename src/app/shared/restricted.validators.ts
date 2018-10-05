import {FormControl} from '@angular/forms';

export function restrictWords(words){   
    return (control:FormControl): {[key:string]:any}=>{
        if(!words) return null

        var inValidWords=words
           .map(w=>control.value.includes(w) ? w:null)
           .filter(w=>w!=null)
        
        return inValidWords && inValidWords.length>0 
            ?{'restrictWords':inValidWords.join(', ')}
            :null


    }
}