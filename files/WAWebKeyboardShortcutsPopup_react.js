__d(
  "WAWebKeyboardShortcutsPopup.react",
  [
    "fbt",
    "WAWebActions",
    "WAWebConfirmPopup.react",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebKeyboardShortcut.react",
    "WAWebKeyboardShortcuts",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPrivacyModeGating",
    "WAWebText.react",
    "WAWebUA",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = [
        o("WAWebActions").Action.TOGGLE_UNREAD,
        o("WAWebActions").Action.TOGGLE_MUTE,
        o("WAWebActions").Action.TOGGLE_ARCHIVE,
        o("WAWebActions").Action.TOGGLE_PIN,
        o("WAWebActions").Action.SEARCH,
        o("WAWebActions").Action.SEARCH_IN_CHAT,
        o("WAWebActions").Action.OPEN_NEW_CHAT,
        o("WAWebActions").Action.GO_TO_NEXT_CHAT,
        o("WAWebActions").Action.GO_TO_PREV_CHAT,
        o("WAWebActions").Action.LABEL_CHAT,
        o("WAWebActions").Action.CLOSE_CHAT,
        o("WAWebActions").Action.OPEN_NEW_GROUP,
        o("WAWebActions").Action.OPEN_PROFILE,
        o("WAWebActions").Action.INCREASE_PTT_SPEED,
        o("WAWebActions").Action.DECREASE_PTT_SPEED,
        o("WAWebActions").Action.OPEN_SETTINGS,
        o("WAWebActions").Action.OPEN_EMOJI_PANEL,
        o("WAWebActions").Action.OPEN_GIF_PANEL,
        o("WAWebActions").Action.OPEN_STICKER_PANEL,
        o("WAWebActions").Action.TOGGLE_COMMAND_PALETTE,
        o("WAWebActions").Action.LOCK_SCREEN,
      ].concat(
        o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()
          ? [o("WAWebActions").Action.TOGGLE_PRIVACY_MODE]
          : [],
        [
          o("WAWebActions").Action.OPEN_CHAT_INFO,
          o("WAWebActions").Action.BLOCK_CHAT,
          o("WAWebActions").Action.REPLY,
          o("WAWebActions").Action.REPLY_PRIVATE,
          o("WAWebActions").Action.FORWARD,
          o("WAWebActions").Action.STAR_MESSAGE,
          o("WAWebActions").Action.OPEN_ATTACHMENT_DROPDOWN,
          o("WAWebActions").Action.START_PTT_RECORDING,
          o("WAWebActions").Action.PAUSE_PTT_RECORDING,
          o("WAWebActions").Action.SEND_PTT,
          o("WAWebActions").Action.EDIT_LAST_MESSAGE,
          o("WAWebActions").Action.TOGGLE_CALL_CAMERA,
          o("WAWebActions").Action.TOGGLE_CALL_MUTE,
          o("WAWebActions").Action.SHOW_CALL_REACTIONS,
          o("WAWebActions").Action.TOGGLE_RAISE_HAND,
          o("WAWebActions").Action.START_SCREEN_SHARE,
          o("WAWebActions").Action.END_CALL,
        ],
        r("WAWebEnvironment").isWindows
          ? [
              o("WAWebActions").Action.ZOOM_IN,
              o("WAWebActions").Action.ZOOM_OUT,
              o("WAWebActions").Action.ZOOM_RESET,
              o("WAWebActions").Action.OPEN_NTH_CHAT,
            ]
          : [],
      );
    function m() {
      var e = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        t = function (t) {
          return (
            (r("WAWebEnvironment").isWindows ||
              (t !== o("WAWebActions").Action.INCREASE_PTT_SPEED &&
                t !== o("WAWebActions").Action.DECREASE_PTT_SPEED)) &&
            t !== o("WAWebActions").Action.CLOSE_CHAT
          );
        },
        n = c(function () {
          return d.filter(function (e) {
            if (o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC) {
              var t = o("WAWebKeyboardShortcuts").getShortcutDisplayModifiers(
                e,
              );
              if (t != null && t.includes("Option")) return !1;
            }
            return !0;
          });
        }, []),
        a = n
          .map(function (e) {
            return [o("WAWebActions").getLabel(e), e, t(e)];
          })
          .map(function (e, t) {
            var n = e[0],
              r = e[1],
              a = e[2],
              i = a === void 0 ? !0 : a;
            if (n !== "") {
              var l = u.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
                action: r,
                addModifiers: i,
              });
              if (l)
                return u.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className:
                          "x78zum5 x1okw0bk x6s0dn4 x1nxh6w3 x1cjqih5 xq7czo8 x1jrle2z xszpbae x19eaz5n x1oyju9o x7d3g0m x1runjb5",
                      },
                      1: {
                        className:
                          "x78zum5 x1okw0bk x6s0dn4 x1nxh6w3 x1cjqih5 xq7czo8 x1jrle2z xszpbae x19eaz5n x1oyju9o x7d3g0m x1runjb5 xhjgn53",
                      },
                    }[(t !== 0) << 0],
                    {
                      children: [
                        u.jsx("div", {
                          className:
                            "x1iyjqo2 x1sa5p1d x6ikm8r x10wlt62 x1f6kntn x1m1tpaw",
                          title: n,
                          children: n,
                        }),
                        u.jsx("div", {
                          className: "x1iyjqo2 xp4054r",
                          children: l,
                        }),
                      ],
                    },
                  ),
                  t,
                );
            }
          });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "keyboard-shortcuts",
        },
        onOK: e,
        okText: r("WAWebFbtCommon")("OK"),
        type: o("WAWebModal.react").ModalTheme.Flex,
        children: u.jsxs("div", {
          className: "x9f619 x1p5oq8j xjfo4ez xwxc41k xf7qf19",
          children: [
            u.jsx(o("WAWebText.react").WAWebTextLarge, {
              as: "span",
              children: s._(/*BTDS*/ "Keyboard shortcuts"),
            }),
            u.jsx("div", {
              className:
                "x78zum5 xdt5ytf xubnuyq x9u28bd xw2csxc x1odjw0f xo6wm36 x1iegka5 xc530u0 x8zx4qv xap7olu x17sy6yu x1frvojh x1vz1ssi xxbb1rq xvtidz5 xuygrt7",
              children: a,
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
