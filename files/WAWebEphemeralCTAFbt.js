__d(
  "WAWebEphemeralCTAFbt",
  ["fbt", "WAWebAfterReadUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return o("WAWebAfterReadUtils").isAfterReadEnabled()
        ? s._(/*BTDS*/ "Change timer.")
        : s._(/*BTDS*/ "Click to change.");
    }
    function u() {
      return o("WAWebAfterReadUtils").isAfterReadEnabled()
        ? s._(/*BTDS*/ "Set your own timer.")
        : s._(/*BTDS*/ "Click to set your own default timer.");
    }
    function c() {
      return o("WAWebAfterReadUtils").isAfterReadEnabled()
        ? s._(/*BTDS*/ "Change timer.")
        : s._(/*BTDS*/ "Click to change your default timer.");
    }
    ((l.getDmActionChangeSettingFbt = e),
      (l.getDmActionSetOwnTimerFbt = u),
      (l.getDmActionChangeDefaultTimerFbt = c));
  },
  226,
);
