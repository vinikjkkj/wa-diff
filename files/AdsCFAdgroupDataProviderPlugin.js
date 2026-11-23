__d(
  "AdsCFAdgroupDataProviderPlugin",
  ["ifRequired", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r("immutable").Map(),
        legacyFluxReduce: function (t, n) {
          var e = t;
          return (
            r("ifRequired")("AdsCFAdgroupLegacyFluxReduce", function (r) {
              e = r.legacyFluxReduce(t, n);
            }),
            e
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
