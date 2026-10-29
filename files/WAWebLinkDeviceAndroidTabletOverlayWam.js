__d(
  "WAWebLinkDeviceAndroidTabletOverlayWam",
  [
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWebcNativeUpsellCtaWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = new (o(
        "WAWebWebcNativeUpsellCtaWamEvent",
      ).WebcNativeUpsellCtaWamEvent)({
        webcNativeUpsellCtaEventType:
          e === "close"
            ? o("WAWebWamEnumWebcNativeUpsellCtaEventType")
                .WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS
            : e === "continue-to-web"
              ? o("WAWebWamEnumWebcNativeUpsellCtaEventType")
                  .WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_SECONDARY_BTN_CLICK
              : e === "download-app"
                ? o("WAWebWamEnumWebcNativeUpsellCtaEventType")
                    .WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_BTN_CLICK
                : e === "screen-loaded"
                  ? o("WAWebWamEnumWebcNativeUpsellCtaEventType")
                      .WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.IMPRESSION
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })(),
        webcNativeUpsellCtaSource:
          t === "googlebook"
            ? o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
                .LINK_DEVICE_GOOGLEBOOK_OVERLAY
            : t === "tablet"
              ? o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                  .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
                  .LINK_DEVICE_ANDROID_TABLET_OVERLAY
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })(),
        webcNativeUpsellCtaReleaseChannel: o(
          "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
        ).WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
        webcNativeUpsellCtaIsBetaUser: !1,
      });
      e === "download-app" ? n.commitAndWaitForFlush(!0) : n.commit();
    }
    l.logAndroidTabletOverlayWamEvent = e;
  },
  98,
);
