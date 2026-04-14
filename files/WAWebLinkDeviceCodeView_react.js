__d(
  "WAWebLinkDeviceCodeView.react",
  [
    "fbt",
    "WAWebAutoLogoutGating",
    "WAWebEnvironment",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebHybridRegGating",
    "WAWebLinkDeviceApiCmdTooltip.react",
    "WAWebLinkDeviceAutoLogoutToggle.react",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceInstructions.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        banner: { width: "xh8yej3", $$css: !0 },
        centerAlignOnSmallScreen: {
          width: "xh8yej3",
          alignItems: "x1cy8zhl xob9gl2",
          textAlign: "x1yc453h x1nj6vil",
          justifyItems: "x1eyeirb x8gkquz",
          $$css: !0,
        },
        marginTop20: { marginTop: "x1nmyh1g", $$css: !0 },
      };
    function d(e) {
      var t = e.alternativeLinkDeviceMethodHint,
        n = e.codeType,
        a = e.screenReaderSubtitleConfig,
        i = function () {
          e.onAutoLogoutToggle && e.onAutoLogoutToggle();
        },
        l = null;
      if (o("WAWebAutoLogoutGating").isAutoLogoutEnabled()) {
        var d;
        l = u.jsx(r("WAWebLinkDeviceAutoLogoutToggle.react"), {
          autoLogoutEnabled: (d = e.autoLogoutEnabled) != null ? d : !1,
          onAutoLogoutToggle: i,
        });
      }
      return n ===
        o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR
        ? u.jsxs(u.Fragment, {
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: c.banner,
                children: e.banners,
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                rowGap: o("WAWebHybridRegGating").isHybridRegEnabled() ? 8 : 40,
                children: [
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    wrap: "nowrap",
                    className:
                      "xkh2ocl x6s0dn4 x1qughib xi32cqo x1qgv0r9 x18t01z2 xr3inr3",
                    children: [
                      u.jsxs(o("WAWebFlex.react").FlexColumn, {
                        grow: r("WAWebEnvironment").isWindows ? void 0 : 1,
                        rowGap: 40,
                        shrink: 2,
                        align: "start",
                        alignSelf: "center",
                        children: [
                          u.jsxs(o("WAWebFlex.react").FlexItem, {
                            xstyle: c.centerAlignOnSmallScreen,
                            children: [
                              u.jsx(
                                o("WAWebLinkDeviceCommonComponents.react")
                                  .Title,
                                {
                                  value: e.title,
                                  theme: o(
                                    "WAWebHybridRegGating",
                                  ).isHybridRegEnabled()
                                    ? "wds"
                                    : void 0,
                                },
                              ),
                              u.jsx(
                                o("WAWebLinkDeviceCommonComponents.react")
                                  .ScreenReaderSubtitle,
                                { config: a },
                              ),
                            ],
                          }),
                          e.subtitle != null &&
                            u.jsx(o("WAWebFlex.react").FlexItem, {
                              children: u.jsx(
                                o("WAWebLinkDeviceCommonComponents.react")
                                  .Subtitle,
                                { value: e.subtitle },
                              ),
                            }),
                          u.jsxs(o("WAWebFlex.react").FlexItem, {
                            children: [
                              u.jsx(r("WAWebLinkDeviceInstructions.react"), {
                                codeType: n,
                              }),
                              u.jsx(o("WAWebFlex.react").FlexItem, {
                                marginTop: 20,
                                children: u.jsx(
                                  o("WAWebLinkDeviceCommonInstructions.react")
                                    .ExternalHelpLink,
                                  {
                                    isBold: o(
                                      "WAWebHybridRegGating",
                                    ).isHybridRegEnabled(),
                                    showUnderline: o(
                                      "WAWebHybridRegGating",
                                    ).isHybridRegEnabled()
                                      ? !1
                                      : void 0,
                                    showArrow: o(
                                      "WAWebHybridRegGating",
                                    ).isHybridRegEnabled()
                                      ? !1
                                      : void 0,
                                    text: s._(/*BTDS*/ "Need help?"),
                                    url: o("WAWebFaqUrl").getLinkDeviceFaqUrl(),
                                  },
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs(o("WAWebFlex.react").FlexColumn, {
                        align: "center",
                        justify: "center",
                        grow: 0,
                        shrink: 0,
                        className: "x1n2onr6 x1y8v6su x1eq81zi",
                        children: [
                          u.jsx(r("WAWebLinkDeviceApiCmdTooltip.react"), {
                            apiCmd: e.apiCmd,
                          }),
                          e.children,
                        ],
                      }),
                    ],
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexItem, {
                    className:
                      "x78zum5 x1qughib xkh2ocl x1cy8zhl x1q0g3np xnlzww4 xozqiw3 x198rtga xxs79tx x1ewqh72",
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexItem, { children: l }),
                      u.jsx(o("WAWebFlex.react").FlexItem, { children: t }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: c.banner,
                children: e.banners,
              }),
              u.jsxs(o("WAWebFlex.react").FlexItem, {
                children: [
                  u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
                    value: e.title,
                  }),
                  u.jsx(
                    o("WAWebLinkDeviceCommonComponents.react")
                      .ScreenReaderSubtitle,
                    { config: a },
                  ),
                ],
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(
                  o("WAWebLinkDeviceCommonComponents.react").Subtitle,
                  { value: e.subtitle },
                ),
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                align: "center",
                justify: "center",
                grow: 0,
                className:
                  "xh8yej3 x1ndca9r x16qb05n xi7iut8 x1dm3dyd x1pv694p x10wjd1d x14mdic9 xl7twdi xvg22vi",
                children: e.children,
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                children: u.jsx(r("WAWebLinkDeviceInstructions.react"), {
                  codeType: n,
                }),
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: c.marginTop20,
                children: t,
              }),
            ],
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.LinkDeviceCodeView = d));
  },
  226,
);
