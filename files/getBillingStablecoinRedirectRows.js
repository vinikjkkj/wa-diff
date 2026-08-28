__d(
  "getBillingStablecoinRedirectRows",
  ["fbt", "isStablecoinPayinCredential"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = [];
      return (
        e != null &&
          n.push({ id: "amount", label: s._(/*BTDS*/ "Amount"), value: e }),
        n.push({
          id: "stablecoin_accepted",
          label: s._(/*BTDS*/ "Stablecoin accepted"),
          value:
            t != null && t !== ""
              ? t
              : o("isStablecoinPayinCredential").STABLECOIN_ACCEPTED_CURRENCY,
        }),
        n
      );
    }
    l.default = e;
  },
  226,
);
