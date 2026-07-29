__d(
  "WAWebUprPaymentRequestParams",
  ["WAWebUprConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.amount,
        n = e.currency,
        r = e.offset,
        a = e.paymentKeys,
        i = e.referenceId,
        l = {
          payment_type: o("WAWebUprConstants").UPR_PAYMENT_TYPE,
          type: "physical-goods",
          reference_id: i,
          currency: n,
          payment_settings: a.map(function (e) {
            return {
              type: o("WAWebUprConstants").UprPaymentSettingType
                .PAYMENT_ACCOUNT,
              payment_account: {
                account_type: e.accountType,
                identifier_type: e.identifierType,
                identifier_value: e.key,
                institution_name: e.institution_name,
                beneficiary_name: e.full_name_on_account,
              },
            };
          }),
        };
      return (t != null && (l.total_amount = { value: t, offset: r }), l);
    }
    l.buildUprPaymentRequestParams = e;
  },
  98,
);
