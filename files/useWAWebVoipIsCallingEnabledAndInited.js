__d(
  "useWAWebVoipIsCallingEnabledAndInited",
  [
    "WAWebCmd",
    "WAWebVoipBackendLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("react-compiler-runtime").c(4),
        t = r("useWAWebStableCallback")(c);
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "on_ab_props_update_from_bridge",
        t,
      );
      var n = r("useWAWebEventTargetValue")(
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter,
          "voipInitSuccess",
          u,
        ),
        a = r("useWAWebEventTargetValue")(
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter,
          "voipInitFailure",
          s,
        ),
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o("WAWebVoipGatingUtils").isCallingEnabled()), (e[0] = i))
        : (i = e[0]);
      var l;
      return (
        e[1] !== a || e[2] !== n
          ? ((l = { enabled: i, inited: n, initErrored: a }),
            (e[1] = a),
            (e[2] = n),
            (e[3] = l))
          : (l = e[3]),
        l
      );
    }
    function s() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getDidVoipInitError();
    }
    function u() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited();
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        })),
        d.apply(this, arguments)
      );
    }
    l.useWAWebVoipIsCallingEnabledAndInited = e;
  },
  98,
);
