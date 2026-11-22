__d(
  "WAWebDebugErrorToast",
  ["WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_ERROR_TOAST_ENABLED,
      );
      return e == null ? !0 : !!e;
    }
    var s = e(),
      u = new Set();
    function c() {
      return s;
    }
    function d(e) {
      s !== e &&
        ((s = e),
        r("WAWebUserPrefsStore").set(
          r("WAWebUserPrefsDebugKeys").DEBUG_ERROR_TOAST_ENABLED,
          e,
        ),
        u.forEach(function (e) {
          e(s);
        }));
    }
    ((d.doc = "Enable/disable error toast messages"), (d.paramsToExecute = []));
    function m(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    ((l.isErrorToastEnabled = c),
      (l.setErrorToast = d),
      (l.subscribeToErrorToast = m));
  },
  98,
);
