__d(
  "MAWDbSchema.restore",
  ["MAWDbSchema", "MAWGetDbVersion", "objectEntries", "sortBy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = Object.fromEntries(
          r("objectEntries")(e.indexes)
            .filter(function (e) {
              var t = e[1];
              return t.multiEntry_DO_NOT_USE !== !0;
            })
            .map(function (t) {
              var n = t[0],
                r = t[1];
              return [
                n,
                {
                  columns: [].concat(
                    r.columns,
                    r.unique !== !1 ? [] : e.primaryKey,
                  ),
                  predicate: r.predicate,
                },
              ];
            }),
        ),
        n = {
          auto_increment: e.autoIncrement === !0,
          indexes: t,
          name: e.name,
          primary_key: e.primaryKey,
        };
      return n;
    }
    var s = r("sortBy")(
        Array.from(o("MAWDbSchema").dbSchema.entries()),
        function (e) {
          var t = e[0];
          return t;
        },
      ).map(function (e) {
        var t = e[0],
          n = e[1];
        return { schema: n, version: t };
      }),
      u = function (n) {
        return Array.from(
          s
            .filter(function (e) {
              return e.version <= n && e.schema != null;
            })
            .reduce(function (t, n) {
              var r;
              return (
                (r = n.schema) == null ||
                  r.forEach(function (n) {
                    if (n.removed === !0) {
                      t.delete(n.name);
                      return;
                    }
                    t.set(n.name, e(n));
                  }),
                t
              );
            }, new Map())
            .values(),
        );
      },
      c = u(o("MAWGetDbVersion").getArmadilloDbVersion());
    ((l.getSchemaForVersion = u), (l.clientSchema = c));
  },
  98,
);
