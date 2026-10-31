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
      b = 5e3,
      v = 3e4,
      S = new Set(),
      R = new Set(),
      L = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (F()) {
            var e = yield N();
            if (e != null) return e;
          }
          var t = yield (C || (C = n("Promise"))).all([x().load(), $().load()]),
            r = t[0],
            o = t[1];
          return { WAWebVoipInit: r, WAWebHandleVoipCallOffer: o };
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function E() {
      return O() ? k() : L();
    }
    function k() {
      return o("WAWebVoipChunkLoadFailFast").failFastOnVoipChunkLoadError(L(), [
        x().getModuleId(),
        $().getModuleId(),
        P().getModuleId(),
      ]);
    }
    function I() {
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
      return L();
    }
    function T(e) {
      (D(),
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
            (C || (C = n("Promise"))).resolve()
          );
        t = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (t) {
        return (q(t, "gate", e), W(e, !0));
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
              G(n));
          },
        ),
        t ? (U(e), z(e), (C || (C = n("Promise"))).resolve()) : W(e)
      );
    }
    function D() {
      (C || (C = n("Promise")))
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
    function x() {
      return r("JSResourceForInteraction")("WAWebVoipInit").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function $() {
      return r("JSResourceForInteraction")("WAWebHandleVoipCallOffer").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function P() {
      return r("JSResourceForInteraction")(
        "WAWebVoipDeferredBootJsBackend",
      ).__setRef("WAWebVoipBackendLoadable");
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = P();
          e.getModuleIfRequired() == null && (yield e.load().catch(w));
          var t = x().getModuleIfRequired(),
            n = $().getModuleIfRequired();
          return t == null || n == null
            ? null
            : { WAWebVoipInit: t, WAWebHandleVoipCallOffer: n };
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] backend bundle load rejected, waiting for its code",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            },
          );
          var t = yield o(
            "WAWebVoipWaitForRequiredModule",
          ).waitForRequiredModule(P(), v);
          if (t == null) throw e;
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      try {
        return o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function O() {
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function B(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (q(t, "gate", e), !1);
      }
    }
    function W(e, t) {
      return (
        t === void 0 && (t = !1),
        L().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && B(e))) return r.initWAWebVoip();
        })
      );
    }
    function q(e, t, n) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
    function U(e) {
      var t = !1;
      (C || (C = n("Promise")))
        .resolve()
        .then(function () {
          var n = r("JSResourceForInteraction")("WAWebVoipBootInitScheduler")
            .__setRef("WAWebVoipBackendLoadable")
            .load();
          return o("WAPromiseTimeout")
            .promiseTimeout(n, b)
            .catch(function (r) {
              if (!(r instanceof o("WACustomError").TimeoutError) || !V())
                throw r;
              return (
                (t = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  (H("wait"),
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            q(n, "scheduler_after_wait", e);
            return;
          }
          (n instanceof o("WACustomError").TimeoutError
            ? o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (H("fail_open"),
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] schedule_fail_open source=",
                          " reason=scheduler_load_timeout",
                        ])),
                      e,
                    ));
                },
              )
            : q(n, "scheduler", e),
            B(e) ||
              W(e, !0).catch(function (t) {
                q(t, "fallback", e);
              }));
        });
    }
    function V() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        ) <= 0
      );
    }
    function H(e) {
      S.has(e) ||
        (S.add(e),
        o("WAWebCoreActionsODS").logCallVoipBootGateSchedulerLoadTimeout(e));
    }
    function G(e) {
      e == null ||
        R.has(e) ||
        (R.add(e), o("WAWebVoipBootDecisionODS").logCallVoipBootDecision(e));
    }
    function z(e) {
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
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
        (C || (C = n("Promise")))
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
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.requireVoipJsBackend = L),
      (l.requireVoipJsBackendForCall = E),
      (l.requireVoipJsBackendFailFast = k),
      (l.prefetchVoipJsBackendAtBoot = I),
      (l.initializeVoipFromBootGate = T));
  },
  98,
);
