__d(
  "WAWebDebugErrorToast",
  ["WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore", "vulture"],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("vulture")("G_TRIuQ_XEvTY9aCKK_ZBEUnzDI=");
      var e = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_ERROR_TOAST_ENABLED,
      );
      return e == null ? !0 : !!e;
    }
    var s = e(),
      u = new Set();
    function c() {
      return (r("vulture")("yMhl1FWXeWNkPxqbjp2_vIZ7Kc8="), s);
    }
    function d(e) {
      (r("vulture")("ixAUdAAWY_OULfEP1xO0NFoMaxg="),
        s !== e &&
          ((s = e),
          r("WAWebUserPrefsStore").set(
            r("WAWebUserPrefsDebugKeys").DEBUG_ERROR_TOAST_ENABLED,
            e,
          ),
          u.forEach(function (e) {
            e(s);
          })));
    }
    ((d.doc = "Enable/disable error toast messages"), (d.paramsToExecute = []));
    function m(e) {
      return (
        r("vulture")("DUHhVI0GO_tlDH1uov6IRbmvjgs="),
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
