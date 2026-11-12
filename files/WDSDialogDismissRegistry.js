__d(
  "WDSDialogDismissRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null;
    function s(t) {
      return (
        (e = t),
        function () {
          e === t && (e = null);
        }
      );
    }
    function u(e) {
      return (
        (l = e),
        function () {
          l === e && (l = null);
        }
      );
    }
    function c() {
      return (l == null ? void 0 : l()) === !0;
    }
    function d() {
      ((e = null), (l = null));
    }
    function m() {
      var t = e;
      return ((e = null), (l = null), t);
    }
    ((i.registerDialogDismissHandler = s),
      (i.registerDialogDismissBlocker = u),
      (i.isDialogDismissBlocked = c),
      (i.clearDialogDismissHandler = d),
      (i.takeDialogDismissHandler = m));
  },
  66,
);
