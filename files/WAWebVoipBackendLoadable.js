__d(
  "WAWebVoipBackendLoadable",
  [
    "JSResourceForInteraction",
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebPageVisibilityRecency",
    "WAWebVoipBootDecisionODS",
    "WAWebVoipBootInitDecision",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitReliability",
    "WAWebVoipInitReliabilityGates",
    "WAWebVoipWaitForRequiredModule",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = 5e3,
      R = 3e4,
      L = null,
      E = new Set(),
      k = new Set(),
      I = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (o("WAWebVoipInitReliability").latchVoipInitReliabilityLevel(),
            V() ||
              o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled())
          ) {
            var e = yield O();
            if (e != null) return e;
          }
          var t = yield (v || (v = n("Promise"))).all([N().load(), A().load()]),
            r = t[0],
            a = t[1];
          return { WAWebVoipInit: r, WAWebHandleVoipCallOffer: a };
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function T() {
      return (M(), H() ? D() : I());
    }
    function D() {
      return o("WAWebVoipChunkLoadFailFast").failFastOnVoipChunkLoadError(I(), [
        N().getModuleId(),
        A().getModuleId(),
        F().getModuleId(),
      ]);
    }
    function x() {
      try {
        if (
          !o("WAWebVoipGatingUtils").isVoipDownloadEnabled() ||
          o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()
        )
          return null;
      } catch (t) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] boot backend prefetch gate failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          },
        );
      }
      return I();
    }
    function $(e) {
      (P(),
        o("WAWebPageVisibilityRecency").startPageVisibilityRecencyTracking());
      var t;
      try {
        if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] boot_gate source=",
                      " decision=skip reason=download_disabled",
                    ])),
                  e,
                );
              },
            ),
            (v || (v = n("Promise"))).resolve()
          );
        (o("WAWebVoipInitReliability").latchVoipInitReliabilityLevel(),
          (t = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()));
      } catch (t) {
        return (j(t, "gate", e), z(e, !0));
      }
      return (
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            var n = o(
              "WAWebVoipBootInitDecision",
            ).getVoipBootInitDecisionReason();
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] boot_gate source=",
                  " decision=",
                  " reason=",
                  "",
                ])),
              e,
              t ? "deferred" : "eager",
              n != null ? n : "unknown",
            ),
              Y(n));
          },
        ),
        t ? (K(e), J(e), (v || (v = n("Promise"))).resolve()) : z(e)
      );
    }
    function P() {
      (v || (v = n("Promise")))
        .resolve()
        .then(function () {
          return r("JSResourceForInteraction")(
            "WAWebVoipMainThreadLockReporter",
          )
            .__setRef("WAWebVoipBackendLoadable")
            .load();
        })
        .then(function (e) {
          var t = e.reportMainThreadLockMarkers;
          return t();
        })
        .catch(function (e) {
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MainThreadLock] marker reporter load failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            },
          );
        });
    }
    function N() {
      return r("JSResourceForInteraction")("WAWebVoipInit").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function M() {
      try {
        if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return;
      } catch (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: availability tracking skipped, download gate failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
        return;
      }
      r("JSResourceForInteraction")("WAWebVoipAvailabilityCheckpoints")
        .__setRef("WAWebVoipBackendLoadable")
        .load()
        .then(function (e) {
          var t = e.startVoipAvailabilityEpisode;
          return t(w);
        })
        .catch(function (e) {
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: availability tracking failed to start",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        });
    }
    function w() {
      return N().getModuleIfRequired() != null;
    }
    function A() {
      return r("JSResourceForInteraction")("WAWebHandleVoipCallOffer").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function F() {
      return r("JSResourceForInteraction")(
        "WAWebVoipDeferredBootJsBackend",
      ).__setRef("WAWebVoipBackendLoadable");
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = F();
          e.getModuleIfRequired() == null && (yield e.load().catch(W));
          var t = N().getModuleIfRequired(),
            n = A().getModuleIfRequired();
          return t == null || n == null
            ? null
            : { WAWebVoipInit: t, WAWebHandleVoipCallOffer: n };
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] backend bundle load rejected, waiting for its code",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            },
          );
          var t = yield U();
          if (t == null) throw e;
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      return o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
        ? (L != null ||
            (L = o("WAWebVoipWaitForRequiredModule").waitForRequiredModule(
              F(),
              R,
            )),
          L)
        : o("WAWebVoipWaitForRequiredModule").waitForRequiredModule(F(), R);
    }
    function V() {
      try {
        return o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] backend bundle gate failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            },
          ),
          !1
        );
      }
    }
    function H() {
      try {
        return o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled();
      } catch (e) {
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] chunk_fail_fast gate_failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            },
          ),
          !1
        );
      }
    }
    function G(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (j(t, "gate", e), !1);
      }
    }
    function z(e, t) {
      return (
        t === void 0 && (t = !1),
        M(),
        I().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && G(e))) return r.initWAWebVoip();
        })
      );
    }
    function j(e, t, n) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] failed stage=",
                  " source=",
                  "",
                ])),
              t,
              n,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-deferred-boot-failed");
        },
      );
    }
    function K(e) {
      var t = !1;
      (v || (v = n("Promise")))
        .resolve()
        .then(function () {
          var n = r("JSResourceForInteraction")("WAWebVoipBootInitScheduler")
            .__setRef("WAWebVoipBackendLoadable")
            .load();
          return o("WAPromiseTimeout")
            .promiseTimeout(n, S)
            .catch(function (r) {
              if (!(r instanceof o("WACustomError").TimeoutError) || !Q())
                throw r;
              return (
                (t = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  (X("wait"),
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] schedule_wait source=",
                          " reason=scheduler_load_timeout",
                        ])),
                      e,
                    ));
                }),
                n
              );
            });
        })
        .then(function (e) {
          var t = e.scheduleDeferredVoipBootInit;
          t(!0);
        })
        .catch(function (n) {
          if (t) {
            j(n, "scheduler_after_wait", e);
            return;
          }
          (n instanceof o("WACustomError").TimeoutError
            ? o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (X("fail_open"),
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] schedule_fail_open source=",
                          " reason=scheduler_load_timeout",
                        ])),
                      e,
                    ));
                },
              )
            : j(n, "scheduler", e),
            G(e) ||
              z(e, !0).catch(function (t) {
                j(t, "fallback", e);
              }));
        });
    }
    function Q() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        ) <= 0
      );
    }
    function X(e) {
      E.has(e) ||
        (E.add(e),
        o("WAWebCoreActionsODS").logCallVoipBootGateSchedulerLoadTimeout(e));
    }
    function Y(e) {
      e == null ||
        k.has(e) ||
        (k.add(e), o("WAWebVoipBootDecisionODS").logCallVoipBootDecision(e));
    }
    function J(e) {
      var t;
      try {
        t = o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled();
      } catch (t) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] wasm_idle_warm gate_failed source=",
                    "",
                  ])),
                e,
              )
              .catching(r("getErrorSafe")(t))
              .tags("non-sad")
              .sendLogs("voip-deferred-boot-wasm-idle-warm-gate-failed");
          },
        );
        return;
      }
      t &&
        (v || (v = n("Promise")))
          .resolve()
          .then(function () {
            return r("JSResourceForInteraction")("WAWebVoipWasmIdleWarm")
              .__setRef("WAWebVoipBackendLoadable")
              .load();
          })
          .then(function (t) {
            var n = t.scheduleVoipWasmIdleWarm;
            return n(e);
          })
          .catch(function (t) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger")
                  .WARN(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] wasm_idle_warm trigger_failed source=",
                        "",
                      ])),
                    e,
                  )
                  .catching(r("getErrorSafe")(t));
              },
            );
          });
    }
    ((l.requireVoipJsBackend = I),
      (l.requireVoipJsBackendForCall = T),
      (l.requireVoipJsBackendFailFast = D),
      (l.prefetchVoipJsBackendAtBoot = x),
      (l.initializeVoipFromBootGate = $),
      (l.isVoipJsBackendRequired = w));
  },
  98,
);
