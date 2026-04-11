__d(
  "WAWebDesktopUpsellStoreOpener",
  [
    "WALogger",
    "WAWebDesktopUpsellUtils",
    "WAWebExternalLink.react",
    "WAWebLinkDeviceScreenGatedUtils",
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = e.ctaSource,
        n = e.isBetaUpsell,
        r = e.isBetaUser,
        a = e.qrScreenExperimentGroup,
        i = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
      (i === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS
        ? c(t)
        : i === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS && m(t, n),
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
    function c(t) {
      try {
        o("WAWebExternalLink.react").openExternalLink(d(t), {
          target: o("WAWebExternalLink.react").ExternalLinkTarget
            .DEEPLINK_IN_CURRENT_TAB,
        });
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[desktop-upsell] MS Store open failed: ",
              "",
            ])),
          t,
        );
      }
    }
    function d(e) {
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
    function m(e, t) {
      try {
        o("WAWebExternalLink.react").openExternalLink(
          r("gkx")("26258") ||
            o(
              "WAWebLinkDeviceScreenGatedUtils",
            ).isAppleTouchscreenOverlayEnabled()
            ? p(e, t)
            : o("WAWebExternalLink.react").MAC_INTERNAL_MSC_STORE_URI,
          {
            target: o("WAWebExternalLink.react").ExternalLinkTarget
              .DEEPLINK_IN_CURRENT_TAB,
          },
        );
      } catch (e) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[desktop-upsell] Mac App Store open failed: ",
              "",
            ])),
          e,
        );
      }
    }
    function p(e, t) {
      if (t === !0)
        return (
          o("WAWebExternalLink.react").MAC_EXTERNAL_SIDELOAD_URI_BETA +
          "&src=whatsapp_beta_webclient_" +
          _(e)
        );
      switch (e) {
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER:
          return o("WAWebExternalLink.react").MAC_STORE_URIS.qr_slim_banner;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_LARGE_BANNER:
          return o("WAWebExternalLink.react").MAC_STORE_URIS.qr_large_banner;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_DOWNLOAD_BUTTON:
          return o("WAWebExternalLink.react").MAC_STORE_URIS
            .link_device_banner_3;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL:
          return o("WAWebExternalLink.react").MAC_STORE_URIS.intro_panel;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR:
          return o("WAWebExternalLink.react").MAC_STORE_URIS.chatlist_toastbar;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS:
          return o("WAWebExternalLink.react").MAC_STORE_URIS
            .search_results_toastbar;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CALL_BTN_MODAL_2:
          return o("WAWebExternalLink.react").MAC_STORE_URIS.call_btn_modal_2;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN:
          return o("WAWebExternalLink.react").MAC_STORE_URIS
            .chatlist_dropdown_menu;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL_2:
          return o("WAWebExternalLink.react").MAC_STORE_URIS
            .missed_call_modal_2;
        case o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
          .LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY:
          return o("WAWebExternalLink.react").IOS_STORE_URIS
            .touchscreen_overlay;
      }
      throw r("err")("Invalid CTA source: " + e);
    }
    function _(e) {
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
    l.openExternalWhatsAppDesktopDownloadUrl = u;
  },
  98,
);
