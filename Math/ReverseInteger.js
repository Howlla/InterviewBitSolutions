module.exports = { 
 //param A : integer
 //return an integer
    reverse : function(A){  
         var sign;
        sign = (A>=0)?1:-1;
       return parseInt(A.toString().split('').reverse().join(''))* sign;
        
    }
};
