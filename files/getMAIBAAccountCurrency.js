__d(
  "getMAIBAAccountCurrency",
  ["AdsAccountStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = r("AdsAccountStore").getSelectedAccount().getValue();
      return (e = t == null ? void 0 : t.currency) != null ? e : "USD";
    }
    l.default = e;
  },
  98,
);
