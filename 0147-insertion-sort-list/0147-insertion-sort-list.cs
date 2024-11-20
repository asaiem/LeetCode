/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode InsertionSortList(ListNode head) {
        //check the head
        if (head == null) return null;
        // create list to add what inside the linked list on it
       List<int> list = new List<int>();

        for(int i = 0; head != null; i++){
             list.Add(head.val);
            head = head.next;
        }
        //implement insertation sort in the list
        for(int i = 1; i< list.Count; i++){
            var key = list[i];
            int j;
            for(j = i - 1; j>= 0; j--){
                if(list[j] > key){
                    list[j+1] = list [j];
                }
                else{
                    break;
                }
            }
            list[j+1] = key;
        }

        // create new linked list to return it back sorted
        ListNode resultHead = null;
        ListNode current = null;

        for(int i = 0; i< list.Count; i++){
            if(resultHead == null){
                resultHead = new ListNode(list[i]);
                current = resultHead;
            } else{
                current.next = new ListNode(list[i]);
                current = current.next; 
            }
           
        }

        return resultHead;
    }
}