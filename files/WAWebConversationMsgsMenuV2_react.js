__d(
  "WAWebConversationMsgsMenuV2.react",
  [
    "WAWebChatGetters",
    "WAWebContactMenuDropdown.react",
    "WAWebConversationMenus",
    "WAWebConversationMsgsUtils",
    "WAWebNoop",
    "WDSMenu.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useRef;
    function p(e) {
      var t = e.chat,
        n = e.onCancelSelect,
        a = e.onMenuReady,
        i = e.onSelect,
        l = e.scrollContainerRef,
        u = e.selectable,
        p = m(null);
      c(
        function () {
          p.current = l;
        },
        [l],
      );
      var _ = d(
          function () {
            if (
              o(
                "WAWebConversationMsgsUtils",
              ).isSimplifiedChatConversationMenuEnabled(t)
            ) {
              var e = o("WAWebConversationMenus").hybridMenu(t, i, n, u);
              return s.jsx(r("WDSMenu.react"), { children: e });
            } else {
              if (o("WAWebChatGetters").getIsUser(t))
                return s.jsx(r("WAWebContactMenuDropdown.react"), {
                  chat: t,
                  toContextMenuManager: !0,
                  onSelectMessages: i,
                  enableChatThreadLogging: !1,
                  onSearchChat: r("WAWebNoop"),
                  container: l,
                });
              if (o("WAWebChatGetters").getIsGroup(t)) {
                var a = s.jsx(o("WAWebConversationMenus").GroupMenu, {
                  chat: t,
                  container: l,
                  onSelect: i,
                  onSearchChat: r("WAWebNoop"),
                });
                return s.jsx(r("WDSMenu.react"), { children: a });
              } else if (o("WAWebChatGetters").getIsBroadcast(t)) {
                var c = o("WAWebConversationMenus").broadcastMenu(t);
                return s.jsx(r("WDSMenu.react"), { children: c });
              }
            }
            return null;
          },
          [t, i, n, u, l],
        ),
        f = r("useWDSMenu")({
          targetRef: p,
          menu: _,
          contextMenuArea: !0,
          enableUIM: !1,
        }),
        g = f.menuPortal,
        h = f.openMenu;
      return (
        c(
          function () {
            a(h);
          },
          [h, a],
        ),
        g
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.ConversationMsgsMenuV2 = p));
  },
  98,
);
