import { sum } from "../sum"
import "@testing-library/jest-dom"

test("Calculate sum of two nums", () => {
    const result = sum(3, 4);

    //Assertion
    expect(result).toBe(7);

})