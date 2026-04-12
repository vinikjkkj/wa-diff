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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.activeAccountInfo,
        n = e.updateActiveNavBarItem;
      if (!o("WAWebBizGatingUtils").isBizToolsDrawerEnabled()) return null;
      var a = function (r) {
          (r == null || r.stopPropagation(),
            o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
              o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL
                .BUSINESS_TOOLS,
            ),
            n != null && n(o("WAWebNavBarTypes").NavBarItems.BizTools),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
                adsAccountInfo: t,
                entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType")
                  .BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_CONVERSATIONS,
              }),
              {
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                transition: "pop-drawer-fast",
              },
            ));
        },
        i = s._(/*BTDS*/ "Business tools"),
        l = "mi-biz-tools menu-item";
      return u.jsx(r("WDSMenuItem.react"), {
        testid: void 0,
        Icon: o("WAWebStorefrontIcon.react").StorefrontIcon,
        onPress: a,
        title: i,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
