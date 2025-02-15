// Bank Management System
// DECI Monthly Session 2: Room 2
// Feb 2025

// Used for client addresses
class Address {
    constructor(city, street, buildingNumber, apartmentNumber) {
        this.city = city;
        this.street = street;
        this.buildingNumber = buildingNumber;
        this.apartmentNumber = apartmentNumber;
    }
}

class BankAcc {
    constructor(name, age, balance, address) {
        this.name = name;
        this.age = age;
        this.balance = balance;
        this.address = address;
    }

    // Log account owner name and balance
    accountInfo() {
        console.log("-------------------------------");
        console.log(`Name: ${this.name}`);
        console.log(`Balance: $${this.balance}`);
        console.log("-------------------------------");
    }

    // Add amount to account balance
    addAmount(amount) {
        this.balance += amount;
    }

    // Deposit money into account
    deposit(amount) {
        new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, amount);
        }).then((amount) => {
            this.addAmount(amount);
            console.log("-------------------------------");
            console.log(`$${amount} has been deposited successfully.`);
            console.log(`Balance: $${this.balance}.`);
            console.log("-------------------------------");
        });
    }

    // Check if amount can be withdrawn from account
    balanceCompare(amount) {
        console.log("Checking balance...");
        return this.balance >= amount;
    }

    // Withdraw money from account
    async withdraw(amount) {
        let isBalanceValid = this.balanceCompare(amount);

        // Wait 1000ms to simulate actual banking
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        });

        console.log("-------------------------------");
        // Check if amount can be withdrawn
        if (isBalanceValid) {
            this.balance -= amount;
            console.log(`$${amount} has been withdrawn successfully.`);
            console.log(`Balance: $${this.balance}.`);
        }
        else {
            console.log("You don't have enough money.");
        }
        console.log("-------------------------------");
    }
}

const address = new Address("New York", "Potato St.", 23, 5);
const bankAcc = new BankAcc("Youssef", 16, 2000, address);

bankAcc.withdraw(2000);