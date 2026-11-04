__d(
  "WAWebJobOrchestrator",
  [
    "WAConcurrentBucketJobQueue",
    "WADefaultJobNoQueue",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebBrokerGlobalAppState",
    "WAWebJobOrchestratorHelper",
    "WAWebOrchestratorJobStatsLogger",
    "WAWebWamEnumWebcScenarioType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = {
        maxConcurrency: 1,
        bestEffortWaitTimeoutSec: o("WATimeUtils").FIVE_MINUTES,
        jobPrioritiesQuota: new Map([
          [(u = o("WAJobOrchestratorTypes")).JOB_PRIORITY.HIGH, 5],
          [u.JOB_PRIORITY.LOW, 1],
          [u.JOB_PRIORITY.OFFLINE, 3],
          [u.JOB_PRIORITY.HISTORY_SYNC, 1],
        ]),
      },
      d = {
        maxConcurrency: 1,
        bestEffortWaitTimeoutSec: o("WATimeUtils").FIVE_MINUTES,
        jobPrioritiesQuota: new Map([
          [u.JOB_PRIORITY.HIGH, 5],
          [u.JOB_PRIORITY.LOW, 1],
          [u.JOB_PRIORITY.OFFLINE, 1],
          [u.JOB_PRIORITY.HISTORY_SYNC, 1],
        ]),
      },
      m = "default",
      p = "bucket",
      _ = new Map(),
      f = new WeakMap();
    function g() {
      var e,
        t = C(),
        n = h();
      if (n.size === 0) return t;
      var r = f.get(t);
      if (r != null && y(r.overrides, n)) return r.config;
      var o = new Map((e = t.jobPrioritiesQuota) != null ? e : []);
      n.forEach(function (e, t) {
        o.set(t, e);
      });
      var a = babelHelpers.extends({}, t, { jobPrioritiesQuota: o });
      return (f.set(t, { overrides: n, config: a }), a);
    }
    function h() {
      var e = new Map();
      return (
        _.forEach(function (t, n) {
          try {
            var r = t();
            r != null && e.set(n, r);
          } catch (e) {
            I(e);
          }
        }),
        e
      );
    }
    function y(e, t) {
      return (
        e.size === t.size &&
        Array.from(t).every(function (t) {
          var n = t[0],
            r = t[1];
          return e.get(n) === r;
        })
      );
    }
    function C() {
      var e = r("WAWebBrokerGlobalAppState").getCurrentScenario();
      return e === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE
        ? c
        : e ===
            o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.OFFLINE_RESUME
          ? d
          : c;
    }
    var b;
    function v() {
      return (
        b || (b = new (o("WAWebOrchestratorJobStatsLogger").JobStatsLogger)()),
        b
      );
    }
    var S = {};
    function R(t, n, r) {
      (L(t.appliedConfig, n) && (r == null ? void 0 : r.applyNow) !== !0) ||
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[job-orchestrator] applying config",
            ])),
        ),
        t.orchestrator.updateConfig(n, r),
        (t.appliedConfig = n));
    }
    function L(e, t) {
      return e === t || !o("WAWebJobOrchestratorHelper").hasConfigChanged(e, t);
    }
    function E(e, t) {
      (t == null ? _.delete(e) : _.set(e, t), k());
    }
    function k() {
      var e = Object.keys(S);
      if (e.length !== 0)
        try {
          var t = g();
          e.forEach(function (e) {
            try {
              R(S[e], t, { applyNow: !0 });
            } catch (e) {
              I(e);
            }
          });
        } catch (e) {
          I(e);
        }
    }
    function I(e) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[job-orchestrator] failed to reapply quota override config",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("job-orchestrator-quota-override-config-failed");
    }
    function T(e) {
      e === void 0 && (e = !1);
      var t = e ? m : p,
        n = g(),
        r = S[t];
      if (r) return (R(r, n), r.orchestrator);
      var a =
        t === "bucket"
          ? new (o("WAConcurrentBucketJobQueue").WAConcurrentBucketJobQueue)()
          : new (o("WADefaultJobNoQueue").WADefaultJobNoQueue)();
      return (
        a.init(n, v()),
        (S[t] = { appliedConfig: n, orchestrator: a }),
        a
      );
    }
    ((l.setPriorityQuotaOverride = E), (l.getInstance = T));
  },
  98,
);
