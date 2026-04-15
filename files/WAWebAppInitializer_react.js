__d(
  "WAWebAppInitializer.react",
  [
    "CometHeroHoldTrigger.react",
    "WALogger",
    "WAWebApp.react",
    "WAWebAppBootstrap",
    "WAWebEnvironment",
    "WAWebFeatureDetectionRedirectIfMissingCapabilities",
    "WAWebMainThreadLogger",
    "WAWebStringPolyfills",
    "WaWebRequestPersistentStorage",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p() {
      var t = o("react-compiler-runtime").c(4);
      o("WAWebStringPolyfills").polyfillStringReplaceAll();
      var n = m(!1),
        a = n[0],
        i = n[1],
        l = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_console_log_level",
        ),
        s = r("useWAWebPrevious")(l);
      (!r("gkx")("26258") &&
        s != null &&
        l !== s &&
        o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger(),
        (r("WAWebEnvironment").isWindows || r("gkx")("19016")) &&
          o("WaWebRequestPersistentStorage").requestPersistentStore());
      var c, p;
      if (
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = function () {
              o("WAWebAppBootstrap")
                .bootstrapApp()
                .then(function () {
                  r("WAWebFeatureDetectionRedirectIfMissingCapabilities")()
                    ? o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "Redirect because missing required browser apis",
                            ])),
                        )
                        .sendLogs("missing-required-browser-apis")
                    : i(!0);
                });
            }),
            (p = []),
            (t[0] = c),
            (t[1] = p))
          : ((c = t[0]), (p = t[1])),
        d(c, p),
        a)
      ) {
        var _;
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = u.jsx(o("WAWebApp.react").App, {})), (t[2] = _))
            : (_ = t[2]),
          _
        );
      }
      var f;
      return (
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = u.jsx(r("CometHeroHoldTrigger.react"), {
              description: "WAWebAppInitializer_bootstrap",
              hold: !0,
            })),
            (t[3] = f))
          : (f = t[3]),
        f
      );
    }
    l.default = p;
  },
  98,
);
