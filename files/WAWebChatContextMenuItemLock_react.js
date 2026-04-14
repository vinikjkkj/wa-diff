__d(
  "WAWebChatContextMenuItemLock.react",
  [
    "fbt",
    "WAWebChatLockCodeModal.react",
    "WAWebChatLockUtils",
    "WAWebStateUtils",
    "WAWebWamEnumActionEntryPoint",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useModelValues(t, ["isLocked"]),
        a = n.isLocked,
        i = function () {
          o("WAWebChatLockCodeModal.react").promptAndLockChat(
            o("WAWebStateUtils").unproxy(t),
            {
              entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
                .CHAT_CONTEXT_MENU,
            },
          );
        },
        l = s._(/*BTDS*/ "Lock chat");
      return o("WAWebChatLockUtils").hasChatlockSecretCode() &&
        t.supportsChatLock() &&
        !a
        ? u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconWdsIcChatlockOutline.react"),
              title: l,
              onPress: i,
              testid: void 0,
            },
            "ChatLockMenuItem",
          )
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
