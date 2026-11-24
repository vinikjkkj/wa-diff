__d(
  "WAWebVoipCallLogOrderingAdmission",
  ["WAWebViewMode.flow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakMap(),
      s = new WeakMap();
    function u(e, t, n, r, o) {
      t != null &&
        s.set(e, { policy: t, t: n, viewMode: r, notificationViewMode: o });
    }
    function c(e) {
      var t = s.get(e.id);
      return (s.delete(e.id), t);
    }
    function d(t, n) {
      n != null && e.set(t, n);
    }
    function m(t) {
      var n = t.id,
        r = e.get(n);
      return (
        e.delete(n),
        t.viewMode ===
        o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
          ? r
          : null
      );
    }
    ((l.rememberOrderingPolicyContext = u),
      (l.takeOrderingPolicyContext = c),
      (l.rememberOrderingHiddenOriginalViewMode = d),
      (l.takeOrderingHiddenOriginalViewMode = m));
  },
  98,
);
