__d(
  "WAWebCallLogBubbleThemeMatrix.story",
  [
    "invariant",
    "WAWebCallLogMsgData.flow",
    "WAWebChatCollection",
    "WAWebChatThemeDefinitions.stylex",
    "WAWebChatThemeEnums",
    "WAWebChatThemeModeContext",
    "WAWebFlex.react",
    "WAWebMessageNotificationCallLog.react",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebVibrantOutgoingOverrides.stylex",
    "WAWebWidFactory",
    "WDSText.react",
    "WDSThemes",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatThemeModeValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = {
        bubbleBox: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          color: "x14ug900",
          width: "xeq5yr9",
          $$css: !0,
        },
        outgoingSurface: { backgroundColor: "x1g5lz36", $$css: !0 },
        incomingSurface: { backgroundColor: "x1ew7x2d", $$css: !0 },
      },
      p = o("WAWebWidFactory").createUserWidOrThrow("15551234567@c.us"),
      _ = {
        dark: o("WDSThemes").WDSDarkTheme,
        light: o("WDSThemes").WDSLightTheme,
      };
    function f(e, t, n) {
      var a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        i = new (o("WAWebMsgModel").Msg)({
          id: new (r("WAWebMsgKey"))({ fromMe: e, remote: p, id: t }),
          type: "call_log",
          subtype: void 0,
          t: 1786e6,
          from: e ? a : p,
          to: e ? p : a,
          ack: 1,
          callOutcome: n
            ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
            : o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
          finalCallOutcome: n
            ? void 0
            : o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
          isVideoCall: !1,
          callDuration: 42,
        });
      (o("WAWebChatCollection").ChatCollection.add({ id: i.id.remote }),
        o("WAWebMsgCollection").MsgCollection.add(i));
      var l = i.safe();
      return (
        l.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG || s(0, 167163),
        l
      );
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(29),
        a = t.colorSchemeId,
        i = t.fixtureId,
        l = t.fromMe,
        s = t.isOngoing,
        u = t.isVibrant,
        d = t.themeMode,
        p = s === void 0 ? !1 : s,
        g = u && l,
        h = o("WAWebChatThemeDefinitions.stylex").getChatTheme(a, d),
        y = r("useWAWebChatThemeModeValue")({
          bubbleStyle: h,
          isMinimalMode: !1,
          isVibrant: u,
          wallpaperStyle: h,
        }),
        C = "" + i + (l ? "OUT" : "IN") + (p ? "ONGOING" : ""),
        b;
      n[0] !== l || n[1] !== p || n[2] !== C
        ? ((b = f(l, C, p)), (n[0] = l), (n[1] = p), (n[2] = C), (n[3] = b))
        : (b = n[3]);
      var v = b,
        S;
      n[4] !== d
        ? ((S = (e || (e = r("stylex"))).props(_[d])), (n[4] = d), (n[5] = S))
        : (S = n[5]);
      var R = (e || (e = r("stylex"))).props(h),
        L;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = {
            className:
              "x1q80dvb xyi3aci xwf5gio x1p453bz x1suzm8a x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
          }),
          (n[6] = L))
        : (L = n[6]);
      var E;
      n[7] !== g || n[8] !== l
        ? ((E = (e || (e = r("stylex"))).props(
            m.bubbleBox,
            l ? m.outgoingSurface : m.incomingSurface,
            g &&
              o("WAWebVibrantOutgoingOverrides.stylex")
                .vibrantOutgoingLiteralStyles.root,
          )),
          (n[7] = g),
          (n[8] = l),
          (n[9] = E))
        : (E = n[9]);
      var k;
      n[10] !== g
        ? ((k = (e || (e = r("stylex"))).props(
            g &&
              o("WAWebVibrantOutgoingOverrides.stylex")
                .vibrantOutgoingContentStyles.root,
            g && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingTheme,
          )),
          (n[10] = g),
          (n[11] = k))
        : (k = n[11]);
      var I;
      n[12] !== v
        ? ((I = c.jsx(r("WAWebMessageNotificationCallLog.react"), { msg: v })),
          (n[12] = v),
          (n[13] = I))
        : (I = n[13]);
      var T;
      n[14] !== I || n[15] !== y
        ? ((T = c.jsx(r("WAWebChatThemeModeContext").Provider, {
            value: y,
            children: I,
          })),
          (n[14] = I),
          (n[15] = y),
          (n[16] = T))
        : (T = n[16]);
      var D;
      n[17] !== T || n[18] !== k
        ? ((D = c.jsx("div", babelHelpers.extends({}, k, { children: T }))),
          (n[17] = T),
          (n[18] = k),
          (n[19] = D))
        : (D = n[19]);
      var x;
      n[20] !== D || n[21] !== E
        ? ((x = c.jsx(
            "div",
            babelHelpers.extends({}, L, {
              children: c.jsx(
                "div",
                babelHelpers.extends({}, E, { children: D }),
              ),
            }),
          )),
          (n[20] = D),
          (n[21] = E),
          (n[22] = x))
        : (x = n[22]);
      var $;
      n[23] !== x || n[24] !== R
        ? (($ = c.jsx("div", babelHelpers.extends({}, R, { children: x }))),
          (n[23] = x),
          (n[24] = R),
          (n[25] = $))
        : ($ = n[25]);
      var P;
      return (
        n[26] !== $ || n[27] !== S
          ? ((P = c.jsx("div", babelHelpers.extends({}, S, { children: $ }))),
            (n[26] = $),
            (n[27] = S),
            (n[28] = P))
          : (P = n[28]),
        P
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.colorSchemeId,
        a = e.isVibrant,
        i = e.label,
        l = e.testid,
        s = e.themeMode,
        u = "SHOWROOMCALLLOG" + l + s,
        d;
      t[0] !== u ? ((d = u.toUpperCase()), (t[0] = u), (t[1] = d)) : (d = t[1]);
      var m = d,
        p = l + "-" + s,
        _;
      t[2] !== i
        ? ((_ = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: i,
          })),
          (t[2] = i),
          (t[3] = _))
        : (_ = t[3]);
      var f, h, y;
      t[4] !== n || t[5] !== m || t[6] !== a || t[7] !== s
        ? ((f = c.jsx(g, {
            colorSchemeId: n,
            fixtureId: m,
            isVibrant: a,
            themeMode: s,
            fromMe: !0,
          })),
          (h = c.jsx(g, {
            colorSchemeId: n,
            fixtureId: m,
            isVibrant: a,
            themeMode: s,
            isOngoing: !0,
            fromMe: !0,
          })),
          (y = c.jsx(g, {
            colorSchemeId: n,
            fixtureId: m,
            isVibrant: a,
            themeMode: s,
            fromMe: !1,
          })),
          (t[4] = n),
          (t[5] = m),
          (t[6] = a),
          (t[7] = s),
          (t[8] = f),
          (t[9] = h),
          (t[10] = y))
        : ((f = t[8]), (h = t[9]), (y = t[10]));
      var C;
      return (
        t[11] !== p || t[12] !== _ || t[13] !== f || t[14] !== h || t[15] !== y
          ? ((C = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 8,
              testid: p,
              children: [_, f, h, y],
            })),
            (t[11] = p),
            (t[12] = _),
            (t[13] = f),
            (t[14] = h),
            (t[15] = y),
            (t[16] = C))
          : (C = t[16]),
        C
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.themeMode,
        r = "Default, " + n + " (sent, sent ongoing, received)",
        a;
      t[0] !== r || t[1] !== n
        ? ((a = c.jsx(h, {
            colorSchemeId: o("WAWebChatThemeEnums").Theme.Default,
            isVibrant: !1,
            label: r,
            testid: "call-log-bubble-theme-default",
            themeMode: n,
          })),
          (t[0] = r),
          (t[1] = n),
          (t[2] = a))
        : (a = t[2]);
      var i = "Royal Blue vibrant, " + n + " (sent, sent ongoing, received)",
        l;
      t[3] !== i || t[4] !== n
        ? ((l = c.jsx(h, {
            colorSchemeId: o("WAWebChatThemeEnums").Theme.RoyalBlue,
            isVibrant: !0,
            label: i,
            testid: "call-log-bubble-theme-royal-blue",
            themeMode: n,
          })),
          (t[3] = i),
          (t[4] = n),
          (t[5] = l))
        : (l = t[5]);
      var s;
      return (
        t[6] !== a || t[7] !== l
          ? ((s = c.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 24,
              align: "start",
              children: [a, l],
            })),
            (t[6] = a),
            (t[7] = l),
            (t[8] = s))
          : (s = t[8]),
        s
      );
    }
    function C() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            className: "xhjsbib x14ug900 x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
          }),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(
              "div",
              babelHelpers.extends({}, t, {
                children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  rowGap: 24,
                  children: [
                    c.jsx(y, { themeMode: "light" }),
                    c.jsx(y, { themeMode: "dark" }),
                  ],
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    var b = {
      storyName: "WAWebCallLogBubbleThemeMatrix",
      component: C,
      description:
        "ICCE call-log bubbles across chat themes, in both light and dark chat-theme variants. On a vibrant theme the sent bubble darkens the icon chip so the white call glyph reads against it, matching iOS.",
      examples: [
        function () {
          return c.jsx(C, {});
        },
      ],
    };
    l.default = b;
  },
  98,
);
