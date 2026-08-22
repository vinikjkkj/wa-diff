__d(
  "WAWebHatchCheckoutWalletGroups",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.paymentMethod.trim().toLowerCase(),
          o = t.get(r);
        if (o != null) {
          o.options.push(n);
          continue;
        }
        t.set(r, { paymentMethod: n.paymentMethod.trim(), options: [n] });
      }
      return Array.from(t.values());
    }
    function l(e) {
      var t;
      if (e == null) return "";
      var n = e.paymentId,
        r = e.paymentOptions;
      if (
        r.some(function (e) {
          return e.paymentId === n;
        })
      )
        return n;
      var o = s(e.cardBrand, e.cardLast4);
      if (o == null) return "";
      var a = r.find(function (e) {
        return s(e.cardBrand, e.cardLast4) === o;
      });
      return (t = a == null ? void 0 : a.paymentId) != null ? t : "";
    }
    function s(e, t) {
      var n = e.trim().toLowerCase(),
        r = t.trim();
      return n === "" && r === "" ? null : n + "|" + r;
    }
    ((i.walletGroups = e), (i.fundingOptionId = l));
  },
  66,
);
