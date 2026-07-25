__d(
  "WAWebUprPaymentRequestParams",
  ["WAWebUprConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.accountType,
        n = e.amount,
        r = e.currency,
        a = e.identifierType,
        i = e.offset,
        l = e.paymentKeys,
        s = e.referenceId,
        u = {
          payment_type: o("WAWebUprConstants").UPR_PAYMENT_TYPE,
          reference_id: s,
          currency: r,
          payment_settings: l.map(function (e) {
            return {
              type: o("WAWebUprConstants").UprPaymentSettingType
                .PAYMENT_ACCOUNT,
              payment_account: {
                account_type: t,
                identifier_type: a,
                identifier_value: e.key,
                institution_name: e.institution_name,
                beneficiary_name: e.full_name_on_account,
              },
            };
          }),
        };
      return (n != null && (u.total_amount = { value: n, offset: i }), u);
    }
    l.buildUprPaymentRequestParams = e;
  },
  98,
);
