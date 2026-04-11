__d(
  "WAWebQuarantineDataCleanupJob",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebQuarantineDataBatchProcessor",
    "WAWebQuarantineDataStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 60;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "cleanExpiredQuarantineDataJob: Starting cleanup",
              ])),
          );
          var t = Date.now() - c * o("WATimeUtils").DAY_SECONDS * 1e3,
            r = yield o(
              "WAWebQuarantineDataBatchProcessor",
            ).processQuarantineDataInBatches({
              fetchBatch: function (n) {
                return o(
                  "WAWebQuarantineDataStore",
                ).getQuarantineDataBatchOlderThan(t, n);
              },
              processBatch: function (t) {
                return (u || (u = n("Promise"))).resolve({
                  processedIds: t.map(function (e) {
                    return e.msgId;
                  }),
                  failedIds: [],
                });
              },
              jobName: "cleanExpiredQuarantineDataJob",
            });
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "cleanExpiredQuarantineDataJob: Deleted ",
                " expired records",
              ])),
            r,
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.cleanExpiredQuarantineDataJob = d;
  },
  98,
);
