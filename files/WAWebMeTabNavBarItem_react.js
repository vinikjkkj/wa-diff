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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(14),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebUserPrefsMeUser").getMeUser()), (t[0] = l))
        : (l = t[0]);
      var c = l,
        m;
      t[1] !== i
        ? ((m = (function () {
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
                (i(o("WAWebNavBarTypes").NavBarItems.MeTab),
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
          })()),
          (t[1] = i),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== i
        ? ((_ = {
            onNavigationTransitioning: function () {
              (i(o("WAWebNavBarTypes").NavBarItems.MeTab),
                o("WAWebNavBarLogEvents").logNavBarEvent(
                  o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                    .PROFILE,
                ));
            },
          }),
          (t[3] = i),
          (t[4] = _))
        : (_ = t[4]);
      var f = r("useWAWebNavigateToRouterPage")(
          o("WAWebNavBarTypes").NavBarItems.Chats,
          _,
        ),
        g;
      t[5] !== a || t[6] !== p || t[7] !== f
        ? ((g = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (a !== o("WAWebNavBarTypes").NavBarItems.MeTab) {
                if (f != null) {
                  f();
                  return;
                }
                return p();
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[5] = a),
          (t[6] = p),
          (t[7] = f),
          (t[8] = g))
        : (g = t[8]);
      var h = g,
        y = a === o("WAWebNavBarTypes").NavBarItems.MeTab,
        C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            ariaLabel: s._(/*BTDS*/ "Me"),
            testId: "navbar-item-me-tab-photo",
            theme: "chatlist_header_profile_photo",
            tabIndex: -1,
            id: c,
            size: 28,
            xstyle: d.profilePictureWrapper,
          })),
          (t[9] = C))
        : (C = t[9]);
      var b = C,
        v;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "You")), (t[10] = v))
        : (v = t[10]);
      var S;
      return (
        t[11] !== h || t[12] !== y
          ? ((S = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
              testid: void 0,
              icon: b,
              spacingXstyle: o("WAWebUISpacing").uiPadding.all6,
              title: v,
              onClick: h,
              isActive: y,
              tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_ME_TAB,
            })),
            (t[11] = h),
            (t[12] = y),
            (t[13] = S))
          : (S = t[13]),
        S
      );
    }
    l.MeTabNavBarItem = m;
  },
  226,
);
