__d(
  "WAWebVoipControlMenuFocusUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.ownerDocument.activeElement;
      return (
        t == null ||
        t === (e == null ? void 0 : e.ownerDocument.body) ||
        (e == null ? void 0 : e.contains(t)) === !0
      );
    }
    i.shouldRestoreFocusOnMenuClose = e;
  },
  66,
);
