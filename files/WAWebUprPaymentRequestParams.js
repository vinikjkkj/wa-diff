__d(
  "WAWebUprPaymentRequestParams",
  ["WAWebUprConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.amount,
        n = e.currency,
        r = e.note,
        a = e.offset,
        i = e.paymentKeys,
        l = e.referenceId,
        u = {
          payment_type: o("WAWebUprConstants").UPR_PAYMENT_TYPE,
          type: "physical-goods",
          reference_id: l,
          currency: n,
          payment_settings: i.map(function (e) {
            return {
              type: o("WAWebUprConstants").UprPaymentSettingType
                .PAYMENT_ACCOUNT,
              payment_account: s(e),
            };
          }),
        };
      return (
        t != null && (u.total_amount = { value: t, offset: a }),
        r != null && (u.additional_note = r),
        u
      );
    }
    function s(e) {
      var t,
        n = {
          account_type: e.accountType,
          identifier_type: e.identifierType,
          identifier_value: e.key,
          institution_name: e.institution_name,
          beneficiary_name: e.full_name_on_account,
        };
      return (
        (t = e.additionalIdentifiers) != null &&
          t.length &&
          (n.additional_identifiers = e.additionalIdentifiers.map(function (e) {
            return { identifier_type: e.identifierType, value: e.value };
          })),
        n
      );
    }
    l.buildUprPaymentRequestParams = e;
  },
  98,
);
