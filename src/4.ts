// interface KeyTemplate{
//     signature: number
//     getSignature():number
// }

class Key {
    private signature: string;

    constructor() {
        // Генеруємо випадковий підпис для ключа
        this.signature = Math.random().toString(36).substring(7);
    }

    getSignature(): string {
        return this.signature;
    }
}


class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;

    constructor(key: Key) {
        this.key = key;
        this.door = false; // По замовчуванню двері закриті
    }

    abstract openDoor(key: Key): void;
    abstract comeIn(person: Person): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true; // Відкриваємо двері
            console.log('Двері відчинено.');
        } else {
            console.log('Невірний ключ. Двері залишаються закритими.');
        }
    }

    comeIn(person: Person): void {
        if (this.door) {
            console.log('Людина входить до будинку.');
        } else {
            console.log('Двері закриті. Людина не може ввійти.');
        }
    }
}
// Створюємо ключ, людину та будинок
const myKey = new Key();
const person = new Person(myKey);
const myHouse = new MyHouse(myKey);

// Відкриваємо двері та запрошуємо людину в будинок
myHouse.openDoor(myKey);
myHouse.comeIn(person);