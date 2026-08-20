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
    i.walletGroups = e;
  },
  66,
);
