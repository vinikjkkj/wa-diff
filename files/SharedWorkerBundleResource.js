__d(
  "SharedWorkerBundleResource",
  [
    "BootloaderPreloader",
    "Deferred",
    "FBLogger",
    "Promise",
    "SharedWorkerDevChangeManager",
    "SharedWorkerEventManager",
    "SharedWorkerLockManager",
    "SharedWorkerLoggingUtils",
    "SharedWorkerMigrationUtils",
    "SharedWorkerStorageManager",
    "SharedWorkerUptimeTracker",
    "SiteData",
    "StaticSiteData",
    "WebWorkerV2DynamicData",
    "asyncToGeneratorRuntime",
    "buildSharedWorkerInitQPLLogger",
    "buildSharedWorkerTerminateQPLLogger",
    "createSharedWorkerV2BundleUrl",
    "err",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "logSharedWorkerInitStep",
    "pageID",
    "promiseDone",
    "setTimeout",
    "supportsModuleWorker",
    "supportsNativeWebLock",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = "shared_worker_broadcast_channel",
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.name = "SelfTerminationError"),
            (n.message = "Worker self terminated with the reason: " + t),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function d(e, t, n, a) {
      a == null || a.markEventStart("shared_worker_construct");
      var i = new SharedWorker(e, t);
      (a == null || a.markEventEnd("shared_worker_construct"),
        i.addEventListener("error", function (e) {
          o("SharedWorkerLoggingUtils").logSharedWorkerError(a, e, t);
        }));
      var l = new Set();
      o("SharedWorkerEventManager").registerWorkerSelfTerminationListener(
        i,
        function (e, n, r) {
          o("SharedWorkerLoggingUtils").logSelfTermination(t, e, n, r);
        },
        { once: !0 },
      );
      var s = 0;
      (o("SharedWorkerEventManager").registerConnectionAckListener(
        i,
        function (e, t) {
          if ((s++, l.has("worker_connection_established"))) {
            a == null || a.addAnnotations({ int: { connectionAckNum: s } });
            return;
          }
          (l.add("worker_connection_established"),
            a == null ||
              a.addAnnotations({ string: { connectedFrom: e, workerID: t } }),
            a == null || a.markPoint("worker_connection_established"));
        },
      ),
        o("SharedWorkerEventManager").registerWorkerInitPointsListener(
          i,
          function (e) {
            l.has(e) ||
              (l.add(e), a == null || a.markPoint("worker_init_point_" + e));
          },
        ),
        i.port.start(),
        o("SharedWorkerEventManager").registerExecuteWorkerImportsListener(
          i,
          a,
          function (e) {
            var t = e.attempts,
              n = e.err;
            (a == null ||
              a.addAnnotations({
                string: { importsError: n },
                int: { importAttempts: t },
              }),
              a == null ||
                a.markPoint(
                  n == null
                    ? "bundle_imports_success"
                    : "bundle_imports_failure",
                ));
          },
        ));
      var u = new (r("Deferred"))();
      return (
        o("SharedWorkerEventManager").registerExecuteWorkerAckListener(
          i,
          a,
          function (e) {
            var t = e.err,
              n = e.isFirstInit,
              i = e.workerRev,
              l = e.workerSpinMode,
              s = e.workerSpinTime;
            (o("SharedWorkerLoggingUtils").logExecuteAck(a, s, t, n, i, l),
              t != null || s == null || i == null
                ? u.reject(
                    r("err")(t != null ? t : "no worker rev or spin time"),
                  )
                : u.resolve({ rev: i, spinTime: s }));
          },
        ),
        a == null || a.markEventStart("execute_worker"),
        o("SharedWorkerEventManager").emitExecuteWorker(i, {
          jsModuleResource: n,
          isDev: !1,
        }),
        u.getPromise().then(function (e) {
          var t = e.rev,
            n = e.spinTime;
          return { worker: i, rev: t, spinTime: n };
        })
      );
    }
    function m(e, t, n) {
      n == null || n.markEventStart("worker_constructor");
      var o = e,
        a = r("supportsModuleWorker")(!0)
          ? new SharedWorker(o, { name: t, type: "module" })
          : new SharedWorker(o, t);
      return (
        n == null ||
          n.markEventEnd("worker_constructor", {
            string: { workerUrl: o.toString() },
          }),
        a
      );
    }
    function p(e, t, n) {
      var r = [],
        a = new Set();
      (r.push(
        o("SharedWorkerEventManager").registerWorkerInitPointsListener(
          e,
          function (e) {
            a.has(e) ||
              (a.add(e), n == null || n.markPoint("worker_init_point_" + e));
          },
        ),
      ),
        r.push(
          o("SharedWorkerEventManager").registerHrpInitListener(
            e,
            n,
            function () {},
          ),
        ));
      var i = function (r) {
        o("SharedWorkerLoggingUtils").logSharedWorkerError(n, r, t);
      };
      return (
        e.addEventListener("error", i),
        r.push(function () {
          return e.removeEventListener("error", i);
        }),
        r
      );
    }
    function _(e, t, n, a) {
      var i = m(e, t, a);
      o("SharedWorkerEventManager").registerConnectionAckListener(
        i,
        function (e, t, n) {
          (a == null ||
            a.addAnnotations({
              string: { connectedFrom: e, workerID: t, hrpStatus: n },
            }),
            a == null || a.markPoint("worker_connection_established"));
        },
      );
      var l = new (r("Deferred"))();
      return (
        o("SharedWorkerEventManager").registerWorkerSelfTerminationListener(
          i,
          function (e, n, r, i) {
            (a == null ||
              a.addAnnotations({ string: { selfTerminationError: i } }),
              o("SharedWorkerLoggingUtils").logSelfTermination(t, e, n, r),
              l.reject(new c(n)));
          },
          { once: !0 },
        ),
        p(i, t, a),
        i.port.start(),
        o("SharedWorkerEventManager").emitConnectionAckRequest(i),
        a == null || a.markPoint("read_dynamic_data"),
        r("promiseDone")(
          I(n, !1, a).then(
            function (e) {
              var t = e.hrp;
              (a == null || a.markEventStart("hrp_init"),
                o("SharedWorkerEventManager").emitHrpInit(
                  i,
                  { hrp: t.hrp, js_env: t.js_env, isDev: !1 },
                  a,
                ));
            },
            function (e) {
              var t = r("getErrorSafe")(e);
              a == null ||
                a.addAnnotations({ string: { hrpInitErr: t.toString() } });
            },
          ),
        ),
        o("SharedWorkerEventManager").registerExecuteWorkerAckListener(
          i,
          a,
          function (e) {
            var t = e.err,
              n = e.isFirstInit,
              i = e.workerRev,
              s = e.workerSpinMode,
              u = e.workerSpinTime;
            (o("SharedWorkerLoggingUtils").logExecuteAck(a, u, t, n, i, s),
              t != null || i == null || u == null
                ? l.reject(
                    r("err")(t != null ? t : "no worker rev or spin time"),
                  )
                : l.resolve({ rev: i, spinTime: u }));
          },
        ),
        a == null || a.markEventStart("execute_worker"),
        o("SharedWorkerEventManager").emitExecuteWorker(i),
        l.getPromise().then(function (e) {
          var t = e.rev,
            n = e.spinTime;
          return { worker: i, rev: t, spinTime: n };
        })
      );
    }
    function f(e, t, n) {
      var a = [],
        i = function (r, i, l) {
          (a.forEach(function (e) {
            return e();
          }),
            t(r, i, l),
            o("SharedWorkerUptimeTracker").stopUptimeTracking(n));
        };
      (a.push(o("SharedWorkerEventManager").registerForwardListeners(e)),
        a.push(
          o("SharedWorkerEventManager").registerWorkerShutdownListener(
            e,
            function (e) {
              var t = e.reason,
                r = e.workerID;
              (o("SharedWorkerLoggingUtils").logShutdown(n, null, t, r),
                i(t, r, "sw-shutdown"));
            },
          ),
        ),
        a.push(
          o("SharedWorkerEventManager").registerWorkerSelfTerminationListener(
            e,
            function (e, t, n) {
              i(t, n, "self-terminate");
            },
          ),
        ),
        o("SharedWorkerDevChangeManager").trackCreatedWorker(n),
        o("SharedWorkerUptimeTracker").startUptimeTracking(e, n),
        r("logSharedWorkerInitStep")(n, null, null, "create_worker_end"));
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n.markPoint("terminate_on_upgrade");
          var a = o("SharedWorkerMigrationUtils").isStatusLockHeld(e);
          if (self.BroadcastChannel != null) {
            var i = L(e);
            (i.postMessage({
              type: "terminate",
              reason: "requested-upgrade",
              pageID: r("pageID"),
            }),
              n.addAnnotations({ string: { oldWorkerShutdown: "broadcast" } }));
          } else if (yield a) {
            var l;
            (t.version === 2 && r("supportsModuleWorker")(!0)
              ? (l = new SharedWorker(t.url, { name: e, type: "module" }))
              : (l = new SharedWorker(t.url, e)),
              o("SharedWorkerEventManager").registerWorkerShutdownListener(
                l,
                function (e) {
                  var t = e.isInitialized,
                    r = e.workerID;
                  (n.markEventEnd("old_worker_shutdown", {
                    string: { oldWorkerID: r },
                    bool: { oldWorkerWasInitialized: t },
                  }),
                    n.addAnnotations({
                      string: { oldWorkerShutdown: "success" },
                    }));
                },
                { once: !0 },
              ),
              n.markEventStart("old_worker_shutdown"),
              l.port.start(),
              o("SharedWorkerEventManager").emitWorkerShutdown(l, {
                upgrade: !0,
              }));
          } else
            n.addAnnotations({ string: { oldWorkerShutdown: "not_needed" } });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n = o("SharedWorkerDevChangeManager").shouldUseStorageWorkerForDev(
          e.name,
          { storageWorkerResource: t, tabResource: e },
        ),
        a = t.rev,
        i = t.spin_time,
        l = t.version;
      return (
        a >= r("SiteData").client_revision &&
        (e.version === l ||
          i >= r("SiteData")[r("StaticSiteData").spin_time_key]) &&
        n
      );
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            a.markEventStart("create_worker");
            var l = e.name;
            return (
              o("SharedWorkerUptimeTracker").stopUptimeTracking(l),
              a.addAnnotations({
                bool: {
                  workerAlreadyRunning: r("supportsNativeWebLock")()
                    ? yield o("SharedWorkerMigrationUtils").isStatusLockHeld(l)
                    : null,
                },
              }),
              P(e, t, n, a, i)
            );
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(t, a, i, l) {
      l === void 0 && (l = 0);
      var s = t.name,
        u = i != null ? i : {},
        d = u.onQPLEvent,
        m = u.reason,
        p = r("buildSharedWorkerInitQPLLogger")(d);
      (p.start({ version: 2, workerName: s, callReason: m }),
        p.addAnnotations({
          bool: { usingModuleWorker: r("supportsModuleWorker")(!0) },
        }));
      var f = new (r("Deferred"))(),
        g = function (i) {
          r("promiseDone")(
            C(
              {
                name: s,
                version: 2,
                getJSModuleBundleResource: function () {
                  return t;
                },
                sandboxOnlyChecksum: t.sandboxOnlyChecksum,
                createSharedWorker: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      var e = o(
                        "createSharedWorkerV2BundleUrl",
                      ).createSharedWorkerV2BundleUrl();
                      return [e, yield _(e, s, t, p)];
                    },
                  );
                  function r() {
                    return e.apply(this, arguments);
                  }
                  return r;
                })(),
              },
              i,
              a,
              p,
              l,
            ),
            function (e) {
              (p.markEventEnd("create_worker"), p.endSuccess(), f.resolve(e));
            },
            function (e) {
              var t = typeof e == "string" ? r("err")(e) : e;
              (f.reject(t), i());
            },
          );
        };
      return (
        o("SharedWorkerLockManager").withWorkerLock(g, {
          workerQPLLogger: p,
          onLockTimeout: function () {
            return f.reject(r("err")("Worker lock timeout"));
          },
          onLockFail: function (t) {
            f.reject(t);
          },
        }),
        f.getPromise().catch(function (o) {
          if (o instanceof c && l < 2)
            return (
              p.endCancel({
                string: { workerInitCancelReason: o.message },
                int: { workerInitRetry: l },
              }),
              new (e || (e = n("Promise")))(function (e, n) {
                r("setTimeout")(
                  function () {
                    r("promiseDone")(v(t, a, i, l + 1), e, n);
                  },
                  l === 0 ? 200 : 500,
                );
              })
            );
          var s = r("getErrorSafe")(o);
          throw (
            p.endFailure("worker_init_failure", {
              string: { workerInitFailureReason: s.message, errorName: s.name },
            }),
            o
          );
        })
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = a != null ? a : t.name,
            u = new (r("Deferred"))(),
            c = r("buildSharedWorkerTerminateQPLLogger")();
          if (
            (c.start({ workerName: l }),
            r("promiseDone")(
              r("supportsNativeWebLock")()
                ? o("SharedWorkerMigrationUtils").isStatusLockHeld(l)
                : (e || (e = n("Promise"))).resolve(void 0),
              function (e) {
                return c.addAnnotations({ bool: { workerAlreadyRunning: e } });
              },
            ),
            c.addAnnotations({
              string: { reason: i, terminatingPageId: r("pageID") },
            }),
            self.BroadcastChannel != null)
          ) {
            var m = L(l);
            return (
              m.postMessage({
                type: "terminate",
                reason: i,
                pageID: r("pageID"),
              }),
              r("promiseDone")(
                o("SharedWorkerStorageManager")
                  .removeSharedWorkerReference(l, c)
                  .then(function () {
                    (c.endSuccess(), u.resolve());
                  }),
              ),
              u.getPromise()
            );
          }
          return (
            o("SharedWorkerLockManager").withWorkerLock(
              function (a) {
                r("promiseDone")(
                  o("SharedWorkerStorageManager")
                    .getSharedWorkerReference(l, c)
                    .then(function (r) {
                      if (
                        (c.markPoint("read_worker_reference", {
                          int: {
                            storageWorkerVersion:
                              r == null ? void 0 : r.version,
                          },
                          bool: { storageReferenceExists: r != null },
                        }),
                        r != null)
                      ) {
                        var o =
                            r.version === 2
                              ? _(r.url, l, t, void 0).then(function (e) {
                                  var t = e.worker;
                                  return t;
                                })
                              : d(r.url, l, t).then(function (e) {
                                  var t = e.worker;
                                  return t;
                                }),
                          a = (e || (e = n("Promise"))).resolve(null);
                        return a.then(function () {
                          return o;
                        });
                      }
                      return (c.markPoint("storage_resource_empty"), null);
                    }),
                  function (e) {
                    try {
                      if (
                        (a(),
                        o("SharedWorkerUptimeTracker").stopUptimeTracking(l),
                        e == null)
                      ) {
                        (c.endSuccess(), u.resolve());
                        return;
                      }
                      (o(
                        "SharedWorkerEventManager",
                      ).registerWorkerShutdownListener(
                        e,
                        function (e) {
                          var t = e.isInitialized,
                            n = e.workerID;
                          c.markPoint("worker_shut_down", {
                            string: { workerID: n },
                            bool: { wasInitialized: t },
                          });
                          var a = o(
                            "SharedWorkerStorageManager",
                          ).removeSharedWorkerReference(l, c);
                          (r("promiseDone")(
                            a,
                            function () {
                              return c.endSuccess();
                            },
                            function (e) {
                              c.endFailure(
                                "failed_to_remove_worker_reference",
                                { string: { errorDescription: e.toString() } },
                              );
                            },
                          ),
                            u.resolve());
                        },
                        { once: !0 },
                      ),
                        o("SharedWorkerEventManager").emitWorkerShutdown(e, {
                          reason: i,
                        }));
                    } catch (e) {
                      var t = r("getErrorSafe")(e);
                      (c.endFailure("terminate_worker_failure", {
                        string: { workerTerminateFailReason: t.message },
                      }),
                        u.reject(t.message));
                    }
                  },
                  function (e) {
                    (r("FBLogger")("worker")
                      .catching(r("getErrorSafe")(e))
                      .mustfix("Failed to terminate worker"),
                      c.endFailure("connect_to_worker_failure", {
                        string: { workerTerminateFailReason: e.message },
                      }),
                      u.reject(e.message),
                      a());
                  },
                );
              },
              { workerQPLLogger: c },
            ),
            r("setTimeout")(function () {
              return u.reject();
            }, s),
            u.getPromise()
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return new self.BroadcastChannel(u + "_" + e);
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "SharedWorkerStorageManager",
          ).getSharedWorkerReference(e.name);
          return t != null;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          n == null || n.markEventStart("load_hrp");
          var i = yield o("WebWorkerV2DynamicData").readDynamicDataForWorker(
              e,
              t,
            ),
            l = i.data,
            s = i.time;
          n == null || n.markEventEnd("load_hrp");
          try {
            var u,
              c = r("justknobx")._("1979");
            (n == null ||
              n.markEventStart("prefetch_worker_scripts", {
                bool: { prefetchWorkerScripts: c },
                int: {
                  resourcesCount:
                    (u = l.hrp.allResources) == null ? void 0 : u.length,
                },
              }),
              c && o("BootloaderPreloader").preloadWorkerJSFromHRP(l.hrp));
          } catch (t) {
            var d = r("getErrorSafe")(t);
            (n == null ||
              n.markPoint("prefetch_worker_scripts_fail", {
                string: { hrpInitErr: d.toString() },
              }),
              r("FBLogger")("worker")
                .catching(d)
                .warn("Failed to preload worker %s JS from HRP", e.name));
          }
          return (
            n == null || n.markEventEnd("prefetch_worker_scripts"),
            {
              hrp: l,
              time: s,
              rev:
                (a = l.hrp.hsrp) == null ||
                (a = a.hblp) == null ||
                (a = a.consistency) == null
                  ? void 0
                  : a.rev,
            }
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, a) {
      return o("SharedWorkerStorageManager").getOrUpdateWorkerReference(
        e.name,
        function (o) {
          if ((n.markPoint("worker_reference_retrieved"), o == null)) return t;
          var i = a != null && a > 0 && r("gkx")("6579");
          return !i && y(e, o) ? o : (g(e.name, o, n), t);
        },
        n,
      );
    }
    function x(e, t) {
      if (self.BroadcastChannel != null) {
        var n = L(e),
          o = function (n) {
            var e = n.data;
            if (
              typeof e == "object" &&
              (e == null ? void 0 : e.type) === "terminate"
            ) {
              var o = typeof e.reason == "string" ? e.reason : "unknown",
                a = typeof e.pageID == "string" ? e.pageID : null;
              if (a != null && a === r("pageID") && o === "requested-upgrade")
                return;
              t(o);
            }
          };
        return (
          n.addEventListener("message", o),
          function () {
            return n.removeEventListener("message", o);
          }
        );
      }
      return function () {};
    }
    function $(e, t, n, a) {
      var i = new (r("Deferred"))();
      return (
        o("SharedWorkerStorageManager")
          .getOrUpdateWorkerReference(e, function (e) {
            return e == null || e.url !== t
              ? (i.resolve("url-was-changed"), e)
              : e.rev !== n || e.spin_time !== a
                ? babelHelpers.extends({}, e, { rev: n, spin_time: a })
                : e;
          })
          .then(function () {
            i.resolve("success");
          }),
        i.getPromise()
      );
    }
    function P(e, t, n, r, o) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s) {
            if (t.version !== 2) throw r("err")("Worker version must be 2");
            var u = t.name,
              d = yield I(t.getJSModuleBundleResource(), !1, l),
              _ = d.rev;
            if (_ == null) throw r("err")("HRP rev or spin time is null");
            var g = {
                url: o(
                  "createSharedWorkerV2BundleUrl",
                ).createSharedWorkerV2BundleUrl(),
                rev: _,
                spin_time: d.time,
                version: t.version,
                rsrcBundleUrl: t.getJSModuleBundleResource().url,
                sandboxOnlyChecksum: t.sandboxOnlyChecksum,
              },
              h = new (r("Deferred"))(),
              y = new (r("Deferred"))(),
              C = [];
            try {
              var b = function (t) {
                (y.reject(t), h.reject(t));
              };
              (C.push(
                x(u, function (e) {
                  b(new c("broadcast-" + e));
                }),
              ),
                l == null || l.markEventStart("get_worker_reference"));
              var v = yield D(t, g, l, s);
              l == null || l.markEventEnd("get_worker_reference");
              var S = m(v.url, u, l);
              (C.push(
                o("SharedWorkerEventManager").registerConnectionAckListener(
                  S,
                  function (e, t, n) {
                    (l == null ||
                      l.addAnnotations({
                        string: { connectedFrom: e, workerID: t },
                      }),
                      h.resolve({
                        hrpStatus: n != null ? n : "no-hrp",
                        workerID: t,
                      }));
                  },
                ),
              ),
                C.push(
                  o(
                    "SharedWorkerEventManager",
                  ).registerWorkerSelfTerminationListener(
                    S,
                    function (e, t, n, r) {
                      (l == null ||
                        l.addAnnotations({
                          string: { selfTerminationError: r },
                        }),
                        o("SharedWorkerLoggingUtils").logSelfTermination(
                          u,
                          e,
                          t,
                          n,
                        ),
                        b(new c(t)));
                    },
                    { once: !0 },
                  ),
                ),
                C.push(
                  o("SharedWorkerEventManager").registerWorkerShutdownListener(
                    S,
                    function (e) {
                      var t = e.reason,
                        n = e.workerID;
                      (o("SharedWorkerLoggingUtils").logShutdown(u, null, t, n),
                        b(new c(t != null ? t : "sw-shutdown-unknown")));
                    },
                  ),
                ),
                C.push.apply(C, p(S, u, l)),
                l.markEventStart("worker_connection"),
                S.port.start(),
                o("SharedWorkerEventManager").emitConnectionAckRequest(S));
              var R = yield h.getPromise(),
                L = R.hrpStatus;
              if ((l.markEventEnd("worker_connection"), L === "no-hrp")) {
                l == null || l.markPoint("read_dynamic_data");
                var E = g.rev >= v.rev,
                  k = E
                    ? (e || (e = n("Promise"))).resolve(d)
                    : I(t.getJSModuleBundleResource(), !0, l);
                r("promiseDone")(
                  k.then(
                    function (e) {
                      (l == null || l.markEventStart("hrp_init"),
                        o("SharedWorkerEventManager").emitHrpInit(
                          S,
                          { hrp: e.hrp.hrp, js_env: e.hrp.js_env, isDev: !1 },
                          l,
                        ));
                    },
                    function (e) {
                      var t = r("getErrorSafe")(e);
                      (l == null ||
                        l.markPoint("hrp_init_fail", {
                          string: { hrpInitErr: t.toString() },
                        }),
                        b(t));
                    },
                  ),
                );
              }
              (C.push(
                o("SharedWorkerEventManager").registerExecuteWorkerAckListener(
                  S,
                  l,
                  function (e) {
                    var t = e.err,
                      n = e.isFirstInit,
                      a = e.workerRev,
                      i = e.workerSpinMode,
                      s = e.workerSpinTime;
                    (o("SharedWorkerLoggingUtils").logExecuteAck(
                      l,
                      s,
                      t,
                      n,
                      a,
                      i,
                    ),
                      t != null || s == null || a == null
                        ? y.reject(
                            r("err")(
                              t != null ? t : "no worker rev or spin time",
                            ),
                          )
                        : y.resolve({ workerRev: a, workerSpinTime: s }));
                  },
                ),
              ),
                l == null || l.markEventStart("execute_worker"),
                o("SharedWorkerEventManager").emitExecuteWorker(S));
              var T = yield y.getPromise(),
                P = T.workerRev,
                N = T.workerSpinTime;
              l == null || l.markEventStart("update_worker_ref");
              var M = yield $(u, v.url, P, N);
              if (
                (l == null ||
                  l.markEventEnd("update_worker_ref", {
                    string: { updateWorkerRef: M },
                  }),
                M === "url-was-changed")
              )
                throw (
                  o("SharedWorkerEventManager").emitWorkerShutdown(S, {
                    reason: "url-was-changed",
                  }),
                  new c("url-was-changed")
                );
              return (a(), f(S, i, u), S);
            } finally {
              C.forEach(function (e) {
                return e();
              });
            }
          },
        )),
        N.apply(this, arguments)
      );
    }
    ((l.SHARED_WORKER_BROADCAST_CHANNEL = u),
      (l.SelfTerminationError = c),
      (l.createPushSafeSharedWebWorkerV2Async = v),
      (l.terminateSharedWorker = S),
      (l.doesSharedWorkerReferenceExist = E));
  },
  98,
);
