import { interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/bufferwhen
// Example 1: Emit buffer based on interval

//emit value every 1 second
const oneSecondInterval = interval(1000);
//return an observable that emits value every 3 seconds
const fiveSecondInterval = () => interval(3000);
//every five seconds, emit buffered values
const bufferWhenExample = oneSecondInterval.pipe(
  bufferWhen(fiveSecondInterval)
);
// output: [0,1,2,3]...[4,5,6,7,8]
const subscribe = bufferWhenExample.subscribe((val) =>
  console.log('Emitted Buffer: ', val)
);
