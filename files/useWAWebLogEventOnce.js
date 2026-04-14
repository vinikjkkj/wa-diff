__d(
  "useWAWebLogEventOnce",
  ["react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = c(!1),
        n = r("useWAWebStableCallback")(e);
      u(
        function () {
          t.current || ((t.current = !0), n());
        },
        [n],
      );
    }
    l.useLogEventOnce = d;
  },
  98,
);
