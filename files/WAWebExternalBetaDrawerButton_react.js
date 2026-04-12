__d(
  "WAWebExternalBetaDrawerButton.react",
  [
    "fbt",
    "WAWebHelpItemIcon.react",
    "WAWebMenuItems.react",
    "WAWebPrimaryFeatures",
    "WAWebText.react",
    "WDSSwitch.react",
    "cr:23046",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebExternalBetaOptIn",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        t = e[0],
        a = e[1],
        i = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "external_beta_can_join",
        );
      if (
        !i ||
        !o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "external_web_beta_opt_in",
        ) ||
        (n("cr:23046") != null && n("cr:23046").isWindowsHybridEnabled())
      )
        return null;
      var l = u.jsx(r("WDSSwitch.react"), {
        value: t,
        onChange: function (t, n) {
          (n.stopPropagation(), n.preventDefault(), a());
        },
      });
      return u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
        optionId: "help-join-beta",
        testid: void 0,
        onSelect: a,
        detailLeft: u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
          iconType: o("WAWebHelpItemIcon.react").HelpItemIconType.Beta,
        }),
        secondary: u.jsx(o("WAWebText.react").WAWebTextMuted, {
          textWrap: "wrap",
          children: s._(
            /*BTDS*/ "Get new features before they are released. Report bugs using the Contact us form above.",
          ),
        }),
        detailRight: l,
        primary: s._(/*BTDS*/ "Join the beta"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
