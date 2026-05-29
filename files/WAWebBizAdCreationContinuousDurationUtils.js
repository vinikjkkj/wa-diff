__d(
  "WAWebBizAdCreationContinuousDurationUtils",
  ["TWAWebBizAdCreationSpec", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("justknobx")._("1330");
    }
    function s(t) {
      return e() && t === o("TWAWebBizAdCreationSpec").CONTINUOUS_DURATION;
    }
    ((l.isContinuousDurationFeatureEnabled = e),
      (l.isContinuousDurationActive = s));
  },
  98,
);
