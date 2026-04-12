__d(
  "WAWebMacBetaUpsellToastbar.react",
  [
    "fbt",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WAWebUserPrefsStore",
    "WAWebWaSquareIconIcon.react",
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "react",
    "useWAWebDesktopUpsellWamImpression",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        wrapperXstyle: {
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          justifyContent: "xlqzeqv",
          width: "xh8yej3",
          boxSizing: "x9f619",
          paddingInlineStart: "x13jy36j",
          paddingInlineEnd: "xziim83",
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          $$css: !0,
        },
        childrenXStyle: {
          flexGrow: "x1iyjqo2",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        body: { columnGap: "x1vg3z9j", width: "xh8yej3", $$css: !0 },
        waIcon: { width: "x1useyqa", alignItems: "x6s0dn4", $$css: !0 },
        iconXstyle: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        dismissXstyle: { marginInlineEnd: "x14z9mp", $$css: !0 },
      },
      _ = "mac_beta_upsell_dismiss";
    function f(e) {
      var t = e.sourceType,
        n = m(r("WAWebUserPrefsStore").getUser(_) === !0),
        a = n[0],
        i = n[1],
        l = d(function () {
          (r("WAWebUserPrefsStore").setUser(_, !0), i(!0));
        }, []),
        c = function () {
          (new (o(
            "WAWebWebcNativeUpsellCtaWamEvent",
          ).WebcNativeUpsellCtaWamEvent)({
            webcNativeUpsellCtaEventType: o(
              "WAWebWamEnumWebcNativeUpsellCtaEventType",
            ).WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
            webcNativeUpsellCtaSource: t,
            webcNativeUpsellCtaReleaseChannel: o(
              "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
            ).WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA,
            webcNativeUpsellCtaIsBetaUser: !0,
          }).commit(),
            l());
        };
      return (
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression({
          isCtaVisible: !a,
          source: t,
          isBeta: !0,
          isBetaUser: !0,
        }),
        a
          ? null
          : u.jsx(r("WAWebToastbar.react"), {
              onClick: function () {
                (o(
                  "WAWebDesktopUpsellStoreOpener",
                ).openExternalWhatsAppDesktopDownloadUrl({
                  ctaSource: t,
                  isBetaUpsell: !0,
                  isBetaUser: !0,
                }),
                  window.setTimeout(function () {
                    l();
                  }, 1e3));
              },
              dismissible: !0,
              onDismiss: c,
              alwaysShowDismissBtn: !0,
              dismissXstyle: p.dismissXstyle,
              wrapperXstyle: p.wrapperXstyle,
              childrenXStyle: p.childrenXStyle,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                xstyle: p.body,
                align: "center",
                children: [
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    shrink: 0,
                    xstyle: p.waIcon,
                    children: u.jsx(
                      o("WAWebWaSquareIconIcon.react").WaSquareIconIcon,
                      { height: 32, iconXstyle: p.iconXstyle },
                    ),
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    grow: 1,
                    justify: "center",
                    align: "start",
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        children: u.jsx(
                          o("WAWebText.react").WAWebTextTitleRefreshed,
                          {
                            children: s._(/*BTDS*/ "Download the beta Mac app"),
                          },
                        ),
                      }),
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        children: u.jsx(
                          o("WAWebText.react").WAWebTextMutedRefreshed,
                          {
                            children: s._(
                              /*BTDS*/ "Try new features and share feedback",
                            ),
                          },
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
