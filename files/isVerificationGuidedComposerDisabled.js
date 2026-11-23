__d(
  "isVerificationGuidedComposerDisabled",
  ["AdsAIEntrypointEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t != null
        ? r("AdsAIEntrypointEnum").cast(t.entry_point) ===
            "VERIFICATION_CENTER_START_VERIFICATION"
        : e === "VERIFICATION_CENTER_START_VERIFICATION";
    }
    l.default = e;
  },
  98,
);
