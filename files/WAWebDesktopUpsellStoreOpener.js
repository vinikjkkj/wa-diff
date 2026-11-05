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
    var e,
      s,
      u,
      c,
      d,
      m = "com.whatsapp";
    function p(t) {
      var n =
          t == null
            ? o("WAWebExternalLink.react").ANDROID_STORE_URIS
                .touchscreen_overlay
            : o("WAWebExternalLink.react").ANDROID_STORE_URIS
                .touchscreen_overlay +
              "%26wa_web_visit_id%3D" +
              t,
        a = t != null && R() ? L(t, n) : null;
      try {
        return a != null
          ? (window.open(a, "_blank", "noopener,noreferrer"),
            "whatsapp_app_link")
          : (o("WAWebExternalLink.react").openExternalLink(n, {
              target: o("WAWebExternalLink.react").ExternalLinkTarget.NEW_TAB,
            }),
            "google_play");
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[android-tablet-interstitial] WhatsApp or Google Play open failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("android-tablet-play-store-open"),
          null
        );
      }
    }
    function _(e) {
      var t = e.ctaSource,
        n = e.isBetaUpsell,
        r = e.isBetaUser,
        a = e.qrScreenExperimentGroup,
        i = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
      (i === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS
        ? y(t)
        : i === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS
          ? b(t, n)
          : t ===
              o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
                .LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY
            ? f()
            : o("WAWebDesktopUpsellUtils").isAndroidAppUpsellEnabled() && g(t),
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
    function f() {
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
    function g(e) {
      try {
        o("WAWebExternalLink.react").openExternalLink(h(e), {
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
    function h(e) {
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
    function y(e) {
      try {
        o("WAWebExternalLink.react").openExternalLink(C(e), {
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
    function C(e) {
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
    function b(e, t) {
      try {
        o("WAWebExternalLink.react").openExternalLink(v(e, t), {
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
    function v(e, t) {
      return t === !0
        ? o("WAWebExternalLink.react").MAC_EXTERNAL_SIDELOAD_URI_BETA +
            "&src=whatsapp_beta_webclient_" +
            S(e)
        : e ===
            o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
              .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
              .LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY
          ? o("WAWebExternalLink.react").IOS_STORE_URIS.touchscreen_overlay
          : o("WAWebExternalLink.react").MAC_EXTERNAL_SIDELOAD_URI +
            "&src=whatsapp_webclient_" +
            S(e);
    }
    function S(e) {
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
    function R() {
      return self.navigator.userAgentData != null;
    }
    function L(e, t) {
      return (
        "intent://www.whatsapp.com/dl?wa_web_visit_id=" +
        e +
        ("#Intent;scheme=https;package=" + m + ";") +
        ("S.browser_fallback_url=" + encodeURIComponent(t) + ";end")
      );
    }
    ((l.openExternalWhatsAppAndroidTabletDownloadUrl = p),
      (l.openExternalWhatsAppDesktopDownloadUrl = _));
  },
  98,
);
