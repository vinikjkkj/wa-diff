__d(
  "WAWebVoipInitReliabilityLevel",
  [],
  function (t, n, r, o, a, i) {
    var e = 0;
    function l() {
      return e;
    }
    function s(t) {
      e = t;
    }
    function u(t) {
      return e >= t;
    }
    ((i.getVoipInitReliabilityLevel = l),
      (i.setVoipInitReliabilityLevel = s),
      (i.isVoipInitReliabilityLevelAtLeast = u));
  },
  66,
);
