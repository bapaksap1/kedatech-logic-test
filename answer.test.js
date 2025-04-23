const { sortingArray, sumOfArray, nestedObjectSum } = require("./answer");

describe("sortingArray", () => {
    test("sorts array in descending order", () => {
        expect(sortingArray([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
    });
});

describe("sumOfArray", () => {
    test("returns maximum subarray sum with given length", () => {
        expect(sumOfArray([100, 200, 300, 400], 2)).toBe(700);
        expect(sumOfArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
        expect(sumOfArray([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    });

    test("returns null if array is smaller than subarray length", () => {
        expect(sumOfArray([1, 2], 3)).toBeNull();
    });
});

describe("nestedObjectSum", () => {
    test("sums even numbers in nested object (case 1)", () => {
        const input = {
            outer: 2,
            obj: {
                inner: 2,
                otherObj: {
                    superInner: 2,
                    notANumber: true,
                    alsoNotANumber: "yup"
                }
            }
        };
        expect(nestedObjectSum(input)).toBe(6);
    });

    test("sums even numbers in nested object (case 2)", () => {
        const input = {
            a: 2,
            b: {b: 2, bb: {b: 3, bb: {b: 2}}},
            c: {c: {c: 2}, cc: 'ball', ccc: 5},
            d: 1,
            e: {e: {e: 4}, ee: 'car'}
        };
        expect(nestedObjectSum(input)).toBe(12);
    });
});
