__d(
  "WAWebNewChatMenuBarItem.react",
  [
    "fbt",
    "WAWebActions",
    "WAWebDropdown.react",
    "WAWebNewChatButtonGatingUtils",
    "WAWebNewChatOutlineIcon.react",
    "WAWebTabOrder",
    "WDSButton.react",
    "WDSIconWdsIcNewChatFilled.react",
    "WDSMenuBarItem.react",
    "WDSTooltip.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chatListVisible,
        n = e.onNewChat,
        a = o("WAWebNewChatButtonGatingUtils").getNewChatButtonVariant(),
        i = s._(/*BTDS*/ "New chat"),
        l = {
          menu: [],
          type: o("WAWebDropdown.react").MenuType.Dropdown,
          flipOnRTL: !0,
          dirX: o("WAWebDropdown.react").DirX.RIGHT,
          dirY: o("WAWebDropdown.react").DirY.BOTTOM,
          testid: "chatlist-header-newchat-dropdown",
        };
      switch (a) {
        case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant
          .FILLED_ICON_BUTTON: {
          var c = u.jsx(
            r("WDSButton.react"),
            {
              testid: void 0,
              Icon: r("WDSIconWdsIcNewChatFilled.react"),
              "aria-label": i,
              onPress: n,
              variant: "filled",
              type: "default",
              size: "medium",
              disabled: !t,
            },
            "btn-new-chat",
          );
          return t
            ? u.jsx(r("WDSTooltip.react"), {
                label: i,
                shortcut: o("WAWebActions").Action.OPEN_NEW_CHAT,
                children: c,
              })
            : c;
        }
        case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant
          .FILLED_TEXT_BUTTON:
          return u.jsx(
            r("WDSMenuBarItem.react"),
            {
              testid: void 0,
              icon: r("WDSIconWdsIcNewChatFilled.react"),
              onClick: n,
              title: s._(/*BTDS*/ "New chat"),
              label: s._(/*BTDS*/ "New chat"),
              buttonVariant: "filled",
              tabOrder: t
                ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
                : void 0,
              disabled: !t,
              keyboardShortcutAction: o("WAWebActions").Action.OPEN_NEW_CHAT,
              dropdownMenu: l,
            },
            "btn-new-chat",
          );
        case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.CONTROL:
          return u.jsx(
            r("WDSMenuBarItem.react"),
            {
              testid: void 0,
              icon: o("WAWebNewChatOutlineIcon.react").NewChatOutlineIcon,
              onClick: n,
              title: s._(/*BTDS*/ "New chat"),
              tabOrder: t
                ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
                : void 0,
              disabled: !t,
              keyboardShortcutAction: o("WAWebActions").Action.OPEN_NEW_CHAT,
              dropdownMenu: l,
            },
            "btn-new-chat",
          );
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
