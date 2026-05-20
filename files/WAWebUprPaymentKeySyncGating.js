__d(
  "WAWebUprPaymentKeySyncGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t =
          (e = o("WAWebABProps").getABPropConfigValue(
            "payments_upr_custom_payment_methods_sync_countries",
          )) != null
            ? e
            : "";
      return t === ""
        ? new Set()
        : new Set(
            t
              .split(",")
              .map(function (e) {
                return e.trim().toUpperCase();
              })
              .filter(function (e) {
                return e !== "";
              }),
          );
    }
    function s() {
      return e().size > 0;
    }
    function u(t) {
      return t == null || t === "" ? !1 : e().has(t.toUpperCase());
    }
    ((l.isCustomPaymentMethodsSyncEnabled = s),
      (l.isCustomPaymentMethodsSyncEnabledForCountry = u));
  },
  98,
);
