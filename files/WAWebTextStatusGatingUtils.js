__d(
  "WAWebTextStatusGatingUtils",
  ["WAWebABProps", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "text_status_receive_support",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "evolve_about_m1_receiver_enabled",
        )
      );
    }
    function s() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "evolve_about_m1_receiver_for_new_surfaces_enabled",
        )
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_evolve_about_send_enabled",
        ) &&
        o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "text_status_creation_support",
        )
      );
    }
    ((l.receiveTextStatusEnabled = e),
      (l.receiveTextStatusForNewSurfacesEnabled = s),
      (l.sendTextStatusEnabled = u));
  },
  98,
);
