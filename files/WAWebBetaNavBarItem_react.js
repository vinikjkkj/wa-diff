__d(
  "WAWebBetaNavBarItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBetaIcon.react",
    "WAWebDrawerManager",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebExternalBetaOptIn",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        betaIcon: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          height: "xxk0z11",
          marginInlineStart: "x4h0osi",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        r = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        l = i[0];
      if (!l) return null;
      var d;
      t[0] !== r || t[1] !== a
        ? ((d = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (r !== o("WAWebNavBarTypes").NavBarItems.Beta) {
                var e = yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.openDrawerLeftAsync(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? {
                        descriptorType: "settings",
                        initialStep: o("WAWebSettingsConst").SettingsSteps.Help,
                      }
                    : u.jsx(
                        o("WAWebSettingsFlowLoadable").SettingsFlowLoadable,
                        {
                          onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                          initialStep:
                            o("WAWebSettingsConst").SettingsSteps.Help,
                        },
                      ),
                  { transition: "pop-drawer-fast" },
                );
                e &&
                  (a(o("WAWebNavBarTypes").NavBarItems.Beta),
                  o("WAWebNavBarLogEvents").logNavBarEvent(
                    o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                      .SETTINGS_HELP,
                  ));
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = r),
          (t[1] = a),
          (t[2] = d))
        : (d = t[2]);
      var m = d,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(o("WAWebBetaIcon.react").BetaIcon, {
            xstyle: c.betaIcon,
          })),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Beta")), (t[4] = f))
        : (f = t[4]);
      var g = f,
        h = r === o("WAWebNavBarTypes").NavBarItems.Beta,
        y;
      t[5] !== m || t[6] !== h
        ? ((y = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: _,
            title: g,
            testid: void 0,
            isActive: h,
            onClick: m,
          })),
          (t[5] = m),
          (t[6] = h),
          (t[7] = y))
        : (y = t[7]);
      var C = y;
      return C;
    }
    l.BetaNavBarItem = d;
  },
  226,
);
