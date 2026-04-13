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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(27),
        i = e.chat,
        l = e.onClose,
        d = e.ref,
        _ = o("WAWebThemeContext").useIsDarkTheme() ? "dark" : "light",
        f;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["colorSchemeId"]), (a[0] = f))
        : (f = a[0]);
      var g = o("useWAWebModelValues").useOptionalModelValues(i, f),
        h;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { isChatThemeEnabled: !0 }), (a[1] = h))
        : (h = a[1]);
      var y = o("WAWebUseChatTheme").useLazyChatThemeDefinitions(h),
        C =
          (t =
            (n = g == null ? void 0 : g.colorSchemeId) != null
              ? n
              : y == null
                ? void 0
                : y.Theme.Default) != null
            ? t
            : null,
        b;
      (a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = []), (a[2] = b))
        : (b = a[2]),
        c(p, b));
      var v;
      a[3] !== i.id
        ? ((v = i.id.toJid()), (a[3] = i.id), (a[4] = v))
        : (v = a[4]);
      var S = v,
        R;
      a[5] !== i
        ? ((R = function (t) {
            i.set("colorSchemeId", t);
          }),
          (a[5] = i),
          (a[6] = R))
        : (R = a[6]);
      var L = o("useWAWebSettingSync").useSettingSync("colorSchemeId", R, S),
        E;
      a[7] !== i
        ? ((E = function (t) {
            i.set("chatThemeId", t);
          }),
          (a[7] = i),
          (a[8] = E))
        : (E = a[8]);
      var k = o("useWAWebSettingSync").useSettingSync("chatThemeId", E, S),
        I;
      a[9] !== y || a[10] !== k || a[11] !== L
        ? ((I = function (t) {
            if (y != null) {
              var e = t === y.Theme.Default;
              (L(e ? null : t), k(e ? null : y.getBaseTheme(t)));
              var n = e
                ? s._(/*BTDS*/ "Chat theme reset")
                : s._(/*BTDS*/ "Chat theme set");
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, { msg: n }),
              );
            }
          }),
          (a[9] = y),
          (a[10] = k),
          (a[11] = L),
          (a[12] = I))
        : (I = a[12]);
      var T = I,
        D;
      a[13] !== y
        ? ((D =
            y != null ? [y.Theme.Default].concat(y.getAllColorSchemes()) : []),
          (a[13] = y),
          (a[14] = D))
        : (D = a[14]);
      var x = D,
        $ = m,
        P;
      a[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Chat theme")), (a[15] = P))
        : (P = a[15]);
      var N;
      a[16] !== l
        ? ((N = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            title: P,
            onBack: l,
            focusBackOrCancel: !0,
          })),
          (a[16] = l),
          (a[17] = N))
        : (N = a[17]);
      var M;
      a[18] !== C || a[19] !== T || a[20] !== _ || a[21] !== x
        ? ((M = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: u.jsx(r("WAWebChatThemeGrid.react"), {
                currentThemeId: C,
                onSelect: T,
                onPreview: $,
                themes: x,
                themeMode: _,
              }),
            }),
          })),
          (a[18] = C),
          (a[19] = T),
          (a[20] = _),
          (a[21] = x),
          (a[22] = M))
        : (M = a[22]);
      var w;
      return (
        a[23] !== d || a[24] !== N || a[25] !== M
          ? ((w = u.jsxs(r("WAWebDrawer.react"), {
              ref: d,
              testid: void 0,
              children: [N, M],
            })),
            (a[23] = d),
            (a[24] = N),
            (a[25] = M),
            (a[26] = w))
          : (w = a[26]),
        w
      );
    }
    function m(e) {
      r("WAWebChatPreferenceCollection").trigger("chat_theme_preview", e);
    }
    function p() {
      return (
        r("WAWebChatPreferenceCollection").trigger(
          "chat_theme_drawer_open",
          !1,
        ),
        _
      );
    }
    function _() {
      (r("WAWebChatPreferenceCollection").trigger("chat_theme_preview"),
        r("WAWebChatPreferenceCollection").trigger(
          "chat_theme_drawer_close",
          !1,
        ));
    }
    l.default = d;
  },
  226,
);
