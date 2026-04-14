__d(
  "WAWebTypingIndicator.react",
  [
    "WAChatState",
    "WAWebChatParticipantColor",
    "WAWebChatPreferenceCollection",
    "WAWebCmd",
    "WAWebFacePile.react",
    "WAWebGroupGatingUtils",
    "WAWebMessageBubbleTypingIndicator.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebTypingIndicatorRecording.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWallpaper",
    "WAWebWrapperConstants",
    "WAWebWrapperGetTailIcon",
    "WDSVars.stylex",
    "react",
    "stylex",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebStableActiveUsers",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = 4,
      f = 40,
      g = {
        transitionGroup: {
          position: "x10l6tqk",
          overflowY: "x10wlt62",
          bottom: "x1ey2m1c",
          height: "x1vqgdyp",
          $$css: !0,
        },
        container: { display: "x78zum5", position: "x1n2onr6", $$css: !0 },
        groupContainer: { paddingInlineStart: "xz7312c", $$css: !0 },
        nonGroupContainer: { paddingInlineStart: "x1ogp2j0", $$css: !0 },
        borderWidth: {
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          $$css: !0,
        },
        wallpaperColor: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
      },
      h = 28;
    function y(e) {
      return e.type === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING ||
        e.type === o("WAChatState").ACTIVE_CHAT_STATE_TYPE.RECORDING_AUDIO
        ? e.type
        : null;
    }
    function C(e) {
      return e.typingUserIds.length > 0
        ? o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING
        : e.recordingUserIds.length > 0
          ? o("WAChatState").ACTIVE_CHAT_STATE_TYPE.RECORDING_AUDIO
          : null;
    }
    function b(t) {
      var n,
        a = t.chat,
        i = a.id.isGroup(),
        l = o("useWAWebModelValues").useModelValues(a.presence, [
          "typingUserIds",
          "recordingUserIds",
        ]),
        s = m(
          function () {
            if (!i) return [];
            var e = l.typingUserIds,
              t = new Set(
                e.map(function (e) {
                  return e.toString();
                }),
              ),
              n = l.recordingUserIds.filter(function (e) {
                var n = e.toString();
                return t.has(n) ? !1 : (t.add(n), !0);
              });
            return [].concat(e, n);
          },
          [i, l.typingUserIds, l.recordingUserIds],
        ),
        c = o("useWAWebStableActiveUsers").useWAWebStableActiveUsers(
          l.typingUserIds,
          l.recordingUserIds,
        );
      i &&
        o("WAWebGroupGatingUtils").isGroupTypingIndicatorEnabled() &&
        c != null &&
        (s = c);
      var f = p(function () {
          return i ? null : y(a.presence.chatstate);
        }),
        b = f[0],
        v = f[1],
        S = i ? C(l) : b,
        R = m(function () {
          return o("WAWebWrapperGetTailIcon").getTailIcon(
            o("WAWebWrapperConstants").MSG_DIRECTION.IN,
          );
        }, []),
        L = s.length <= 5,
        E = L ? s : s.slice(s.length - _, s.length),
        k = s.length - _,
        I = s.length >= 6,
        T = r("WAWebChatPreferenceCollection").get(a.id),
        D = T == null ? void 0 : T.wallpaper;
      (o("useWAWebListener").useListener(
        a.presence.chatstate,
        "change:type",
        function (e, t) {
          i || v(y(a.presence.chatstate));
        },
      ),
        d(
          function () {
            o("WAWebCmd").Cmd.typingIndicatorVisibilityChange(S != null);
          },
          [S],
        ),
        D === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER &&
          (D =
            o("WDSVars.stylex").WDSVars[
              "--WDS-systems-chat-background-wallpaper"
            ]));
      var x = E[E.length - 1],
        $ =
          i &&
          x &&
          !o(
            "useWAWebDefaultProfileColors",
          ).isDefaultProfileColorsEnabledForWid(x)
            ? o("WAWebChatParticipantColor").getAssignedColor(
                a,
                x,
                "WAWebTypingIndicator-" +
                  ((n = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                    a.id,
                  )) != null
                    ? n
                    : ""),
              )
            : 0,
        P = o("useWAWebGroupColors").useGroupsColorRGBValue($),
        N = o("useWAWebDefaultProfileColors").useDefaultProfileColorRGB(
          i ? x : null,
        );
      return u.jsx(r("WAWebVelocityTransitionGroup"), {
        xstyle: g.transitionGroup,
        transitionName: "typing-indicator",
        children:
          S != null
            ? u.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    g.container,
                    i ? g.groupContainer : g.nonGroupContainer,
                    D != null && g.wallpaperColor(D),
                  ),
                  {
                    children: [
                      E.length > 0 &&
                        u.jsx(r("WAWebFacePile.react"), {
                          faceSize: h,
                          idsOrUrls: E,
                          borderWidth: g.borderWidth,
                          theme: "typing_indicator",
                          chatWid: a.id,
                        }),
                      I &&
                        u.jsxs("div", {
                          className:
                            "x78zum5 x1fgtraw xexx8yu x2vl965 x18d9i69 x7coems xl56j7k x6s0dn4 x1b8z93w x1amjocr x2ts8ay x14ug900 x1ekkm8c x1143rjc xum4auv xj21bgg x19z9ohp x7yx35o xo1h6xc x2459kn xfl633f",
                          children: ["+", k],
                        }),
                      u.jsx("span", {
                        className: "x1n2onr6 xs7f9wi xjn30re x1l1cedg x10w6t97",
                        children: u.jsx(R, { "aria-hidden": !0 }),
                      }),
                      u.jsxs("div", {
                        className:
                          "x1ew7x2d x78zum5 x10w6t97 xdt5ytf xl56j7k x1cy8zhl x1bczwif xwf5gio x1p453bz x1suzm8a x177zcyq x1n2onr6 xs7f9wi",
                        children: [
                          S ===
                            o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING &&
                            u.jsx(
                              r("WAWebMessageBubbleTypingIndicator.react"),
                              {
                                isBotMsgStreaming: !1,
                                colorRgb: N != null ? N : P,
                              },
                            ),
                          S ===
                            o("WAChatState").ACTIVE_CHAT_STATE_TYPE
                              .RECORDING_AUDIO &&
                            u.jsx(r("WAWebTypingIndicatorRecording.react"), {}),
                        ],
                      }),
                    ],
                  },
                ),
              )
            : null,
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
