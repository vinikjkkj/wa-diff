__d(
  "WAWebVoipWebTransportPthreadPrewarm",
  [
    "WALogger",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipGatingUtils",
    "WAWebVoipHiddenPrewarmIdleWork",
    "WAWebVoipWebTransportDataChannelThreadManager",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      !o("WAWebVoipGatingUtils").isWebTransportEnabled() ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipHiddenPrewarmIdleWork").requestHiddenPrewarmIdleWork(
          "webtransport_pthread",
          u,
        ) ||
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(u);
    }
    function u() {
      o("WAWebVoipWebTransportDataChannelThreadManager")
        .initWebTransportDataChannelWorker()
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WebTransport pthread prewarm failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("webtransport-pthread-prewarm-failed");
        });
    }
    l.scheduleWebTransportPthreadPrewarm = s;
  },
  98,
);
