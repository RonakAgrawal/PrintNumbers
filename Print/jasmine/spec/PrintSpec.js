describe( "Print Numbers", function () {
    
    it("Numbers divisible by both 3 and 5", function () {
        expect(print(150)).toEqual('Xpirit');
    });

    it("Numbers divisible by 3", function () {
        expect(print(153)).toEqual('Xpi');
    });

    it("Numbers divisible by 5", function () {
        expect(print(155)).toEqual('rit');
    });
	
    it("Numbers neither divisible by 3 and 5", function () {
        expect(print(157)).toEqual(157);
    });

  });

    