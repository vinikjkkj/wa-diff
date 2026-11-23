__d(
  "MAWDataSyncMiddleware",
  ["FBLogger", "MAWDataSyncQueue", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "contacts",
      "groupInfo",
      "messages",
      "participants",
      "threads",
      "reactions",
      "xma",
      "pendingStanzas",
    ]);
    function s(t, n) {
      var r = t.table(n);
      return e.has(n)
        ? babelHelpers.extends({}, r, {
            mutate: function (t) {
              return r.mutate(t).then(function (e) {
                return t.type === "delete"
                  ? (t.keys.forEach(function (e) {
                      o("MAWDataSyncQueue").addSyncItem(t.type, {
                        key: e,
                        tableName: n,
                      });
                    }),
                    e)
                  : (e.results != null
                      ? e.results.forEach(function (e, r) {
                          o("MAWDataSyncQueue").addSyncItem(
                            t.type,
                            babelHelpers.extends(
                              { key: e, tableName: n },
                              t.values != null ? { values: [t.values[r]] } : {},
                            ),
                          );
                        })
                      : e.lastResult != null &&
                        o("MAWDataSyncQueue").addSyncItem(t.type, {
                          key: e.lastResult,
                          tableName: n,
                          values: t.values,
                        }),
                    e);
              });
            },
          })
        : r;
    }
    function u() {
      return {
        create: function (t) {
          try {
            return babelHelpers.extends({}, t, {
              table: function (n) {
                return s(t, n);
              },
            });
          } catch (n) {
            var e = r("getErrorSafe")(n);
            return (
              r("FBLogger")("messenger_web")
                .catching(e)
                .mustfix(
                  "Error applying DataSync Middleware, messages made during this session will not be properly synced to registered consumers",
                ),
              t
            );
          }
        },
        name: "MAWDataSyncMiddleware",
        stack: "dbcore",
      };
    }
    l.getDataSyncMiddleware = u;
  },
  98,
);
