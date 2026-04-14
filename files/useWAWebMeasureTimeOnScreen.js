__d(
  "useWAWebMeasureTimeOnScreen",
  ["react", "useWAWebOnScreen"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e, t) {
      var n = d(null),
        o = u(
          function () {
            var e = n.current;
            e != null && (t(Date.now() - e), (n.current = null));
          },
          [t],
        ),
        a = r("useWAWebOnScreen")(e, o);
      c(
        function () {
          var e = n.current;
          (a && e == null && (n.current = Date.now()),
            !a && e != null && (t(Date.now() - e), (n.current = null)));
        },
        [t, a],
      );
    }
    l.default = m;
  },
  98,
);
