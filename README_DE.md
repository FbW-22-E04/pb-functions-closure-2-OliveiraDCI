# JS Closures / Scoping Übungen

1. Was ist das Ergebnis, wenn du diesen Code ausführst und warum?
  ```
  function test() {
    let a;
    console.log(a);
    console.log(foo());
     
    a = 1;
    function foo() {
       return 2;
    }
  }
  
  test();
  ```

2. Was ist das Ergebnis?
  ```
  let a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  const firstResult = someFunction(9);
  const result = firstResult(2);
  ```

3. Was ist das Ergebnis des folgenden Codes? Erkläre deine Antwort.
  ```
  let fullname = 'John Doe';
  const obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  const test = obj.prop.getFullname;
  
  console.log(test());
  ```

4. Was siehst du in der Konsole für das folgende Beispiel?
  ```
  let a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  console.log(a);    
