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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n = e.onBack,
        a = e.onOpenBlurPreset,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { surface: "unknown", viewName: "privacy-screen-customize" }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebPrivacyModeSettingsFBT").privacyModeCustomizeTitle()),
          (t[1] = l))
        : (l = t[1]);
      var d;
      t[2] !== n
        ? ((d = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: l,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: n,
            focusBackOrCancel: !0,
          })),
          (t[2] = n),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== a
        ? ((m = c.map(function (e, t) {
            var n = o("WAWebUserPrefsPrivacyMode").getBlurPreset(e.category);
            return s.jsx(
              r("WAWebDrawerItem.react"),
              {
                title: e.label(),
                tabIndex: -1,
                dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                theme: "privacy",
                isLastItem: t === c.length - 1,
                onClick: function () {
                  return a(e.category);
                },
                testid: void 0,
                icon: s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                  directional: !0,
                  iconXstyle: u.chevronIcon,
                }),
                children: s.jsx("span", {
                  className: "xhslqc4 x1f6kntn x1nzty39",
                  children: o("WAWebPrivacyModeUtils").getPresetLabel(n),
                }),
              },
              e.category,
            );
          })),
          (t[4] = a),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== m
        ? ((p = s.jsx(r("WAWebDrawerBody.react"), {
            children: s.jsx(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              animation: !1,
              children: m,
            }),
          })),
          (t[6] = m),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== d || t[9] !== p
          ? ((_ = s.jsxs(r("WAWebDrawer.react"), {
              testid: void 0,
              tsNavigationData: i,
              children: [d, p],
            })),
            (t[8] = d),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = d;
  },
  98,
);
