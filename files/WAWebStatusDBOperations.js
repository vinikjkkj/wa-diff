__d(
  "WAWebStatusDBOperations",
  ["WAWebStatusStorageUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebStatusStorageUtils")
        .getStorage()
        .lock(
          ["status"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0];
                yield n.bulkCreateOrReplace(e);
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    l.createOrUpdateStatus = e;
  },
  98,
);
