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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (a !== o("WAWebNavBarTypes").NavBarItems.Settings) {
                var e = yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.openDrawerLeftAsync(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? { descriptorType: "settings" }
                    : u.jsx(
                        o("WAWebSettingsFlowLoadable").SettingsFlowLoadable,
                        { onEnd: o("WAWebDrawerManager").closeDrawerLeft },
                      ),
                  {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    transition: "pop-drawer-fast",
                    focusOnUnMount: !0,
                  },
                );
                e &&
                  (i(o("WAWebNavBarTypes").NavBarItems.Settings),
                  o("WAWebNavBarLogEvents").logNavBarEvent(
                    o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                      .SETTINGS,
                  ),
                  self.setTimeout(d, 0));
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        m;
      t[3] !== a
        ? ((m =
            a === o("WAWebNavBarTypes").NavBarItems.Settings
              ? u.jsx(
                  o("WAWebSettingsFilledRefreshedIcon.react")
                    .SettingsFilledRefreshedIcon,
                  {},
                )
              : u.jsx(
                  o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon,
                  {},
                )),
          (t[3] = a),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Settings")), (t[5] = _))
        : (_ = t[5]);
      var f = _,
        g = a === o("WAWebNavBarTypes").NavBarItems.Settings,
        h;
      t[6] !== c || t[7] !== p || t[8] !== g
        ? ((h = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            testid: void 0,
            icon: p,
            title: f,
            keyboardShortcutAction: o("WAWebActions").Action.OPEN_SETTINGS,
            onClick: c,
            isActive: g,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_SETTINGS,
          })),
          (t[6] = c),
          (t[7] = p),
          (t[8] = g),
          (t[9] = h))
        : (h = t[9]);
      var y = h;
      return y;
    }
    function d() {
      o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? {
              descriptorType: "mid_drawer_empty_state",
              navBarItem: o("WAWebNavBarTypes").NavBarItems.Settings,
            }
          : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
              type: o("WAWebNavBarTypes").NavBarItems.Settings,
            }),
        { transition: "none", disableRotateFocus: !0, noFocus: !0 },
      );
    }
    l.SettingsNavBarItem = c;
  },
  226,
);
