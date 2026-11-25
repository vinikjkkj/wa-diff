__d(
  "ReStoreDefaultValueMigration",
  ["LSPlatformLsInitLog", "ReStoreDefaultValuesMetadata", "ReStoreUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = {},
        r = await o("ReStoreUtils").collectIterator(
          t[o("ReStoreDefaultValuesMetadata").defaultValuesTableName].entries(
            e,
          ),
        );
      for (var a of r) {
        var i = a[0],
          l = a[1];
        if (i != null) {
          var s,
            u = o("ReStoreDefaultValuesMetadata").tryParseDefaultValuesData(l);
          if (u == null) continue;
          var c = u.columns,
            d = u.tableName;
          n[d] = (s = n[d]) != null ? s : new Set();
          for (var m of c) n[d].add(m);
        }
      }
      return n;
    }
    async function s(t, n, r, o) {
      var a = await e(t, n),
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
    }
    async function u(e, t, n) {
      for (var r in t) {
        var a = Object.keys(n[r] || {}),
          i = { columns: a, tableName: r };
        await e[o("ReStoreDefaultValuesMetadata").defaultValuesTableName].put(
          o("ReStoreDefaultValuesMetadata").defaultValuesColumnToValue(i),
        );
      }
    }
    async function c(e, t, n, r) {
      var a = new WeakMap();
      o("LSPlatformLsInitLog").addPoint("default_values_update_start");
      var i = function (t, n) {
        o("LSPlatformLsInitLog").addPoint("default_values_update_end_failure", {
          string: {
            default_values_update_failure_point: n,
            default_values_update_failure_reason: String(t),
          },
        });
      };
      try {
        var l = await s(a, e, t, r);
        try {
          if (n === !1)
            for (var c in l)
              for (var d = e[c].entries(a), m = await d.next(); !m.done; ) {
                var p = babelHelpers.extends({}, m.value[1]),
                  _ = o("ReStoreUtils").appendDefaultValues(p, c, r);
                (await e[c].put(_), (m = await d.next()));
              }
          (await u(e, l, r),
            o("LSPlatformLsInitLog").addPoint("default_values_update_end"));
        } catch (e) {
          i(e, "setDefaultValues");
        }
      } catch (e) {
        i(e, "findDefaultValuesToUpdate");
      }
    }
    l.runMigrationForTableDefaultValuesIfNeeded = c;
  },
  98,
);
