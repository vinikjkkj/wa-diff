__d(
  "WAWebReactionGatingUtils",
  ["WAWebA11yUtils", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        !o("WAWebA11yUtils").getPrefersReducedMotion() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_reactions_motion_v2_enabled",
        )
      );
    }
    l.isReactionsMotionV2Enabled = e;
  },
  98,
);
