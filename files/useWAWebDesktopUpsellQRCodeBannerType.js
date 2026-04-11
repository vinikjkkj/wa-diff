__d(
  "useWAWebDesktopUpsellQRCodeBannerType",
  [
    "$InternalEnum",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellQRCodeBannerExperiment",
    "WAWebLinkDeviceScreenGatedUtils",
    "WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ NONE: "none", SLIM: "slim", LARGE: "large" });
    function s(t) {
      var n = o(
        "WAWebDesktopUpsellPlatformAwareHooks",
      ).useWAWebDesktopUpsellPlatformAwareOsVersionCheck();
      if (!n) return e.NONE;
      var r =
        ((t == null ? void 0 : t.resultType) === "WEB_REGISTRATION" &&
          o(
            "WAWebLinkDeviceScreenGatedUtils",
          ).getOptimizedRegFromWebVariant() === "test") ||
        (t == null ? void 0 : t.resultType) === "WEB_REGISTRATION_CAMPAIGN";
      if (r) return e.NONE;
      var a = o(
        "WAWebDesktopUpsellQRCodeBannerExperiment",
      ).getWAWebDesktopUpsellQRCodeBannerExperiment();
      switch (a) {
        case o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup")
          .WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.NONE:
        case o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup")
          .WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.CONTROL:
          return e.NONE;
        case o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup")
          .WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.TEST_BANNER_SLIM:
          return e.SLIM;
      }
      return e.NONE;
    }
    ((l.WAWebDesktopUpsellQRCodeBannerType = e),
      (l.useWAWebDesktopUpsellQRCodeBannerType = s));
  },
  98,
);
