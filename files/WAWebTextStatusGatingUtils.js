__d(
  "WAWebTextStatusGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "evolve_about_m1_receiver_for_new_surfaces_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "whats_happening_emoji_only_creation_enabled",
      );
    }
    ((l.receiveTextStatusForNewSurfacesEnabled = e),
      (l.emojiOnlyAboutCreationEnabled = s));
  },
  98,
);
