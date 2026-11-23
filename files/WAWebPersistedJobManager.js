__d(
  "WAWebPersistedJobManager",
  [
    "WALogger",
    "WAPersistedJobManager",
    "WARandomHex",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebJobsMigrationGating",
    "WAWebJobsStorage",
    "WAWebJobsStorageUtils",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebPersistedJob",
    "WAWebPersistedJobTaskScheduler",
    "WAWebScheduledOperations",
    "WAWebSchemaJobs",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null;
    async function c() {
      await o("WAWebJobsStorage").initialize();
      var e = o("WAWebSchemaJobs").getTable();
      u = m(
        e.all().then(function (e) {
          return (_(e), e);
        }),
      );
    }
    async function d() {
      if (await o("WAWebJobsStorageUtils").storageExists()) {
        await o("WAWebJobsStorage").initialize();
        var t = await o("WAWebSchemaJobs").getTable().all(),
          n = t.filter(f);
        if (n.length > 0) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[jobs-manager] draining ",
                " leftover jobs",
              ])),
            n.length,
          ),
            _(t));
          var r = m(Promise.resolve(t));
          (await r.initialJobsPromise,
            await Promise.allSettled(Array.from(r.activeJobs.values())));
        }
        await o("WAWebScheduledOperations").scheduleOperation(
          o("WAWebScheduledOperations").ScheduledOperation.DELETE_JOBS_STORAGE,
          o("WAWebJobsStorage").destroy,
        );
      }
    }
    function m(e) {
      var t = new (o("WAPersistedJobManager").PersistedJobManager)({
        accessors: h(),
        unfinishedJobEntries: e,
        isRestartAfterCrash: !1,
        listeners: {
          onJobStarted: r("WAWebNoop"),
          onJobFinished: o("WAWebNullFunc").returnNull,
        },
        deprecatedJobs: { setAbout: "NOOP" },
        executionScheduler: r("WAWebPersistedJobTaskScheduler"),
        useExecutionScheduler: p,
      });
      return (r("WAWebPersistedJob")(t), t);
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("wmi_jm_to_ts_m1");
    }
    function _(e) {
      e.filter(f).forEach(function (e) {
        g(e.type);
      });
    }
    function f(e) {
      return (
        e.step !== o("WAPersistedJobManager").FINISHED_JOB &&
        e.stepHardStartCountAfterTimeout <
          o("WAPersistedJobManager").MAX_STEP_HARD_START_COUNT_AFTER_TIMEOUT
      );
    }
    function g(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "logPersistedJobJobsStoreTriggered",
        { type: e },
      );
    }
    function h() {
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
        maybeCreateJob: y,
      };
    }
    async function y(e) {
      var t,
        n,
        r,
        a = o("WAWebSchemaJobs").getTable(),
        i = b(
          e.type,
          (t = e.uniqKey) != null ? t : o("WARandomHex").randomHex(32),
        ),
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
    async function C(e, t) {
      var n = await o("WAWebSchemaJobs")
        .getTable()
        .equals(["uniqKey"], b(e, t));
      return n.some(function (e) {
        return e.step !== o("WAPersistedJobManager").FINISHED_JOB;
      });
    }
    function b(e, t) {
      return JSON.stringify([e, t]);
    }
    function v() {
      if (u == null)
        throw (
          o("WAWebJobsMigrationGating").isJobsManagerDecommissioned() &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[jobs-manager] reached while decommissioned",
                  ])),
              )
              .sendLogs("jobs-manager-reached-while-decommissioned"),
          r("err")("jobs manager has not been initialized")
        );
      return u;
    }
    ((l.startWebPersistedJobManager = c),
      (l.retirePersistedJobs = d),
      (l.maybeCreateJob = y),
      (l.hasUnfinishedJob = C),
      (l.getJobManager = v));
  },
  98,
);
