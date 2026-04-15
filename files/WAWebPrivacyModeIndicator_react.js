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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(5),
        t = o("WAWebPrivacyModeContext").usePrivacyMode(),
        n = t.isPrivacyModeEnabled,
        a = t.setPrivacyModeEnabled;
      if (!n) return null;
      var i;
      e[0] !== a
        ? ((i = function () {
            (a(!1),
              o("WAWebPrivacyModeToast").showPrivacyModeToast(!1, function () {
                a(!0);
              }));
          }),
          (e[0] = a),
          (e[1] = i))
        : (i = e[1]);
      var l = i,
        u;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = o("WAWebPrivacyModeSettingsFBT").privacyModeIndicatorTooltip()),
          (e[2] = u))
        : (u = e[2]);
      var c;
      return (
        e[3] !== l
          ? ((c = s.jsx(
              r("WDSMenuBarItem.react"),
              {
                testid: void 0,
                icon: r("WDSIconIcShieldLock.react"),
                title: u,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                onClick: l,
              },
              "btn-privacy-mode",
            )),
            (e[3] = l),
            (e[4] = c))
          : (c = e[4]),
        c
      );
    }
    function c() {
      var e = o("react-compiler-runtime").c(1);
      if (!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) return null;
      var t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(u, {})), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = c;
  },
  98,
);
