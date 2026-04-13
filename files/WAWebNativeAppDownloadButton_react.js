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
    "react-compiler-runtime",
    "useWAWebDesktopUpsellQplImpression",
    "useWAWebDesktopUpsellWamImpression",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(20),
        a = e.apiCmd,
        i = e.inline,
        l = e.sourceType,
        c = i === void 0 ? !1 : i,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o(
            "WAWebDesktopUpsellQRCodeBannerExperiment",
          ).getWAWebDesktopUpsellQRCodeBannerExperiment()),
          (t[0] = d))
        : (d = t[0]);
      var m = d,
        p = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformAwareOsVersionCheck(),
        _;
      t[1] !== a || t[2] !== l
        ? ((_ = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o(
                "useWAWebDesktopUpsellQplImpression",
              ).logDesktopUpsellQplEvent("click", l, a),
                o(
                  "WAWebDesktopUpsellStoreOpener",
                ).openExternalWhatsAppDesktopDownloadUrl({
                  ctaSource: l,
                  qrScreenExperimentGroup: m,
                  isBetaUser: !1,
                }));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[1] = a),
          (t[2] = l),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g;
      if (
        (t[4] !== p || t[5] !== l
          ? ((g = {
              source: l,
              isCtaVisible: p,
              qrScreenExperimentGroup: m,
              isBeta: !1,
              isBetaUser: !1,
            }),
            (t[4] = p),
            (t[5] = l),
            (t[6] = g))
          : (g = t[6]),
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression(g),
        !p)
      )
        return null;
      var h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Download")), (t[7] = h))
        : (h = t[7]);
      var y = h;
      if (
        l ===
          o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
            .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_SLIM_BANNER &&
        c
      ) {
        var C;
        (t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = s._(/*BTDS*/ "Get the app")), (t[8] = C))
          : (C = t[8]),
          (y = C));
      }
      if (c) {
        var b;
        t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = "xujl8zx x1kqcxns xewurvo x3pynha x1hql6x6 xk50ysn x1e4br3l"),
            (t[9] = b))
          : (b = t[9]);
        var v;
        t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
              width: 16,
              height: 16,
            })),
            (t[10] = v))
          : (v = t[10]);
        var S;
        t[11] !== y
          ? ((S = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              columnGap: 4,
              children: [y, v],
            })),
            (t[11] = y),
            (t[12] = S))
          : (S = t[12]);
        var R;
        return (
          t[13] !== f || t[14] !== S
            ? ((R = u.jsx(o("WAWebClickable.react").Clickable, {
                as: "span",
                dataTestId: "download-native-client-button-inline",
                className: b,
                onClick: f,
                children: S,
              })),
              (t[13] = f),
              (t[14] = S),
              (t[15] = R))
            : (R = t[15]),
          R
        );
      }
      var L;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(r("WDSIconIcDownload.react"), { width: 16, height: 16 })),
          (t[16] = L))
        : (L = t[16]);
      var E;
      return (
        t[17] !== y || t[18] !== f
          ? ((E = u.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
              icon: L,
              onClick: f,
              text: y,
              testId: "download-native-client-button",
            })),
            (t[17] = y),
            (t[18] = f),
            (t[19] = E))
          : (E = t[19]),
        E
      );
    }
    l.default = c;
  },
  226,
);
