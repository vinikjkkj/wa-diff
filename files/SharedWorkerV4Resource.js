__d(
  "SharedWorkerV4Resource",
  [
    "Env",
    "Promise",
    "SharedWorkerDevChangeManager",
    "SharedWorkerEventManager",
    "SharedWorkerLoggingUtils",
    "SharedWorkerUptimeTracker",
    "SharedWorkerV4MigrationUtils",
    "SiteData",
    "StaticSiteData",
    "WebWorkerV4DynamicData",
    "asyncToGeneratorRuntime",
    "buildSharedWorkerInitQPLLogger",
    "createSharedWorkerV4BundleUrl",
    "err",
    "getErrorSafe",
    "supportsModuleWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e4,
      c = 3e4,
      d = 3;
    function m(e, t, n, a) {
      return t == null ||
        n == null ||
        (o(
          "SharedWorkerDevChangeManager",
        ).shouldUpgradeWorkerForDevExperimental(e) &&
          !a)
        ? !0
        : t < r("SiteData").client_revision &&
            n < r("SiteData")[r("StaticSiteData").spin_time_key];
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i,
            l = e.name,
            u = r("buildSharedWorkerInitQPLLogger")(
              n == null ? void 0 : n.onQPLEvent,
            );
          u.start({
            version: 4,
            workerName: l,
            callReason: n == null ? void 0 : n.reason,
          });
          var c = yield o("SharedWorkerV4MigrationUtils").fetchV4State(l),
            p = yield o(
              "SharedWorkerV4MigrationUtils",
            ).probeConcurrentInitLocks(l),
            _ = p.concurrentTabsAtInit,
            g = p.pendingInitLocksAtStart;
          if (
            (u.addAnnotations({
              int: { concurrentTabsAtInit: _, pendingInitLocksAtStart: g },
            }),
            c.isRunning && c.revision != null && c.spinTime != null)
          ) {
            var h =
                e.sandboxOnlyChecksum ===
                (s || (s = r("Env"))).web_worker_checksum,
              C = m(l, c.revision, c.spinTime, h);
            if (!C) {
              u.markEventStart("create_worker");
              var b = yield y(e, u, c.revision),
                v = b.worker,
                S = b.workerID,
                R = b.workerType;
              return (
                u.addAnnotations({
                  int: { workerRev: c.revision },
                  string: { workerID: S },
                  bool: { browserCachedInit: !0, lockFastPath: !0 },
                }),
                L(v, l, S, R, u, t)
              );
            }
            (u.addAnnotations({
              int: { oldWorkerRev: c.revision },
              bool: { upgrading: !0 },
            }),
              u.markEventStart("old_worker_shutdown"),
              yield o("SharedWorkerV4MigrationUtils").stealV4KillswitchLock(
                l,
                u,
              ),
              yield o("SharedWorkerV4MigrationUtils").waitForV4WorkerShutdown(
                l,
                c.revision,
                c.spinTime,
                u,
              ),
              u.markEventEnd("old_worker_shutdown"));
          }
          for (
            var E = null, k = { lastMark: null, marks: new Set() }, I = 0;
            I < d;
            I++
          ) {
            (k.marks.clear(), (k.lastMark = null));
            try {
              return (
                I > 0 &&
                  (u.addAnnotations({ int: { retryAttempt: I } }),
                  u.markPoint("init_retry_" + I)),
                yield f(e, l, u, t, I > 0, k)
              );
            } catch (e) {
              var T, D, x;
              ((E = r("getErrorSafe")(e)),
                u.addAnnotations({
                  int:
                    ((T = {}),
                    (T["retry_" + I + "_workerInitMarksReceived"] =
                      k.marks.size),
                    T),
                  string:
                    ((x = {}),
                    (x["retry_" + I + "_error"] = E.message),
                    (x["retry_" + I + "_lastInitMark"] =
                      (D = k.lastMark) != null ? D : "none"),
                    x),
                }));
              try {
                yield o("SharedWorkerV4MigrationUtils").stealV4KillswitchLock(
                  l,
                  u,
                );
                var $ = yield o("SharedWorkerV4MigrationUtils").fetchV4State(l);
                yield o("SharedWorkerV4MigrationUtils").waitForV4WorkerShutdown(
                  l,
                  $.revision,
                  $.spinTime,
                  u,
                );
              } catch (e) {}
            }
          }
          throw (
            u.endFailure("init_retries_exhausted", {
              string: {
                lastError:
                  (a = (i = E) == null ? void 0 : i.message) != null
                    ? a
                    : "unknown",
              },
            }),
            E != null
              ? E
              : r("err")("V4 worker init failed after %s retries", d)
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r, o, a) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            (i === void 0 && (i = !1), n.markEventStart("create_worker"));
            var s = o("WebWorkerV4DynamicData").readDynamicDataForV4Worker(
                e,
                i,
              ),
              u = yield y(e, n, null, l),
              c = u.bundleReadyPromise,
              d = u.worker,
              m = u.workerID,
              p = u.workerType;
            n.addAnnotations({ string: { workerID: m } });
            var _ = yield s,
              f = _.cacheHit,
              g = _.clientRevision,
              C = _.data,
              v = _.time;
            (n.addAnnotations({
              bool: { hrpCacheHit: f },
              int: { hrpCacheAgeSec: Math.floor(Date.now() / 1e3) - v },
            }),
              g != null &&
                n.addAnnotations({
                  bool: {
                    hrpCacheRevisionMatchesClientRevision:
                      g === r("SiteData").client_revision,
                  },
                  int: { hrpCacheRevision: g },
                }));
            try {
              return (yield b(d, e, C, n), yield S(c, n), L(d, t, m, p, n, a));
            } catch (e) {
              throw (h(d, n, "post_open_failure"), e);
            }
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      try {
        (e.port.close(), t.markPoint("v4_partial_worker_port_closed_" + n));
      } catch (e) {}
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = e.name,
              l = String(n != null ? n : r("SiteData").client_revision),
              s = r("createSharedWorkerV4BundleUrl")(l),
              d = r("supportsModuleWorker")(!0) ? "module" : "classic";
            t.addAnnotations({ string: { workerType: d } });
            var m = new SharedWorker(s, { name: i, type: d });
            t.markPoint("shared_worker_construct_done");
            var p = new Set();
            (m.port.addEventListener("message", function (e) {
              var n, r;
              if (
                typeof e.data == "object" &&
                ((n = e.data) == null ? void 0 : n.type) ===
                  "worker-init-mark" &&
                typeof ((r = e.data) == null ? void 0 : r.response) == "object"
              ) {
                var o,
                  i,
                  l =
                    typeof ((o = e.data) == null ? void 0 : o.response) ==
                    "object"
                      ? (i = e.data) == null
                        ? void 0
                        : i.response
                      : {},
                  s = l == null ? void 0 : l.point;
                typeof s == "string" &&
                  !p.has(s) &&
                  (p.add(s),
                  t.markPoint("worker_init_point_" + s),
                  a != null && ((a.lastMark = s), a.marks.add(s)));
              }
            }),
              m.port.addEventListener("message", function (e) {
                var n;
                if (
                  typeof e.data == "object" &&
                  ((n = e.data) == null ? void 0 : n.type) === "self-terminate"
                ) {
                  var r,
                    a,
                    l =
                      typeof ((r = e.data) == null ? void 0 : r.response) ==
                      "object"
                        ? (a = e.data) == null
                          ? void 0
                          : a.response
                        : {},
                    s =
                      typeof (l == null ? void 0 : l.reason) == "string"
                        ? l.reason
                        : "unknown",
                    u =
                      typeof (l == null ? void 0 : l.error) == "string"
                        ? l.error
                        : void 0,
                    c =
                      typeof (l == null ? void 0 : l.workerID) == "string"
                        ? l.workerID
                        : "unknown";
                  (o("SharedWorkerLoggingUtils").logSelfTermination(
                    i,
                    "initScriptV4",
                    s,
                    c,
                  ),
                    t.endFailure("worker_self_terminated", {
                      string: {
                        selfTerminationReason: s,
                        selfTerminationError: u,
                      },
                    }));
                }
              }),
              m.addEventListener("error", function (e) {
                o("SharedWorkerLoggingUtils").logSharedWorkerError(t, e, i);
              }));
            var _ = Date.now(),
              f = E(
                m.port,
                function (e) {
                  var t;
                  if (
                    typeof e.data == "object" &&
                    ((t = e.data) == null ? void 0 : t.type) ===
                      "connection-ack"
                  ) {
                    var n,
                      r,
                      o =
                        typeof ((n = e.data) == null ? void 0 : n.response) ==
                        "object"
                          ? (r = e.data) == null
                            ? void 0
                            : r.response
                          : {};
                    return {
                      from:
                        typeof (o == null ? void 0 : o.from) == "string"
                          ? o.from
                          : "unknown",
                      hrpStatus:
                        typeof (o == null ? void 0 : o.hrpStatus) == "string"
                          ? o.hrpStatus
                          : "unknown",
                      workerID:
                        typeof (o == null ? void 0 : o.workerID) == "string"
                          ? o.workerID
                          : "unknown",
                    };
                  }
                  return null;
                },
                u,
                "V4 worker connection-ack timeout for " + i,
              ),
              g = Date.now(),
              y = E(
                m.port,
                function (e) {
                  var t, n, r;
                  return typeof e.data == "object" &&
                    ((t = e.data) == null ? void 0 : t.type) ===
                      "connection-ack" &&
                    typeof ((n = e.data) == null ? void 0 : n.response) ==
                      "object" &&
                    ((r = e.data) == null || (r = r.response) == null
                      ? void 0
                      : r.from) === "bundle-v4"
                    ? !0
                    : null;
                },
                c,
                "V4 bundle ready timeout for " + i,
              ).then(
                function () {
                  return { latencyMs: Date.now() - g, matched: !0 };
                },
                function () {
                  return { latencyMs: Date.now() - g, matched: !1 };
                },
              );
            (m.port.start(), m.port.postMessage({ type: "ww-connection-ack" }));
            var C;
            try {
              C = yield f;
            } catch (e) {
              throw (h(m, t, "ack_timeout"), e);
            }
            var b = C,
              v = b.from,
              S = b.hrpStatus,
              R = b.workerID;
            return (
              t.markPoint("worker_connection_established"),
              t.addAnnotations({
                int: { connectionAckLatencyMs: Date.now() - _ },
                string: { connectedFrom: v },
              }),
              {
                bundleReadyPromise: y,
                hrpStatus: S,
                worker: m,
                workerID: R,
                workerType: d,
              }
            );
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o) {
            o.markEventStart("hrp_send");
            var a = !1,
              i = r("SiteData").client_revision,
              l = E(
                e.port,
                function (e) {
                  var t;
                  return typeof e.data == "object" &&
                    ((t = e.data) == null ? void 0 : t.type) === "v4-hrp-init"
                    ? !0
                    : null;
                },
                c,
                "V4 HRP init timeout for " + t.name,
              );
            (e.port.postMessage({
              type: "v4-hrp-init",
              hrp: n.hrp,
              js_env: n.js_env,
              is_dev: a,
              revision: i,
              spinMode: r("SiteData").spin,
              spinTime: r("SiteData")[r("StaticSiteData").spin_time_key],
            }),
              yield l,
              o.markEventEnd("hrp_send"));
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e,
            r = n.latencyMs,
            o = n.matched;
          (t.addAnnotations({
            bool: { bundleReadyMatched: o },
            int: { bundleReadyLatencyMs: r },
          }),
            o && t.markPoint("bundle_ready"));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r, a, i) {
      return (
        e.port.addEventListener("message", function (e) {
          var n;
          if (typeof e.data == "object") {
            var r = (n = e.data) == null ? void 0 : n.type;
            if (r === "sw-shutdown" || r === "self-terminate") {
              var a,
                l,
                s =
                  typeof ((a = e.data) == null ? void 0 : a.response) ==
                  "object"
                    ? (l = e.data) == null
                      ? void 0
                      : l.response
                    : {},
                u =
                  typeof (s == null ? void 0 : s.reason) == "string"
                    ? s.reason
                    : void 0,
                c =
                  typeof (s == null ? void 0 : s.workerID) == "string"
                    ? s.workerID
                    : void 0;
              (o("SharedWorkerLoggingUtils").logShutdown(t, null, u, c),
                i == null || i(u, c),
                o("SharedWorkerUptimeTracker").stopUptimeTracking(t));
            }
          }
        }),
        o("SharedWorkerEventManager").registerForwardListeners(e),
        a.markEventEnd("create_worker"),
        a.addAnnotations({
          int: { worker_version: 4 },
          bool: { static_url: !0, parallel_init: !0 },
        }),
        a.endSuccess(),
        o("SharedWorkerUptimeTracker").startUptimeTracking(e, t),
        o("SharedWorkerDevChangeManager").trackCreatedWorker(t),
        { worker: e, workerID: n, workerType: r }
      );
    }
    function E(t, o, a, i) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var l = function (r) {
          var n = o(r);
          n != null &&
            (t.removeEventListener("message", l), clearTimeout(s), e(n));
        };
        t.addEventListener("message", l);
        var s = setTimeout(function () {
          (t.removeEventListener("message", l), n(r("err")(i)));
        }, a);
      });
    }
    ((l.clearV4HrpCache = o("WebWorkerV4DynamicData").clearV4HrpCache),
      (l.createSharedWorkerV4 = p));
  },
  98,
);
