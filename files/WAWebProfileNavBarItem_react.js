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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(12),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebUserPrefsMeUser").getMeUser()), (t[0] = l))
        : (l = t[0]);
      var c = l,
        m;
      t[1] !== a || t[2] !== i
        ? ((m = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (a !== o("WAWebNavBarTypes").NavBarItems.Profile) {
                var e = o(
                    "WAWebTextStatusCollection",
                  ).TextStatusCollection.assertGet(c),
                  t = o(
                    "WAWebProfilePicThumbCollection",
                  ).ProfilePicThumbCollection.assertGet(c),
                  r = o("WAWebContactCollection").ContactCollection.assertGet(
                    c,
                  ),
                  l = o("WAWebBizGatingUtils").businessProfileRefreshEnabled();
                if (l) {
                  var s =
                    yield o(
                      "WAWebDrawerManager",
                    ).DrawerManager.closeDrawerLeftAsync();
                  if (!s) return;
                  (i(o("WAWebNavBarTypes").NavBarItems.Profile),
                    o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
                      u.jsx(
                        o("WAWebBizRefreshedProfileDrawerLoadable")
                          .WAWebBizRefreshedProfileDrawerLoadable,
                        {
                          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                            .NAV_BAR,
                          onClose: p,
                        },
                      ),
                    ),
                    o("WAWebNavBarLogEvents").logNavBarEvent(
                      o("WAWebWamEnumWebcNavbarItemLabel")
                        .WEBC_NAVBAR_ITEM_LABEL.PROFILE,
                    ));
                  return;
                }
                var d = yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.openDrawerLeftAsync(
                  u.jsx(n("cr:1923"), {
                    status: e,
                    profilePicThumb: t,
                    contact: r,
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
                  (i(o("WAWebNavBarTypes").NavBarItems.Profile),
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
                          o("WAWebMidDrawerEmptyState.react")
                            .MidDrawerEmptyState,
                          { type: o("WAWebNavBarTypes").NavBarItems.Profile },
                        ),
                    { transition: "none", disableRotateFocus: !0 },
                  ));
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[1] = a),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var _ = m,
        f = a === o("WAWebNavBarTypes").NavBarItems.Profile,
        g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Profile picture")), (t[4] = g))
        : (g = t[4]);
      var h = f && d.profilePictureActive,
        y;
      t[5] !== h
        ? ((y = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            ariaLabel: g,
            testId: "navbar-item-profile-photo",
            theme: "chatlist_header_profile_photo",
            tabIndex: -1,
            id: c,
            size: 28,
            xstyle: [d.profilePictureWrapper, h],
          })),
          (t[5] = h),
          (t[6] = y))
        : (y = t[6]);
      var C = y,
        b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Profile")), (t[7] = b))
        : (b = t[7]);
      var v = a === o("WAWebNavBarTypes").NavBarItems.Profile,
        S;
      t[8] !== _ || t[9] !== C || t[10] !== v
        ? ((S = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            testid: void 0,
            icon: C,
            spacingXstyle: o("WAWebUISpacing").uiPadding.all6,
            title: b,
            onClick: _,
            isActive: v,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_PROFILE,
          })),
          (t[8] = _),
          (t[9] = C),
          (t[10] = v),
          (t[11] = S))
        : (S = t[11]);
      var R = S;
      return R;
    }
    function p() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    l.ProfileNavBarItem = m;
  },
  226,
);
