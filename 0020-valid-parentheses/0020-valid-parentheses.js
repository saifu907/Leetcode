/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    arr=[]
    
    for(let i=0; i<s.length; i++){
    if(s[i]=='('||s[i]=='{'||s[i]=='['){
        arr.push(s[i])
    }
    else if(arr.length==0){
                return false
    }
    else if((s[i]==')'&& arr[arr.length-1]=='(')||(s[i]=='}' && arr[arr.length-1]=='{')||(s[i]==']' && arr[arr.length-1]=='[')){
        arr.pop()
    
        
    }else if(s[i]==')'||s[i]==']'||s[i]=='}'){
        return false
        
    }
   
    
}


return arr.length==0
};