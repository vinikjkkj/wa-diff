__d(
  "WAWebChatlistPanelUtils",
  ["WAWebChatLockUtils", "WAWebChatlistPanelMode", "WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.hideLockedChats,
        n = e.lockedChatsEntryPointVisible,
        a = e.mode,
        i = e.searchQuery,
        l = e.selectableState,
        s = e.showMultiSelectBar;
      return a !== r("WAWebChatlistPanelMode").Chatlist ||
        (l == null ? void 0 : l.isSelectable) === !0 ||
        s ||
        !o("WAWebChatLockUtils").shouldShowChatLockEntryPoints()
        ? !1
        : r("WAWebEnvironment").isWindows === !0
          ? n && t === !0
          : n || (t === !1 && i.isEmptyQuery() && !i.hasFilter());
    }
    l.shouldShowLockedChatsPanel = e;
  },
  98,
);
