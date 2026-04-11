__d(
  "WAWebOneTraceSetup",
  [
    "LongAnimationFrameConfig",
    "OneTraceQPLLogger",
    "WAWebEncryptedRid",
    "WAWebEnvironment",
    "WAWebUserPrefsIndexedDBStorage",
    "gkx",
    "justknobx",
    "one-trace",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(e) {
      var t;
      switch (e.traceType) {
        case "IMAGE":
          return null;
        case "SCROLL":
          return r("qpl")._(891431964, "3274");
        case "LONG_ANIMATION_FRAME":
          return ((t = e.annotations.bool) == null
            ? void 0
            : t.isLoggingSample) === !0
            ? r("qpl")._(891427004, "3275")
            : null;
        case "LONGTASK":
          return null;
        case "TYPING":
          return r("qpl")._(891422674, "918");
        case "RESPONSIVENESS":
          return null;
        case "INP":
          return r("qpl")._(891431786, "3252");
      }
      return null;
    }
    function u() {
      if (!e) {
        var t;
        ((e = !0),
          r("one-trace").setup({
            Image: { enableTracking: !1 },
            Longtask: { enableTracking: !1 },
            LoAF: {
              enableTracking: (t = r("gkx"))("18841"),
              enableLogging: function () {
                return o("LongAnimationFrameConfig").shouldLogLoAF(
                  "" + 0x97e965c4439a,
                );
              },
              enableScriptPositionConversion: function () {
                return r("justknobx")._("5031");
              },
              config: o("LongAnimationFrameConfig").getLoAFAppConfig(
                "" + 0x97e965c4439a,
              ),
            },
            INP: {
              enableTracking: t("18542"),
              logReactStack: !1,
              logReactStackHash: !1,
            },
            Responsiveness: { enableTracking: t("18542") },
            Scroll: { enableTracking: t("18842") },
            Typing: { enableTracking: t("19206") },
          }),
          r("one-trace").subscribe("trace-start", function (e) {
            o("OneTraceQPLLogger").initQPL(s(e), e);
          }),
          r("one-trace").subscribe("trace-end", function (e) {
            (r("one-trace").addAnnotations(e.annotations, {
              string: {
                subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
                environment: r("WAWebEnvironment").getEnvironment(),
                encrypted_rid:
                  o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb
                    .loadedUserPrefs != null
                    ? o("WAWebEncryptedRid").getEncryptedRid()
                    : "",
              },
              bool: { is_compiler_enabled: r("gkx")("7685") },
            }),
              o("OneTraceQPLLogger").logQPL(s(e), e));
          }));
      }
    }
    l.default = u;
  },
  98,
);
