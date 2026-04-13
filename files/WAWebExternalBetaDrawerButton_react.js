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
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebExternalBetaOptIn",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(11),
        t = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        a = t[0],
        i = t[1],
        l = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "external_beta_can_join",
        );
      if (
        !l ||
        !o("WAWebPrimaryFeatures").primaryFeatureEnabled(
          "external_web_beta_opt_in",
        ) ||
        (n("cr:23046") != null && n("cr:23046").isWindowsHybridEnabled())
      )
        return null;
      var c;
      e[0] !== i
        ? ((c = function (t, n) {
            (n.stopPropagation(), n.preventDefault(), i());
          }),
          (e[0] = i),
          (e[1] = c))
        : (c = e[1]);
      var d;
      e[2] !== a || e[3] !== c
        ? ((d = u.jsx(r("WDSSwitch.react"), { value: a, onChange: c })),
          (e[2] = a),
          (e[3] = c),
          (e[4] = d))
        : (d = e[4]);
      var m = d,
        p;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
            iconType: o("WAWebHelpItemIcon.react").HelpItemIconType.Beta,
          })),
          (e[5] = p))
        : (p = e[5]);
      var _;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            textWrap: "wrap",
            children: s._(
              /*BTDS*/ "Get new features before they are released. Report bugs using the Contact us form above.",
            ),
          })),
          (e[6] = _))
        : (_ = e[6]);
      var f;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Join the beta")), (e[7] = f))
        : (f = e[7]);
      var g;
      return (
        e[8] !== m || e[9] !== i
          ? ((g = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "help-join-beta",
              testid: void 0,
              onSelect: i,
              detailLeft: p,
              secondary: _,
              detailRight: m,
              primary: f,
            })),
            (e[8] = m),
            (e[9] = i),
            (e[10] = g))
          : (g = e[10]),
        g
      );
    }
    l.default = c;
  },
  226,
);
