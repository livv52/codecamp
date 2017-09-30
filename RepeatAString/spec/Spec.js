describe("Program", function() {

    it("should be equal", function() {

        var program = new Program();

        // Write your testcases here 
        expect(program.myFunc("abc", 3)).toBe("abcabcabc");
    });
});