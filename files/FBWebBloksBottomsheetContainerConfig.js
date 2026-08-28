__d(
  "FBWebBloksBottomsheetContainerConfig",
  ["WebBloksContainerConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ".",
      s = (function (t) {
        function n(e) {
          var n;
          return ((n = t.call(this) || this), (n.navbar = e), n);
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.fromBloksModel = function (r) {
            var t = r.get(e);
            return new n(t);
          }));
        var r = n.prototype;
        return (
          (r.getIsOverlay = function () {
            return !0;
          }),
          n
        );
      })(o("WebBloksContainerConfig").WebBloksContainerConfig);
    l.default = s;
  },
  98,
);
