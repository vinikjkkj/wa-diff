__d(
  "useWAWebIsNewsletterUiEnabled",
  [
    "WAWebCmd",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebPrimaryFeaturesModel",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("useWAWebEventTargetValue")(
        [o("WAWebPrimaryFeaturesModel").PrimaryFeatures, o("WAWebCmd").Cmd],
        ["change:newsletter", "on_ab_props_update_from_bridge"],
        function () {
          return (
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterEnabledOnPrimary()
          );
        },
      );
    }
    l.default = e;
  },
  98,
);
