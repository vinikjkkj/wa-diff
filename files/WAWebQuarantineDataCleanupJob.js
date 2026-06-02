__d(
  "WAWebQuarantineDataCleanupJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebQuarantineDataBatchProcessor",
    "WAWebQuarantineDataStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 60;
    async function c() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "cleanExpiredQuarantineDataJob: Starting cleanup",
          ])),
      );
      var t = Date.now() - u * o("WATimeUtils").DAY_SECONDS * 1e3,
        n = await o(
          "WAWebQuarantineDataBatchProcessor",
        ).processQuarantineDataInBatches({
          fetchBatch: function (n) {
            return o(
              "WAWebQuarantineDataStore",
            ).getQuarantineDataBatchOlderThan(t, n);
          },
          processBatch: function (t) {
            return Promise.resolve({
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
        n,
      );
    }
    l.cleanExpiredQuarantineDataJob = c;
  },
  98,
);
