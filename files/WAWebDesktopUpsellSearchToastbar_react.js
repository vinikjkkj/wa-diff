__d(
  "WAWebDesktopUpsellSearchToastbar.react",
  [
    "fbt",
    "WAWebDesktopUpsellCommonStrings",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebDesktopUpsellUtils",
    "WAWebDesktopUpsellWASquareIcon.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "cr:23046",
    "react",
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        textWrapper: { lineHeight: "xo5v014", $$css: !0 },
        toastbar: { justifyContent: "xl56j7k", $$css: !0 },
      };
    function d() {
      var e,
        t = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        a = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        i =
          (e =
            n("cr:23046") == null
              ? void 0
              : n("cr:23046").isWindowsHybridEnabled()) != null
            ? e
            : !1,
        l = !i && a,
        d = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        m = d[0],
        p = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
      return (
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression({
          isCtaVisible: l === !0,
          source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
            .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS,
          isBeta: p,
          isBetaUser: m,
        }),
        l !== !0 || t == null
          ? null
          : u.jsxs(r("WAWebToastbar.react"), {
              onClick: function () {
                o(
                  "WAWebDesktopUpsellStoreOpener",
                ).openExternalWhatsAppDesktopDownloadUrl({
                  ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                    .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS,
                  isBetaUpsell: p,
                  isBetaUser: m,
                });
              },
              wrapperXstyle: c.toastbar,
              children: [
                u.jsx(r("WAWebDesktopUpsellWASquareIcon.react"), {}),
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [
                    u.jsx(o("WAWebFlex.react").FlexItem, {
                      children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        as: "span",
                        children: s._(
                          /*BTDS*/ "See more chat history on the app",
                        ),
                      }),
                    }),
                    u.jsx(o("WAWebFlex.react").FlexItem, {
                      inline: !0,
                      children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                        as: "span",
                        xstyle: c.textWrapper,
                        children: o(
                          "WAWebDesktopUpsellCommonStrings",
                        ).getDesktopUpsellToastbarLabel(p),
                      }),
                    }),
                  ],
                }),
              ],
            })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
