__d(
  "WAWebSettingsNavBarItem.react",
  [
    "fbt",
    "WAWebActions",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebKeyboardTabUtils",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebSettingsFilledRefreshedIcon.react",
    "WAWebSettingsFlowLoadable",
    "WAWebSettingsRefreshedIcon.react",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.Settings) {
              var e = yield o(
                "WAWebDrawerManager",
              ).DrawerManager.openDrawerLeftAsync(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? { descriptorType: "settings" }
                  : u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                      onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                    }),
                {
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  transition: "pop-drawer-fast",
                  focusOnUnMount: !0,
                },
              );
              e &&
                (a(o("WAWebNavBarTypes").NavBarItems.Settings),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .SETTINGS,
                ),
                self.setTimeout(function () {
                  o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                    o(
                      "WAWebAdaptiveLayoutGatingUtils",
                    ).shouldUseDrawerDescriptor()
                      ? {
                          descriptorType: "mid_drawer_empty_state",
                          navBarItem:
                            o("WAWebNavBarTypes").NavBarItems.Settings,
                        }
                      : u.jsx(
                          o("WAWebMidDrawerEmptyState.react")
                            .MidDrawerEmptyState,
                          { type: o("WAWebNavBarTypes").NavBarItems.Settings },
                        ),
                    { transition: "none", disableRotateFocus: !0, noFocus: !0 },
                  );
                }, 0));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        l =
          t === o("WAWebNavBarTypes").NavBarItems.Settings
            ? u.jsx(
                o("WAWebSettingsFilledRefreshedIcon.react")
                  .SettingsFilledRefreshedIcon,
                {},
              )
            : u.jsx(
                o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon,
                {},
              ),
        c = s._(/*BTDS*/ "Settings"),
        d = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          testid: void 0,
          icon: l,
          title: c,
          keyboardShortcutAction: o("WAWebActions").Action.OPEN_SETTINGS,
          onClick: i,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Settings,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_SETTINGS,
        });
      return d;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.SettingsNavBarItem = c));
  },
  226,
);
