__d(
  "WAWebPollsUseStickySortedResults",
  ["WANullthrows", "react", "useLazyRef"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = r("useLazyRef")(function () {
        return new Map();
      });
      return s(
        function () {
          var n = t.current,
            o = Array.from(e),
            a = o
              .filter(function (e) {
                var t = e[0];
                return !n.has(t.localId);
              })
              .sort(function (e, t) {
                var n = e[1],
                  r = t[1];
                return r.count - n.count;
              })
              .map(function (e) {
                var t = e[0];
                return t.localId;
              });
          for (var i of a) n.set(i, n.size);
          return o.sort(function (e, t) {
            var o = e[0],
              a = t[0];
            return (
              r("WANullthrows")(n.get(o.localId)) -
              r("WANullthrows")(n.get(a.localId))
            );
          });
        },
        [t, e],
      );
    }
    l.useStickySortedResults = u;
  },
  98,
);
