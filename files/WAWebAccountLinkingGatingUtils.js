__d(
  "WAWebAccountLinkingGatingUtils",
  ["WAWebEnvironment", "justknobx"],
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
    ((l.getWaffleMode = e),
      (l.isGuestMode = s),
      (l.isWaffleLifecycleEnabled = u));
  },
  98,
);
