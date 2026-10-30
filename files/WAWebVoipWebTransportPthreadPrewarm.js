__d(
  "WAWebVoipWebTransportPthreadPrewarm",
  [
    "WALogger",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipGatingUtils",
    "WAWebVoipHiddenPrewarmIdleWork",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipMainThreadLockFixes",
    "WAWebVoipMainThreadLockODS",
    "WAWebVoipWebTransportDataChannelThreadManager",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (
        !(
          !o("WAWebVoipGatingUtils").isWebTransportEnabled() ||
          !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled()
        )
      ) {
        var e =
          o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix() &&
          !r("justknobx")._("7008");
        if (
          e &&
          !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        ) {
          (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.once(
            "voipInitSuccess",
            u,
          ),
            o("WAWebVoipMainThreadLockODS").logMainThreadLockPrewarmDeferred());
          return;
        }
        u();
      }
    }
    function u() {
      o("WAWebVoipHiddenPrewarmIdleWork").requestHiddenPrewarmIdleWork(
        "webtransport_pthread",
        c,
      ) || o("WAWebPonyfillsIdleCallback").requestIdleCallback(c);
    }
    function c() {
      o("WAWebVoipWebTransportDataChannelThreadManager")
        .initWebTransportDataChannelWorker("wt_prewarm")
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
