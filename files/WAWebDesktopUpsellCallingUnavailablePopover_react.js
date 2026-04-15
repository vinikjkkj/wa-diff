__d(
  "WAWebDesktopUpsellCallingUnavailablePopover.react",
  [
    "fbt",
    "WAWebDesktopUpsellCallingPopover.react",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebDesktopUpsellUtils",
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "react",
    "react-compiler-runtime",
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.isGroupCall,
        a = e.userDesktopOs,
        i = n === void 0 ? !1 : n,
        l = o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CALL_BTN_MODAL_2,
        s = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        c = s[0],
        p = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        _;
      (t[0] !== c || t[1] !== p
        ? ((_ = { isCtaVisible: !0, source: l, isBeta: p, isBetaUser: c }),
          (t[0] = c),
          (t[1] = p),
          (t[2] = _))
        : (_ = t[2]),
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression(_));
      var f;
      (t[3] !== c || t[4] !== p
        ? ((f = function () {
            new (o(
              "WAWebWebcNativeUpsellCtaWamEvent",
            ).WebcNativeUpsellCtaWamEvent)({
              webcNativeUpsellCtaEventType: o(
                "WAWebWamEnumWebcNativeUpsellCtaEventType",
              ).WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
              webcNativeUpsellCtaSource: l,
              webcNativeUpsellCtaReleaseChannel: p
                ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                    .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA
                : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                    .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
              webcNativeUpsellCtaIsBetaUser: c,
            }).commit();
          }),
          (t[3] = c),
          (t[4] = p),
          (t[5] = f))
        : (f = t[5]),
        r("useWAWebOnUnmount")(f));
      var g;
      t[6] !== i || t[7] !== p || t[8] !== a
        ? ((g = d(a, p, i)), (t[6] = i), (t[7] = p), (t[8] = a), (t[9] = g))
        : (g = t[9]);
      var h;
      t[10] !== i || t[11] !== p || t[12] !== a
        ? ((h = m(a, p, i)), (t[10] = i), (t[11] = p), (t[12] = a), (t[13] = h))
        : (h = t[13]);
      var y;
      t[14] !== c || t[15] !== p
        ? ((y = function () {
            o(
              "WAWebDesktopUpsellStoreOpener",
            ).openExternalWhatsAppDesktopDownloadUrl({
              ctaSource: l,
              isBetaUpsell: p,
              isBetaUser: c,
            });
          }),
          (t[14] = c),
          (t[15] = p),
          (t[16] = y))
        : (y = t[16]);
      var C;
      return (
        t[17] !== g || t[18] !== h || t[19] !== y
          ? ((C = u.jsx(r("WAWebDesktopUpsellCallingPopover.react"), {
              title: g,
              body: h,
              onClick: y,
            })),
            (t[17] = g),
            (t[18] = h),
            (t[19] = y),
            (t[20] = C))
          : (C = t[20]),
        C
      );
    }
    function d(e, t, n) {
      return e === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS
        ? n
          ? s._(/*BTDS*/ "Make group calls with the Windows app")
          : s._(/*BTDS*/ "Make calls with the Windows app")
        : t
          ? n
            ? s._(/*BTDS*/ "Make group calls with the beta Mac app")
            : s._(/*BTDS*/ "Make calls with the beta Mac app")
          : n
            ? s._(/*BTDS*/ "Make group calls with the Mac app")
            : s._(/*BTDS*/ "Make calls with the Mac app");
    }
    function m(e, t, n) {
      return e === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS
        ? n
          ? s._(
              /*BTDS*/ "Download WhatsApp for Windows to start making group calls.",
            )
          : s._(/*BTDS*/ "Download WhatsApp for Windows to start making calls.")
        : t
          ? n
            ? s._(
                /*BTDS*/ "Download the beta Mac app to start making group calls.",
              )
            : s._(/*BTDS*/ "Download the beta Mac app to start making calls.")
          : n
            ? s._(
                /*BTDS*/ "Download WhatsApp for Mac to start making group calls.",
              )
            : s._(/*BTDS*/ "Download WhatsApp for Mac to start making calls.");
    }
    l.default = c;
  },
  226,
);
