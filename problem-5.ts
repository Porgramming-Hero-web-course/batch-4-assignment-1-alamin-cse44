{
    //

    type Person = {
        name: string;
        age: number;
    }

    const person: Person = {
        name: "Alice",
        age: 30
    };

    // constraints for requering the name
    const getProperty = <T extends {name: string}, K extends keyof T>(person: T, key: K): T[K] => {
        return person[key];
    }

    console.log(getProperty(person, "name"));
    console.log(getProperty({name: "x", address: "x-home"}, "address"));
    console.log(getProperty({name: "y",age: 40, address: "y-home"}, "age"));



    //
}