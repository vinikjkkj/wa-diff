__d(
  "WAWebGlobalChatThemeDrawer.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeGrid.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
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
        a = e.onClose,
        i = e.ref,
        l = o("WAWebThemeContext").useIsDarkTheme() ? "dark" : "light",
        d = r("WAWebChatPreferenceCollection").assertGet("defaultPreference"),
        m = o("useWAWebModelValues").useModelValues(d, ["colorSchemeId"]),
        p = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({
          isChatThemeEnabled: !0,
        }),
        _ =
          (t =
            (n = m.colorSchemeId) != null
              ? n
              : p == null
                ? void 0
                : p.Theme.Default) != null
            ? t
            : null;
      c(function () {
        return (
          o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
          r("WAWebChatPreferenceCollection").trigger(
            "chat_theme_drawer_open",
            !0,
          ),
          function () {
            (r("WAWebChatPreferenceCollection").trigger("chat_theme_preview"),
              r("WAWebChatPreferenceCollection").trigger(
                "chat_theme_drawer_close",
                !0,
              ));
          }
        );
      }, []);
      var f = o("useWAWebSettingSync").useSettingSync(
          "colorSchemeId",
          function (e) {
            d.set("colorSchemeId", e);
          },
        ),
        g = o("useWAWebSettingSync").useSettingSync(
          "chatThemeId",
          function (e) {
            d.set("chatThemeId", e);
          },
        ),
        h = function (t) {
          if (p != null) {
            var e = t === p.Theme.Default;
            (f(e ? null : t), g(e ? null : p.getBaseTheme(t)));
            var n = e
              ? s._(/*BTDS*/ "Chat theme reset")
              : s._(/*BTDS*/ "Default chat theme set");
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, { msg: n }),
            );
          }
        },
        y = p != null ? [p.Theme.Default].concat(p.getAllColorSchemes()) : [],
        C = function (t) {
          r("WAWebChatPreferenceCollection").trigger("chat_theme_preview", t);
        };
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: i,
        testid: void 0,
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            title: s._(/*BTDS*/ "Default chat theme"),
            onBack: a,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: u.jsx(r("WAWebChatThemeGrid.react"), {
                currentThemeId: _,
                onSelect: h,
                onPreview: C,
                themes: y,
                themeMode: l,
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
