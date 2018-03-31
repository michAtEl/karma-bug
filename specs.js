describe('dut', function () {
    fit('hello returns hello', function () {
        expect(hello()).toEqual('hello');
    });

    it('bye returns bye', function () {
        // This test fails if it runs
        expect(2).toEqual(1);

        expect(bye()).toEqual('bye');
    });
});