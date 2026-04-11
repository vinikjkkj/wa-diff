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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(17),
        t = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        a = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        i;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l;
        ((i =
          (l =
            n("cr:23046") == null
              ? void 0
              : n("cr:23046").isWindowsHybridEnabled()) != null
            ? l
            : !1),
          (e[0] = i));
      } else i = e[0];
      var d = i,
        m = !d && a,
        p = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        _ = p[0],
        f = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        g = m === !0,
        h;
      if (
        (e[1] !== _ || e[2] !== f || e[3] !== g
          ? ((h = {
              isCtaVisible: g,
              source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS,
              isBeta: f,
              isBetaUser: _,
            }),
            (e[1] = _),
            (e[2] = f),
            (e[3] = g),
            (e[4] = h))
          : (h = e[4]),
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression(h),
        m !== !0 || t == null)
      )
        return null;
      var y;
      e[5] !== _ || e[6] !== f
        ? ((y = function () {
            o(
              "WAWebDesktopUpsellStoreOpener",
            ).openExternalWhatsAppDesktopDownloadUrl({
              ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS,
              isBetaUpsell: f,
              isBetaUser: _,
            });
          }),
          (e[5] = _),
          (e[6] = f),
          (e[7] = y))
        : (y = e[7]);
      var C;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(r("WAWebDesktopUpsellWASquareIcon.react"), {})),
          (e[8] = C))
        : (C = e[8]);
      var b;
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              as: "span",
              children: s._(/*BTDS*/ "See more chat history on the app"),
            }),
          })),
          (e[9] = b))
        : (b = e[9]);
      var v;
      e[10] !== f
        ? ((v = o(
            "WAWebDesktopUpsellCommonStrings",
          ).getDesktopUpsellToastbarLabel(f)),
          (e[10] = f),
          (e[11] = v))
        : (v = e[11]);
      var S;
      e[12] !== v
        ? ((S = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              b,
              u.jsx(o("WAWebFlex.react").FlexItem, {
                inline: !0,
                children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  as: "span",
                  xstyle: c.textWrapper,
                  children: v,
                }),
              }),
            ],
          })),
          (e[12] = v),
          (e[13] = S))
        : (S = e[13]);
      var R;
      return (
        e[14] !== y || e[15] !== S
          ? ((R = u.jsxs(r("WAWebToastbar.react"), {
              onClick: y,
              wrapperXstyle: c.toastbar,
              children: [C, S],
            })),
            (e[14] = y),
            (e[15] = S),
            (e[16] = R))
          : (R = e[16]),
        R
      );
    }
    l.default = d;
  },
  226,
);
