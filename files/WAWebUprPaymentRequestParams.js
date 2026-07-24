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
        l = e.paymentKey,
        s = e.referenceId,
        u = {
          payment_type: o("WAWebUprConstants").UPR_PAYMENT_TYPE,
          reference_id: s,
          currency: r,
          payment_settings: [
            {
              type: o("WAWebUprConstants").UprPaymentSettingType
                .PAYMENT_ACCOUNT,
              payment_account: {
                account_type: t,
                identifier_type: a,
                identifier_value: l.key,
                institution_name: l.institution_name,
                beneficiary_name: l.full_name_on_account,
              },
            },
          ],
        };
      return (n != null && (u.total_amount = { value: n, offset: i }), u);
    }
    l.buildUprPaymentRequestParams = e;
  },
  98,
);
