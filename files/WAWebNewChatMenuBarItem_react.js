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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.chatListVisible,
        a = e.onNewChat,
        i = o("WAWebNewChatButtonGatingUtils").getNewChatButtonVariant(),
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "New chat")), (t[0] = l))
        : (l = t[0]);
      var c = l,
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            menu: [],
            type: o("WAWebDropdown.react").MenuType.Dropdown,
            flipOnRTL: !0,
            dirX: o("WAWebDropdown.react").DirX.RIGHT,
            dirY: o("WAWebDropdown.react").DirY.BOTTOM,
            testid: "chatlist-header-newchat-dropdown",
          }),
          (t[1] = d))
        : (d = t[1]);
      var m = d;
      switch (i) {
        case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant
          .FILLED_ICON_BUTTON: {
          var p = !n,
            _;
          t[2] !== a || t[3] !== p
            ? ((_ = u.jsx(
                r("WDSButton.react"),
                {
                  testid: void 0,
                  Icon: r("WDSIconWdsIcNewChatFilled.react"),
                  "aria-label": c,
                  onPress: a,
                  variant: "filled",
                  type: "default",
                  size: "medium",
                  disabled: p,
                },
                "btn-new-chat",
              )),
              (t[2] = a),
              (t[3] = p),
              (t[4] = _))
            : (_ = t[4]);
          var f = _,
            g;
          return (
            t[5] !== f || t[6] !== n
              ? ((g = n
                  ? u.jsx(r("WDSTooltip.react"), {
                      label: c,
                      shortcut: o("WAWebActions").Action.OPEN_NEW_CHAT,
                      children: f,
                    })
                  : f),
                (t[5] = f),
                (t[6] = n),
                (t[7] = g))
              : (g = t[7]),
            g
          );
        }
        case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant
          .FILLED_TEXT_BUTTON: {
          var h, y;
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = s._(/*BTDS*/ "New chat")),
              (y = s._(/*BTDS*/ "New chat")),
              (t[8] = h),
              (t[9] = y))
            : ((h = t[8]), (y = t[9]));
          var C = n ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER : void 0,
            b = !n,
            v;
          return (
            t[10] !== a || t[11] !== C || t[12] !== b
              ? ((v = u.jsx(
                  r("WDSMenuBarItem.react"),
                  {
                    testid: void 0,
                    icon: r("WDSIconWdsIcNewChatFilled.react"),
                    onClick: a,
                    title: h,
                    label: y,
                    buttonVariant: "filled",
                    tabOrder: C,
                    disabled: b,
                    keyboardShortcutAction:
                      o("WAWebActions").Action.OPEN_NEW_CHAT,
                    dropdownMenu: m,
                  },
                  "btn-new-chat",
                )),
                (t[10] = a),
                (t[11] = C),
                (t[12] = b),
                (t[13] = v))
              : (v = t[13]),
            v
          );
        }
        case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.CONTROL: {
          var S;
          t[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = s._(/*BTDS*/ "New chat")), (t[14] = S))
            : (S = t[14]);
          var R = n ? o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER : void 0,
            L = !n,
            E;
          return (
            t[15] !== a || t[16] !== R || t[17] !== L
              ? ((E = u.jsx(
                  r("WDSMenuBarItem.react"),
                  {
                    testid: void 0,
                    icon: o("WAWebNewChatOutlineIcon.react").NewChatOutlineIcon,
                    onClick: a,
                    title: S,
                    tabOrder: R,
                    disabled: L,
                    keyboardShortcutAction:
                      o("WAWebActions").Action.OPEN_NEW_CHAT,
                    dropdownMenu: m,
                  },
                  "btn-new-chat",
                )),
                (t[15] = a),
                (t[16] = R),
                (t[17] = L),
                (t[18] = E))
              : (E = t[18]),
            E
          );
        }
      }
    }
    l.default = c;
  },
  226,
);
