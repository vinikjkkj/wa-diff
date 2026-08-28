__d(
  "runGraphAPIBatch_EXPERIMENTAL",
  ["invariant", "GraphAPICore", "NamedJSONPathExpression", "guid"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = new Map(),
        o = new Map();
      return (
        t.forEach(function (e) {
          if (e.request) {
            var a = e;
            (Array.isArray(a.dependencies) || s(0, 3427),
              a.request.length === a.dependencies.length || s(0, 3428),
              n.set(a.request, r("guid")()));
            var i = a.dependencies.map(function (e) {
              var t = n.get(e);
              return (
                t || s(0, 3429, a),
                new (r("NamedJSONPathExpression"))(t)
              );
            });
            o.set(a.request, a.request.apply(a, i));
          } else {
            var t = e;
            (n.get(t) == null || s(0, 3426),
              n.set(t, r("guid")()),
              o.set(t, t));
          }
        }),
        r("GraphAPICore")
          .promiseBatch(
            e,
            t.map(function (e) {
              var t = e.request != null ? e.request : e,
                r = n.get(t),
                a = o.get(t);
              return ((r && a) || s(0, 3430), { name: r, request: a });
            }),
          )
          .then(function (e) {
            return e.map(function (e) {
              return !e || !e.body
                ? { success: !1, noBatchDataReturned: !0 }
                : JSON.parse(e.body);
            });
          })
      );
    }
    l.default = e;
  },
  98,
);
