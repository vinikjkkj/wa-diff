__d(
  "ReStoreDefaultValueMigration",
  [
    "LSPlatformLsInitLog",
    "ReStoreDefaultValuesMetadata",
    "ReStoreUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {},
            r = yield o("ReStoreUtils").collectIterator(
              t[
                o("ReStoreDefaultValuesMetadata").defaultValuesTableName
              ].entries(e),
            );
          for (var a of r) {
            var i = a[0],
              l = a[1];
            if (i != null) {
              var s,
                u = o("ReStoreDefaultValuesMetadata").tryParseDefaultValuesData(
                  l,
                );
              if (u == null) continue;
              var c = u.columns,
                d = u.tableName;
              n[d] = (s = n[d]) != null ? s : new Set();
              for (var m of c) n[d].add(m);
            }
          }
          return n;
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, o) {
            var a = yield e(t, n),
              i = {};
            for (var l in r.tableNames) {
              var s = o[l];
              if (s != null)
                for (var u in s) {
                  var c,
                    d = (c = a[l]) == null ? void 0 : c.has(u);
                  if (!d) {
                    var m;
                    ((i[l] = (m = i[l]) != null ? m : {}), (i[l][u] = s[u]));
                  }
                }
            }
            return i;
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          for (var r in t) {
            var a = Object.keys(n[r] || {}),
              i = { columns: a, tableName: r };
            yield e[
              o("ReStoreDefaultValuesMetadata").defaultValuesTableName
            ].put(
              o("ReStoreDefaultValuesMetadata").defaultValuesColumnToValue(i),
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = new WeakMap();
            o("LSPlatformLsInitLog").addPoint("default_values_update_start");
            var i = function (t, n) {
              o("LSPlatformLsInitLog").addPoint(
                "default_values_update_end_failure",
                {
                  string: {
                    default_values_update_failure_point: n,
                    default_values_update_failure_reason: String(t),
                  },
                },
              );
            };
            try {
              var l = yield u(a, e, t, r);
              try {
                if (n === !1)
                  for (var s in l)
                    for (
                      var c = e[s].entries(a), m = yield c.next();
                      !m.done;
                    ) {
                      var p = babelHelpers.extends({}, m.value[1]),
                        _ = o("ReStoreUtils").appendDefaultValues(p, s, r);
                      (yield e[s].put(_), (m = yield c.next()));
                    }
                (yield d(e, l, r),
                  o("LSPlatformLsInitLog").addPoint(
                    "default_values_update_end",
                  ));
              } catch (e) {
                i(e, "setDefaultValues");
              }
            } catch (e) {
              i(e, "findDefaultValuesToUpdate");
            }
          },
        )),
        _.apply(this, arguments)
      );
    }
    l.runMigrationForTableDefaultValuesIfNeeded = p;
  },
  98,
);
