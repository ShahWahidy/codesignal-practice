//=========Problem 1 ==========//

Given three values, return a new linked list containing those values.

You have to wrap the values into ListNode() objects.

function solution(a, b, c) {
    let aNode = new ListNode(a)
    let bNode = new ListNode(b)
    let cNode = new ListNode(c)
    
    aNode.next = bNode
    bNode.next = cNode
    
    return aNode
}

//=========Problem 2 ==========//

Given a list, return length of the list--i,e, the number of nodes in the list.

function solution(head) {
    let counter = 0; 
    while(head) {
        counter++
        head = head.next
    }
    return counter
}
//=========Problem 3 ==========//

Given a list, return the sum of all the values in the list.

function solution(head) {
    let total = 0;
    
    while(head) {
        total = total + head.value
        head = head.next
    }
    return total
}
//=========Problem 4 ==========//

Given a list, return the value of the tail node in the list.

If the input list is empty, return -9999.

function solution(a) {
    if(!a) return -9999
    while(a){
        if(!a.next) return a.value
        a = a.next
    }
}
//=========Problem 5 ==========//

Insert a new value at the head of a linked list.

You have to wrap the value n into a ListNode() object.

function solution(n, a) {
    let newNode = new ListNode(n)
    newNode.next = a;
    return newNode
}
//=========Problem 6 ==========//

Given a list and a value, append the value to the end of the list.

function solution(a, n) {
    let newNode = new ListNode(n)
    if(!a) return newNode
    let newList = a
    
    while(a){
        if(!a.next){
            a.next = newNode
            break; 
        } 
      a = a.next
    }
    return newList
}
