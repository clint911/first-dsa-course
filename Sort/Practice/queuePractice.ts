type Node<T> = {
  value: T,
  next?: Node<T>;
}
export default class Queue<T>  {
  //props
  private length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor(){
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const Node = { value: item } as Node<T>;
    this.length ++;
    //if tail does not exist, create a new node
    if(!this.tail) {
      this.tail = this.head = Node;
      return;
    }
    this.tail.next = Node;
    this.tail = Node;

  }

  dequeue(): T | undefined  {
  if (!this.head) {
    return undefined;
  }
  this.length --;

  const head = this.head;
  this.head = this.head.next;

  //deallocating memory as we would do in some languages
   head.next = undefined;

   if(this.length === 0) {
     this.tail= undefined;
   }

   return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;

  }
}
