__d(
  "useWAWebVoipIsCallingEnabledAndInited",
  [
    "WAWebCmd",
    "WAWebVoipBackendLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("useWAWebStableCallback")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebVoipGatingUtils").isVoipDownloadEnabled() &&
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            var e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
              t = e.WAWebVoipInit;
            yield t.initWAWebVoip();
          }
        }),
      );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "on_ab_props_update_from_bridge",
        e,
      );
      var t = r("useWAWebEventTargetValue")(
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter,
          "voipInitSuccess",
          function () {
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited();
          },
        ),
        a = r("useWAWebEventTargetValue")(
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter,
          "voipInitFailure",
          function () {
            return o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError();
          },
        );
      return {
        enabled: o("WAWebVoipGatingUtils").isCallingEnabled(),
        inited: t,
        initErrored: a,
      };
    }
    l.useWAWebVoipIsCallingEnabledAndInited = e;
  },
  98,
);
