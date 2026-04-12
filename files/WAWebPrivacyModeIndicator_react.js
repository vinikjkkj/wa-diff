__d(
  "WAWebPrivacyModeIndicator.react",
  [
    "WAWebPrivacyModeContext",
    "WAWebPrivacyModeGating",
    "WAWebPrivacyModeSettingsFBT",
    "WAWebPrivacyModeToast",
    "WAWebTabOrder",
    "WDSIconIcShieldLock.react",
    "WDSMenuBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("WAWebPrivacyModeContext").usePrivacyMode(),
        t = e.isPrivacyModeEnabled,
        n = e.setPrivacyModeEnabled;
      if (!t) return null;
      var a = function () {
        (n(!1),
          o("WAWebPrivacyModeToast").showPrivacyModeToast(!1, function () {
            n(!0);
          }));
      };
      return s.jsx(
        r("WDSMenuBarItem.react"),
        {
          testid: void 0,
          icon: r("WDSIconIcShieldLock.react"),
          title: o("WAWebPrivacyModeSettingsFBT").privacyModeIndicatorTooltip(),
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
          onClick: a,
        },
        "btn-privacy-mode",
      );
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c() {
      return o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()
        ? s.jsx(u, {})
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
