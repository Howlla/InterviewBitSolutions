module.exports = { 
 //param A : integer
 //return a array of integers
    primesum : function(A){
        //seive of erathones
        if(A%2!=0){
            return false;
        }
        var arr= new Array(A+1)
        var ans= new Array()
        for(var i=0;i<A;i++){
            arr[i]=true
        }
        for(var p=2;p*p<=A;p++){
            if(arr[p]==true){
                for(var i = p*p; i <= A; i += p) 
                    arr[i] = false; 
            }
        }
     for(var i = 2; i <= A; i++) 
        { 
            if(arr[i] == true) {
                if(arr[A-i]==true)
                {
                    ans.push(i)
                    ans.push(A-i)
                }
            }
                
        } 
        return ans.slice(0,2)
    } 
    
};
