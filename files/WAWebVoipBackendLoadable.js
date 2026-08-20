__d(
  "WAWebVoipBackendLoadable",
  [
    "JSResourceForInteraction",
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
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
      _ = 5e3,
      f = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (p || (p = n("Promise"))).all([
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
    function g(t) {
      var r;
      try {
        if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] boot_gate source=",
                      " decision=skip reason=download_disabled",
                    ])),
                  t,
                );
              },
            ),
            (p || (p = n("Promise"))).resolve()
          );
        r = o("WAWebVoipGatingUtils").isDeferredVoipBootInitEnabled();
      } catch (e) {
        return (C(e, "gate", t), y(t, !0));
      }
      return (
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] boot_gate source=",
                  " decision=",
                  "",
                ])),
              t,
              r ? "deferred" : "eager",
            );
          },
        ),
        r ? (b(t), v(t), (p || (p = n("Promise"))).resolve()) : y(t)
      );
    }
    function h(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (C(t, "gate", e), !1);
      }
    }
    function y(e, t) {
      return (
        t === void 0 && (t = !1),
        f().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && h(e))) return r.initWAWebVoip();
        })
      );
    }
    function C(e, t, n) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function b(e) {
      (p || (p = n("Promise")))
        .resolve()
        .then(function () {
          return o("WAPromiseTimeout").promiseTimeout(
            r("JSResourceForInteraction")("WAWebVoipBootInitScheduler")
              .__setRef("WAWebVoipBackendLoadable")
              .load(),
            _,
          );
        })
        .then(function (e) {
          var t = e.scheduleDeferredVoipBootInit;
          t(!0);
        })
        .catch(function (t) {
          (t instanceof o("WACustomError").TimeoutError
            ? o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] schedule_fail_open source=",
                        " reason=scheduler_load_timeout",
                      ])),
                    e,
                  );
                },
              )
            : C(t, "scheduler", e),
            h(e) ||
              y(e, !0).catch(function (t) {
                C(t, "fallback", e);
              }));
        });
    }
    function v(e) {
      var t;
      try {
        t = o(
          "WAWebVoipGatingUtils",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled();
      } catch (t) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
        (p || (p = n("Promise")))
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.requireVoipJsBackend = f), (l.initializeVoipFromBootGate = g));
  },
  98,
);
