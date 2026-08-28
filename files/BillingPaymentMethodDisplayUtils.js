__d(
  "BillingPaymentMethodDisplayUtils",
  [
    "fbt",
    "BillingPaymentMethodDisplay",
    "BillingPaymentMethodDisplayUtilsQuery.graphql",
    "BillingPaymentMethodDisplayUtils_paymentCredential.graphql",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("BillingPaymentMethodDisplayUtilsQuery.graphql")),
      d =
        u !== void 0
          ? u
          : (u = n(
              "BillingPaymentMethodDisplayUtils_paymentCredential.graphql",
            ));
    function m(e, t) {
      return e.fetchQuery({
        query: c,
        queryName: c.params.name,
        variables: { paymentMethodID: t },
      });
    }
    function p(e, t) {
      return (
        t === void 0 && (t = !1),
        _(e == null ? void 0 : e.node, void 0, t)
      );
    }
    function _(e, t, n) {
      n === void 0 && (n = !1);
      var r = o("RelayHooks").readInlineData(d, e);
      switch (r == null ? void 0 : r.__typename) {
        case "ExternalCreditCard":
          return o("BillingPaymentMethodDisplay").getCreditCardDisplay(
            r.card_association_name,
            r.last_four_digits,
            n,
          );
        case "PaymentPaypalBillingAgreement":
          return o("BillingPaymentMethodDisplay").getPayPalDisplay(r.email);
        case "DirectDebit":
          return o("BillingPaymentMethodDisplay").getBankDisplay(
            r.bank_name,
            r.bank_account_type,
            r.last_four_digits,
          );
        case "ExtendedCredit":
        case "MonthlyInvoicing":
        case "SharedMonthlyInvoicing":
          return o("BillingPaymentMethodDisplay").getMonthlyInvoicingDisplay(
            r.legal_entity_name,
            r.partition_from,
          );
        case "StoredBalance":
          if (r.stored_balance_type === "BUSINESS_LEVEL") {
            var a;
            return o(
              "BillingPaymentMethodDisplay",
            ).getSharedStoredBalanceDisplay(
              (a = r.balance_amount) == null ? void 0 : a.currency_name,
            );
          }
          break;
        case "LPMCredential":
          return o("BillingPaymentMethodDisplay").getLPMDisplayText(
            r.credential_type,
            r.user_display_name,
            r.display_name,
          );
        case "AltPayCredential":
          if (r.display_name != null)
            return s._(/*BTDS*/ "{altpay method name}", [
              s._param("altpay method name", r.display_name),
            ]);
          break;
      }
      return t != null ? t : o("BillingPaymentMethodDisplay").EMPTY_FBT;
    }
    function f(e, t, n) {
      if (e == null || e === "" || t == null || t === "") return null;
      var r = e + "/" + t.slice(2);
      return n
        ? s._(/*BTDS*/ "Expired {expiration}", [s._param("expiration", "" + r)])
        : s._(/*BTDS*/ "Expires {expiration}", [
            s._param("expiration", "" + r),
          ]);
    }
    function g(e) {
      var t = o("RelayHooks").readInlineData(d, e);
      return (t == null ? void 0 : t.__typename) === "LPMCredential"
        ? t.user_display_name
        : null;
    }
    ((l.paymentMethodDisplayQuery = m),
      (l.getPaymentMethodDisplayFromQuery = p),
      (l.getPaymentMethodDisplayFromFragment = _),
      (l.getCredentialExpiration = f),
      (l.getLPMUserDisplayNameFromFragment = g));
  },
  226,
);
