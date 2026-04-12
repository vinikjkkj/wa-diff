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
      var n = t.chat,
        a = r("WAWebChatPreferenceCollection").getDefault(),
        i = o("useWAWebModelValues").useModelValues(a, [
          "wallpaper",
          "showDoodle",
          "colorSchemeId",
        ]),
        l = i.colorSchemeId,
        s = i.showDoodle,
        c = i.wallpaper,
        g = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(),
        h = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({
          isChatThemeEnabled: g,
        }),
        y = o("WAWebThemeContext").useIsDarkTheme(),
        C =
          g && l != null && h != null
            ? h.getChatTheme(l, y ? "dark" : "light")
            : null,
        b = m(null),
        v = d(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        }, []);
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(p.container, C),
          {
            "data-testid": void 0,
            children: [
              u.jsx(r("WAWebConversationBackground.react"), {
                wallpaper: c,
                showDoodle: s,
              }),
              u.jsx("div", {
                className:
                  "x1n2onr6 x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62",
                children: u.jsx("div", {
                  className: "x5yr21d",
                  children: u.jsx(r("WAWebConversationMsgs.react"), {
                    ref: b,
                    chat: n,
                    msgCollection: n.msgs,
                    selectable: !1,
                    focusCtx: null,
                    selectedMessages: v,
                    onMessageSelect: _,
                    onSelectMessages: _,
                    onCancelSelectMessages: _,
                    notifyChatRendered: f,
                    updateOpenedChatInfo: _,
                    bottomBanners: null,
                  }),
                }),
              }),
              u.jsx("div", {
                className: "x1c4vz4f x2lah0s xdl72j9",
                children: u.jsx(o("WAWebComposeBox.react").ComposeBox, {
                  chat: n,
                  onComposeHeightChange: r("WAWebNoop"),
                  onPageUpDown: r("WAWebNoop"),
                }),
              }),
            ],
          },
        ),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
