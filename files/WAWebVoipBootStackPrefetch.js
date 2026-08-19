__d(
  "WAWebVoipBootStackPrefetch",
  [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
            !o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
          ) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] prefetch decision=skip reason=download_disabled",
                    ])),
                );
              },
            );
            return;
          }
          var t = o("WAWebVoipGatingUtils").isCallingEnabled(),
            n = t && o("WAWebVoipGatingUtils").isDeferredVoipBootInitEnabled(),
            r = t && !n;
          (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] stack_prefetch start stack=",
                    " deferred=",
                    "",
                  ])),
                r,
                n,
              );
            },
          ),
            r && (yield o("WAWebVoipStackInterface").getVoipStackInterface()),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] stack_prefetch complete stack=",
                      "",
                    ])),
                  r,
                );
              },
            ));
        })),
        d.apply(this, arguments)
      );
    }
    l.prefetchVoipStackFromBootGate = c;
  },
  98,
);
