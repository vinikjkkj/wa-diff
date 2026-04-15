__d(
  "WAWebStatusNavBarItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAppTracker",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebStatusFilledRefreshedIcon.react",
    "WAWebStatusNavigateTo",
    "WAWebStatusRefreshedIcon.react",
    "WAWebUnreadActivityIndicator.react",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAppTracker",
    "useWAWebStatusActivityIndicator",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        a = e.activeNavBarItem,
        i = e.updateActiveNavBarItem,
        l = o(
          "useWAWebStatusActivityIndicator",
        ).useWAWebStatusActivityIndicator(),
        c = l.clearUnreadActivity,
        d = l.hasUnread;
      r("useWAWebAppTracker")(
        o("WAWebAppTracker").AppTrackerType.StatusTab,
        a === o("WAWebNavBarTypes").NavBarItems.Status,
      );
      var m;
      t[0] !== d
        ? ((m = d ? u.jsx(r("WAWebUnreadActivityIndicator.react"), {}) : null),
          (t[0] = d),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      t[2] !== a || t[3] !== c || t[4] !== i
        ? ((_ = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (a !== o("WAWebNavBarTypes").NavBarItems.Status) {
                var e =
                  yield o(
                    "WAWebDrawerManager",
                  ).DrawerManager.closeDrawerLeftAsync();
                e &&
                  (i(o("WAWebNavBarTypes").NavBarItems.Status),
                  o("WAWebStatusNavigateTo").navigateToStatus(c),
                  o("WAWebNavBarLogEvents").logNavBarEvent(
                    o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                      .STATUS,
                  ),
                  o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                    o(
                      "WAWebAdaptiveLayoutGatingUtils",
                    ).shouldUseDrawerDescriptor()
                      ? {
                          descriptorType: "mid_drawer_empty_state",
                          navBarItem: o("WAWebNavBarTypes").NavBarItems.Status,
                        }
                      : u.jsx(
                          o("WAWebMidDrawerEmptyState.react")
                            .MidDrawerEmptyState,
                          { type: o("WAWebNavBarTypes").NavBarItems.Status },
                        ),
                    { transition: "none", disableRotateFocus: !0 },
                  ));
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = a),
          (t[3] = c),
          (t[4] = i),
          (t[5] = _))
        : (_ = t[5]);
      var f = _,
        g;
      t[6] !== a
        ? ((g =
            a === o("WAWebNavBarTypes").NavBarItems.Status
              ? u.jsx(
                  o("WAWebStatusFilledRefreshedIcon.react")
                    .StatusFilledRefreshedIcon,
                  {},
                )
              : u.jsx(
                  o("WAWebStatusRefreshedIcon.react").StatusRefreshedIcon,
                  {},
                )),
          (t[6] = a),
          (t[7] = g))
        : (g = t[7]);
      var h = g,
        y;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Status")), (t[8] = y))
        : (y = t[8]);
      var C = y,
        b;
      t[9] !== d
        ? ((b = d ? s._(/*BTDS*/ "Updates in Status") : s._(/*BTDS*/ "Status")),
          (t[9] = d),
          (t[10] = b))
        : (b = t[10]);
      var v = b,
        S = a === o("WAWebNavBarTypes").NavBarItems.Status,
        R;
      t[11] !== v || t[12] !== f || t[13] !== h || t[14] !== p || t[15] !== S
        ? ((R = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: h,
            ariaLabel: v,
            inlineActivityIndicator: p,
            inlineActivityIndicatorType: o("WAWebNavBarItem.react")
              .InlineActivityIndicatorType.Dot,
            title: C,
            testid: void 0,
            isActive: S,
            onClick: f,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_STATUS,
          })),
          (t[11] = v),
          (t[12] = f),
          (t[13] = h),
          (t[14] = p),
          (t[15] = S),
          (t[16] = R))
        : (R = t[16]);
      var L = R;
      return L;
    }
    l.StatusNavBarItem = c;
  },
  226,
);
