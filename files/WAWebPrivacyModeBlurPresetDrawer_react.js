__d(
  "WAWebPrivacyModeBlurPresetDrawer.react",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebPrivacyModeBlurConfig",
    "WAWebPrivacyModeContext",
    "WAWebPrivacyModeSettingsFBT",
    "WAWebPrivacyModeUtils",
    "WAWebPrivacyVisibilityOption.react",
    "WAWebUISpacing",
    "WAWebUserPrefsPrivacyMode",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = [
        o("WAWebPrivacyModeBlurConfig").BlurPreset.Off,
        o("WAWebPrivacyModeBlurConfig").BlurPreset.Light,
        o("WAWebPrivacyModeBlurConfig").BlurPreset.Medium,
        o("WAWebPrivacyModeBlurConfig").BlurPreset.Strong,
      ];
    function d(e) {
      return e === o("WAWebPrivacyModeBlurConfig").BlurCategory.General
        ? o("WAWebPrivacyModeSettingsFBT").privacyModeGeneralLabel()
        : o("WAWebPrivacyModeSettingsFBT").privacyModeMediaLabel();
    }
    function m(e) {
      var t = e.category,
        n = e.onBack,
        a = o("WAWebPrivacyModeContext").usePrivacyMode(),
        i = a.updateBlurPreset,
        l = u(function () {
          return o("WAWebUserPrefsPrivacyMode").getBlurPreset(t);
        }),
        m = l[0],
        p = l[1],
        _ = function (n) {
          (i(t, n), p(n));
        },
        f = d(t);
      return s.jsxs(r("WAWebDrawer.react"), {
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "privacy-blur-preset",
        },
        children: [
          s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: f,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: n,
            focusBackOrCancel: !0,
          }),
          s.jsx(r("WAWebDrawerBody.react"), {
            children: s.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: [
                o("WAWebUISpacing").uiPadding.horiz30,
                o("WAWebUISpacing").uiPadding.vert20,
              ],
              children: s.jsx("div", {
                role: "radiogroup",
                "aria-label": f.toString(),
                children: c.map(function (e) {
                  return s.jsx(
                    r("WAWebPrivacyVisibilityOption.react"),
                    {
                      text: o("WAWebPrivacyModeUtils").getPresetLabel(e),
                      selected: m === e,
                      testid: void 0,
                      onClick: function () {
                        return _(e);
                      },
                    },
                    e,
                  );
                }),
              }),
            }),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
