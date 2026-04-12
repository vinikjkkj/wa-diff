__d(
  "useWAWebOnUnmount",
  ["react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = r("useWAWebStableCallback")(e);
      s(
        function () {
          return t;
        },
        [t],
      );
    }
    l.default = u;
  },
  98,
);
