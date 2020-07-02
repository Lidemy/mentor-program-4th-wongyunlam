function reverse(str) {
    var ans = ''
    for(i=str.length-1; i>=0; i--){
        ans += str[i]
    }
    console.log(ans)
    return ans
}

console.log(reverse('hello'));