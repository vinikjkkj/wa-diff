__d(
  "WAWebLidMigrationDebugUI",
  ["WAWebUserPrefsMultiDeviceDebug", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        !r("gkx")("26258") &&
        (e == null ? void 0 : e.isLid()) === !0 &&
        o("WAWebUserPrefsMultiDeviceDebug").getLidMigrationDebugMode()
      );
    }
    function s(e) {
      return (
        !r("gkx")("26258") &&
        e === !0 &&
        o("WAWebUserPrefsMultiDeviceDebug").getLidMigrationDebugMode()
      );
    }
    function u(e) {
      return c(e.id);
    }
    function c(t) {
      return r("gkx")("26258") ? !1 : e(t.remote) || e(t.participant);
    }
    ((l.getShouldShowLidDebugUI = e),
      (l.getShouldShowLidDebugUIForGroups = s),
      (l.getShouldShowLidDebugUIForMsg = u),
      (l.getShouldShowLidDebugUIForMsgKey = c));
  },
  98,
);
