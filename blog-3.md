# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Type gurads are very important in our code that specify our types in the function. The important thing is that when we pass one or more values to a function and expect a calculative result, type guards can be used to check the properties as they are exactly correct types or not. Many times, we pass wrong values to a function that's why we face different kinds of errors. To solve this, type guards are extremely useful. 

### Types of type guards: 

There two types of type guards, one is "typeof" type and anotherone is "in" type. Both the types of type guards can be used in a function for checking the general properties and object properties. We can use the "typeof" guard to check the single property in a function and the "in" type guard to check the object properties.

### typeof guard: 
Here are examples of a typeof type.

const add1 = (param1: number, param2: number): number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
        return 0;
    }
  };

  const result1 = add1(2, 3);
  console.log(result1);

  Here, add1 function receives two arguments param1 and param2 and returns the result of the sum of the two arguments. The result is also number type. To ensure that the arguments are the number type the typeof guard is used to check. If any argument is not a number then the function returns 0. So, here we are sure that only for the number type arguments we will get the result otherwise we will get the result as zero.

  However, sometimes we need to use the same function to return the result as string and also arguments need to be the same. In this case we can can use union whether the arguments are strings or numbers. Take a look in another example: 

  type Alphaneumeric = string | number;

  const add2 = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add2(2, 3);
  const result2 = add2("2", "3");
  console.log(result1);
  console.log(result2);

  Here, we use the same function for the different types of parameters. For the numbers, we will get the result of 5, which will be the 23 for the string parameters. So, to pass the parameters we won't face any confusion.

  ### in guard: 

  Basically, we use "in" type guard to check the properties of an object. Here is an example of the "in" gurad: 

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };


  type MyShape = Circle | Rectangle;

  const calculateShapeArea = (param: MyShape):number => { 

    if("radius" in param){
         return Math.PI * Math.pow(param.radius, 2);
    }
    else if("width" in param && "height" in param){
         return param.width * param.height;
    }else{
        return 0;
    }
  }
    
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea.toFixed(2));

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);

  Here, we can see that type Cirlce has two properties while Rectangle type has three properties. To calculate the circleArea and rectangleArea we use the same function here. At this time, we use "in" guard to check the properties of the rectangle and circle object. Thus we get the exact result of our shape.