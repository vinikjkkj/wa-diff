__d(
  "WAWebWindowsArchivedChatsNavBarItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebArchiveFilledRefreshedIcon.react",
    "WAWebArchiveRefreshedIcon.react",
    "WAWebArchivedFlowLoadable",
    "WAWebChatUnreadCount.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarItem.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebWamEnumWebcNavbarItemLabel",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebArchivedChatsActivityIndicator",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        r = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = o(
          "useWAWebArchivedChatsActivityIndicator",
        ).useArchivedChatsActivityIndicator(),
        l = i.unreadCount,
        c;
      t[0] !== l
        ? ((c =
            l > 0
              ? u.jsx(
                  o("WAWebChatUnreadCount.react").UnreadCount,
                  {
                    count: l,
                    theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                      .Outlined,
                  },
                  "icon-count",
                )
              : null),
          (t[0] = l),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        m;
      t[2] !== r || t[3] !== a
        ? ((m = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (r !== o("WAWebNavBarTypes").NavBarItems.Archived) {
                var e = yield o(
                  "WAWebDrawerManager",
                ).DrawerManager.openDrawerLeftAsync(
                  o(
                    "WAWebAdaptiveLayoutGatingUtils",
                  ).shouldUseDrawerDescriptor()
                    ? { descriptorType: "archived" }
                    : u.jsx(
                        o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable,
                        { onEnd: o("WAWebDrawerManager").closeDrawerLeft },
                      ),
                  {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    transition: "pop-drawer-fast",
                    focusOnUnMount: !0,
                  },
                );
                e &&
                  (a(o("WAWebNavBarTypes").NavBarItems.Archived),
                  o("WAWebNavBarLogEvents").logNavBarEvent(
                    o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL
                      .ARCHIVED,
                  ));
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = r),
          (t[3] = a),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Archived")), (t[5] = _))
        : (_ = t[5]);
      var f = _,
        g;
      t[6] !== r
        ? ((g =
            r === o("WAWebNavBarTypes").NavBarItems.Archived
              ? u.jsx(
                  o("WAWebArchiveFilledRefreshedIcon.react")
                    .ArchiveFilledRefreshedIcon,
                  {},
                )
              : u.jsx(
                  o("WAWebArchiveRefreshedIcon.react").ArchiveRefreshedIcon,
                  {},
                )),
          (t[6] = r),
          (t[7] = g))
        : (g = t[7]);
      var h = g,
        y = r === o("WAWebNavBarTypes").NavBarItems.Archived,
        C;
      t[8] !== p || t[9] !== h || t[10] !== y || t[11] !== d
        ? ((C = u.jsx(o("WAWebNavBarItem.react").NavBarItem, {
            icon: h,
            title: f,
            inlineActivityIndicator: d,
            inlineActivityIndicatorType: o("WAWebNavBarItem.react")
              .InlineActivityIndicatorType.Counter,
            testid: void 0,
            isActive: y,
            onClick: p,
          })),
          (t[8] = p),
          (t[9] = h),
          (t[10] = y),
          (t[11] = d),
          (t[12] = C))
        : (C = t[12]);
      var b = C;
      return b;
    }
    l.default = c;
  },
  226,
);
