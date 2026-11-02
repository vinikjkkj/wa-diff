__d(
  "WAWebVoipInitReliability",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebEnvironment",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitReliabilityLevel",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1;
    function c() {
      if (!u)
        try {
          d();
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init reliability level not read, retrying on the next call",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }
    }
    function d() {
      if (!(!o("WAWebABPropsCache").isABPropConfigsReady() || m())) {
        var e = r("justknobx")._("3569"),
          t = p(
            Math.min(
              o("WAWebABProps").getABPropConfigValue(
                "web_voip_init_reliability_level",
              ),
              e,
            ),
          );
        (o("WAWebVoipInitReliabilityLevel").setVoipInitReliabilityLevel(t),
          (u = !0),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init reliability level=",
                "",
              ])),
            t,
          ));
      }
    }
    function m() {
      return (
        o("WAWebRuntimeEnvironmentUtils").isWorker() ||
        r("WAWebEnvironment").isWindows ||
        r("WAWebEnvironment").isGuest ||
        !o("WAWebVoipGatingUtils").isVoipDownloadEnabled()
      );
    }
    function p(e) {
      return !Number.isInteger(e) || e <= 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : 3;
    }
    l.latchVoipInitReliabilityLevel = c;
  },
  98,
);
