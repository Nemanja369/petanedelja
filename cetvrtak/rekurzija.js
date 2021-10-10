function faktorial(x){
    if(x==0){
        return 1
    }
    return x * faktorial(x-1)
}
console.log(faktorial(3))