__d(
  "useWAWebAnimationFrames",
  ["WAStartAnimationLoop", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n = t != null ? t : {},
        r = n.active,
        a = r === void 0 ? !1 : r,
        i = n.delay,
        l = i === void 0 ? 0 : i,
        s = n.targetWindow,
        d = c(e);
      d.current = e;
      var m = c();
      u(
        function () {
          var e = function (t) {
              return d.current(t);
            },
            t = function () {
              return m.current == null ? void 0 : m.current();
            };
          return (
            t(),
            a &&
              (m.current = o("WAStartAnimationLoop").startAnimationLoop(e, {
                delay: l,
                targetWindow: s,
              })),
            t
          );
        },
        [a, l, s],
      );
    }
    l.default = d;
  },
  98,
);
