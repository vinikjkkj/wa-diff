__d(
  "WAWebBulkCreateOrUpdateThreadsMetadata",
  [
    "WAWebGetUpdatedThreadMetadataRecord",
    "WAWebModelStorageUtils",
    "WAWebThreadsMetadataIdUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["thread-metadata"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0];
                if (e.length !== 0) {
                  var r = yield n.bulkGet(
                      e.map(function (e) {
                        return o(
                          "WAWebThreadsMetadataIdUtils",
                        ).craftThreadMetadataDBId(e.threadId);
                      }),
                    ),
                    a = e.map(function (e, t) {
                      var n = r[t];
                      return o(
                        "WAWebGetUpdatedThreadMetadataRecord",
                      ).getUpdatedThreadMetadataRecord(e, n);
                    });
                  return n.bulkCreateOrMerge(a);
                }
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    l.bulkCreateOrUpdateThreadsMetadata = e;
  },
  98,
);
