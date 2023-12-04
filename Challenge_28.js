const handler = {
    get(target, property) {
      console.log(`Intercepting property access: ${property}`);
      return Reflect.get(target, property);
    },
    set(target, property, value) {
      console.log(`Intercepting property assignment: ${property} = ${value}`);
      return Reflect.set(target, property, value);
    }
  };
  
  const originalObject = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30
  };
  
  const proxyObject = new Proxy(originalObject, handler);
  
  console.log(proxyObject.name); 
  console.log(proxyObject.email); 
  
  proxyObject.age = 31; 
  proxyObject.address = "123 Main St"; 
  