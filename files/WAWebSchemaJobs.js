__d(
  "WAWebSchemaJobs",
  [
    "WAWebJobsStorageUtils",
    "WAWebJobsStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addAutoIncrementingPrimaryKey,
      u = e.addColumn,
      c = e.addIndex,
      d = e.removeColumn;
    function m() {
      o("WAWebJobsStorageUtils")
        .getStorage()
        .add("jobs-store")
        .version(o("WAWebJobsStorageVersions").jobsCreateV1Table(), [
          s("jobId"),
          u("type"),
          u("uniqKey"),
          c("uniqKey"),
          u("original"),
          u("current"),
          u("step"),
          u("startTime"),
          u("endTime"),
          u("stepHardStartCountAfterTimeout"),
          u("stepFirstStartTime"),
          u("waitUntil"),
          u("backedOffCount"),
          u("version"),
        ])
        .version(o("WAWebJobsStorageVersions").jobsCreateV2Table(), [
          u("stepUnexpectedErrorCount"),
          d("endTime"),
        ])
        .view(function (e) {
          return {
            jobId: e.jobId,
            type: e.type,
            uniqKey: e.uniqKey,
            original: e.original,
            current: e.current,
            step: e.step,
            startTime: e.startTime,
            stepHardStartCountAfterTimeout: e.stepHardStartCountAfterTimeout,
            stepFirstStartTime: e.stepFirstStartTime,
            waitUntil: e.waitUntil,
            backedOffCount: e.backedOffCount,
            version: e.version,
            stepUnexpectedErrorCount: e.stepUnexpectedErrorCount,
          };
        });
    }
    function p() {
      return o("WAWebJobsStorageUtils").getStorage().table("jobs-store");
    }
    ((l.addTable = m), (l.getTable = p));
  },
  98,
);
