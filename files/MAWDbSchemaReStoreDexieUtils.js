__d(
  "MAWDbSchemaReStoreDexieUtils",
  ["FBLogger", "MAWDbSchema", "MAWDbSchema.dexie", "sortBy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("sortBy")(
        Array.from(
          new Set(
            [].concat(
              Array.from(o("MAWDbSchema").dbSchema.keys()),
              Array.from(o("MAWDbSchema.dexie").dbUpgrades.keys()),
            ),
          ),
        ).map(function (e) {
          return {
            schema: o("MAWDbSchema").dbSchema.get(e),
            upgrade: o("MAWDbSchema.dexie").dbUpgrades.get(e),
            version: e,
          };
        }),
        function (e) {
          var t = e.version;
          return t;
        },
      ),
      s = function (t, n) {
        return Array.from(
          t
            .filter(function (e) {
              return e.version <= n && e.schema != null;
            })
            .reduce(function (e, t) {
              var n;
              return (
                (n = t.schema) == null ||
                  n.forEach(function (t) {
                    e.set(t.name, t);
                  }),
                e
              );
            }, new Map())
            .values(),
        );
      },
      u = function (t, n) {
        return s(t, n).reduce(function (e, t) {
          var n = t.autoIncrement,
            o = t.dexieOnly_primaryKeyUnique,
            a = t.name,
            i = t.primaryKey,
            l = t.removed,
            s = a.replace(/^e2ee_/, "");
          if (l === !0) return ((e[s] = null), e);
          if (n && o === !0)
            throw r("FBLogger")("messenger_web").mustfixThrow(
              "Invalid schema, cannot have both autoincremnet and unique constraints " +
                JSON.stringify(t),
            );
          var u = n ? "++" : "",
            c = o === !0 ? "&" : "",
            d =
              (i.length > 1 ? "[" : "") +
              i.join("+") +
              (i.length > 1 ? "]" : ""),
            m = Object.values(t.indexes)
              .map(function (e) {
                var t = e.columns,
                  n = e.unique !== !1,
                  r = t.length > 1,
                  o = e.multiEntry_DO_NOT_USE === !0,
                  a = n && !o ? "&" : "",
                  i = o ? "*" : "",
                  l = "" + a + i;
                return "" + l + (r ? "[" : "") + t.join("+") + (r ? "]" : "");
              })
              .join(",");
          return ((e[s] = ["" + u + c + d, m].filter(Boolean).join(",")), e);
        }, {});
      },
      c = function (n) {
        return u(e, n);
      };
    ((l.MAW_DB_VERSION_CHANGES = e),
      (l.getDexieSchemaForVersion = u),
      (l.getCompleteDexieSchemaForVersion = c));
  },
  98,
);
