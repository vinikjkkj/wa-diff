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
    "react-compiler-runtime",
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
        bubble: {
          backgroundColor: "x1ew7x2d",
          display: "x78zum5",
          height: "x10w6t97",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          alignItems: "x1cy8zhl",
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          boxShadow: "x177zcyq",
          position: "x1n2onr6",
          top: "xs7f9wi",
          $$css: !0,
        },
        tail: {
          position: "x1n2onr6",
          top: "xs7f9wi",
          marginInlineEnd: "xjn30re",
          color: "x1l1cedg",
          height: "x10w6t97",
          $$css: !0,
        },
        borderWidth: {
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          $$css: !0,
        },
        plusXIndicator: {
          display: "x78zum5",
          height: "x1fgtraw",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x2vl965",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x7coems",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          rowGap: "x1b8z93w",
          columnGap: "x1amjocr",
          background: "x2ts8ay",
          color: "x14ug900",
          borderStartStartRadius: "x1ekkm8c",
          borderStartEndRadius: "x1143rjc",
          borderEndEndRadius: "xum4auv",
          borderEndStartRadius: "xj21bgg",
          backdropFilter: "x19z9ohp",
          fontSize: "x7yx35o",
          fontWeight: "xo1h6xc",
          marginInlineStart: "x2459kn",
          marginTop: "xfl633f",
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
      var n = o("react-compiler-runtime").c(32),
        a = t.chat,
        i;
      n[0] !== a.id
        ? ((i = a.id.isGroup()), (n[0] = a.id), (n[1] = i))
        : (i = n[1]);
      var l = i,
        s;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = ["typingUserIds", "recordingUserIds"]), (n[2] = s))
        : (s = n[2]);
      var c = o("useWAWebModelValues").useModelValues(a.presence, s),
        m;
      e: {
        if (!l) {
          var f;
          (n[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = []), (n[3] = f))
            : (f = n[3]),
            (m = f));
          break e;
        }
        var b = c.typingUserIds,
          S;
        if (n[4] !== c.recordingUserIds || n[5] !== b) {
          var R = new Set(b.map(v)),
            L = c.recordingUserIds.filter(function (e) {
              var t = e.toString();
              return R.has(t) ? !1 : (R.add(t), !0);
            });
          ((S = [].concat(b, L)),
            (n[4] = c.recordingUserIds),
            (n[5] = b),
            (n[6] = S));
        } else S = n[6];
        m = S;
      }
      var E = m,
        k = o("useWAWebStableActiveUsers").useWAWebStableActiveUsers(
          c.typingUserIds,
          c.recordingUserIds,
        );
      l &&
        o("WAWebGroupGatingUtils").isGroupTypingIndicatorEnabled() &&
        k != null &&
        (E = k);
      var I;
      n[7] !== a.presence.chatstate || n[8] !== l
        ? ((I = function () {
            return l ? null : y(a.presence.chatstate);
          }),
          (n[7] = a.presence.chatstate),
          (n[8] = l),
          (n[9] = I))
        : (I = n[9]);
      var T = p(I),
        D = T[0],
        x = T[1],
        $;
      n[10] !== l || n[11] !== D || n[12] !== c
        ? (($ = l ? C(c) : D),
          (n[10] = l),
          (n[11] = D),
          (n[12] = c),
          (n[13] = $))
        : ($ = n[13]);
      var P = $,
        N;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = o("WAWebWrapperGetTailIcon").getTailIcon(
            o("WAWebWrapperConstants").MSG_DIRECTION.IN,
          )),
          (n[14] = N))
        : (N = n[14]);
      var M = N,
        w = E.length <= 5,
        A;
      n[15] !== E || n[16] !== w
        ? ((A = w ? E : E.slice(E.length - _, E.length)),
          (n[15] = E),
          (n[16] = w),
          (n[17] = A))
        : (A = n[17]);
      var F = A,
        O = E.length - _,
        B = E.length >= 6,
        W = r("WAWebChatPreferenceCollection").get(a.id),
        q = W == null ? void 0 : W.wallpaper,
        U;
      (n[18] !== a.presence.chatstate || n[19] !== l
        ? ((U = function (t, n) {
            l || x(y(a.presence.chatstate));
          }),
          (n[18] = a.presence.chatstate),
          (n[19] = l),
          (n[20] = U))
        : (U = n[20]),
        o("useWAWebListener").useListener(
          a.presence.chatstate,
          "change:type",
          U,
        ));
      var V, H;
      (n[21] !== P
        ? ((H = function () {
            o("WAWebCmd").Cmd.typingIndicatorVisibilityChange(P != null);
          }),
          (V = [P]),
          (n[21] = P),
          (n[22] = V),
          (n[23] = H))
        : ((V = n[22]), (H = n[23])),
        d(H, V),
        q === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER &&
          (q =
            o("WDSVars.stylex").WDSVars[
              "--WDS-systems-chat-background-wallpaper"
            ]));
      var G = F[F.length - 1],
        z;
      if (n[24] !== a || n[25] !== l || n[26] !== G) {
        var j;
        ((z =
          l &&
          G &&
          !o(
            "useWAWebDefaultProfileColors",
          ).isDefaultProfileColorsEnabledForWid(G)
            ? o("WAWebChatParticipantColor").getAssignedColor(
                a,
                G,
                "WAWebTypingIndicator-" +
                  ((j = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                    a.id,
                  )) != null
                    ? j
                    : ""),
              )
            : 0),
          (n[24] = a),
          (n[25] = l),
          (n[26] = G),
          (n[27] = z));
      } else z = n[27];
      var K = z,
        Q = o("useWAWebGroupColors").useGroupsColorRGBValue(K),
        X = o("useWAWebDefaultProfileColors").useDefaultProfileColorRGB(
          l ? G : null,
        ),
        Y = r("WAWebVelocityTransitionGroup"),
        J = g,
        Z = "typing-indicator",
        ee =
          P != null
            ? u.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    g.container,
                    l ? g.groupContainer : g.nonGroupContainer,
                    q != null && g.wallpaperColor(q),
                  ),
                  {
                    children: [
                      F.length > 0 &&
                        u.jsx(r("WAWebFacePile.react"), {
                          faceSize: h,
                          idsOrUrls: F,
                          borderWidth: g.borderWidth,
                          theme: "typing_indicator",
                          chatWid: a.id,
                        }),
                      B &&
                        u.jsxs("div", {
                          className:
                            "x78zum5 x1fgtraw xexx8yu x2vl965 x18d9i69 x7coems xl56j7k x6s0dn4 x1b8z93w x1amjocr x2ts8ay x14ug900 x1ekkm8c x1143rjc xum4auv xj21bgg x19z9ohp x7yx35o xo1h6xc x2459kn xfl633f",
                          children: ["+", O],
                        }),
                      u.jsx("span", {
                        className: "x1n2onr6 xs7f9wi xjn30re x1l1cedg x10w6t97",
                        children: u.jsx(M, { "aria-hidden": !0 }),
                      }),
                      u.jsxs("div", {
                        className:
                          "x1ew7x2d x78zum5 x10w6t97 xdt5ytf xl56j7k x1cy8zhl x1bczwif xwf5gio x1p453bz x1suzm8a x177zcyq x1n2onr6 xs7f9wi",
                        children: [
                          P ===
                            o("WAChatState").ACTIVE_CHAT_STATE_TYPE.TYPING &&
                            u.jsx(
                              r("WAWebMessageBubbleTypingIndicator.react"),
                              {
                                isBotMsgStreaming: !1,
                                colorRgb: X != null ? X : Q,
                              },
                            ),
                          P ===
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
        te;
      return (
        n[28] !== Y || n[29] !== J.transitionGroup || n[30] !== ee
          ? ((te = u.jsx(Y, {
              xstyle: J.transitionGroup,
              transitionName: Z,
              children: ee,
            })),
            (n[28] = Y),
            (n[29] = J.transitionGroup),
            (n[30] = ee),
            (n[31] = te))
          : (te = n[31]),
        te
      );
    }
    function v(e) {
      return e.toString();
    }
    l.default = b;
  },
  98,
);
