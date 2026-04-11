__d(
  "WAWebLinkDeviceExperience",
  [
    "WABitArray",
    "WAWebArkoseExpUtils",
    "WAWebAutoLogoutGating",
    "WAWebDesktopUpsellQRCodeBannerExperiment",
    "WAWebDeviceFeatures",
    "WAWebHybridRegGating",
    "WAWebLinkDeviceScreenGatedUtils",
    "WAWebNativeCameraQRLinkedDeviceUtils",
    "WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e) {
          this.flag = e;
        }
        var t = e.prototype;
        return (
          (t.getIndex = function () {
            return u() - 1 - this.flag;
          }),
          e
        );
      })(),
      s = {
        ScreenRefreshFlag: new e(0),
        AutoLogoutFlag: new e(1),
        DesktopUpsellBannerControlFlag: new e(2),
        DesktopUpsellBannerTestSlimBannerFlag: new e(3),
        DesktopUpsellBannerTestLargeBannerFlag: new e(4),
        PairingScreenRefreshVariant1Flag: new e(6),
        LinkDeviceScreenControl: new e(8),
        LinkDeviceScreenTest: new e(9),
        OptimizedRegistrationControl: new e(10),
        OptimizedRegistrationTest: new e(11),
        ArkoseControl: new e(12),
        ArkoseTest: new e(13),
        TouchPresence: new e(16),
        AppleTouchscreenOverlay: new e(17),
        HybridRegControl: new e(18),
        HybridRegTest: new e(19),
      };
    function u() {
      return (
        Math.max.apply(
          Math,
          Object.values(s).map(function (e) {
            return e.flag;
          }),
        ) + 1
      );
    }
    function c(e) {
      var t = new (r("WABitArray"))(u());
      (t.set(s.ScreenRefreshFlag.getIndex()),
        o("WAWebAutoLogoutGating").isAutoLogoutEnabled() &&
          t.set(s.AutoLogoutFlag.getIndex()));
      var n = o(
        "WAWebDesktopUpsellQRCodeBannerExperiment",
      ).getWAWebDesktopUpsellQRCodeBannerExperiment();
      e: {
        if (
          n ===
          o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup")
            .WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.NONE
        )
          break e;
        if (
          n ===
          o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup")
            .WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.CONTROL
        ) {
          t.set(s.DesktopUpsellBannerControlFlag.getIndex());
          break e;
        }
        if (
          n ===
          o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup")
            .WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.TEST_BANNER_SLIM
        ) {
          t.set(s.DesktopUpsellBannerTestSlimBannerFlag.getIndex());
          break e;
        }
        if (
          n ===
          o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup")
            .WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP.TEST_BANNER_LARGE
        ) {
          t.set(s.DesktopUpsellBannerTestLargeBannerFlag.getIndex());
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
      var a = o("WAWebLinkDeviceScreenGatedUtils").getLinkDeviceScreenVariant();
      switch (a) {
        case o("WAWebLinkDeviceScreenGatedUtils").LinkDeviceScreenVariantType
          .M1_WINNER:
          t.set(s.PairingScreenRefreshVariant1Flag.getIndex());
          break;
      }
      var i = o(
        "WAWebNativeCameraQRLinkedDeviceUtils",
      ).getNativeCameraQRLinkedDeviceVariant();
      switch (i) {
        case o("WAWebNativeCameraQRLinkedDeviceUtils")
          .NativeCameraQRLinkedDeviceVariantType.NONE:
          break;
        case o("WAWebNativeCameraQRLinkedDeviceUtils")
          .NativeCameraQRLinkedDeviceVariantType.CONTROL:
          t.set(s.LinkDeviceScreenControl.getIndex());
          break;
        case o("WAWebNativeCameraQRLinkedDeviceUtils")
          .NativeCameraQRLinkedDeviceVariantType.TEST:
          t.set(s.LinkDeviceScreenTest.getIndex());
          break;
      }
      var l = o(
          "WAWebLinkDeviceScreenGatedUtils",
        ).getOptimizedRegFromWebVariant(),
        c =
          (e == null ? void 0 : e.resultType) === "WEB_REGISTRATION_CAMPAIGN" ||
          l === "test";
      c
        ? t.set(s.OptimizedRegistrationTest.getIndex())
        : l === "control" && t.set(s.OptimizedRegistrationControl.getIndex());
      var d = o("WAWebArkoseExpUtils").getArkoseVariant();
      switch (d) {
        case o("WAWebArkoseExpUtils").ArkoseVariantType.CONTROL:
          t.set(s.ArkoseControl.getIndex());
          break;
        case o("WAWebArkoseExpUtils").ArkoseVariantType.TEST:
          t.set(s.ArkoseTest.getIndex());
          break;
        default:
          break;
      }
      (r("WAWebDeviceFeatures")().touchPresence &&
        t.set(s.TouchPresence.getIndex()),
        o(
          "WAWebLinkDeviceScreenGatedUtils",
        ).isAppleTouchscreenOverlayEnabled() &&
          t.set(s.AppleTouchscreenOverlay.getIndex()));
      var m = o("WAWebHybridRegGating").getHybridRegExperiment();
      e: {
        if (m === "control") {
          t.set(s.HybridRegControl.getIndex());
          break e;
        }
        if (m === "test") {
          t.set(s.HybridRegTest.getIndex());
          break e;
        }
        if (m === "none") break e;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            m,
        );
      }
      return t.toNumber();
    }
    l.getWebCompanionLinkDeviceExperienceId = c;
  },
  98,
);
