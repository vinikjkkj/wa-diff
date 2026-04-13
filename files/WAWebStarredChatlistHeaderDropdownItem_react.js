__d(
  "WAWebStarredChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebStarredDrawerLoadable",
    "WAWebStarredMsgCollection",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcGrade.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t = d,
        n;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var a = s._(/*BTDS*/ "Starred messages");
        ((n = u.jsx(r("WDSMenuItem.react"), {
          Icon: r("WDSIconIcGrade.react"),
          title: a,
          onPress: t,
          testid: void 0,
        })),
          (e[0] = n));
      } else n = e[0];
      return n;
    }
    function d(e) {
      (e == null || e.stopPropagation(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          u.jsx(o("WAWebStarredDrawerLoadable").StarredDrawerLoadable, {
            starredMsgs: o("WAWebStarredMsgCollection")
              .AllStarredMsgsCollection,
            onClose: o("WAWebDrawerManager").closeDrawerLeft,
            headerType: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ),
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
          o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.STARRED,
        ));
    }
    l.default = c;
  },
  226,
);
