__d(
  "WAWebBizToolsChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBizToolsFlowLoadable",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarTypes",
    "WAWebStorefrontIcon.react",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.activeAccountInfo,
        a = e.updateActiveNavBarItem;
      if (!o("WAWebBizGatingUtils").isBizToolsDrawerEnabled()) return null;
      var i;
      t[0] !== n || t[1] !== a
        ? ((i = function (t) {
            (t == null || t.stopPropagation(),
              o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
                o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL
                  .BUSINESS_TOOLS,
              ),
              a != null && a(o("WAWebNavBarTypes").NavBarItems.BizTools),
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                u.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
                  adsAccountInfo: n,
                  entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType")
                    .BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_CONVERSATIONS,
                }),
                {
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  transition: "pop-drawer-fast",
                },
              ));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Business tools")), (t[3] = c))
        : (c = t[3]);
      var d = c,
        m;
      return (
        t[4] !== l
          ? ((m = u.jsx(r("WDSMenuItem.react"), {
              testid: void 0,
              Icon: o("WAWebStorefrontIcon.react").StorefrontIcon,
              onPress: l,
              title: d,
            })),
            (t[4] = l),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = c;
  },
  226,
);
