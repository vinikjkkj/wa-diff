__d(
  "useWAWebEventCounterValue",
  ["react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t, n) {
      n === void 0 && (n = 0);
      var r;
      e == null ? (r = []) : Array.isArray(e) ? (r = e) : (r = [e]);
      var a = s(n),
        i = a[0],
        l = a[1];
      return (
        o("useWAWebListener").useListeners(
          r.map(function (e) {
            return {
              source: e,
              eventOrEvents: t,
              callback: function (t) {
                (t === void 0 && (t = 1),
                  l(function (e) {
                    return e + t;
                  }));
              },
            };
          }),
        ),
        i
      );
    }
    l.default = u;
  },
  98,
);
