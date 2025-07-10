let ans="" //here the ans are stored

for(let i=1;i<=5;i++){//here the rows are printed

    for(let j=1;j<=5;j++){ //here the coloumns are printed

        if(i===j){
            ans+="*"//it will print star at(0,0)(1,1)(2,2)(3,3)(4,4)(5,5)
        }
        else{
            ans+=j+""//for remaining it will print the numbers
        }
        
        
    }
    
ans+="\n" //after every row it will start in new line
}

console.log(ans.trim())// it will remove extra spaces

