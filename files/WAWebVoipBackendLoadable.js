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
      R = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (A()) {
            var e = yield P();
            if (e != null) return e;
          }
          var t = yield (C || (C = n("Promise"))).all([D().load(), x().load()]),
            r = t[0],
            o = t[1];
          return { WAWebVoipInit: r, WAWebHandleVoipCallOffer: o };
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function L() {
      return F() ? E() : R();
    }
    function E() {
      return o("WAWebVoipChunkLoadFailFast").failFastOnVoipChunkLoadError(R(), [
        D().getModuleId(),
        x().getModuleId(),
        $().getModuleId(),
      ]);
    }
    function k() {
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
      return R();
    }
    function I(e) {
      (T(),
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
        return (W(t, "gate", e), B(e, !0));
      }
      return (
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] boot_gate source=",
                  " decision=",
                  "",
                ])),
              e,
              t ? "deferred" : "eager",
            );
          },
        ),
        t ? (q(e), H(e), (C || (C = n("Promise"))).resolve()) : B(e)
      );
    }
    function T() {
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
    function D() {
      return r("JSResourceForInteraction")("WAWebVoipInit").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function x() {
      return r("JSResourceForInteraction")("WAWebHandleVoipCallOffer").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function $() {
      return r("JSResourceForInteraction")(
        "WAWebVoipDeferredBootJsBackend",
      ).__setRef("WAWebVoipBackendLoadable");
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = $();
          e.getModuleIfRequired() == null && (yield e.load().catch(M));
          var t = D().getModuleIfRequired(),
            n = x().getModuleIfRequired();
          return t == null || n == null
            ? null
            : { WAWebVoipInit: t, WAWebHandleVoipCallOffer: n };
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          ).waitForRequiredModule($(), v);
          if (t == null) throw e;
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
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
    function F() {
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
    function O(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (W(t, "gate", e), !1);
      }
    }
    function B(e, t) {
      return (
        t === void 0 && (t = !1),
        R().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && O(e))) return r.initWAWebVoip();
        })
      );
    }
    function W(e, t, n) {
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
    function q(e) {
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
              if (!(r instanceof o("WACustomError").TimeoutError) || !U())
                throw r;
              return (
                (t = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  (V("wait"),
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
            W(n, "scheduler_after_wait", e);
            return;
          }
          (n instanceof o("WACustomError").TimeoutError
            ? o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (V("fail_open"),
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
            : W(n, "scheduler", e),
            O(e) ||
              B(e, !0).catch(function (t) {
                W(t, "fallback", e);
              }));
        });
    }
    function U() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        ) <= 0
      );
    }
    function V(e) {
      S.has(e) ||
        (S.add(e),
        o("WAWebCoreActionsODS").logCallVoipBootGateSchedulerLoadTimeout(e));
    }
    function H(e) {
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
    ((l.requireVoipJsBackend = R),
      (l.requireVoipJsBackendForCall = L),
      (l.requireVoipJsBackendFailFast = E),
      (l.prefetchVoipJsBackendAtBoot = k),
      (l.initializeVoipFromBootGate = I));
  },
  98,
);
