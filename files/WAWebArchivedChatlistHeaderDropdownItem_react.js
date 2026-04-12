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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = function (t) {
          (t == null || t.stopPropagation(),
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
        },
        t = s._(/*BTDS*/ "Archived"),
        n = "mi-archived menu-item";
      return u.jsx(r("WDSMenuItem.react"), {
        title: t,
        testid: void 0,
        onPress: e,
        Icon: r("WDSIconIcArchive.react"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
