import sum from "./sum.js";


describe("tests for sum",() =>{
    test("add 2+2 equal to 4",()=>{
        expect(sum(2,2)).toBe(4)
    })
    test("add 1+5 equuals to 6",()=>{
        expect(sum(1,5)).toBe(6)
    })
})
