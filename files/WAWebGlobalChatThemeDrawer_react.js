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
        a = o("react-compiler-runtime").c(24),
        i = e.onClose,
        l = e.ref,
        d = o("WAWebThemeContext").useIsDarkTheme() ? "dark" : "light",
        _;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = r("WAWebChatPreferenceCollection").assertGet(
            "defaultPreference",
          )),
          (a[0] = _))
        : (_ = a[0]);
      var f = _,
        g;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = ["colorSchemeId"]), (a[1] = g))
        : (g = a[1]);
      var h = o("useWAWebModelValues").useModelValues(f, g),
        y;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { isChatThemeEnabled: !0 }), (a[2] = y))
        : (y = a[2]);
      var C = o("WAWebUseChatTheme").useLazyChatThemeDefinitions(y),
        b =
          (t =
            (n = h.colorSchemeId) != null
              ? n
              : C == null
                ? void 0
                : C.Theme.Default) != null
            ? t
            : null,
        v;
      (a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = []), (a[3] = v))
        : (v = a[3]),
        c(p, v));
      var S;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t) {
            f.set("colorSchemeId", t);
          }),
          (a[4] = S))
        : (S = a[4]);
      var R = o("useWAWebSettingSync").useSettingSync("colorSchemeId", S),
        L;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            f.set("chatThemeId", t);
          }),
          (a[5] = L))
        : (L = a[5]);
      var E = o("useWAWebSettingSync").useSettingSync("chatThemeId", L),
        k;
      a[6] !== C || a[7] !== E || a[8] !== R
        ? ((k = function (t) {
            if (C != null) {
              var e = t === C.Theme.Default;
              (R(e ? null : t), E(e ? null : C.getBaseTheme(t)));
              var n = e
                ? s._(/*BTDS*/ "Chat theme reset")
                : s._(/*BTDS*/ "Default chat theme set");
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, { msg: n }),
              );
            }
          }),
          (a[6] = C),
          (a[7] = E),
          (a[8] = R),
          (a[9] = k))
        : (k = a[9]);
      var I = k,
        T;
      a[10] !== C
        ? ((T =
            C != null ? [C.Theme.Default].concat(C.getAllColorSchemes()) : []),
          (a[10] = C),
          (a[11] = T))
        : (T = a[11]);
      var D = T,
        x = m,
        $;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Default chat theme")), (a[12] = $))
        : ($ = a[12]);
      var P;
      a[13] !== i
        ? ((P = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            title: $,
            onBack: i,
            focusBackOrCancel: !0,
          })),
          (a[13] = i),
          (a[14] = P))
        : (P = a[14]);
      var N;
      a[15] !== b || a[16] !== I || a[17] !== d || a[18] !== D
        ? ((N = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: u.jsx(r("WAWebChatThemeGrid.react"), {
                currentThemeId: b,
                onSelect: I,
                onPreview: x,
                themes: D,
                themeMode: d,
              }),
            }),
          })),
          (a[15] = b),
          (a[16] = I),
          (a[17] = d),
          (a[18] = D),
          (a[19] = N))
        : (N = a[19]);
      var M;
      return (
        a[20] !== l || a[21] !== P || a[22] !== N
          ? ((M = u.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              testid: void 0,
              children: [P, N],
            })),
            (a[20] = l),
            (a[21] = P),
            (a[22] = N),
            (a[23] = M))
          : (M = a[23]),
        M
      );
    }
    function m(e) {
      r("WAWebChatPreferenceCollection").trigger("chat_theme_preview", e);
    }
    function p() {
      return (
        o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
        r("WAWebChatPreferenceCollection").trigger(
          "chat_theme_drawer_open",
          !0,
        ),
        _
      );
    }
    function _() {
      (r("WAWebChatPreferenceCollection").trigger("chat_theme_preview"),
        r("WAWebChatPreferenceCollection").trigger(
          "chat_theme_drawer_close",
          !0,
        ));
    }
    l.default = d;
  },
  226,
);
