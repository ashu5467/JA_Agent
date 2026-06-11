import sum from "./sum.js";


describe("tests for sum",() =>{
    test("add 2+2 equal to 4",()=>{
        expect(sum(2,2)).toBe(4)
    })
    test("add 2+5 equuals to 7",()=>{
        expect(sum(2,5)).toBe(7)
    })
})
