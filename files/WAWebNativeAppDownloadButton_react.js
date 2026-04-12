__d(
  "WAWebNativeAppDownloadButton.react",
  [
    "fbt",
    "WAWebChevronIcon.react",
    "WAWebClickable.react",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellQRCodeBannerExperiment",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebFlex.react",
    "WAWebLinkDeviceScreenPrimaryButton.react",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WDSIconIcDownload.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebDesktopUpsellQplImpression",
    "useWAWebDesktopUpsellWamImpression",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.apiCmd,
        a = e.inline,
        i = a === void 0 ? !1 : a,
        l = e.sourceType,
        c = o(
          "WAWebDesktopUpsellQRCodeBannerExperiment",
        ).getWAWebDesktopUpsellQRCodeBannerExperiment(),
        d = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformAwareOsVersionCheck(),
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield o(
              "useWAWebDesktopUpsellQplImpression",
            ).logDesktopUpsellQplEvent("click", l, t),
              o(
                "WAWebDesktopUpsellStoreOpener",
              ).openExternalWhatsAppDesktopDownloadUrl({
                ctaSource: l,
                qrScreenExperimentGroup: c,
                isBetaUser: !1,
              }));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      if (
        (o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression({
          source: l,
          isCtaVisible: d,
          qrScreenExperimentGroup: c,
          isBeta: !1,
          isBetaUser: !1,
        }),
        !d)
      )
        return null;
      var p = s._(/*BTDS*/ "Download");
      return (
        l ===
          o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
            .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER &&
          i &&
          (p = s._(/*BTDS*/ "Get the app")),
        i
          ? u.jsx(o("WAWebClickable.react").Clickable, {
              as: "span",
              dataTestId: "download-native-client-button-inline",
              className:
                "xujl8zx x1kqcxns xewurvo x3pynha x1hql6x6 xk50ysn x1e4br3l",
              onClick: m,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                columnGap: 4,
                children: [
                  p,
                  u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                    width: 16,
                    height: 16,
                  }),
                ],
              }),
            })
          : u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
              icon: u.jsx(r("WDSIconIcDownload.react"), {
                width: 16,
                height: 16,
              }),
              onClick: m,
              text: p,
              testId: "download-native-client-button",
            })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
