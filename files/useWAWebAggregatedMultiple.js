__d(
  "useWAWebAggregatedMultiple",
  ["WALogger", "react", "useWAWebAggregatedView", "useWAWebPrevious"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s || (s = o("react"))).useMemo,
      c = [];
    function d(e, t) {
      var n = r("useWAWebPrevious")(t);
      n != null;
      var a = t.map(function (t) {
          return o("useWAWebAggregatedView").useAggregatedViewImpl(e, t);
        }),
        i = a.reduce(function (e, t) {
          var n = t[0],
            r = t[1];
          return e + r;
        }, 0);
      return u(
        function () {
          var e = a.reduce(function (e, t) {
            var n = t[0];
            return n == null ? e : e.concat(n.toArray());
          }, []);
          return e.length === 0 ? c : e;
        },
        [i],
      );
    }
    l.useAggregatedMultiple = d;
  },
  98,
);
