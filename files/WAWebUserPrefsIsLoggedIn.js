__d(
  "WAWebUserPrefsIsLoggedIn",
  ["WAWebUserPrefsMultiDevice"],
  function (t, n, r, o, a, i, l) {
    var e = !1;
    function s() {
      return o("WAWebUserPrefsMultiDevice").isRegistered() && u();
    }
    function u() {
      return e;
    }
    function c(t) {
      e = t;
    }
    ((l.isLoggedIn = s), (l.setIsConnectedAsRegistered = c));
  },
  98,
);
