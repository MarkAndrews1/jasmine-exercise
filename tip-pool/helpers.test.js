describe("Shift test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 150;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });
  
    it('should add up all tips amount on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
        billAmtInput.value = 150;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(20)
    });
  
    it('should add up all sum amount on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(150);
        billAmtInput.value = 150;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(300)
    })

    it('should add up total tip percent on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(7);
        billAmtInput.value = 150;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(14);
      });

      it('should generate delete td and append to tr on appendDeleteBtn', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });

    afterEach(function() {
        billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
    paymentId = 0;
    });
  });
  