describe("Payment test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 150;
        tipAmtInput.value = 10;
    });
  
    it('should add a payment to allPayments', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
    });
  
    it('should not add a payment to allPayments when the input is empty ', function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it('should create a new payment with createCurPayment()', function() {
        let payment = {
            billAmt: '150',
            tipAmt: '10',
            tipPercent: 7,
        }
            expect(createCurPayment()).toEqual(payment)
    })

    it('should not create a new payment with createCurPayment() when empty inputs', function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
            expect(createCurPayment()).toEqual(undefined)
    })
  
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
    });
  });