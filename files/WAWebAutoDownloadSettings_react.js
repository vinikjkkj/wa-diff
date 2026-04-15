__d(
  "WAWebAutoDownloadSettings.react",
  [
    "fbt",
    "WAWebDrawerButton.react",
    "WAWebDrawerSection.react",
    "WAWebEnvironment",
    "WAWebRefreshIcon.react",
    "WAWebSettingsCheckList.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsGeneral",
    "react",
    "react-compiler-runtime",
    "useWAWebSettingSync",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        disclaimer: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          $$css: !0,
        },
      };
    function d() {
      var e,
        t,
        n,
        a = o("react-compiler-runtime").c(41),
        i = (n = o("useWAWebSettingSync")).useSettingSync(
          "isPhotosAutodownloadEnabled",
          f,
        ),
        l = n.useSettingSync("isAudiosAutodownloadEnabled", _),
        d = n.useSettingSync("isVideosAutodownloadEnabled", p),
        g = n.useSettingSync("isDocumentsAutodownloadEnabled", m),
        h = (e = r("useWAWebToggle"))(
          (t = o("WAWebUserPrefsGeneral")).getAutoDownloadPhotos,
          i,
        ),
        y = h[0],
        C = h[1],
        b = e(t.getAutoDownloadAudio, l),
        v = b[0],
        S = b[1],
        R = e(t.getAutoDownloadVideos, d),
        L = R[0],
        E = R[1],
        k = e(t.getAutoDownloadDocuments, g),
        I = k[0],
        T = k[1],
        D = r("WAWebEnvironment").isWindows
          ? !(y && v && L && I)
          : !(y && v && !L && !I),
        x;
      a[0] !== v ||
      a[1] !== D ||
      a[2] !== I ||
      a[3] !== y ||
      a[4] !== S ||
      a[5] !== T ||
      a[6] !== C ||
      a[7] !== E ||
      a[8] !== L
        ? ((x = function () {
            D &&
              (!y && C(),
              !v && S(),
              r("WAWebEnvironment").isWindows
                ? (!L && E(), !I && T())
                : (L && E(), I && T()));
          }),
          (a[0] = v),
          (a[1] = D),
          (a[2] = I),
          (a[3] = y),
          (a[4] = S),
          (a[5] = T),
          (a[6] = C),
          (a[7] = E),
          (a[8] = L),
          (a[9] = x))
        : (x = a[9]);
      var $ = x,
        P;
      a[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = [
            o("WAWebUISpacing").uiPadding.horiz30,
            o("WAWebUISpacing").uiPadding.vert20,
          ]),
          (a[10] = P))
        : (P = a[10]);
      var N;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s._(/*BTDS*/ "Photos")), (a[11] = N))
        : (N = a[11]);
      var M;
      a[12] !== y || a[13] !== C
        ? ((M = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
            testid: void 0,
            id: "photos",
            checked: y,
            onChange: C,
            children: N,
          })),
          (a[12] = y),
          (a[13] = C),
          (a[14] = M))
        : (M = a[14]);
      var w;
      a[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = s._(/*BTDS*/ "Audio")), (a[15] = w))
        : (w = a[15]);
      var A;
      a[16] !== v || a[17] !== S
        ? ((A = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
            testid: void 0,
            id: "audio",
            checked: v,
            onChange: S,
            children: w,
          })),
          (a[16] = v),
          (a[17] = S),
          (a[18] = A))
        : (A = a[18]);
      var F;
      a[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = s._(/*BTDS*/ "Videos")), (a[19] = F))
        : (F = a[19]);
      var O;
      a[20] !== E || a[21] !== L
        ? ((O = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
            testid: void 0,
            id: "videos",
            checked: L,
            onChange: E,
            children: F,
          })),
          (a[20] = E),
          (a[21] = L),
          (a[22] = O))
        : (O = a[22]);
      var B;
      a[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s._(/*BTDS*/ "Documents")), (a[23] = B))
        : (B = a[23]);
      var W;
      a[24] !== I || a[25] !== T
        ? ((W = u.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
            testid: void 0,
            id: "documents",
            checked: I,
            onChange: T,
            children: B,
          })),
          (a[24] = I),
          (a[25] = T),
          (a[26] = W))
        : (W = a[26]);
      var q;
      a[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: [o("WAWebUISpacing").uiPadding.top20, c.disclaimer],
            children: s._(
              /*BTDS*/ "Voice messages are always automatically downloaded for the best communication experience.",
            ),
          })),
          (a[27] = q))
        : (q = a[27]);
      var U;
      a[28] !== M || a[29] !== A || a[30] !== O || a[31] !== W
        ? ((U = u.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            xstyle: P,
            children: [M, A, O, W, q],
          })),
          (a[28] = M),
          (a[29] = A),
          (a[30] = O),
          (a[31] = W),
          (a[32] = U))
        : (U = a[32]);
      var V;
      a[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = u.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {})),
          (a[33] = V))
        : (V = a[33]);
      var H = !D,
        G;
      a[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = s._(/*BTDS*/ "Reset auto-download settings")), (a[34] = G))
        : (G = a[34]);
      var z;
      a[35] !== $ || a[36] !== H
        ? ((z = u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            xstyle: o("WAWebUISpacing").uiPadding.start5,
            children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              onClick: $,
              icon: V,
              disabled: H,
              children: G,
            }),
          })),
          (a[35] = $),
          (a[36] = H),
          (a[37] = z))
        : (z = a[37]);
      var j;
      return (
        a[38] !== U || a[39] !== z
          ? ((j = u.jsxs(u.Fragment, { children: [U, z] })),
            (a[38] = U),
            (a[39] = z),
            (a[40] = j))
          : (j = a[40]),
        j
      );
    }
    function m(e) {
      return o("WAWebUserPrefsGeneral").setAutoDownloadDocuments(e);
    }
    function p(e) {
      return o("WAWebUserPrefsGeneral").setAutoDownloadVideos(e);
    }
    function _(e) {
      return o("WAWebUserPrefsGeneral").setAutoDownloadAudio(e);
    }
    function f(e) {
      return o("WAWebUserPrefsGeneral").setAutoDownloadPhotos(e);
    }
    l.default = d;
  },
  226,
);
