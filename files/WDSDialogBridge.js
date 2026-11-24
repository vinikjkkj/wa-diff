__d(
  "WDSDialogBridge",
  ["WDSDialogDismissRegistry", "WDSPresentationObservers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 150,
      s = null,
      u = null,
      c = null,
      d = null,
      m = null;
    function p(e, t) {
      var n = { onClose: t };
      try {
        f(e, n);
      } catch (e) {
        throw (m === n && (m = null), e);
      }
      return {
        close: function () {
          return m !== n ? !1 : (g(), !0);
        },
        isCurrent: function () {
          return m === n;
        },
      };
    }
    function _(e) {
      f(e, null);
    }
    function f(e, t) {
      var n = m;
      m = t;
      try {
        ((d = o("WDSPresentationObservers").captureWDSPresentationContext()),
          s != null ? s(e) : (c = e));
      } finally {
        n == null || n.onClose();
      }
    }
    function g() {
      var e = m;
      ((m = null),
        o("WDSDialogDismissRegistry").clearDialogDismissHandler(),
        u != null ? u() : c != null && ((c = null), (d = null)),
        e == null || e.onClose());
    }
    function h(e, t) {
      if (((s = e), (u = t), c != null)) {
        var n = c;
        ((c = null), e(n));
      }
      return function () {
        if (!(s !== e || u !== t)) {
          ((s = null), (u = null));
          var n = m;
          ((m = null), n == null || n.onClose());
        }
      };
    }
    function y() {
      var e = d;
      return ((d = null), e);
    }
    ((l.DIALOG_EXIT_ANIMATION_DURATION = e),
      (l.openWDSDialogWithLifetime = p),
      (l.openWDSDialog = _),
      (l.closeWDSDialog = g),
      (l.registerDialogManager = h),
      (l.takeOpenedDialogPresentationContext = y));
  },
  98,
);
