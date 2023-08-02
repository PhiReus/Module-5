console.log("Hello, World!");

class HCN {
    a: number;
    b: number;

    constructor(a: number, b:number){
        this.a = a;
        this.b = b;
    }
    getCV(): number {
        return (this.a + this.b) * 2;
    }
    getArea(): number {
        return this.a * this.b;
    }
    toString(): void {
        console.log(`HCN co chiều dài : ${this.a} và chiều rộng : ${this.b}`);
    }
}

let hcn = new HCN(20,10);
hcn.toString()
// console.log(hcn.toString());


