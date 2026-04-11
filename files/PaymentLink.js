__d(
  "PaymentLink",
  [
    "LoggingPaymentLinkWithoutPreviewFeature",
    "PaymentLinkPSPImagePathMapper",
    "PaymentLinkPreviewWithAmountFeature",
    "PaymentLinkPreviewWithTrustSignalsFeature",
    "PaymentLinkTraceIdLoggingFeature",
    "PaymentLinkWithCTAFeature",
    "WAWebABProps",
    "WAWebLinkify",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "Open payment link";
    function s(e) {
      return o(
        "PaymentLinkPreviewWithAmountFeature",
      ).getPaymentLinkOrderHeaderComponentDisplayParamsForAmountFeature(e);
    }
    function u(e, t) {
      if (e == null) return null;
      var n = e + (t ? "-dark" : "-light");
      return Object.prototype.hasOwnProperty.call(
        o("PaymentLinkPSPImagePathMapper").PaymentLinkPSPImagePathMapper,
        n,
      )
        ? o("PaymentLinkPSPImagePathMapper").PaymentLinkPSPImagePathMapper[n]
        : null;
    }
    function c(e) {
      var t = JSON.parse(
        o("WAWebABProps").getABPropConfigValue(
          "smb_payment_links_url_regex_list",
        ),
      );
      for (var n in t) if (e.match(n)) return t[n];
      return null;
    }
    function d() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function m(e, t) {
      var n = null;
      n = o("PaymentLinkWithCTAFeature").getMetadata(e, n);
      var r = o("WAWebLinkify").findLinks(
        t,
        !1,
        o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
      );
      return (
        (n = o("LoggingPaymentLinkWithoutPreviewFeature").getMetadata(e, n, r)),
        (n = o("PaymentLinkPreviewWithTrustSignalsFeature").setMetadata(
          e,
          n,
          r,
        )),
        (n = o("PaymentLinkPreviewWithAmountFeature").setAmountMetadata(
          e,
          n,
          r,
        )),
        (n = o("PaymentLinkTraceIdLoggingFeature").setTraceId(n)),
        n
      );
    }
    ((l.CTA_TEXT = e),
      (l.getPaymentLinkOrderHeaderComponentDisplayParams = s),
      (l.getPSPIconPath = u),
      (l.getPSP = c),
      (l.shouldDetectInComposer = d),
      (l.getPaymentLinkMessageMetadata = m));
  },
  98,
);
