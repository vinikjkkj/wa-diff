__d(
  "WAWebDesktopUpsellStoreOpener",
  [
    "WALogger",
    "WAWebDesktopUpsellUtils",
    "WAWebExternalLink.react",
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      try {
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebExternalLink.react").ANDROID_STORE_URIS.touchscreen_overlay,
          { target: o("WAWebExternalLink.react").ExternalLinkTarget.NEW_TAB },
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[android-tablet-interstitial] Google Play open failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("android-tablet-play-store-open");
      }
    }
    function d(e) {
      var t = e.ctaSource,
        n = e.isBetaUpsell,
        r = e.isBetaUser,
        a = e.qrScreenExperimentGroup,
        i = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
      (i === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS
        ? m(t)
        : i === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS && _(t, n),
        new (o("WAWebWebcNativeUpsellCtaWamEvent").WebcNativeUpsellCtaWamEvent)(
          {
            webcNativeUpsellCtaEventType: o(
              "WAWebWamEnumWebcNativeUpsellCtaEventType",
            ).WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_BTN_CLICK,
            webcNativeUpsellCtaSource: t,
            webcNativeUpsellCtaQrScreenExperimentGroup: a,
            webcNativeUpsellCtaReleaseChannel:
              n === !0
                ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                    .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA
                : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                    .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
            webcNativeUpsellCtaIsBetaUser: r,
          },
        ).commitAndWaitForFlush(!0));
    }
    function m(e) {
      try {
        o("WAWebExternalLink.react").openExternalLink(p(e), {
          target: o("WAWebExternalLink.react").ExternalLinkTarget
            .DEEPLINK_IN_CURRENT_TAB,
        });
      } catch (e) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[desktop-upsell] MS Store open failed: ",
              "",
            ])),
          e,
        );
      }
    }
    function p(e) {
      switch (e) {
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER:
          return o("WAWebExternalLink.react").WINDOWS_SIDELOAD_URIS
            .qr_slim_banner;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_LARGE_BANNER:
          return o("WAWebExternalLink.react").WINDOWS_SIDELOAD_URIS
            .qr_large_banner;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_DOWNLOAD_BUTTON:
          return o("WAWebExternalLink.react").WINDOWS_SIDELOAD_URIS
            .link_device_banner_3;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL:
          return o("WAWebExternalLink.react").WINDOWS_SIDELOAD_URIS.intro_panel;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR:
          return o("WAWebExternalLink.react").WINDOWS_SIDELOAD_URIS
            .chatlist_toastbar;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS:
          return o("WAWebExternalLink.react").WINDOWS_SIDELOAD_URIS
            .search_results_toastbar;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CALL_BTN_MODAL_2:
          return o("WAWebExternalLink.react").WINDOWS_SIDELOAD_URIS
            .call_btn_modal_2;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN:
          return o("WAWebExternalLink.react").WINDOWS_SIDELOAD_URIS
            .chatlist_dropdown_menu;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL_2:
          return o("WAWebExternalLink.react").WINDOWS_SIDELOAD_URIS
            .missed_call_modal_2;
      }
      throw r("err")("Invalid CTA source: " + e);
    }
    function _(e, t) {
      try {
        o("WAWebExternalLink.react").openExternalLink(f(e, t), {
          target: o("WAWebExternalLink.react").ExternalLinkTarget
            .DEEPLINK_IN_CURRENT_TAB,
        });
      } catch (e) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[desktop-upsell] Mac WhatsApp Desktop download failed: ",
              "",
            ])),
          e,
        );
      }
    }
    function f(e, t) {
      return t === !0
        ? o("WAWebExternalLink.react").MAC_EXTERNAL_SIDELOAD_URI_BETA +
            "&src=whatsapp_beta_webclient_" +
            g(e)
        : e ===
            o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
              .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
              .LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY
          ? o("WAWebExternalLink.react").IOS_STORE_URIS.touchscreen_overlay
          : o("WAWebExternalLink.react").MAC_EXTERNAL_SIDELOAD_URI +
            "&src=whatsapp_webclient_" +
            g(e);
    }
    function g(e) {
      var t = Object.entries(
        o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE,
      ).find(function (t) {
        var n = t[0],
          r = t[1];
        return r === e;
      });
      return t ? t[0].toLowerCase() : "unknown";
    }
    ((l.openExternalWhatsAppAndroidTabletDownloadUrl = c),
      (l.openExternalWhatsAppDesktopDownloadUrl = d));
  },
  98,
);
