__d(
  "CometErrorOverlay",
  ["ReactDOM", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = document.body;
      if (e == null) return null;
      var t = document.createElement("div");
      return (e.appendChild(t), t);
    }
    function c(e) {
      var t = u();
      if (t != null) {
        var n = function () {
            window.setTimeout(function () {
              (r.unmount(), t.remove());
            }, 0);
          },
          r = o("ReactDOM").createRoot(t, { unstable_strictMode: !0 }),
          a = e(n);
        return (r.render(a), n);
      }
    }
    l.injectComponent = c;
  },
  98,
);
