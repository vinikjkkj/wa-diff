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
      var t = e.activeNavBarItem,
        r = e.updateActiveNavBarItem,
        a = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        i = a[0];
      if (!i) return null;
      var l = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.Beta) {
              var e = yield o(
                "WAWebDrawerManager",
              ).DrawerManager.openDrawerLeftAsync(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? {
                      descriptorType: "settings",
                      initialStep: o("WAWebSettingsConst").SettingsSteps.Help,
                    }
                  : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                      onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                      initialStep: o("WAWebSettingsConst").SettingsSteps.Help,
                    }),
                { transition: "pop-drawer-fast" },
              );
              e &&
                (r(o("WAWebNavBarTypes").NavBarItems.Beta),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .SETTINGS_HELP,
                ));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        d = u.jsx(o("WAWebBetaIcon.react").BetaIcon, { xstyle: c.betaIcon }),
        m = s._(/*BTDS*/ "Beta"),
        p = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          icon: d,
          title: m,
          testid: void 0,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Beta,
          onClick: l,
        });
      return p;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.BetaNavBarItem = d));
  },
  226,
);
