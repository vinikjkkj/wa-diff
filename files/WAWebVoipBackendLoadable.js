__d(
  "WAWebVoipBackendLoadable",
  [
    "JSResourceForInteraction",
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
      v = 5e3,
      S = 3e4,
      R = null,
      L = new Set(),
      E = new Set(),
      k = async function () {
        if (
          (o("WAWebVoipInitReliability").latchVoipInitReliabilityLevel(),
          W() || o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled())
        ) {
          var e = await F();
          if (e != null) return e;
        }
        var t = await Promise.all([P().load(), w().load()]),
          n = t[0],
          r = t[1];
        return { WAWebVoipInit: n, WAWebHandleVoipCallOffer: r };
      };
    function I() {
      return (N(), q() ? T() : k());
    }
    function T() {
      return o("WAWebVoipChunkLoadFailFast").failFastOnVoipChunkLoadError(k(), [
        P().getModuleId(),
        w().getModuleId(),
        A().getModuleId(),
      ]);
    }
    function D() {
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
      return k();
    }
    function x(e) {
      ($(),
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
            Promise.resolve()
          );
        (o("WAWebVoipInitReliability").latchVoipInitReliabilityLevel(),
          (t = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()));
      } catch (t) {
        return (H(t, "gate", e), V(e, !0));
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
              K(n));
          },
        ),
        t ? (G(e), Q(e), Promise.resolve()) : V(e)
      );
    }
    function $() {
      Promise.resolve()
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
    function P() {
      return r("JSResourceForInteraction")("WAWebVoipInit").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function N() {
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
          return t(M);
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
    function M() {
      return P().getModuleIfRequired() != null;
    }
    function w() {
      return r("JSResourceForInteraction")("WAWebHandleVoipCallOffer").__setRef(
        "WAWebVoipBackendLoadable",
      );
    }
    function A() {
      return r("JSResourceForInteraction")(
        "WAWebVoipDeferredBootJsBackend",
      ).__setRef("WAWebVoipBackendLoadable");
    }
    async function F() {
      var e = A();
      e.getModuleIfRequired() == null && (await e.load().catch(O));
      var t = P().getModuleIfRequired(),
        n = w().getModuleIfRequired();
      return t == null || n == null
        ? null
        : { WAWebVoipInit: t, WAWebHandleVoipCallOffer: n };
    }
    async function O(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] backend bundle load rejected, waiting for its code",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        },
      );
      var t = await B();
      if (t == null) throw e;
    }
    function B() {
      return o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
        ? (R != null ||
            (R = o("WAWebVoipWaitForRequiredModule").waitForRequiredModule(
              A(),
              S,
            )),
          R)
        : o("WAWebVoipWaitForRequiredModule").waitForRequiredModule(A(), S);
    }
    function W() {
      try {
        return o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    function q() {
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
    function U(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (H(t, "gate", e), !1);
      }
    }
    function V(e, t) {
      return (
        t === void 0 && (t = !1),
        N(),
        k().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && U(e))) return r.initWAWebVoip();
        })
      );
    }
    function H(e, t, n) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function G(e) {
      var t = !1;
      Promise.resolve()
        .then(function () {
          var n = r("JSResourceForInteraction")("WAWebVoipBootInitScheduler")
            .__setRef("WAWebVoipBackendLoadable")
            .load();
          return o("WAPromiseTimeout")
            .promiseTimeout(n, v)
            .catch(function (r) {
              if (!(r instanceof o("WACustomError").TimeoutError) || !z())
                throw r;
              return (
                (t = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  (j("wait"),
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
            H(n, "scheduler_after_wait", e);
            return;
          }
          (n instanceof o("WACustomError").TimeoutError
            ? o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (j("fail_open"),
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] schedule_fail_open source=",
                          " reason=scheduler_load_timeout",
                        ])),
                      e,
                    ));
                },
              )
            : H(n, "scheduler", e),
            U(e) ||
              V(e, !0).catch(function (t) {
                H(t, "fallback", e);
              }));
        });
    }
    function z() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        ) <= 0
      );
    }
    function j(e) {
      L.has(e) ||
        (L.add(e),
        o("WAWebCoreActionsODS").logCallVoipBootGateSchedulerLoadTimeout(e));
    }
    function K(e) {
      e == null ||
        E.has(e) ||
        (E.add(e), o("WAWebVoipBootDecisionODS").logCallVoipBootDecision(e));
    }
    function Q(e) {
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
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
        Promise.resolve()
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
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.requireVoipJsBackend = k),
      (l.requireVoipJsBackendForCall = I),
      (l.requireVoipJsBackendFailFast = T),
      (l.prefetchVoipJsBackendAtBoot = D),
      (l.initializeVoipFromBootGate = x),
      (l.isVoipJsBackendRequired = M));
  },
  98,
);
