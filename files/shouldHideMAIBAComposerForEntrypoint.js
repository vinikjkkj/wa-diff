__d(
  "shouldHideMAIBAComposerForEntrypoint",
  ["AdsAIEntrypointEnum", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!r("justknobx")._("2024")) return !1;
      var t = r("AdsAIEntrypointEnum").cast(e);
      return (
        t === "VERIFICATION_CENTER_START_VERIFICATION" ||
        t === "BUSINESS_SUPPORT_HOME_HARM_VERIFICATION"
      );
    }
    l.default = e;
  },
  98,
);
