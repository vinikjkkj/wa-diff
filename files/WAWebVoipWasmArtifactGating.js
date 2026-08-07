__d(
  "WAWebVoipWasmArtifactGating",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebABPropsConfigs",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebVoipGatingUtils").isGuestViewer()) return !1;
          try {
            return (
              yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
              o("WAWebABPropsConfigs").ABPropConfigs
                .web_voip_use_content_addressed_wasm == null
                ? !1
                : o("WAWebABProps").getABPropConfigValue(
                    "web_voip_use_content_addressed_wasm",
                  ) === !0
            );
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: Content-addressed WASM gating failed; using unversioned loader",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("voip-wasm-artifact-selection-failed"),
              !1
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.shouldUseContentAddressedVoipWasm = s;
  },
  98,
);
