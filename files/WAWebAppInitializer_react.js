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
      o("WAWebStringPolyfills").polyfillStringReplaceAll();
      var t = m(!1),
        n = t[0],
        a = t[1],
        i = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_console_log_level",
        ),
        l = r("useWAWebPrevious")(i);
      return (
        !r("gkx")("26258") &&
          l != null &&
          i !== l &&
          o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger(),
        (r("WAWebEnvironment").isWindows || r("gkx")("19016")) &&
          o("WaWebRequestPersistentStorage").requestPersistentStore(),
        d(function () {
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
                : a(!0);
            });
        }, []),
        n
          ? u.jsx(o("WAWebApp.react").App, {})
          : u.jsx(r("CometHeroHoldTrigger.react"), {
              description: "WAWebAppInitializer_bootstrap",
              hold: !0,
            })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
