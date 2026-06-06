__d(
  "WAWebPersistedJobManager",
  [
    "WAPersistedJobManager",
    "WARandomHex",
    "WATimeUtils",
    "WAWebJobsStorage",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebPersistedJob",
    "WAWebSchemaJobs",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    async function s() {
      await o("WAWebJobsStorage").initialize();
      var t = o("WAWebSchemaJobs").getTable();
      ((e = new (o("WAPersistedJobManager").PersistedJobManager)({
        accessors: u(),
        unfinishedJobEntries: t.all(),
        isRestartAfterCrash: !1,
        listeners: {
          onJobStarted: r("WAWebNoop"),
          onJobFinished: o("WAWebNullFunc").returnNull,
        },
        deprecatedJobs: {},
      })),
        r("WAWebPersistedJob")(e));
    }
    function u() {
      return {
        deletePersistedJob: function (t) {
          var e = o("WAWebSchemaJobs").getTable();
          return e.remove(t);
        },
        updatePersistedJob: function (t) {
          var e = o("WAWebSchemaJobs").getTable();
          return e.createOrReplace(t);
        },
        readPersistedJob: function (t) {
          var e = o("WAWebSchemaJobs").getTable();
          return e.get(t);
        },
        loadAllJobs: function () {
          var e = o("WAWebSchemaJobs").getTable();
          return e.all();
        },
        maybeCreateJob: c,
      };
    }
    async function c(e) {
      var t,
        n,
        r,
        a = o("WAWebSchemaJobs").getTable(),
        i = JSON.stringify([
          e.type,
          (t = e.uniqKey) != null ? t : o("WARandomHex").randomHex(32),
        ]),
        l = {
          type: e.type,
          uniqKey: i,
          startTime: o("WATimeUtils").unixTime(),
          version: (n = e.version) != null ? n : 1,
          original: e.args,
          current: e.args,
          step: o("WAPersistedJobManager").UNSTARTED_JOB,
          waitUntil: (r = e == null ? void 0 : e.waitUntil) != null ? r : null,
          stepFirstStartTime: null,
          stepHardStartCountAfterTimeout: 0,
          stepUnexpectedErrorCount: 0,
          backedOffCount: 0,
        };
      if (e.uniqKey == null)
        return a.createOrReplace(l).then(function (e) {
          return { id: e, newlyCreated: !0 };
        });
      var s = await a.equals(["uniqKey"], [e.uniqKey]);
      if (s.length === 0)
        return a.createOrReplace(l).then(function (e) {
          return { id: e, newlyCreated: !0 };
        });
      var u = [],
        c = null;
      for (var d of s)
        d.step !== o("WAPersistedJobManager").FINISHED_JOB
          ? (c = d)
          : u.push(a.remove(d.jobId));
      return (
        await Promise.all(u),
        c != null
          ? { id: c.jobId, newlyCreated: !1 }
          : a.createOrReplace(l).then(function (e) {
              return { id: e, newlyCreated: !0 };
            })
      );
    }
    function d() {
      if (e == null) throw r("err")("jobs manager has not been initialized");
      return e;
    }
    ((l.startWebPersistedJobManager = s),
      (l.maybeCreateJob = c),
      (l.getJobManager = d));
  },
  98,
);
