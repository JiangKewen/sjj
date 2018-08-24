// import Rx from 'rxjs/Rx';
var Rx = require('rxjs/Rx');
console.log(Rx, "Rx")
// Rx.Observable.of(1, 2, 3)

// var button = document.querySelector('button'); // 创建一个ovservable
// Rx.Observable.fromEvent(button, 'click')
//   .subscribe(() => console.log('Clicked!'));

// var button = document.querySelector('button'); // 纯净的函数purity
// Rx.Observable.fromEvent(button, 'click')
//   .scan(count => count + 1, 0)
//   .subscribe(count => console.log(`Clicked ${count} times`));

// var button = document.querySelector('button'); // RxJS 提供了一整套操作符来帮助你控制事件如何流经 observables 
// Rx.Observable.fromEvent(button, 'click') 
//   .throttleTime(1000)
//   .scan(count => count + 1, 0)
//   .subscribe(count => console.log(`Clicked ${count} times`));// 其他流程控制操作符有 filter、delay、debounceTime、take、takeUntil、distinct、distinctUntilChanged 等等。

// var button = document.querySelector('button'); // 对于流经 observables 的值，你可以对其进行转换
// Rx.Observable.fromEvent(button, 'click')
//   .throttleTime(1000)
//   .map(event => event.clientX)
//   .scan((count, clientX) => count + clientX, 0)
//   .subscribe(count => console.log(count)); // 其他产生值的操作符有 pluck、pairwise、 sample 等等。

// var observable = Rx.Observable.create(function (observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   setTimeout(() => {
//     observer.next(4);
//     observer.complete();
//   }, 1000);
// });

// console.log('just before subscribe');
// observable.subscribe({
//   next: x => console.log('got value ' + x),
//   error: err => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });
// console.log('just after subscribe');