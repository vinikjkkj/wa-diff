__d(
  "WAWebCanonicalGating",
  ["gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !r("gkx")("26256") && r("justknobx")._("4457");
    }
    function s() {
      return e() && r("justknobx")._("4994");
    }
    function u() {
      return e() && r("justknobx")._("3360");
    }
    function c() {
      return s() && r("justknobx")._("3059");
    }
    var d = 60,
      m = 168;
    function p() {
      return e() && r("gkx")("28828");
    }
    function _() {
      return d;
    }
    function f() {
      return m;
    }
    ((l.isCanonicalEnabled = e),
      (l.isCanonicalRecoveryEnabled = s),
      (l.isCanonicalAppReloadEnabled = u),
      (l.isCanonicalRecoveryAppReloadEnabled = c),
      (l.isCanonicalAuthV2Enabled = p),
      (l.getCanonicalAuthV2MinMintIntervalSeconds = _),
      (l.getCanonicalAuthV2ValidationIntervalHours = f));
  },
  98,
);
