__d(
  "useWAWebDesktopUpsellWamImpression",
  [
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "react",
    "react-compiler-runtime",
    "useWAWebCallbackOnce",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.isBeta,
        a = e.isBetaUser,
        i = e.isCtaVisible,
        l = e.qrScreenExperimentGroup,
        u = e.source,
        c;
      t[0] !== n || t[1] !== a || t[2] !== l || t[3] !== u
        ? ((c = function () {
            new (o(
              "WAWebWebcNativeUpsellCtaWamEvent",
            ).WebcNativeUpsellCtaWamEvent)({
              webcNativeUpsellCtaEventType: o(
                "WAWebWamEnumWebcNativeUpsellCtaEventType",
              ).WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.IMPRESSION,
              webcNativeUpsellCtaSource: u,
              webcNativeUpsellCtaQrScreenExperimentGroup: l,
              webcNativeUpsellCtaReleaseChannel: n
                ? o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                    .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.BETA
                : o("WAWebWamEnumWebcNativeUpsellCtaReleaseChannel")
                    .WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
              webcNativeUpsellCtaIsBetaUser: a,
            }).commit();
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l),
          (t[3] = u),
          (t[4] = c))
        : (c = t[4]);
      var d = r("useWAWebCallbackOnce")(c),
        m,
        p;
      (t[5] !== i || t[6] !== d
        ? ((m = function () {
            i && d();
          }),
          (p = [d, i]),
          (t[5] = i),
          (t[6] = d),
          (t[7] = m),
          (t[8] = p))
        : ((m = t[7]), (p = t[8])),
        s(m, p));
    }
    l.useWAWebDesktopUpsellWamImpression = u;
  },
  98,
);
