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
      C = 5e3,
      b = 3e4,
      v = new Set(),
      S = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (w()) {
            var e = yield $();
            if (e != null) return e;
          }
          var t = yield (y || (y = n("Promise"))).all([T().load(), D().load()]),
            r = t[0],
            o = t[1];
          return { WAWebVoipInit: r, WAWebHandleVoipCallOffer: o };
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function R() {
      return A() ? L() : S();
    }
    function L() {
      return o("WAWebVoipChunkLoadFailFast").failFastOnVoipChunkLoadError(S(), [
        T().getModuleId(),
        D().getModuleId(),
        x().getModuleId(),
      ]);
    }
    function E() {
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
      return S();
    }
    function k(e) {
      o("WAWebPageVisibilityRecency").startPageVisibilityRecencyTracking();
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
            (y || (y = n("Promise"))).resolve()
          );
        t = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (t) {
        return (B(t, "gate", e), O(e, !0));
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
        t ? (W(e), V(e), (y || (y = n("Promise"))).resolve()) : O(e)
      );
    }
    function I() {
      v.clear();
    }
    function T() {
      return r("JSResourceForInteraction")("WAWebVoipInit").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function D() {
      return r("JSResourceForInteraction")("WAWebHandleVoipCallOffer").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function x() {
      return r("JSResourceForInteraction")(
        "WAWebVoipDeferredBootJsBackend",
      ).__setRef("WAWebVoipBackendLoadable");
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = x();
          e.getModuleIfRequired() == null && (yield e.load().catch(N));
          var t = T().getModuleIfRequired(),
            n = D().getModuleIfRequired();
          return t == null || n == null
            ? null
            : { WAWebVoipInit: t, WAWebHandleVoipCallOffer: n };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] backend bundle load rejected, waiting for its code",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            },
          );
          var t = yield o(
            "WAWebVoipWaitForRequiredModule",
          ).waitForRequiredModule(x(), b);
          if (t == null) throw e;
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      try {
        return o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function A() {
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function F(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (B(t, "gate", e), !1);
      }
    }
    function O(e, t) {
      return (
        t === void 0 && (t = !1),
        S().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && F(e))) return r.initWAWebVoip();
        })
      );
    }
    function B(e, t, n) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function W(e) {
      var t = !1;
      (y || (y = n("Promise")))
        .resolve()
        .then(function () {
          var n = r("JSResourceForInteraction")("WAWebVoipBootInitScheduler")
            .__setRef("WAWebVoipBackendLoadable")
            .load();
          return o("WAPromiseTimeout")
            .promiseTimeout(n, C)
            .catch(function (r) {
              if (!(r instanceof o("WACustomError").TimeoutError) || !q())
                throw r;
              return (
                (t = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  (U("wait"),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
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
            B(n, "scheduler_after_wait", e);
            return;
          }
          (n instanceof o("WACustomError").TimeoutError
            ? o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (U("fail_open"),
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] schedule_fail_open source=",
                          " reason=scheduler_load_timeout",
                        ])),
                      e,
                    ));
                },
              )
            : B(n, "scheduler", e),
            F(e) ||
              O(e, !0).catch(function (t) {
                B(t, "fallback", e);
              }));
        });
    }
    function q() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        ) <= 0
      );
    }
    function U(e) {
      v.has(e) ||
        (v.add(e),
        o("WAWebCoreActionsODS").logCallVoipBootGateSchedulerLoadTimeout(e));
    }
    function V(e) {
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
        (y || (y = n("Promise")))
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.requireVoipJsBackend = S),
      (l.requireVoipJsBackendForCall = R),
      (l.requireVoipJsBackendFailFast = L),
      (l.prefetchVoipJsBackendAtBoot = E),
      (l.initializeVoipFromBootGate = k),
      (l.resetVoipBackendLoadableForTesting = I));
  },
  98,
);
