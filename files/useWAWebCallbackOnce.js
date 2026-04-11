__d(
  "useWAWebCallbackOnce",
  ["once", "react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t) {
      t === void 0 && (t = []);
      var n = r("useWAWebStableCallback")(e),
        o = s(function () {
          return r("once")(n);
        }, [n].concat(t));
      return o;
    }
    l.default = u;
  },
  98,
);
