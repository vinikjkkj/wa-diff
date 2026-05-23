__d(
  "WAWebModelStats",
  [
    "WAWebCollection",
    "WAWebDevStore",
    "WAWebIdentityFunction",
    "sortBy",
    "sumBy",
    "withoutKey",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["Cmd", "Wap"];
    function s(e) {
      return e instanceof r("WAWebCollection");
    }
    function u() {
      var t = {},
        n = {};
      return (
        Object.entries(r("WAWebDevStore")).forEach(function (r) {
          var o = r[0],
            a = r[1];
          e.includes(o) || (s(a) ? (t[o] = a) : (n[o] = a));
        }),
        { collections: d(t, p), models: d(n, m) }
      );
    }
    function c(e) {
      return r("sumBy")(
        Object.values(r("withoutKey")(e, "name")),
        function (e) {
          return +e;
        },
      );
    }
    function d(e, t) {
      var n = Object.entries(e).map(t);
      return (
        (n = n.filter(function (e) {
          return c(e);
        })),
        r("sortBy")(n, function (e) {
          return -c(e);
        })
      );
    }
    function m(e) {
      var t = e[0],
        n = e[1],
        r = n.getListenersCount();
      return { name: t, listeners: r };
    }
    function p(e) {
      var t = e[0],
        n = e[1],
        a = n.getListenersCount(),
        i = r("sumBy")(
          n.map(function (e) {
            return e.getListenersCount();
          }),
          o("WAWebIdentityFunction").identityFunction,
        );
      return { name: t, length: n.length, listeners: a, modelListeners: i };
    }
    l.default = u;
  },
  98,
);
