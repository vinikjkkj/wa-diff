__d(
  "WAWebVoipBootStackPrefetch",
  [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitReliability",
    "WAWebVoipStackInterface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c() {
      if (
        (await o("WAWebABPropsCache").waitForABPropConfigsReady(),
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
      o("WAWebVoipInitReliability").latchVoipInitReliabilityLevel();
      var t = o("WAWebVoipGatingUtils").isCallingEnabled(),
        n = t && o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled(),
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
        r && (await o("WAWebVoipStackInterface").getVoipStackInterface()),
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
    }
    l.prefetchVoipStackFromBootGate = c;
  },
  98,
);
