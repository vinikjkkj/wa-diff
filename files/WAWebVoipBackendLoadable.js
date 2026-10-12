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
    "WAWebVoipBootInitDecision",
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
      g = 5e3,
      h = new Set(),
      y = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (f || (f = n("Promise"))).all([
              r("JSResourceForInteraction")("WAWebVoipInit")
                .__setRef("WAWebVoipBackendLoadable")
                .load(),
              r("JSResourceForInteraction")("WAWebHandleVoipCallOffer")
                .__setRef("WAWebVoipBackendLoadable")
                .load(),
            ]),
            t = e[0],
            o = e[1];
          return { WAWebVoipInit: t, WAWebHandleVoipCallOffer: o };
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function C() {
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
      return y();
    }
    function b(e) {
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
            (f || (f = n("Promise"))).resolve()
          );
        t = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (t) {
        return (L(t, "gate", e), R(e, !0));
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
        t ? (E(e), T(e), (f || (f = n("Promise"))).resolve()) : R(e)
      );
    }
    function v() {
      h.clear();
    }
    function S(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (L(t, "gate", e), !1);
      }
    }
    function R(e, t) {
      return (
        t === void 0 && (t = !1),
        y().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && S(e))) return r.initWAWebVoip();
        })
      );
    }
    function L(e, t, n) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function E(e) {
      var t = !1;
      (f || (f = n("Promise")))
        .resolve()
        .then(function () {
          var n = r("JSResourceForInteraction")("WAWebVoipBootInitScheduler")
            .__setRef("WAWebVoipBackendLoadable")
            .load();
          return o("WAPromiseTimeout")
            .promiseTimeout(n, g)
            .catch(function (r) {
              if (!(r instanceof o("WACustomError").TimeoutError) || !k())
                throw r;
              return (
                (t = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  (I("wait"),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
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
            L(n, "scheduler_after_wait", e);
            return;
          }
          (n instanceof o("WACustomError").TimeoutError
            ? o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (I("fail_open"),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] schedule_fail_open source=",
                          " reason=scheduler_load_timeout",
                        ])),
                      e,
                    ));
                },
              )
            : L(n, "scheduler", e),
            S(e) ||
              R(e, !0).catch(function (t) {
                L(t, "fallback", e);
              }));
        });
    }
    function k() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        ) <= 0
      );
    }
    function I(e) {
      h.has(e) ||
        (h.add(e),
        o("WAWebCoreActionsODS").logCallVoipBootGateSchedulerLoadTimeout(e));
    }
    function T(e) {
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
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] early_module_prefetch gate_failed source=",
                    "",
                  ])),
                e,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip-deferred-boot-early-prefetch-gate-failed");
          },
        );
        return;
      }
      t &&
        (f || (f = n("Promise")))
          .resolve()
          .then(function () {
            return r("JSResourceForInteraction")("WAWebVoipBootStackPrefetch")
              .__setRef("WAWebVoipBackendLoadable")
              .load();
          })
          .then(function (t) {
            var n = t.prefetchDeferredVoipBootModules;
            return n(e);
          })
          .catch(function (t) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] early_module_prefetch trigger_failed source=",
                        "",
                      ])),
                    e,
                  )
                  .catching(r("getErrorSafe")(t));
              },
            );
          });
    }
    ((l.requireVoipJsBackend = y),
      (l.prefetchVoipJsBackendAtBoot = C),
      (l.initializeVoipFromBootGate = b),
      (l.resetVoipBackendLoadableForTesting = v));
  },
  98,
);
