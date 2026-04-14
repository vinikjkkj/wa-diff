__d(
  "WAWebDesktopUpsellCallingMissedCall.react",
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
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.isGroupCall,
        n = t === void 0 ? !1 : t,
        a = e.isMissedCall,
        i = a === void 0 ? !0 : a,
        l = e.userDesktopOs,
        s = o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL_2,
        c = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        p = c[0],
        _ = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
      return (
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression({
          isCtaVisible: !0,
          source: s,
          isBeta: _,
          isBetaUser: p,
        }),
        r("useWAWebOnUnmount")(function () {
          new (o(
            "WAWebWebcNativeUpsellCtaWamEvent",
          ).WebcNativeUpsellCtaWamEvent)({
            webcNativeUpsellCtaEventType: o(
              "WAWebWamEnumWebcNativeUpsellCtaEventType",
            ).WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
            webcNativeUpsellCtaSource: s,
            webcNativeUpsellCtaReleaseChannel: _
              ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                  .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA
              : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                  .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
            webcNativeUpsellCtaIsBetaUser: p,
          }).commit();
        }),
        u.jsx(r("WAWebDesktopUpsellCallingPopover.react"), {
          title: d(l, _, n),
          body: m(l, _, n, i),
          onClick: function () {
            o(
              "WAWebDesktopUpsellStoreOpener",
            ).openExternalWhatsAppDesktopDownloadUrl({
              ctaSource: s,
              isBetaUpsell: _,
              isBetaUser: p,
            });
          },
        })
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      return e === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS
        ? n
          ? s._(/*BTDS*/ "Return group calls with the Windows app")
          : s._(/*BTDS*/ "Return calls with the Windows app")
        : t
          ? n
            ? s._(/*BTDS*/ "Return group calls with the beta Mac app")
            : s._(/*BTDS*/ "Return calls with the beta Mac app")
          : n
            ? s._(/*BTDS*/ "Return group calls with the Mac app")
            : s._(/*BTDS*/ "Return calls with the Mac app");
    }
    function m(e, t, n, r) {
      return e === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS
        ? r
          ? n
            ? s._(
                /*BTDS*/ "Download WhatsApp for Windows to start returning missed group calls.",
              )
            : s._(
                /*BTDS*/ "Download WhatsApp for Windows to start returning missed calls.",
              )
          : n
            ? s._(
                /*BTDS*/ "Download WhatsApp for Windows to start returning group calls.",
              )
            : s._(
                /*BTDS*/ "Download WhatsApp for Windows to start returning calls.",
              )
        : t
          ? r
            ? n
              ? s._(
                  /*BTDS*/ "Download the beta Mac app to start returning missed group calls.",
                )
              : s._(
                  /*BTDS*/ "Download the beta Mac app to start returning missed calls.",
                )
            : n
              ? s._(
                  /*BTDS*/ "Download the beta Mac app to start returning group calls.",
                )
              : s._(
                  /*BTDS*/ "Download the beta Mac app to start returning calls.",
                )
          : r
            ? n
              ? s._(
                  /*BTDS*/ "Download WhatsApp for Mac to start returning missed group calls.",
                )
              : s._(
                  /*BTDS*/ "Download WhatsApp for Mac to start returning missed calls.",
                )
            : n
              ? s._(
                  /*BTDS*/ "Download WhatsApp for Mac to start returning group calls.",
                )
              : s._(
                  /*BTDS*/ "Download WhatsApp for Mac to start returning calls.",
                );
    }
    l.default = c;
  },
  226,
);
