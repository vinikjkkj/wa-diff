__d(
  "WAWebListsChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerManager",
    "WAWebLabelFlowLoadable",
    "WAWebLabelOutlineIcon.react",
    "WAWebListPeopleIcon.react",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(3);
      if (!o("WAWebMobilePlatforms").isSMB()) return null;
      var t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o("WAWebListsGatingUtils").isListsEnabled()), (e[0] = t))
        : (t = e[0]);
      var n = t,
        a = d,
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = n ? s._(/*BTDS*/ "Lists") : s._(/*BTDS*/ "Labels")), (e[1] = i))
        : (i = e[1]);
      var l = i,
        c = n ? "mi-lists menu-item" : "mi-labels menu-item",
        m;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = u.jsx(r("WDSMenuItem.react"), {
              testid: void 0,
              Icon: n
                ? o("WAWebListPeopleIcon.react").ListPeopleIcon
                : o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
              onPress: a,
              title: l,
            })),
            (e[2] = m))
          : (m = e[2]),
        m
      );
    }
    function d(e) {
      (e == null || e.stopPropagation(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
            isInitialStep: !0,
          }),
        ),
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
          o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.LABELS,
        ));
    }
    l.default = c;
  },
  226,
);
