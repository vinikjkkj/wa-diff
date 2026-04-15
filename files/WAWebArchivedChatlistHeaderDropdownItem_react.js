__d(
  "WAWebArchivedChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebArchivedFlowLoadable",
    "WAWebChatFolderOpenWamEvent",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerManager",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcArchive.react",
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
        var a = s._(/*BTDS*/ "Archived");
        ((n = u.jsx(r("WDSMenuItem.react"), {
          title: a,
          testid: void 0,
          onPress: t,
          Icon: r("WDSIconIcArchive.react"),
        })),
          (e[0] = n));
      } else n = e[0];
      return n;
    }
    function d(e) {
      (e == null || e.stopPropagation(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "archived" }
            : u.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
              }),
        ),
        new (o("WAWebChatFolderOpenWamEvent").ChatFolderOpenWamEvent)({
          folderType: "Archive",
        }).commit(),
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
          o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.ARCHIVED,
        ));
    }
    l.default = c;
  },
  226,
);
