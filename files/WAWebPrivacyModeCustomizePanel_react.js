__d(
  "WAWebPrivacyModeCustomizePanel.react",
  [
    "WAWebChevronIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerItem.react",
    "WAWebDrawerSection.react",
    "WAWebPrivacyModeBlurConfig",
    "WAWebPrivacyModeSettingsFBT",
    "WAWebPrivacyModeUtils",
    "WAWebTabOrder",
    "WAWebUserPrefsPrivacyMode",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { chevronIcon: { color: "x16zc8z2", height: "x17rw0jw", $$css: !0 } },
      c = [
        {
          category: o("WAWebPrivacyModeBlurConfig").BlurCategory.General,
          label: o("WAWebPrivacyModeSettingsFBT").privacyModeGeneralLabel,
        },
        {
          category: o("WAWebPrivacyModeBlurConfig").BlurCategory.Media,
          label: o("WAWebPrivacyModeSettingsFBT").privacyModeMediaLabel,
        },
      ];
    function d(e) {
      var t = e.onBack,
        n = e.onOpenBlurPreset;
      return s.jsxs(r("WAWebDrawer.react"), {
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "privacy-screen-customize",
        },
        children: [
          s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: o("WAWebPrivacyModeSettingsFBT").privacyModeCustomizeTitle(),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: t,
            focusBackOrCancel: !0,
          }),
          s.jsx(r("WAWebDrawerBody.react"), {
            children: s.jsx(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              animation: !1,
              children: c.map(function (e, t) {
                var a = o("WAWebUserPrefsPrivacyMode").getBlurPreset(
                  e.category,
                );
                return s.jsx(
                  r("WAWebDrawerItem.react"),
                  {
                    title: e.label(),
                    tabIndex: -1,
                    dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                    theme: "privacy",
                    isLastItem: t === c.length - 1,
                    onClick: function () {
                      return n(e.category);
                    },
                    testid: void 0,
                    icon: s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                      directional: !0,
                      iconXstyle: u.chevronIcon,
                    }),
                    children: s.jsx("span", {
                      className: "xhslqc4 x1f6kntn x1nzty39",
                      children: o("WAWebPrivacyModeUtils").getPresetLabel(a),
                    }),
                  },
                  e.category,
                );
              }),
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
