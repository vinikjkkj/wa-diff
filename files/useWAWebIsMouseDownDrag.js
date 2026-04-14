__d(
  "useWAWebIsMouseDownDrag",
  ["react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e, t) {
      (e === void 0 && (e = 200), t === void 0 && (t = window));
      var n = c(null);
      (o("useWAWebListener").useListener(t, "mousedown", function () {
        n.current = self.performance.now();
      }),
        o("useWAWebListener").useListener(t, "mouseup", function () {
          n.current = null;
        }));
      var r = u(
        function () {
          var t = n.current;
          return t != null && self.performance.now() - t >= e;
        },
        [e],
      );
      return r;
    }
    l.default = d;
  },
  98,
);
