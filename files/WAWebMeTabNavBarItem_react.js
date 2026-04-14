__d(
  "WAWebMeTabNavBarItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebIntroPanelV2.react",
    "WAWebKeyboardTabUtils",
    "WAWebMeTabFlow.react",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebNavigateToRouterPage",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        profilePictureWrapper: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = o("WAWebUserPrefsMeUser").getMeUser(),
        l = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o(
              "WAWebDrawerManager",
            ).DrawerManager.openDrawerLeftAsync(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "profile" }
                : u.jsx(o("WAWebMeTabFlow.react").MeTabFlow, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                  }),
              {
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                transition: "none",
                focusOnUnMount: !0,
              },
            );
            e &&
              (a(o("WAWebNavBarTypes").NavBarItems.MeTab),
              o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                u.jsx(r("WAWebIntroPanelV2.react"), {}),
                { transition: "none", disableRotateFocus: !0 },
              ),
              o("WAWebNavBarLogEvents").logNavBarEvent(
                o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                  .PROFILE,
              ));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        m = r("useWAWebNavigateToRouterPage")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
          {
            onNavigationTransitioning: function () {
              (a(o("WAWebNavBarTypes").NavBarItems.MeTab),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .PROFILE,
                ));
            },
          },
        ),
        p = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.MeTab) {
              if (m != null) {
                m();
                return;
              }
              return l();
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        _ = t === o("WAWebNavBarTypes").NavBarItems.MeTab,
        f = c(
          function () {
            return u.jsx(o("WAWebDetailImage.react").DetailImage, {
              ariaLabel: s._(/*BTDS*/ "Me"),
              testId: "navbar-item-me-tab-photo",
              theme: "chatlist_header_profile_photo",
              tabIndex: -1,
              id: i,
              size: 28,
              xstyle: d.profilePictureWrapper,
            });
          },
          [i],
        );
      return u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
        testid: void 0,
        icon: f,
        spacingXstyle: o("WAWebUISpacing").uiPadding.all6,
        title: s._(/*BTDS*/ "You"),
        onClick: p,
        isActive: _,
        tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_ME_TAB,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MeTabNavBarItem = m));
  },
  226,
);
