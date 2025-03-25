function generateGreeting(user) {
    const { name} = user;
    const { age } = user;
    const { city } = user;
    return `Hello, my name is ${name}, I'm ${age} years old and I live in ${city}.`;
}

console.log(generateGreeting({ name: "Alice" , age: 30, city: "New York" }));
