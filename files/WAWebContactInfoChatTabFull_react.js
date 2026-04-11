__d(
  "WAWebContactInfoChatTabFull.react",
  [
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeGatingUtils",
    "WAWebComposeBox.react",
    "WAWebConversationBackground.react",
    "WAWebConversationMsgs.react",
    "WAWebMultiSelection",
    "WAWebNoop",
    "WAWebThemeContext",
    "WAWebUseChatTheme",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useRef,
      p = {
        container: {
          position: "x1n2onr6",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "x1q80dvb",
          $$css: !0,
        },
      };
    function _() {}
    function f(e) {}
    function g(t) {
      var n = o("react-compiler-runtime").c(21),
        a = t.chat,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = r("WAWebChatPreferenceCollection").getDefault()), (n[0] = i))
        : (i = n[0]);
      var l = i,
        s;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = ["wallpaper", "showDoodle", "colorSchemeId"]), (n[1] = s))
        : (s = n[1]);
      var c = o("useWAWebModelValues").useModelValues(l, s),
        d = c.colorSchemeId,
        g = c.showDoodle,
        y = c.wallpaper,
        C;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = o("WAWebChatThemeGatingUtils").isChatThemesEnabled()),
          (n[2] = C))
        : (C = n[2]);
      var b = C,
        v;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { isChatThemeEnabled: b }), (n[3] = v))
        : (v = n[3]);
      var S = o("WAWebUseChatTheme").useLazyChatThemeDefinitions(v),
        R = o("WAWebThemeContext").useIsDarkTheme(),
        L =
          b && d != null && S != null
            ? S.getChatTheme(d, R ? "dark" : "light")
            : null,
        E = m(null),
        k;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = new (r("WAWebMultiSelection"))([], h)), (n[4] = k))
        : (k = n[4]);
      var I = k,
        T = (e || (e = r("stylex"))).props(p.container, L),
        D;
      n[5] !== g || n[6] !== y
        ? ((D = u.jsx(r("WAWebConversationBackground.react"), {
            wallpaper: y,
            showDoodle: g,
          })),
          (n[5] = g),
          (n[6] = y),
          (n[7] = D))
        : (D = n[7]);
      var x, $;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = {
            className: "x1n2onr6 x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62",
          }),
          ($ = { className: "x5yr21d" }),
          (n[8] = x),
          (n[9] = $))
        : ((x = n[8]), ($ = n[9]));
      var P;
      n[10] !== a || n[11] !== I
        ? ((P = u.jsx(
            "div",
            babelHelpers.extends({}, x, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, $, {
                  children: u.jsx(r("WAWebConversationMsgs.react"), {
                    ref: E,
                    chat: a,
                    msgCollection: a.msgs,
                    selectable: !1,
                    focusCtx: null,
                    selectedMessages: I,
                    onMessageSelect: _,
                    onSelectMessages: _,
                    onCancelSelectMessages: _,
                    notifyChatRendered: f,
                    updateOpenedChatInfo: _,
                    bottomBanners: null,
                  }),
                }),
              ),
            }),
          )),
          (n[10] = a),
          (n[11] = I),
          (n[12] = P))
        : (P = n[12]);
      var N;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = { className: "x1c4vz4f x2lah0s xdl72j9" }), (n[13] = N))
        : (N = n[13]);
      var M;
      n[14] !== a
        ? ((M = u.jsx(
            "div",
            babelHelpers.extends({}, N, {
              children: u.jsx(o("WAWebComposeBox.react").ComposeBox, {
                chat: a,
                onComposeHeightChange: r("WAWebNoop"),
                onPageUpDown: r("WAWebNoop"),
              }),
            }),
          )),
          (n[14] = a),
          (n[15] = M))
        : (M = n[15]);
      var w;
      return (
        n[16] !== P || n[17] !== M || n[18] !== T || n[19] !== D
          ? ((w = u.jsxs(
              "div",
              babelHelpers.extends({}, T, {
                "data-testid": void 0,
                children: [D, P, M],
              }),
            )),
            (n[16] = P),
            (n[17] = M),
            (n[18] = T),
            (n[19] = D),
            (n[20] = w))
          : (w = n[20]),
        w
      );
    }
    function h(e) {
      return e.id.toString();
    }
    l.default = g;
  },
  98,
);
