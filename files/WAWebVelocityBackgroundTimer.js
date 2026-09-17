__d(
  "WAWebVelocityBackgroundTimer",
  ["WAWebThirdPartyMigrationGatingUtils", "velocity-animate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o(
        "WAWebThirdPartyMigrationGatingUtils",
      ).isVelocityAnimateMigrationEnabled() ||
        (e
          ? r("velocity-animate").enableSmoothBackgroundAnimations()
          : r("velocity-animate").disableSmoothBackgroundAnimations());
    }
    l.toggleSmoothBackgroundAnimations = e;
  },
  98,
);
