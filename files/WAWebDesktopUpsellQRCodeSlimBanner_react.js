__d(
  "WAWebDesktopUpsellQRCodeSlimBanner.react",
  [
    "WAWebDesktopUpsellCommonStrings",
    "WAWebFlex.react",
    "WAWebNativeAppDownloadButton.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWebLoginDesktopUpsellIllustrationIcon.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        bannerAltBtn: {
          display: "x1s85apg",
          "@media screen and (max-width: 900px)_display": "xe8os0b",
          "@media screen and (max-width: 900px)_width": "xd80u2d",
          $$css: !0,
        },
        bannerBtn: {
          "@media screen and (max-width: 900px)_display": "x1qh72ku",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.apiCmd,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i =
            "xy296fx x1p5oq8j x15zmtp0 xwxc41k x1oiqv2n x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x12peec7 x91od0 x18w32sv xym2i8p xk3sftt x1i50ybd"),
          (n[0] = i))
        : (i = n[0]);
      var l;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebFlex.react").FlexColumn, {
            shrink: 0,
            children: u.jsx(
              o("WAWebWebLoginDesktopUpsellIllustrationIcon.react")
                .WebLoginDesktopUpsellIllustrationIcon,
              { width: 64 },
            ),
          })),
          (n[1] = l))
        : (l = n[1]);
      var s;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(o("WAWebFlex.react").FlexRow, {
            className: "x1c3i2sq xk50ysn x1o2sk6j x1hql6x6",
            children: o(
              "WAWebDesktopUpsellCommonStrings",
            ).getDesktopUpsellDownloadWhatsAppTitle(),
          })),
          (n[2] = s))
        : (s = n[2]);
      var d;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(o("WAWebFlex.react").FlexRow, {
            className: "x1hql6x6 x1jchvi3 xo1l8bm x1fc57z9 x1qh72ku",
            children: o(
              "WAWebDesktopUpsellCommonStrings",
            ).getDesktopUpsellIntroPanelText(),
          })),
          (n[3] = d))
        : (d = n[3]);
      var m;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (e || (e = r("stylex")))([c.bannerAltBtn])), (n[4] = m))
        : (m = n[4]);
      var p;
      n[5] !== a
        ? ((p = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            rowGap: 4,
            children: [
              s,
              d,
              u.jsx(o("WAWebFlex.react").FlexItem, {
                shrink: 0,
                className: m,
                align: "center",
                justify: "start",
                children: u.jsx(r("WAWebNativeAppDownloadButton.react"), {
                  sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                    .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER,
                  inline: !0,
                  apiCmd: a,
                }),
              }),
            ],
          })),
          (n[5] = a),
          (n[6] = p))
        : (p = n[6]);
      var _;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e || (e = r("stylex")))([c.bannerBtn])), (n[7] = _))
        : (_ = n[7]);
      var f;
      n[8] !== a
        ? ((f = u.jsx(o("WAWebFlex.react").FlexItem, {
            shrink: 0,
            className: _,
            children: u.jsx(r("WAWebNativeAppDownloadButton.react"), {
              sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER,
              apiCmd: a,
            }),
          })),
          (n[8] = a),
          (n[9] = f))
        : (f = n[9]);
      var g;
      return (
        n[10] !== p || n[11] !== f
          ? ((g = u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              justify: "center",
              className: i,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                columnGap: 24,
                children: [l, p, f],
              }),
            })),
            (n[10] = p),
            (n[11] = f),
            (n[12] = g))
          : (g = n[12]),
        g
      );
    }
    l.default = d;
  },
  98,
);
