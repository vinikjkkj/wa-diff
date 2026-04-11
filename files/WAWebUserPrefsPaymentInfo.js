__d(
  "WAWebUserPrefsPaymentInfo",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsLocalStorage"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = s(),
        t = e == null ? void 0 : e.cpi;
      return typeof t == "string" ? t : null;
    }
    function s() {
      var e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
        o("WAWebUserPrefsKeys").KEYS.PAYMENT_INFO,
      );
      return typeof e != "object" ? null : e;
    }
    function u(e) {
      var t,
        n = (t = s()) != null ? t : {};
      ((n.cpi = e),
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
          o("WAWebUserPrefsKeys").KEYS.PAYMENT_INFO,
          n,
        ));
    }
    function c() {
      var t = e();
      return typeof t == "string" && t.trim().length > 0;
    }
    ((l.getCPIInfo = e), (l.setCPIInfo = u), (l.isCPIInfoValid = c));
  },
  98,
);
