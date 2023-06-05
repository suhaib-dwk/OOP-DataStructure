class BankAccount {
    constructor(accountNumber, balance) {
        this._accountNumber = accountNumber;
        this._balance = balance;
    }

    get accountNumber() {
        return this._accountNumber;
    }

    get balance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
        print(`Deposited ${amount}. New Balance ${this._balance}`)
    }

    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this._balance}`);
        } else {
            console.log("Insufficient balance");
        }
    }
}

const account = new BankAccount("1236554", 1000);

print(account._accountNumber);
print(account._balance);

account.deposit(500);
account.withdraw(200);
account.withdraw(2000);