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

    const getProperty = <T, K extends keyof T>(person: T, key: K): T[K] => {
        return person[key];
    }

    console.log(getProperty(person, "name"))



    //
}