__d(
  "basePushToast",
  ["BaseToasterStateManager", "MetaConfig", "getToastDurationFromTextLength"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 72e6,
      s = r("BaseToasterStateManager").getInstance();
    function u(e, t, n, o) {
      var a,
        i = n != null ? n : s,
        l = (a = e.message) == null ? void 0 : a.toString(),
        u = i.push(
          t,
          o != null
            ? o
            : r("getToastDurationFromTextLength")(l != null ? l : ""),
        );
      return u;
    }
    function c(t, n) {
      var r = n != null ? n : s,
        o = r.push(t, e);
      return o;
    }
    function d(e) {
      return (
        e.action != null ||
        (e.withoutCloseButton != null && e.withoutCloseButton !== !0)
      );
    }
    function m() {
      return r("MetaConfig")._("191");
    }
    ((l.pushAlertToast = u),
      (l.pushPersistentToast = c),
      (l.isInteractiveToast = d),
      (l.passesNewToastAPIGK = m));
  },
  98,
);
