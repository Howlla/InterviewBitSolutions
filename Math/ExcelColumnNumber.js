module.exports = { 
 //param A : string
 //return an integer
    titleToNumber : function(A){
    A = A.toLowerCase().split("").reverse();
    var length = A.length;
    var colNum =A.reduce(function(sum,el,index){
       return sum + module.exports.returnValue(el)*Math.pow(26,index)
    },0)
    return colNum;
    },
    returnValue: function(A){
        return A.charCodeAt(0)-96;
    }
};
