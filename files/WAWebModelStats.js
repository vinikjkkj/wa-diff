__d(
  "WAWebModelStats",
  ["WAWebCollection", "WAWebDevStore", "sortBy", "sumBy", "withoutKey"],
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
        { collections: d(t, _), models: d(n, p) }
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
      return e != null
        ? r("sumBy")(Object.values(e), function (e) {
            return e.length;
          })
        : 0;
    }
    function p(e) {
      var t = e[0],
        n = e[1],
        r = m(n._events);
      return { name: t, listeners: r };
    }
    function _(e) {
      var t = e[0],
        n = e[1],
        o = m(n._events),
        a = r("sumBy")(
          n.map(function (e) {
            return m(e._events);
          }),
          function (e) {
            return e;
          },
        );
      return { name: t, length: n.length, listeners: o, modelListeners: a };
    }
    l.default = u;
  },
  98,
);
