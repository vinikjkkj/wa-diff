__d(
  "WAWebStatusDBOperations",
  ["WAWebStatusStorageUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebStatusStorageUtils")
        .getStorage()
        .lock(["status"], async function (t) {
          var n = t[0];
          await n.bulkCreateOrReplace(e);
        });
    }
    l.createOrUpdateStatus = e;
  },
  98,
);
