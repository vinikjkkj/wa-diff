__d(
  "WARequestKeys",
  [
    "WABulkRequestKeys",
    "WAPromiseManagement",
    "WARequestKeysBatcher",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WARequestKeysBatcher").makeSimpleBatcher(async function (e) {
        var t = await o("WABulkRequestKeys").bulkRequestKeys(e);
        return t.success === !1
          ? e.map(function () {
              return t;
            })
          : e.map(function (e) {
              var n = t.value.get(e);
              return n
                ? o("WAResultOrError").makeResult(n)
                : o("WAResultOrError").makeError("errRequestKeysNoKeys");
            });
      }),
      s = o("WAPromiseManagement").cacheWhilePending(function (e) {
        return e;
      }, e);
    l.requestKeys = s;
  },
  98,
);
