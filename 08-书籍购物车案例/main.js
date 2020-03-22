const app=new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1,
      },
      {
        id: 2,
        name: '《unix编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1,
      },
      {
        id: 3,
        name: '《Java编程思想》',
        date: '2008-10',
        price: 39.00,
        count: 1,
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 189.00,
        count: 1,
      },
    ]
  },
  methods: {
    /*getFinalPrice(price){
      return '￥'+ price.toFixed(2);
    }*/
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeClick(index) {
      this.books.splice(index,1);
    }
  },
  computed: {
    totalPrice() {
      //1.
      /*let totalPrice=0;
      for (let i=0;i<this.books.length;i++){
        totalPrice+=this.books[i].price * this.books[i].count
      }
      return totalPrice;*/

      //2.for(let i in this.books)
      /*let totalPrice=0;
      for (let i in this.books){
        totalPrice+=this.books[i].price * this.books[i].count
      }
      return totalPrice;*/

      //3.for(let item of this.books)
      /*let totalPrice=0;
      for (let item of this.books){
        totalPrice+=item.price * item.count
      }
      return totalPrice;*/
      //高阶函数的使用
      return this.books.reduce(function (preValue,book) {
        return preValue+book.price * book.count
      },0)
    }
  },
  filters: {
    showPrice(price){
      return '￥'+ price.toFixed(2);
    }
  }
})


//高阶函数的使用：filter/map/reduce
//1.filter：回调函数有一个要求，返回值必须是一个Boolean值
//当为true时，函数内部会自动将这次回调的n加入到数组中
//当为false时，函数就会过滤掉这个n

const nums = [10,20,40,111,222,333,50];

let totals = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue,n) => preValue + n);
console.log(totals);

let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue,n) {
  return preValue + n
},0);

console.log(total);