__d(
  "CometVisibilityUserActivityMonitor",
  ["Visibility"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      isUserActive: function () {
        return r("Visibility").isHidden() === !1;
      },
      subscribe: function (t) {
        var e,
          n = (e = r("Visibility")).addListener(e.HIDDEN, function () {
            return t(!1);
          }),
          o = e.addListener(e.VISIBLE, function () {
            return t(!0);
          });
        return function () {
          (n && n.remove(), o && o.remove());
        };
      },
    };
    l.default = e;
  },
  98,
);
