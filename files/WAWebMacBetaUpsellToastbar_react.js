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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(15),
        n = e.sourceType,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = r("WAWebUserPrefsStore").getUser(_)), (t[0] = a))
        : (a = t[0]);
      var i = m(a === !0),
        l = i[0],
        c = i[1],
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function () {
            (r("WAWebUserPrefsStore").setUser(_, !0), c(!0));
          }),
          (t[1] = d))
        : (d = t[1]);
      var f = d,
        g;
      t[2] !== n
        ? ((g = function () {
            (new (o(
              "WAWebWebcNativeUpsellCtaWamEvent",
            ).WebcNativeUpsellCtaWamEvent)({
              webcNativeUpsellCtaEventType: o(
                "WAWebWamEnumWebcNativeUpsellCtaEventType",
              ).WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
              webcNativeUpsellCtaSource: n,
              webcNativeUpsellCtaReleaseChannel: o(
                "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
              ).WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA,
              webcNativeUpsellCtaIsBetaUser: !0,
            }).commit(),
              f());
          }),
          (t[2] = n),
          (t[3] = g))
        : (g = t[3]);
      var h = g,
        y = !l,
        C;
      if (
        (t[4] !== n || t[5] !== y
          ? ((C = { isCtaVisible: y, source: n, isBeta: !0, isBetaUser: !0 }),
            (t[4] = n),
            (t[5] = y),
            (t[6] = C))
          : (C = t[6]),
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression(C),
        l)
      )
        return null;
      var b;
      t[7] !== n
        ? ((b = function () {
            (o(
              "WAWebDesktopUpsellStoreOpener",
            ).openExternalWhatsAppDesktopDownloadUrl({
              ctaSource: n,
              isBetaUpsell: !0,
              isBetaUser: !0,
            }),
              window.setTimeout(function () {
                f();
              }, 1e3));
          }),
          (t[7] = n),
          (t[8] = b))
        : (b = t[8]);
      var v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(o("WAWebFlex.react").FlexColumn, {
            shrink: 0,
            xstyle: p.waIcon,
            children: u.jsx(o("WAWebWaSquareIconIcon.react").WaSquareIconIcon, {
              height: 32,
              iconXstyle: p.iconXstyle,
            }),
          })),
          (t[9] = v))
        : (v = t[9]);
      var S;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
              children: s._(/*BTDS*/ "Download the beta Mac app"),
            }),
          })),
          (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: p.body,
            align: "center",
            children: [
              v,
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                grow: 1,
                justify: "center",
                align: "start",
                children: [
                  S,
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
          })),
          (t[11] = R))
        : (R = t[11]);
      var L;
      return (
        t[12] !== h || t[13] !== b
          ? ((L = u.jsx(r("WAWebToastbar.react"), {
              onClick: b,
              dismissible: !0,
              onDismiss: h,
              alwaysShowDismissBtn: !0,
              dismissXstyle: p.dismissXstyle,
              wrapperXstyle: p.wrapperXstyle,
              childrenXStyle: p.childrenXStyle,
              children: R,
            })),
            (t[12] = h),
            (t[13] = b),
            (t[14] = L))
          : (L = t[14]),
        L
      );
    }
    l.default = f;
  },
  226,
);
