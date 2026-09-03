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
    var e,
      s = { pinWorkerGlue: !1, useContentAddressedWasm: !1 };
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield d();
          return e.useContentAddressedWasm;
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebVoipGatingUtils").isGuestViewer()) return s;
          try {
            if (
              (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
              o("WAWebABPropsConfigs").ABPropConfigs
                .web_voip_use_content_addressed_wasm == null)
            )
              return s;
            var t =
              o("WAWebABProps").getABPropConfigValue(
                "web_voip_use_content_addressed_wasm",
              ) === !0;
            if (!t) return s;
            var n =
              o("WAWebABPropsConfigs").ABPropConfigs
                .web_voip_pin_worker_glue_to_wasm != null &&
              o("WAWebABProps").getABPropConfigValue(
                "web_voip_pin_worker_glue_to_wasm",
              ) === !0;
            return { pinWorkerGlue: n, useContentAddressedWasm: t };
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
              s
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.shouldUseContentAddressedVoipWasm = u),
      (l.selectVoipWasmArtifacts = d));
  },
  98,
);
