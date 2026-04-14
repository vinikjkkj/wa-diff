__d(
  "WAWebProfileNavBarItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBizRefreshedProfileDrawerLoadable",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebKeyboardTabUtils",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebProfilePicThumbCollection",
    "WAWebTextStatusCollection",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "cr:1923",
    "react",
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
        profilePictureActive: { outline: "x139wjo3", $$css: !0 },
      };
    function m(e) {
      var t = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = o("WAWebUserPrefsMeUser").getMeUser(),
        l = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (t !== o("WAWebNavBarTypes").NavBarItems.Profile) {
              var e = o(
                  "WAWebTextStatusCollection",
                ).TextStatusCollection.assertGet(i),
                r = o(
                  "WAWebProfilePicThumbCollection",
                ).ProfilePicThumbCollection.assertGet(i),
                l = o("WAWebContactCollection").ContactCollection.assertGet(i),
                s = o("WAWebBizGatingUtils").businessProfileRefreshEnabled();
              if (s) {
                var c =
                  yield o(
                    "WAWebDrawerManager",
                  ).DrawerManager.closeDrawerLeftAsync();
                if (!c) return;
                (a(o("WAWebNavBarTypes").NavBarItems.Profile),
                  o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                    u.jsx(
                      o("WAWebBizRefreshedProfileDrawerLoadable")
                        .WAWebBizRefreshedProfileDrawerLoadable,
                      {
                        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                          .NAV_BAR,
                        onClose: function () {
                          return o(
                            "WAWebDrawerManager",
                          ).DrawerManager.closeDrawerFullscreen();
                        },
                      },
                    ),
                  ),
                  o("WAWebNavBarLogEvents").logNavBarEvent(
                    o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                      .PROFILE,
                  ));
                return;
              }
              var d = yield o(
                "WAWebDrawerManager",
              ).DrawerManager.openDrawerLeftAsync(
                u.jsx(n("cr:1923"), {
                  status: e,
                  profilePicThumb: r,
                  contact: l,
                  conn: o("WAWebConnModel").Conn,
                  entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
                  onClose: o("WAWebDrawerManager").closeDrawerLeft,
                  isInitialStep: !0,
                }),
                {
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  transition: "pop-drawer-fast",
                  focusOnUnMount: !0,
                },
              );
              d &&
                (a(o("WAWebNavBarTypes").NavBarItems.Profile),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .PROFILE,
                ),
                o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? {
                        descriptorType: "mid_drawer_empty_state",
                        navBarItem: o("WAWebNavBarTypes").NavBarItems.Profile,
                      }
                    : u.jsx(
                        o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState,
                        { type: o("WAWebNavBarTypes").NavBarItems.Profile },
                      ),
                  { transition: "none", disableRotateFocus: !0 },
                ));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        m = t === o("WAWebNavBarTypes").NavBarItems.Profile,
        p = c(
          function () {
            return u.jsx(o("WAWebDetailImage.react").DetailImage, {
              ariaLabel: s._(/*BTDS*/ "Profile picture"),
              testId: "navbar-item-profile-photo",
              theme: "chatlist_header_profile_photo",
              tabIndex: -1,
              id: i,
              size: 28,
              xstyle: [d.profilePictureWrapper, m && d.profilePictureActive],
            });
          },
          [i, m],
        ),
        _ = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
          testid: void 0,
          icon: p,
          spacingXstyle: o("WAWebUISpacing").uiPadding.all6,
          title: s._(/*BTDS*/ "Profile"),
          onClick: l,
          isActive: t === o("WAWebNavBarTypes").NavBarItems.Profile,
          tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_PROFILE,
        });
      return _;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ProfileNavBarItem = m));
  },
  226,
);
