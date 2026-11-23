__d(
  "WAFlowsUseValueUpdaterOnInit",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = e.initialValue,
        n = e.isEnabled,
        r = n === void 0 ? !0 : n,
        o = e.onUpdate,
        a = e.updateCondition,
        i = c();
      u(function () {
        r && o && a(i.current, t) && ((i.current = t), o == null || o());
      }, []);
    }
    l.useValueUpdaterOnInit = d;
  },
  98,
);
