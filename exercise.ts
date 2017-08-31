type MyBankAccountType = { money: number, deposit: (value: number) => void }; //custome type

let bankAccount: MyBankAccountType = {
    money: 2000,
    deposit(value): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: MyBankAccountType, hobbies: string[] } = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);