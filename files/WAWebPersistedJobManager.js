__d(
  "WAWebPersistedJobManager",
  [
    "Promise",
    "WAPersistedJobManager",
    "WARandomHex",
    "WATimeUtils",
    "WAWebJobsStorage",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebPersistedJob",
    "WAWebSchemaJobs",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebJobsStorage").initialize();
          var e = o("WAWebSchemaJobs").getTable();
          ((s = new (o("WAPersistedJobManager").PersistedJobManager)({
            accessors: d(),
            unfinishedJobEntries: e.all(),
            isRestartAfterCrash: !1,
            listeners: {
              onJobStarted: r("WAWebNoop"),
              onJobFinished: o("WAWebNullFunc").returnNull,
            },
            deprecatedJobs: {},
          })),
            r("WAWebPersistedJob")(s));
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
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
        maybeCreateJob: m,
      };
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a,
            i,
            l = o("WAWebSchemaJobs").getTable(),
            s = JSON.stringify([
              t.type,
              (r = t.uniqKey) != null ? r : o("WARandomHex").randomHex(32),
            ]),
            u = {
              type: t.type,
              uniqKey: s,
              startTime: o("WATimeUtils").unixTime(),
              version: (a = t.version) != null ? a : 1,
              original: t.args,
              current: t.args,
              step: o("WAPersistedJobManager").UNSTARTED_JOB,
              waitUntil:
                (i = t == null ? void 0 : t.waitUntil) != null ? i : null,
              stepFirstStartTime: null,
              stepHardStartCountAfterTimeout: 0,
              stepUnexpectedErrorCount: 0,
              backedOffCount: 0,
            };
          if (t.uniqKey == null)
            return l.createOrReplace(u).then(function (e) {
              return { id: e, newlyCreated: !0 };
            });
          var c = yield l.equals(["uniqKey"], [t.uniqKey]);
          if (c.length === 0)
            return l.createOrReplace(u).then(function (e) {
              return { id: e, newlyCreated: !0 };
            });
          var d = [],
            m = null;
          for (var p of c)
            p.step !== o("WAPersistedJobManager").FINISHED_JOB
              ? (m = p)
              : d.push(l.remove(p.jobId));
          return (
            yield (e || (e = n("Promise"))).all(d),
            m != null
              ? { id: m.jobId, newlyCreated: !1 }
              : l.createOrReplace(u).then(function (e) {
                  return { id: e, newlyCreated: !0 };
                })
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      if (s == null) throw r("err")("jobs manager has not been initialized");
      return s;
    }
    var f = { getJobManager: _, maybeCreateJob: m };
    ((l.startWebPersistedJobManager = u),
      (l.maybeCreateJob = m),
      (l.getJobManager = _),
      (l.mainThreadPersistedJobManagerHandler = f));
  },
  98,
);
