__d(
  "WAWebTeamLinkGating",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("teamlink_enabled")
      );
    }
    function s() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_teamlink_invitation_privacy_gate_enabled",
        )
      );
    }
    ((l.teamLinkEnabled = e), (l.teamLinkOwnerEntryEnabled = s));
  },
  98,
);
