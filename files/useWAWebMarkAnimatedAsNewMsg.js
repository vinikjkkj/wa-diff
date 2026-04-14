__d(
  "useWAWebMarkAnimatedAsNewMsg",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n = c(!1);
      u(
        function () {
          !n.current && e && ((n.current = !0), t(!0));
        },
        [e, t],
      );
    }
    l.useMarkAnimatedAsNewMsg = d;
  },
  98,
);
