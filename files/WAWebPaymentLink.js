__d(
  "WAWebPaymentLink",
  [
    "PaymentLinkPreviewWithAmountFeature",
    "WAWebABProps",
    "WAWebLinkify",
    "WAWebLoggingPaymentLinkWithoutPreviewFeature",
    "WAWebMobilePlatforms",
    "WAWebPaymentLinkPreviewWithTrustSignalsFeature",
    "WAWebPaymentLinkTraceIdLoggingFeature",
    "WAWebPaymentLinkWithCTAFeature",
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
    function u(e) {
      var t = JSON.parse(
        o("WAWebABProps").getABPropConfigValue(
          "smb_payment_links_url_regex_list",
        ),
      );
      for (var n in t) if (e.match(n)) return t[n];
      return null;
    }
    function c() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function d(e, t) {
      var n = null;
      n = o("WAWebPaymentLinkWithCTAFeature").getMetadata(e, n);
      var r = o("WAWebLinkify").findLinks(
        t,
        !1,
        o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
      );
      return (
        (n = o("WAWebLoggingPaymentLinkWithoutPreviewFeature").getMetadata(
          e,
          n,
          r,
        )),
        (n = o("WAWebPaymentLinkPreviewWithTrustSignalsFeature").setMetadata(
          e,
          n,
          r,
        )),
        (n = o("PaymentLinkPreviewWithAmountFeature").setAmountMetadata(
          e,
          n,
          r,
        )),
        (n = o("WAWebPaymentLinkTraceIdLoggingFeature").setTraceId(n)),
        n
      );
    }
    ((l.CTA_TEXT = e),
      (l.getPaymentLinkOrderHeaderComponentDisplayParams = s),
      (l.getPSP = u),
      (l.shouldDetectInComposer = c),
      (l.getPaymentLinkMessageMetadata = d));
  },
  98,
);
