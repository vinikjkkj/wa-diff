__d(
  "useWAWebIsNewsletterUiEnabled",
  [
    "WAWebCmd",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebPrimaryFeaturesModel",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("react-compiler-runtime").c(2),
        t,
        n;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = [
              o("WAWebPrimaryFeaturesModel").PrimaryFeatures,
              o("WAWebCmd").Cmd,
            ]),
            (n = ["change:newsletter", "on_ab_props_update_from_bridge"]),
            (e[0] = t),
            (e[1] = n))
          : ((t = e[0]), (n = e[1])),
        r("useWAWebEventTargetValue")(t, n, s)
      );
    }
    function s() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebNewsletterExtendedGatingUtils").isNewsletterEnabledOnPrimary()
      );
    }
    l.default = e;
  },
  98,
);
