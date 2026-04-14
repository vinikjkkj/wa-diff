__d(
  "WAWebChatThemeDrawer.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeGrid.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUseChatTheme",
    "react",
    "useWAWebModelValues",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t,
        n,
        a = e.chat,
        i = e.onClose,
        l = e.ref,
        d = o("WAWebThemeContext").useIsDarkTheme() ? "dark" : "light",
        m = o("useWAWebModelValues").useOptionalModelValues(a, [
          "colorSchemeId",
        ]),
        p = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({
          isChatThemeEnabled: !0,
        }),
        _ =
          (t =
            (n = m == null ? void 0 : m.colorSchemeId) != null
              ? n
              : p == null
                ? void 0
                : p.Theme.Default) != null
            ? t
            : null;
      c(function () {
        return (
          r("WAWebChatPreferenceCollection").trigger(
            "chat_theme_drawer_open",
            !1,
          ),
          function () {
            (r("WAWebChatPreferenceCollection").trigger("chat_theme_preview"),
              r("WAWebChatPreferenceCollection").trigger(
                "chat_theme_drawer_close",
                !1,
              ));
          }
        );
      }, []);
      var f = a.id.toJid(),
        g = o("useWAWebSettingSync").useSettingSync(
          "colorSchemeId",
          function (e) {
            a.set("colorSchemeId", e);
          },
          f,
        ),
        h = o("useWAWebSettingSync").useSettingSync(
          "chatThemeId",
          function (e) {
            a.set("chatThemeId", e);
          },
          f,
        ),
        y = function (t) {
          if (p != null) {
            var e = t === p.Theme.Default;
            (g(e ? null : t), h(e ? null : p.getBaseTheme(t)));
            var n = e
              ? s._(/*BTDS*/ "Chat theme reset")
              : s._(/*BTDS*/ "Chat theme set");
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, { msg: n }),
            );
          }
        },
        C = p != null ? [p.Theme.Default].concat(p.getAllColorSchemes()) : [],
        b = function (t) {
          r("WAWebChatPreferenceCollection").trigger("chat_theme_preview", t);
        };
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: l,
        testid: void 0,
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            title: s._(/*BTDS*/ "Chat theme"),
            onBack: i,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: u.jsx(r("WAWebChatThemeGrid.react"), {
                currentThemeId: _,
                onSelect: y,
                onPreview: b,
                themes: C,
                themeMode: d,
              }),
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
