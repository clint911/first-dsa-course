type Node<T> = {
  value: T,
  next?: Node<T>;
}

export default class Queue<T> {
  //a property
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;
  //default noargs constructor
  constructor(){
    this.head = this.tail = undefined;
    this.length = 0;
  }
  //class methods
  //adding an item to a queue
  enqueue(item: T): void {
    const node =  { value: item} as Node<T>;
    this.length++;
    //if tail does not exist, create a new node
    if(!this.tail) {
      this.tail = this.head  = node;
      return;
    }
        this.tail.next = node;
        this.tail = node;
  }

  //removing item from the queue
  deque(): T | undefined {
    if(!this.head) {
          return undefined;
      }
      this.length --;

      const head = this.head;
      this.head = this.head.next;

      //you can do some memory ops in some languages without  a garbage collector
      head.next = undefined;

      if(this.length === 0) {
        this.tail = undefined;
      }
      return head.value;
  }

  //Taking a look at an item that is in the queue, think of it like a traversal
  peek(): T | undefined {
      return this.head?.value;
  }



}
