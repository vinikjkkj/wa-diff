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
    l.teamLinkEnabled = e;
  },
  98,
);
