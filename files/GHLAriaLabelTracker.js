__d(
  "GHLAriaLabelTracker",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("ghlTestUBT").__setRef("GHLAriaLabelTracker");
    e.onReady(function (e) {
      return e(function (e, t) {
        !e && !t && d();
      });
    });
    var s = !1,
      u = [];
    function c(e) {
      return s
        ? (e(), { dispose: function () {} })
        : (u.push(e),
          {
            dispose: function () {
              u.splice(u.indexOf(e), 1);
            },
          });
    }
    function d() {
      s ||
        ((s = !0),
        u.forEach(function (e) {
          return e();
        }));
    }
    var m = { onAdd: c, set: d };
    l.default = m;
  },
  98,
);
