__d(
  "SharedWorkerV4Resource",
  [
    "Env",
    "SharedWorkerDevChangeManager",
    "SharedWorkerEventManager",
    "SharedWorkerLoggingUtils",
    "SharedWorkerUptimeTracker",
    "SharedWorkerV4MigrationUtils",
    "SiteData",
    "StaticSiteData",
    "WebWorkerV4DynamicData",
    "buildSharedWorkerInitQPLLogger",
    "createSharedWorkerV4BundleUrl",
    "err",
    "getErrorSafe",
    "supportsModuleWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e4,
      u = 3e4,
      c = 3;
    function d(e, t, n, a) {
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
    async function m(t, n, a) {
      var i,
        l,
        s = t.name,
        u = r("buildSharedWorkerInitQPLLogger")(
          a == null ? void 0 : a.onQPLEvent,
        );
      u.start({
        version: 4,
        workerName: s,
        callReason: a == null ? void 0 : a.reason,
      });
      var m = await o("SharedWorkerV4MigrationUtils").fetchV4State(s),
        _ = await o("SharedWorkerV4MigrationUtils").probeConcurrentInitLocks(s),
        g = _.concurrentTabsAtInit,
        h = _.pendingInitLocksAtStart;
      if (
        (u.addAnnotations({
          int: { concurrentTabsAtInit: g, pendingInitLocksAtStart: h },
        }),
        m.isRunning && m.revision != null && m.spinTime != null)
      ) {
        var C =
            t.sandboxOnlyChecksum === (e || (e = r("Env"))).web_worker_checksum,
          b = d(s, m.revision, m.spinTime, C);
        if (!b) {
          u.markEventStart("create_worker");
          var v = await f(t, u, m.revision),
            S = v.worker,
            R = v.workerID,
            L = v.workerType;
          return (
            u.addAnnotations({
              int: { workerRev: m.revision },
              string: { workerID: R },
              bool: { browserCachedInit: !0, lockFastPath: !0 },
            }),
            y(S, s, R, L, u, n)
          );
        }
        (u.addAnnotations({
          int: { oldWorkerRev: m.revision },
          bool: { upgrading: !0 },
        }),
          u.markEventStart("old_worker_shutdown"),
          await o("SharedWorkerV4MigrationUtils").stealV4KillswitchLock(s, u),
          await o("SharedWorkerV4MigrationUtils").waitForV4WorkerShutdown(
            s,
            m.revision,
            m.spinTime,
            u,
          ),
          u.markEventEnd("old_worker_shutdown"));
      }
      for (
        var E = null, k = { lastMark: null, marks: new Set() }, I = 0;
        I < c;
        I++
      ) {
        (k.marks.clear(), (k.lastMark = null));
        try {
          return (
            I > 0 &&
              (u.addAnnotations({ int: { retryAttempt: I } }),
              u.markPoint("init_retry_" + I)),
            await p(t, s, u, n, I > 0, k)
          );
        } catch (e) {
          var T, D, x;
          ((E = r("getErrorSafe")(e)),
            u.addAnnotations({
              int:
                ((T = {}),
                (T["retry_" + I + "_workerInitMarksReceived"] = k.marks.size),
                T),
              string:
                ((x = {}),
                (x["retry_" + I + "_error"] = E.message),
                (x["retry_" + I + "_lastInitMark"] =
                  (D = k.lastMark) != null ? D : "none"),
                x),
            }));
          try {
            await o("SharedWorkerV4MigrationUtils").stealV4KillswitchLock(s, u);
            var $ = await o("SharedWorkerV4MigrationUtils").fetchV4State(s);
            await o("SharedWorkerV4MigrationUtils").waitForV4WorkerShutdown(
              s,
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
              (i = (l = E) == null ? void 0 : l.message) != null
                ? i
                : "unknown",
          },
        }),
        E != null ? E : r("err")("V4 worker init failed after %s retries", c)
      );
    }
    async function p(e, t, n, a, i, l) {
      (i === void 0 && (i = !1), n.markEventStart("create_worker"));
      var s = o("WebWorkerV4DynamicData").readDynamicDataForV4Worker(e, i),
        u = await f(e, n, null, l),
        c = u.bundleReadyPromise,
        d = u.worker,
        m = u.workerID,
        p = u.workerType;
      n.addAnnotations({ string: { workerID: m } });
      var C = await s,
        b = C.cacheHit,
        v = C.clientRevision,
        S = C.data,
        R = C.time;
      (n.addAnnotations({
        bool: { hrpCacheHit: b },
        int: { hrpCacheAgeSec: Math.floor(Date.now() / 1e3) - R },
      }),
        v != null &&
          n.addAnnotations({
            bool: {
              hrpCacheRevisionMatchesClientRevision:
                v === r("SiteData").client_revision,
            },
            int: { hrpCacheRevision: v },
          }));
      try {
        return (await g(d, e, S, n), await h(c, n), y(d, t, m, p, n, a));
      } catch (e) {
        throw (_(d, n, "post_open_failure"), e);
      }
    }
    function _(e, t, n) {
      try {
        (e.port.close(), t.markPoint("v4_partial_worker_port_closed_" + n));
      } catch (e) {}
    }
    async function f(e, t, n, a) {
      var i = e.name,
        l = String(n != null ? n : r("SiteData").client_revision),
        c = r("createSharedWorkerV4BundleUrl")(l),
        d = r("supportsModuleWorker")(!0) ? "module" : "classic";
      t.addAnnotations({ string: { workerType: d } });
      var m = new SharedWorker(c, { name: i, type: d });
      t.markPoint("shared_worker_construct_done");
      var p = new Set();
      (m.port.addEventListener("message", function (e) {
        var n, r;
        if (
          typeof e.data == "object" &&
          ((n = e.data) == null ? void 0 : n.type) === "worker-init-mark" &&
          typeof ((r = e.data) == null ? void 0 : r.response) == "object"
        ) {
          var o,
            i,
            l =
              typeof ((o = e.data) == null ? void 0 : o.response) == "object"
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
                typeof ((r = e.data) == null ? void 0 : r.response) == "object"
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
                string: { selfTerminationReason: s, selfTerminationError: u },
              }));
          }
        }),
        m.addEventListener("error", function (e) {
          o("SharedWorkerLoggingUtils").logSharedWorkerError(t, e, i);
        }));
      var f = Date.now(),
        g = C(
          m.port,
          function (e) {
            var t;
            if (
              typeof e.data == "object" &&
              ((t = e.data) == null ? void 0 : t.type) === "connection-ack"
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
          s,
          "V4 worker connection-ack timeout for " + i,
        ),
        h = Date.now(),
        y = C(
          m.port,
          function (e) {
            var t, n, r;
            return typeof e.data == "object" &&
              ((t = e.data) == null ? void 0 : t.type) === "connection-ack" &&
              typeof ((n = e.data) == null ? void 0 : n.response) == "object" &&
              ((r = e.data) == null || (r = r.response) == null
                ? void 0
                : r.from) === "bundle-v4"
              ? !0
              : null;
          },
          u,
          "V4 bundle ready timeout for " + i,
        ).then(
          function () {
            return { latencyMs: Date.now() - h, matched: !0 };
          },
          function () {
            return { latencyMs: Date.now() - h, matched: !1 };
          },
        );
      (m.port.start(), m.port.postMessage({ type: "ww-connection-ack" }));
      var b;
      try {
        b = await g;
      } catch (e) {
        throw (_(m, t, "ack_timeout"), e);
      }
      var v = b,
        S = v.from,
        R = v.hrpStatus,
        L = v.workerID;
      return (
        t.markPoint("worker_connection_established"),
        t.addAnnotations({
          int: { connectionAckLatencyMs: Date.now() - f },
          string: { connectedFrom: S },
        }),
        {
          bundleReadyPromise: y,
          hrpStatus: R,
          worker: m,
          workerID: L,
          workerType: d,
        }
      );
    }
    async function g(e, t, n, o) {
      o.markEventStart("hrp_send");
      var a = !1,
        i = r("SiteData").client_revision,
        l = C(
          e.port,
          function (e) {
            var t;
            return typeof e.data == "object" &&
              ((t = e.data) == null ? void 0 : t.type) === "v4-hrp-init"
              ? !0
              : null;
          },
          u,
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
        await l,
        o.markEventEnd("hrp_send"));
    }
    async function h(e, t) {
      var n = await e,
        r = n.latencyMs,
        o = n.matched;
      (t.addAnnotations({
        bool: { bundleReadyMatched: o },
        int: { bundleReadyLatencyMs: r },
      }),
        o && t.markPoint("bundle_ready"));
    }
    function y(e, t, n, r, a, i) {
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
    function C(e, t, n, o) {
      return new Promise(function (a, i) {
        var l = function (r) {
          var n = t(r);
          n != null &&
            (e.removeEventListener("message", l), clearTimeout(s), a(n));
        };
        e.addEventListener("message", l);
        var s = setTimeout(function () {
          (e.removeEventListener("message", l), i(r("err")(o)));
        }, n);
      });
    }
    ((l.clearV4HrpCache = o("WebWorkerV4DynamicData").clearV4HrpCache),
      (l.createSharedWorkerV4 = m));
  },
  98,
);
