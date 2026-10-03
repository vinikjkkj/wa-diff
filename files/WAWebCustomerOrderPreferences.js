__d(
  "WAWebCustomerOrderPreferences",
  [],
  function (t, n, r, o, a, i) {
    var e = { SHIPPING: 0, DELIVERY: 1, PAYMENT: 2, TRACKING: 3 },
      l = [e.SHIPPING, e.DELIVERY, e.PAYMENT, e.TRACKING],
      s = l.map(function () {
        return "";
      });
    function u(e) {
      return l.map(function (t) {
        var n;
        return (n = e == null ? void 0 : e[t]) != null ? n : "";
      });
    }
    function c(e) {
      var t = e
        .map(function (e) {
          return e.trim();
        })
        .filter(function (e) {
          return e !== "";
        });
      return t.length > 0 ? t.join(" \u2022 ") : null;
    }
    ((i.OrderPreferenceSlot = e),
      (i.ORDER_PREFERENCE_SLOTS = l),
      (i.EMPTY_ORDER_PREFERENCES = s),
      (i.toOrderPreferences = u),
      (i.getOrderPreferencesDisplayText = c));
  },
  66,
);
