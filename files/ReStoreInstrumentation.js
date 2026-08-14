__d(
  "ReStoreInstrumentation",
  ["JSONStringifyBigIntSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t) {
      return (
        e.set(t.uniqueId, {
          instance: t,
          persistence: t.persistence,
          tableNames: t.getTableData().tableNames,
        }),
        t
      );
    }
    function u() {
      return Array.from(e.entries()).map(function (e) {
        var t = e[0],
          n = e[1];
        return {
          key: t,
          value: JSON.parse(r("JSONStringifyBigIntSafe")(n.tableNames)),
        };
      });
    }
    ((l.instrument = s), (l.getReStoreTables = u), (l.reStoreInstancesMap = e));
  },
  98,
);
