## eve.js
> Simple event emitter

### Usage

```js
  var vnjs = new Eve();
  
  vnjs.on('alert', function (data){
    alert(data)
  });
  
  vnjs.emit('alert', "Hello world");

```
