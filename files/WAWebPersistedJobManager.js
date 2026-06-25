__d(
  "WAWebPersistedJobManager",
  [
    "Promise",
    "WAPersistedJobManager",
    "WARandomHex",
    "WATimeUtils",
    "WAWebBackendApi",
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
            accessors: p(),
            unfinishedJobEntries: e.all().then(function (e) {
              return (d(e), e);
            }),
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
    function d(e) {
      e.forEach(function (e) {
        e.step === o("WAPersistedJobManager").FINISHED_JOB ||
          e.stepHardStartCountAfterTimeout >=
            o("WAPersistedJobManager")
              .MAX_STEP_HARD_START_COUNT_AFTER_TIMEOUT ||
          m(e.type);
      });
    }
    function m(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "logPersistedJobJobsStoreTriggered",
        { type: e },
      );
    }
    function p() {
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
        maybeCreateJob: _,
      };
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        f.apply(this, arguments)
      );
    }
    function g() {
      if (s == null) throw r("err")("jobs manager has not been initialized");
      return s;
    }
    ((l.startWebPersistedJobManager = u),
      (l.maybeCreateJob = _),
      (l.getJobManager = g));
  },
  98,
);
