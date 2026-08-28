__d(
  "BusinessIntegrityUserUncertificatedUtils",
  [
    "errorCode",
    "fbt",
    "AdsStackedErrorsCardUtils",
    "URI",
    "XAdsStandaloneCertificationController",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e;
    function c() {
      (e || (e = r("URI"))).goURIOnNewWindow(
        r("XAdsStandaloneCertificationController").getURIBuilder().getURI(),
      );
    }
    var d = u._(/*BTDS*/ "Review"),
      m = r("immutable").Map([
        [
          2859002,
          {
            cta: d,
            customCTA: c,
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .LINK,
          },
        ],
      ]);
    function p(e) {
      var t = 2859002;
      return e != null && Number(e) === t && r("gkx")("19905");
    }
    ((l.openCertificationNonDiscriminationPage = c),
      (l.AdsErrorCodeToCertificationNonDiscrimination = m),
      (l.isCertificationError = p));
  },
  226,
);
