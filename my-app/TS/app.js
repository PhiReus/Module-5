console.log("Hello, World!");
var HCN = /** @class */ (function () {
    function HCN(a, b) {
        this.a = a;
        this.b = b;
    }
    HCN.prototype.getCV = function () {
        return (this.a + this.b) * 2;
    };
    HCN.prototype.getArea = function () {
        return this.a * this.b;
    };
    HCN.prototype.toString = function () {
        console.log("HCN co chi\u1EC1u d\u00E0i : ".concat(this.a, " v\u00E0 chi\u1EC1u r\u1ED9ng : ").concat(this.b));
    };
    return HCN;
}());
var hcn = new HCN(20, 10);
hcn.toString();
// console.log(hcn.toString());
