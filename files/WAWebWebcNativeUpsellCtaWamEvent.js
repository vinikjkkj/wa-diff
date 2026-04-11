__d(
  "WAWebWebcNativeUpsellCtaWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcNativeUpsellCta: [
          3934,
          {
            webcNativeUpsellCtaEventType: [
              2,
              o("WAWebWamEnumWebcNativeUpsellCtaEventType")
                .WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE,
            ],
            webcNativeUpsellCtaIsBetaUser: [
              5,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
            webcNativeUpsellCtaQrScreenExperimentGroup: [
              3,
              o("WAWebWamEnumWebcNativeUpsellCtaQrScreenExperimentGroup")
                .WEBC_NATIVE_UPSELL_CTA_QR_SCREEN_EXPERIMENT_GROUP,
            ],
            webcNativeUpsellCtaReleaseChannel: [
              4,
              o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL,
            ],
            webcNativeUpsellCtaSource: [
              1,
              o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcNativeUpsellCta: [] },
    );
    l.WebcNativeUpsellCtaWamEvent = e;
  },
  98,
);
