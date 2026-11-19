__d(
  "WAWebCustomerOrderPreferences",
  [],
  function (t, n, r, o, a, i) {
    var e = { SHIPPING: 0, DELIVERY: 1, PAYMENT: 2, TRACKING: 3 },
      l = [e.SHIPPING, e.DELIVERY, e.PAYMENT, e.TRACKING],
      s = [e.SHIPPING, e.DELIVERY, e.PAYMENT],
      u = l.map(function () {
        return "";
      });
    function c(e) {
      return l.map(function (t) {
        var n;
        return (n = e == null ? void 0 : e[t]) != null ? n : "";
      });
    }
    function d(e) {
      var t = s
        .map(function (t) {
          return e[t].trim();
        })
        .filter(function (e) {
          return e !== "";
        });
      return t.length > 0 ? t.join(" \u2022 ") : null;
    }
    ((i.ORDER_PREFERENCE_SLOTS = l),
      (i.DISPLAYED_ORDER_PREFERENCE_SLOTS = s),
      (i.EMPTY_ORDER_PREFERENCES = u),
      (i.toOrderPreferences = c),
      (i.getOrderPreferencesDisplayText = d));
  },
  66,
);
