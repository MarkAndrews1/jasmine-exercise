
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 15000,
    years: 10,
    rate: 5
  }
  expect(calculateMonthlyPayment(values)).toEqual('159.10')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100000,
    years: 30,
    rate: 90
  }
  expect(calculateMonthlyPayment(values)).toEqual('7500.00')
});


