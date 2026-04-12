__d(
  "useWAWebDesktopUpsellWamImpression",
  [
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "react",
    "useWAWebCallbackOnce",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.isBeta,
        n = e.isBetaUser,
        a = e.isCtaVisible,
        i = e.qrScreenExperimentGroup,
        l = e.source,
        u = r("useWAWebCallbackOnce")(function () {
          new (o(
            "WAWebWebcNativeUpsellCtaWamEvent",
          ).WebcNativeUpsellCtaWamEvent)({
            webcNativeUpsellCtaEventType: o(
              "WAWebWamEnumWebcNativeUpsellCtaEventType",
            ).WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.IMPRESSION,
            webcNativeUpsellCtaSource: l,
            webcNativeUpsellCtaQrScreenExperimentGroup: i,
            webcNativeUpsellCtaReleaseChannel: t
              ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                  .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA
              : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                  .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
            webcNativeUpsellCtaIsBetaUser: n,
          }).commit();
        });
      s(
        function () {
          a && u();
        },
        [u, a],
      );
    }
    l.useWAWebDesktopUpsellWamImpression = u;
  },
  98,
);
