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
      m = 5e3,
      p = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (d || (d = n("Promise"))).all([
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
    function _(t) {
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
            (d || (d = n("Promise"))).resolve()
          );
        r = o("WAWebVoipGatingUtils").isDeferredVoipBootInitEnabled();
      } catch (e) {
        return (h(e, "gate", t), g(t, !0));
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
        r ? (y(t), (d || (d = n("Promise"))).resolve()) : g(t)
      );
    }
    function f(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (h(t, "gate", e), !1);
      }
    }
    function g(e, t) {
      return (
        t === void 0 && (t = !1),
        p().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && f(e))) return r.initWAWebVoip();
        })
      );
    }
    function h(e, t, n) {
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
    function y(e) {
      (d || (d = n("Promise")))
        .resolve()
        .then(function () {
          return o("WAPromiseTimeout").promiseTimeout(
            r("JSResourceForInteraction")("WAWebVoipBootInitScheduler")
              .__setRef("WAWebVoipBackendLoadable")
              .load(),
            m,
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
            : h(t, "scheduler", e),
            f(e) ||
              g(e, !0).catch(function (t) {
                h(t, "fallback", e);
              }));
        });
    }
    ((l.requireVoipJsBackend = p), (l.initializeVoipFromBootGate = _));
  },
  98,
);
