__d(
  "WAWebCanonicalGating",
  ["WAWebABProps", "gkx", "justknobx"],
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
    function d() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "canonical_ent_companion_server_cached_nonce_enabled",
        )
      );
    }
    ((l.isCanonicalEnabled = e),
      (l.isCanonicalRecoveryEnabled = s),
      (l.isCanonicalAppReloadEnabled = u),
      (l.isCanonicalRecoveryAppReloadEnabled = c),
      (l.isCachedNonceRecoveryEnabled = d));
  },
  98,
);
