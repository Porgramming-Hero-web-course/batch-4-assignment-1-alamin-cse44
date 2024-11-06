{
  //

  type Circle = {
    shape: string;
    radius: number;
  };

  type Rectangle = {
    shape: string;
    width: number;
    height: number;
  };


  type MyShape = Circle | Rectangle;

  const calculateShapeArea = (param: MyShape):number => { 
    if (param.shape === "circle") {
      return Math.PI * Math.pow(param.radius, 2);
    } else if (param.shape === "rectangle") {
      return param.width * param.height;
    }
    else{
        return 0;
    }
    
    // if("radius" in param){
    //     return Math.PI * Math.pow(param.radius, 2);
    // }
    // else if("width" in param && "height" in param){
    //     return param.width * param.height;
    // }
  }
    
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea?.toFixed(2));

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);

 
  

  //
}
