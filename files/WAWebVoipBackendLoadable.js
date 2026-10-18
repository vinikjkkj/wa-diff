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
      h = 5e3,
      y = new Set(),
      C = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (g || (g = n("Promise"))).all([E().load(), k().load()]),
            t = e[0],
            r = e[1];
          return { WAWebVoipInit: t, WAWebHandleVoipCallOffer: r };
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function b() {
      return I() ? v() : C();
    }
    function v() {
      return o("WAWebVoipChunkLoadFailFast").failFastOnVoipChunkLoadError(C(), [
        E().getModuleId(),
        k().getModuleId(),
      ]);
    }
    function S() {
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
      return C();
    }
    function R(e) {
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
            (g || (g = n("Promise"))).resolve()
          );
        t = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (t) {
        return (x(t, "gate", e), D(e, !0));
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
        t ? ($(e), M(e), (g || (g = n("Promise"))).resolve()) : D(e)
      );
    }
    function L() {
      y.clear();
    }
    function E() {
      return r("JSResourceForInteraction")("WAWebVoipInit").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function k() {
      return r("JSResourceForInteraction")("WAWebHandleVoipCallOffer").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function I() {
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function T(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (x(t, "gate", e), !1);
      }
    }
    function D(e, t) {
      return (
        t === void 0 && (t = !1),
        C().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && T(e))) return r.initWAWebVoip();
        })
      );
    }
    function x(e, t, n) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function $(e) {
      var t = !1;
      (g || (g = n("Promise")))
        .resolve()
        .then(function () {
          var n = r("JSResourceForInteraction")("WAWebVoipBootInitScheduler")
            .__setRef("WAWebVoipBackendLoadable")
            .load();
          return o("WAPromiseTimeout")
            .promiseTimeout(n, h)
            .catch(function (r) {
              if (!(r instanceof o("WACustomError").TimeoutError) || !P())
                throw r;
              return (
                (t = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  (N("wait"),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
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
            x(n, "scheduler_after_wait", e);
            return;
          }
          (n instanceof o("WACustomError").TimeoutError
            ? o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (N("fail_open"),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] schedule_fail_open source=",
                          " reason=scheduler_load_timeout",
                        ])),
                      e,
                    ));
                },
              )
            : x(n, "scheduler", e),
            T(e) ||
              D(e, !0).catch(function (t) {
                x(t, "fallback", e);
              }));
        });
    }
    function P() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        ) <= 0
      );
    }
    function N(e) {
      y.has(e) ||
        (y.add(e),
        o("WAWebCoreActionsODS").logCallVoipBootGateSchedulerLoadTimeout(e));
    }
    function M(e) {
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        (g || (g = n("Promise")))
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
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.requireVoipJsBackend = C),
      (l.requireVoipJsBackendForCall = b),
      (l.requireVoipJsBackendFailFast = v),
      (l.prefetchVoipJsBackendAtBoot = S),
      (l.initializeVoipFromBootGate = R),
      (l.resetVoipBackendLoadableForTesting = L));
  },
  98,
);
