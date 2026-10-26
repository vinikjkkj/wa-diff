__d(
  "WAWebPersistedJobManager",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebJobsStorage").initialize();
          var e = o("WAWebSchemaJobs").getTable();
          c = f(
            e.all().then(function (e) {
              return (h(e), e);
            }),
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (yield o("WAWebJobsStorageUtils").storageExists()) {
            yield o("WAWebJobsStorage").initialize();
            var e = yield o("WAWebSchemaJobs").getTable().all(),
              t = e.filter(y);
            if (t.length > 0) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[jobs-manager] draining ",
                    " leftover jobs",
                  ])),
                t.length,
              ),
                h(e));
              var r = f((u || (u = n("Promise"))).resolve(e));
              (yield r.initialJobsPromise,
                yield u.allSettled(Array.from(r.activeJobs.values())));
            }
            yield o("WAWebScheduledOperations").scheduleOperation(
              o("WAWebScheduledOperations").ScheduledOperation
                .DELETE_JOBS_STORAGE,
              o("WAWebJobsStorage").destroy,
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = new (o("WAPersistedJobManager").PersistedJobManager)({
        accessors: b(),
        unfinishedJobEntries: e,
        isRestartAfterCrash: !1,
        listeners: {
          onJobStarted: r("WAWebNoop"),
          onJobFinished: o("WAWebNullFunc").returnNull,
        },
        deprecatedJobs: {},
        executionScheduler: r("WAWebPersistedJobTaskScheduler"),
        useExecutionScheduler: g,
      });
      return (r("WAWebPersistedJob")(t), t);
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("wmi_jm_to_ts_m1");
    }
    function h(e) {
      e.filter(y).forEach(function (e) {
        C(e.type);
      });
    }
    function y(e) {
      return (
        e.step !== o("WAPersistedJobManager").FINISHED_JOB &&
        e.stepHardStartCountAfterTimeout <
          o("WAPersistedJobManager").MAX_STEP_HARD_START_COUNT_AFTER_TIMEOUT
      );
    }
    function C(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "logPersistedJobJobsStoreTriggered",
        { type: e },
      );
    }
    function b() {
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
        maybeCreateJob: v,
      };
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r,
            a,
            i = o("WAWebSchemaJobs").getTable(),
            l = E(
              e.type,
              (t = e.uniqKey) != null ? t : o("WARandomHex").randomHex(32),
            ),
            s = {
              type: e.type,
              uniqKey: l,
              startTime: o("WATimeUtils").unixTime(),
              version: (r = e.version) != null ? r : 1,
              original: e.args,
              current: e.args,
              step: o("WAPersistedJobManager").UNSTARTED_JOB,
              waitUntil:
                (a = e == null ? void 0 : e.waitUntil) != null ? a : null,
              stepFirstStartTime: null,
              stepHardStartCountAfterTimeout: 0,
              stepUnexpectedErrorCount: 0,
              backedOffCount: 0,
            };
          if (e.uniqKey == null)
            return i.createOrReplace(s).then(function (e) {
              return { id: e, newlyCreated: !0 };
            });
          var c = yield i.equals(["uniqKey"], [e.uniqKey]);
          if (c.length === 0)
            return i.createOrReplace(s).then(function (e) {
              return { id: e, newlyCreated: !0 };
            });
          var d = [],
            m = null;
          for (var p of c)
            p.step !== o("WAPersistedJobManager").FINISHED_JOB
              ? (m = p)
              : d.push(i.remove(p.jobId));
          return (
            yield (u || (u = n("Promise"))).all(d),
            m != null
              ? { id: m.jobId, newlyCreated: !1 }
              : i.createOrReplace(s).then(function (e) {
                  return { id: e, newlyCreated: !0 };
                })
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaJobs")
            .getTable()
            .equals(["uniqKey"], E(e, t));
          return n.some(function (e) {
            return e.step !== o("WAPersistedJobManager").FINISHED_JOB;
          });
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return JSON.stringify([e, t]);
    }
    function k() {
      if (c == null)
        throw (
          o("WAWebJobsMigrationGating").isJobsManagerDecommissioned() &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[jobs-manager] reached while decommissioned",
                  ])),
              )
              .sendLogs("jobs-manager-reached-while-decommissioned"),
          r("err")("jobs manager has not been initialized")
        );
      return c;
    }
    ((l.startWebPersistedJobManager = d),
      (l.retirePersistedJobs = p),
      (l.maybeCreateJob = v),
      (l.hasUnfinishedJob = R),
      (l.getJobManager = k));
  },
  98,
);
