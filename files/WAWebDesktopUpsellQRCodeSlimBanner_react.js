__d(
  "WAWebDesktopUpsellQRCodeSlimBanner.react",
  [
    "WAWebDesktopUpsellCommonStrings",
    "WAWebFlex.react",
    "WAWebNativeAppDownloadButton.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWebLoginDesktopUpsellIllustrationIcon.react",
    "react",
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
      var n,
        a = t.apiCmd;
      return u.jsx((n = o("WAWebFlex.react")).FlexItem, {
        align: "center",
        justify: "center",
        className:
          "xy296fx x1p5oq8j x15zmtp0 xwxc41k x1oiqv2n x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x12peec7 x91od0 x18w32sv xym2i8p xk3sftt x1i50ybd",
        children: u.jsxs(n.FlexRow, {
          align: "center",
          justify: "center",
          columnGap: 24,
          children: [
            u.jsx(n.FlexColumn, {
              shrink: 0,
              children: u.jsx(
                o("WAWebWebLoginDesktopUpsellIllustrationIcon.react")
                  .WebLoginDesktopUpsellIllustrationIcon,
                { width: 64 },
              ),
            }),
            u.jsxs(n.FlexColumn, {
              grow: 1,
              rowGap: 4,
              children: [
                u.jsx(n.FlexRow, {
                  className: "x1c3i2sq xk50ysn x1o2sk6j x1hql6x6",
                  children: o(
                    "WAWebDesktopUpsellCommonStrings",
                  ).getDesktopUpsellDownloadWhatsAppTitle(),
                }),
                u.jsx(n.FlexRow, {
                  className: "x1hql6x6 x1jchvi3 xo1l8bm x1fc57z9 x1qh72ku",
                  children: o(
                    "WAWebDesktopUpsellCommonStrings",
                  ).getDesktopUpsellIntroPanelText(),
                }),
                u.jsx(n.FlexItem, {
                  shrink: 0,
                  className: (e || (e = r("stylex")))([c.bannerAltBtn]),
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
            }),
            u.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              className: e([c.bannerBtn]),
              children: u.jsx(r("WAWebNativeAppDownloadButton.react"), {
                sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                  .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER,
                apiCmd: a,
              }),
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
