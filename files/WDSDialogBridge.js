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
      m = 0,
      p = null,
      _ = null;
    function f(e, t) {
      var n = { onClose: t };
      try {
        h(e, n);
      } catch (e) {
        throw (_ === n && (_ = null), e);
      }
      return {
        close: function () {
          return _ !== n ? !1 : (y(), !0);
        },
        isCurrent: function () {
          return _ === n;
        },
      };
    }
    function g(e) {
      h(e, null);
    }
    function h(e, t) {
      m += 1;
      var n = _;
      _ = t;
      try {
        ((d = o("WDSPresentationObservers").captureWDSPresentationContext()),
          s != null ? s(e) : (c = e));
      } finally {
        n == null || n.onClose();
      }
    }
    function y() {
      S();
      var e = _;
      ((_ = null),
        o("WDSDialogDismissRegistry").clearDialogDismissHandler(),
        u != null ? u() : c != null && ((c = null), (d = null)),
        e == null || e.onClose());
    }
    function C() {
      return m;
    }
    function b(t, n) {
      m !== t ||
        p === t ||
        (y(),
        self.setTimeout(function () {
          m === t && n();
        }, e));
    }
    function v(e, t) {
      if (((s = e), (u = t), c != null)) {
        var n = c;
        ((c = null), e(n));
      }
      return function () {
        if (!(s !== e || u !== t)) {
          ((s = null), (u = null), S());
          var n = _;
          ((_ = null), n == null || n.onClose());
        }
      };
    }
    function S() {
      p = m;
    }
    function R() {
      var e = d;
      return ((d = null), e);
    }
    ((l.DIALOG_EXIT_ANIMATION_DURATION = e),
      (l.openWDSDialogWithLifetime = f),
      (l.openWDSDialog = g),
      (l.closeWDSDialog = y),
      (l.getWDSDialogOpenCount = C),
      (l.closeWDSDialogThen = b),
      (l.registerDialogManager = v),
      (l.noteDialogClosed = S),
      (l.takeOpenedDialogPresentationContext = R));
  },
  98,
);
