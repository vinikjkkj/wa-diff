__d(
  "WAWebAccountLinkingGatingUtils",
  ["WAWebEnvironment", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("WAWebEnvironment").isGuest ? "guest" : "companion";
    }
    function s() {
      return e() === "guest";
    }
    function u() {
      return r("justknobx")._("715");
    }
    function c() {
      return r("gkx")("26959");
    }
    ((l.getWaffleMode = e),
      (l.isGuestMode = s),
      (l.isWaffleLifecycleEnabled = u),
      (l.isWafflePkiMigrationEnabled = c));
  },
  98,
);
