/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
let str=''
let carry=0
while(b.length<a.length){
    b='0'+b
}   
while(a.length<b.length){
        a='0'+a
}
for(let i = a.length-1; i >= 0; i--){
    if(a[i]=='1' && b[i]=='1'){
        if(carry==1){
            str='1'+str
        }else{
            str='0'+str 
        }
        carry=1
    }else if((a[i]=='1'&&b[i]=='0')||(a[i]=='0'&&b[i]=='1')){
        if(carry==1){
            str='0'+str   
        }else{
            str='1'+str
        } 
    }else if(a[i]=='0'&&b[i]=='0'){
        if(carry==1){
            str='1'+str
            carry=0
        }else{
            str='0'+str
        }
    }
}
if(carry==1) str='1'+str
return str   
};