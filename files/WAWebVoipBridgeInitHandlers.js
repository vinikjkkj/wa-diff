__d(
  "WAWebVoipBridgeInitHandlers",
  [
    "Promise",
    "WALogger",
    "WAWebEnvironment",
    "WAWebUnifiedSession",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayAllCallsAction",
    "WAWebVoipWebLoadable",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        initializeVoipWasm: function () {
          if (
            r("WAWebEnvironment").isWindows &&
            !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
          ) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WASM load skipped on Windows Hybrid",
                ])),
            );
            var t = function () {
                return 0;
              },
              a = new Proxy(
                {},
                {
                  get: function (n, r) {
                    if (!(r === "then" || r === "catch" || r === "finally"))
                      return t;
                  },
                },
              );
            return (s || (s = n("Promise"))).resolve(a);
          }
          if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
            throw r("err")(
              "VoipWebBridgeApi: VoipWebWasm should not be loaded - voip download is not enabled",
            );
          return o("WAWebVoipWebLoadable").requireVoip();
        },
        setRelayAllCallsToUserPrefs: function (t) {
          var e = t.disallowAllP2p;
          return o("WAWebVoipRelayAllCallsAction").setRelayAllCallsToUserPrefs(
            e,
          );
        },
        getUnifiedSessionId: function () {
          return o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
        },
      };
    l.VoipBridgeInitHandlers = u;
  },
  98,
);
