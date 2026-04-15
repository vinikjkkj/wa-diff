__d(
  "useWAWebWallpaperState",
  [
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeEnums",
    "WAWebChatThemeGatingUtils",
    "WAWebStockWallpaper",
    "WAWebThemeContext",
    "WAWebUseChatTheme",
    "WAWebWallpaper",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t, n, r, o) {
      if (e != null || t != null || n == null || r == null) return !1;
      if (o == null) return !0;
      var a = r.getBaseTheme(n);
      return a !== o;
    }
    function c(e, t, n, r) {
      return e ? !1 : t && n != null ? n : r;
    }
    function d(e) {
      var t,
        n,
        a,
        i,
        l,
        d = o("react-compiler-runtime").c(32),
        m = e.chat,
        p = e.chatPreference,
        _ = e.showPreview,
        f;
      d[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["wallpaper", "showDoodle", "colorSchemeId", "chatThemeId"]),
          (d[0] = f))
        : (f = d[0]);
      var g = o("useWAWebModelValues").useModelValues(p, f),
        h;
      d[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = ["wallpaper", "showDoodle", "colorSchemeId", "chatThemeId"]),
          (d[1] = h))
        : (h = d[1]);
      var y = o("useWAWebModelValues").useOptionalModelValues(m, h),
        C = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(),
        b = function () {
          var e;
          return _ == null &&
            C &&
            (e = y == null ? void 0 : y.wallpaper) != null
            ? e
            : g.wallpaper;
        },
        v;
      d[2] !== b ? ((v = b()), (d[2] = b), (d[3] = v)) : (v = d[3]);
      var S = s(v),
        R = S[0],
        L = S[1],
        E;
      d[4] !== b ? ((E = b()), (d[4] = b), (d[5] = E)) : (E = d[5]);
      var k = s(E),
        I = k[0],
        T = k[1];
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        "wallpaper_preview",
        function (e) {
          if (C) {
            var t;
            L(
              (t = e != null ? e : y == null ? void 0 : y.wallpaper) != null
                ? t
                : g.wallpaper,
            );
          } else L(e != null ? e : g.wallpaper);
        },
      );
      var D = s(null),
        x = D[0],
        $ = D[1];
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        "chat_theme_preview",
        function (e) {
          C && $(e);
        },
      );
      var P = s(null),
        N = P[0],
        M = P[1];
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        "chat_color_preview",
        function (e) {
          C && M(e);
        },
      );
      var w = o("WAWebThemeContext").useIsDarkTheme(),
        A = y == null ? void 0 : y.colorSchemeId,
        F =
          C &&
          (t =
            (n = x != null ? x : N) != null
              ? n
              : A !== void 0
                ? A
                : g.colorSchemeId) != null
            ? t
            : null,
        O = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({
          isChatThemeEnabled: C,
        }),
        B =
          (a = y == null ? void 0 : y.chatThemeId) != null ? a : g.chatThemeId,
        W = u(N, x, F, O, B),
        q = N != null || W,
        U = w ? "dark" : "light",
        V = null;
      if (F != null && O != null)
        if (q) {
          var H;
          (d[6] !== O || d[7] !== F || d[8] !== U
            ? ((H = O.getBubbleTheme(F, U)),
              (d[6] = O),
              (d[7] = F),
              (d[8] = U),
              (d[9] = H))
            : (H = d[9]),
            (V = H));
        } else {
          var G;
          (d[10] !== O || d[11] !== F || d[12] !== U
            ? ((G = O.getChatTheme(F, U)),
              (d[10] = O),
              (d[11] = F),
              (d[12] = U),
              (d[13] = G))
            : (G = d[13]),
            (V = G));
        }
      var z = s(null),
        j = z[0],
        K = z[1],
        Q;
      (d[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = function (t) {
            K(t != null ? t : null);
          }),
          (d[14] = Q))
        : (Q = d[14]),
        o("useWAWebListener").useListener(
          r("WAWebChatPreferenceCollection"),
          "stock_wallpaper_preview",
          Q,
        ));
      var X =
          (i = y == null ? void 0 : y.chatThemeId) != null ? i : g.chatThemeId,
        Y =
          (l = j != null ? j : x != null ? x : null) != null
            ? l
            : X != null
              ? X
              : null,
        J;
      if (d[15] !== Y) {
        var Z =
          Y != null
            ? o("WAWebChatThemeEnums").Theme.cast(
                Y.replace(/@(Tonal|Minimal)$/, ""),
              )
            : null;
        ((J =
          Z != null ? o("WAWebStockWallpaper").getStockWallpaperUrl(Z) : null),
          (d[15] = Y),
          (d[16] = J));
      } else J = d[16];
      var ee = J,
        te = b();
      I !== te && (L(te), T(te));
      var ne = w ? "dark" : "light",
        re = w ? "light" : "dark",
        oe;
      d[17] !== ne || d[18] !== re || d[19] !== R
        ? ((oe =
            R !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER &&
            !o("WAWebWallpaper").colorExistsInTheme(R, ne)
              ? o("WAWebWallpaper").toggleWallpaperColor(R, re)
              : R),
          (d[17] = ne),
          (d[18] = re),
          (d[19] = R),
          (d[20] = oe))
        : (oe = d[20]);
      var ae = oe,
        ie = x != null || j != null,
        le;
      d[21] !== ae || d[22] !== ie
        ? ((le = {}),
          ae !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER &&
            !ie &&
            (le.backgroundColor = ae),
          (d[21] = ae),
          (d[22] = ie),
          (d[23] = le))
        : (le = d[23]);
      var se =
          ee != null &&
          (ae === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER || ie),
        ue = c(se, C, y == null ? void 0 : y.showDoodle, g.showDoodle),
        ce;
      return (
        d[24] !== le ||
        d[25] !== V ||
        d[26] !== ae ||
        d[27] !== w ||
        d[28] !== ue ||
        d[29] !== se ||
        d[30] !== ee
          ? ((ce = {
              chatThemeStyle: V,
              backgroundWrapperStyle: le,
              stockWallpaperUrl: ee,
              showStockWallpaper: se,
              isDarkTheme: w,
              displayWallpaper: ae,
              showDoodle: ue,
            }),
            (d[24] = le),
            (d[25] = V),
            (d[26] = ae),
            (d[27] = w),
            (d[28] = ue),
            (d[29] = se),
            (d[30] = ee),
            (d[31] = ce))
          : (ce = d[31]),
        ce
      );
    }
    l.useWallpaperState = d;
  },
  98,
);
