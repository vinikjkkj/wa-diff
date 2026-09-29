__d(
  "CometErrorOverlay",
  ["ExecutionEnvironment", "ReactDOM", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = document.body;
        if (t == null) return null;
        var n = document.createElement("div");
        return (t.appendChild(n), n);
      }
      return null;
    }
    function d(t) {
      var n = c();
      if (n != null) {
        var a = function () {
            (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
              window.setTimeout(function () {
                (i.unmount(), n.remove());
              }, 0);
          },
          i = o("ReactDOM").createRoot(n, { unstable_strictMode: !0 }),
          l = t(a);
        return (i.render(l), a);
      }
    }
    l.injectComponent = d;
  },
  98,
);
