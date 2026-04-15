__d(
  "WAWebVoipCallLinkLoadingPreview.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebSpinner.react",
    "WAWebThemeContext",
    "WDSColorStyles.stylex",
    "WDSText.react",
    "WDSThemes",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        theme: "dark",
        setTheme: r("WAWebNoop"),
        setSystemThemeMode: r("WAWebNoop"),
        systemThemeMode: !1,
      },
      d = {
        voipContainer: {
          position: "x1n2onr6",
          width: "xh8yej3",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          userSelect: "x87ps6o",
          $$css: !0,
        },
        lobbyOuterContainer: {
          position: "x1n2onr6",
          display: "x78zum5",
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        lobbyInnerContainer: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          width: "xh8yej3",
          height: "x5yr21d",
          display: "x78zum5",
          $$css: !0,
        },
        contentContainer: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          height: "x5yr21d",
          width: "xh8yej3",
          paddingTop: "x16ovd2e",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x4tra6z",
          paddingInlineEnd: "x1j8ymqv",
          boxSizing: "x9f619",
          rowGap: "x1b73lln",
          backgroundColor: "x1c7u0tx",
          $$css: !0,
        },
        participantInfoSection: {
          flexShrink: "x2lah0s",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          marginTop: "x1380le5",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          marginLeft: null,
          marginRight: null,
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          width: "x1unu1t6",
          boxSizing: "x9f619",
          $$css: !0,
        },
        loadingArea: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          width: "xh8yej3",
          $$css: !0,
        },
        controlsPlaceholder: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          flexShrink: "x2lah0s",
          marginTop: "xr1yuqi",
          width: "xh8yej3",
          boxSizing: "x9f619",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.isVideo,
        a;
      t[0] !== n
        ? ((a = n ? s._(/*BTDS*/ "Video call") : s._(/*BTDS*/ "Voice call")),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WDSThemes").WDSDarkTheme,
            d.voipContainer,
            o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .backgroundWashPlain,
          ]),
          (t[2] = l))
        : (l = t[2]);
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = {
            className:
              "x100vrsf x1vqgdyp x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x78zum5 x6s0dn4 xl56j7k x2lah0s x1c3i2sq",
          }),
          (t[3] = m))
        : (m = t[3]);
      var p = n ? "\uD83D\uDCF9" : "\uD83D\uDCDE",
        _;
      t[4] !== p
        ? ((_ = u.jsx("div", babelHelpers.extends({}, m, { children: p }))),
          (t[4] = p),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            selectable: !1,
            children: s._(/*BTDS*/ "Call link"),
          })),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] !== i
        ? ((g = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              f,
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                selectable: !1,
                children: i,
              }),
            ],
          })),
          (t[7] = i),
          (t[8] = g))
        : (g = t[8]);
      var h;
      t[9] !== _ || t[10] !== g
        ? ((h = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: d.participantInfoSection,
            children: [_, g],
          })),
          (t[9] = _),
          (t[10] = g),
          (t[11] = h))
        : (h = t[11]);
      var y;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebSpinner.react").Spinner, {
            size: 40,
            color: "accent",
            stroke: 3,
          })),
          (t[12] = y))
        : (y = t[12]);
      var C, b;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsxs(o("WAWebFlex.react").FlexItem, {
            xstyle: d.loadingArea,
            children: [
              y,
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                selectable: !1,
                children: s._(/*BTDS*/ "Connecting..."),
              }),
            ],
          })),
          (b = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: d.controlsPlaceholder,
          })),
          (t[13] = C),
          (t[14] = b))
        : ((C = t[13]), (b = t[14]));
      var v;
      if (t[15] !== h) {
        var S;
        ((v = u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
          value: c,
          children: u.jsx((S = o("WAWebFlex.react")).FlexColumn, {
            xstyle: l,
            children: u.jsx(S.FlexItem, {
              xstyle: d.lobbyOuterContainer,
              children: u.jsx(S.FlexItem, {
                xstyle: d.lobbyInnerContainer,
                children: u.jsxs(S.FlexColumn, {
                  xstyle: d.contentContainer,
                  children: [h, C, b],
                }),
              }),
            }),
          }),
        })),
          (t[15] = h),
          (t[16] = v));
      } else v = t[16];
      return v;
    }
    l.default = m;
  },
  226,
);
