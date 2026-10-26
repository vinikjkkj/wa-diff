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
    var e, s, u, c, d;
    function m(t) {
      var n =
        t == null
          ? o("WAWebExternalLink.react").ANDROID_STORE_URIS.touchscreen_overlay
          : o("WAWebExternalLink.react").ANDROID_STORE_URIS
              .touchscreen_overlay +
            "%26wa_web_visit_id%3D" +
            t;
      try {
        o("WAWebExternalLink.react").openExternalLink(n, {
          target: o("WAWebExternalLink.react").ExternalLinkTarget.NEW_TAB,
        });
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
    function p(e) {
      var t = e.ctaSource,
        n = e.isBetaUpsell,
        r = e.isBetaUser,
        a = e.qrScreenExperimentGroup,
        i = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
      (i === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS
        ? h(t)
        : i === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS
          ? C(t, n)
          : t ===
              o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
                .LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY
            ? _()
            : o("WAWebDesktopUpsellUtils").isAndroidAppUpsellEnabled() && f(t),
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
    function _() {
      try {
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebExternalLink.react").IOS_STORE_URIS.touchscreen_overlay,
          {
            target: o("WAWebExternalLink.react").ExternalLinkTarget
              .DEEPLINK_IN_CURRENT_TAB,
          },
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[desktop-upsell] iOS App Store open failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("desktop-upsell-ios-store-open-failed");
      }
    }
    function f(e) {
      try {
        o("WAWebExternalLink.react").openExternalLink(g(e), {
          target: o("WAWebExternalLink.react").ExternalLinkTarget.NEW_TAB,
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[desktop-upsell] Google Play open failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("desktop-upsell-google-play-open-failed");
      }
    }
    function g(e) {
      e: {
        if (
          e ===
          o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
            .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL
        )
          return o("WAWebExternalLink.react").ANDROID_STORE_URIS.intro_panel;
        if (
          e ===
          o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
            .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR
        )
          return o("WAWebExternalLink.react").ANDROID_STORE_URIS
            .chatlist_toastbar;
        throw r("err")("Invalid CTA source: " + e);
      }
    }
    function h(e) {
      try {
        o("WAWebExternalLink.react").openExternalLink(y(e), {
          target: o("WAWebExternalLink.react").ExternalLinkTarget
            .DEEPLINK_IN_CURRENT_TAB,
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[desktop-upsell] MS Store open failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("desktop-upsell-ms-store-open-failed");
      }
    }
    function y(e) {
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
    function C(e, t) {
      try {
        o("WAWebExternalLink.react").openExternalLink(b(e, t), {
          target: o("WAWebExternalLink.react").ExternalLinkTarget
            .DEEPLINK_IN_CURRENT_TAB,
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[desktop-upsell] Mac WhatsApp Desktop download failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("desktop-upsell-mac-download-failed");
      }
    }
    function b(e, t) {
      return t === !0
        ? o("WAWebExternalLink.react").MAC_EXTERNAL_SIDELOAD_URI_BETA +
            "&src=whatsapp_beta_webclient_" +
            v(e)
        : e ===
            o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
              .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
              .LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY
          ? o("WAWebExternalLink.react").IOS_STORE_URIS.touchscreen_overlay
          : o("WAWebExternalLink.react").MAC_EXTERNAL_SIDELOAD_URI +
            "&src=whatsapp_webclient_" +
            v(e);
    }
    function v(e) {
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
    ((l.openExternalWhatsAppAndroidTabletDownloadUrl = m),
      (l.openExternalWhatsAppDesktopDownloadUrl = p));
  },
  98,
);
