__d(
  "WAWebPrivacyScreenModeToggle.react",
  [
    "WAWebDrawerItem.react",
    "WAWebPrivacyModeContext",
    "WAWebPrivacyModeGating",
    "WAWebPrivacyModeSettingsFBT",
    "WAWebTabOrder",
    "WDSSwitch.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.onOpenCustomize,
        n = o("WAWebPrivacyModeContext").usePrivacyMode(),
        a = n.isPrivacyModeEnabled,
        i = n.setPrivacyModeEnabled,
        l = function (n) {
          (n.stopPropagation(), t == null || t());
        };
      return s.jsxs(r("WAWebDrawerItem.react"), {
        title: o("WAWebPrivacyModeSettingsFBT").privacyScreenModeTitle(),
        tabIndex: -1,
        dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
        icon: s.jsx("div", {
          className: "x1849jeq x78zum5 xl56j7k",
          children: s.jsx(r("WDSSwitch.react"), {
            value: a,
            "aria-label":
              o("WAWebPrivacyModeSettingsFBT")
                .privacyScreenModeTitle()
                .toString() +
              ". " +
              o("WAWebPrivacyModeSettingsFBT")
                .privacyScreenModeDescription()
                .toString(),
          }),
        }),
        theme: "privacy",
        isLastItem: !1,
        disableKeydownHandling: !0,
        onClick: function () {
          i(!a);
        },
        testid: void 0,
        children: [
          s.jsx("div", {
            className: "xcldk2z",
            children: o(
              "WAWebPrivacyModeSettingsFBT",
            ).privacyScreenModeDescription(),
          }),
          a &&
            t != null &&
            s.jsx("div", {
              className: "x1v5yvga x1ypdohk x1f6kntn x1380le5",
              onClick: l,
              onKeyDown: function (t) {
                (t.key === "Enter" || t.key === " ") &&
                  (t.preventDefault(), l(t));
              },
              role: "button",
              tabIndex: 0,
              children: o("WAWebPrivacyModeSettingsFBT").privacyModeCustomize(),
            }),
        ],
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.onOpenCustomize;
      return o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()
        ? s.jsx(u, { onOpenCustomize: t })
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.WAWebPrivacyScreenModeToggle = c));
  },
  98,
);
