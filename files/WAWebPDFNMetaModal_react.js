__d(
  "WAWebPDFNMetaModal.react",
  [
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebPDFNContentElement.react",
    "WAWebPDFNHeaderImage.react",
    "WAWebPDFNSanitizedSvg.react",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WaWebPDFNCommonUtils",
    "XMDSButton.react",
    "XMDSDialogHeader.react",
    "XMDSDialogPage.react",
    "XMDSDialogTitle.react",
    "XMDSText.react",
    "XMDSTheme.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        cdsContainer: { fontFamily: "xjn6cdj", $$css: !0 },
        bulletSubtitle: {
          fontSize: "x6prxxf",
          lineHeight: "x17fgdl5",
          fontWeight: "xo1l8bm",
          $$css: !0,
        },
        secondaryText: { color: "xb6zdsr", $$css: !0 },
        secondaryTextDark: { color: "x1rmb33y", $$css: !0 },
        link: { fontWeight: "x1xlr1w8", $$css: !0 },
        blueLink: { color: "x1aejobo", $$css: !0 },
        blueLinkDark: { color: "x180kvt1", $$css: !0 },
        cdsFooterText: {
          fontSize: "x1nxh6w3",
          lineHeight: "xuy8w9f",
          $$css: !0,
        },
      };
    function c(e) {
      var t,
        n = e.onAccept,
        a = e.onCancel,
        i = e.pdfnNotice,
        l = o("WAWebThemeContext").useIsDarkTheme(),
        c = o("WaWebPDFNCommonUtils").getFormattedPdfnContent(i, {
          linkXstyle: [u.link, l ? u.blueLinkDark : u.blueLink],
        }),
        d = c.bulletContent,
        p = c.footerContent,
        _ = c.headerContent,
        f = c.okText,
        g = d != null ? s.jsx(m, { bullets: d }) : null,
        h =
          p != null
            ? s.jsx(r("WAWebPDFNContentElement.react"), {
                as: "div",
                content: p,
                xstyle: [
                  u.cdsFooterText,
                  l ? u.secondaryTextDark : u.secondaryText,
                  o("WAWebUISpacing").uiPadding.bottom12,
                ],
              })
            : null,
        y = s.jsx(r("WAWebPDFNHeaderImage.react"), {
          content: _,
          xstyle: o("WAWebUISpacing").uiPadding.bottom16,
        });
      return s.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.CDS,
        children: s.jsx(r("XMDSTheme.react"), {
          displayMode: l ? "dark" : "light",
          children: s.jsx(r("XMDSDialogPage.react"), {
            footer: null,
            header: s.jsx(r("XMDSDialogHeader.react"), { onClose: a }),
            inline: !0,
            children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
              paddingStart: 20,
              paddingEnd: 20,
              xstyle: u.cdsContainer,
              children: [
                s.jsx(o("WAWebFlex.react").FlexRow, {
                  alignSelf: "center",
                  children: y,
                }),
                s.jsx(r("XMDSDialogTitle.react"), {
                  children: s.jsx(r("XMDSText.react"), {
                    textStyle: "headline2",
                    xstyle: o("WAWebUISpacing").uiPadding.vert16,
                    children:
                      i == null || (t = i.privacyDisclosureModal) == null
                        ? void 0
                        : t.title,
                  }),
                }),
                g,
                h,
                s.jsx(r("XMDSButton.react"), { label: f, onPress: n }),
              ],
            }),
          }),
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.iconSvg,
        n = e.secondaryText,
        a = e.text,
        i = o("WAWebThemeContext").useIsDarkTheme(),
        l =
          n != null
            ? s.jsx(r("WAWebPDFNContentElement.react"), {
                as: "span",
                xstyle: [
                  u.bulletSubtitle,
                  i ? u.secondaryTextDark : u.secondaryText,
                ],
                content: n,
              })
            : null;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        columnGap: 12,
        xstyle: [
          o("WAWebUISpacing").uiPadding.top10,
          o("WAWebUISpacing").uiPadding.bottom6,
        ],
        children: [
          s.jsx(r("WAWebPDFNSanitizedSvg.react"), { iconSvg: t }),
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 4,
            children: [
              s.jsx(r("XMDSText.react"), {
                textStyle: "primaryLabel",
                children: a,
              }),
              l,
            ],
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.bullets;
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        paddingBottom: 16,
        children: t.map(function (e, t) {
          return s.jsx(
            d,
            {
              text: e.text,
              icon: e.icon,
              iconSvg: e.iconSvg,
              secondaryText: e.secondaryText,
            },
            t,
          );
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
