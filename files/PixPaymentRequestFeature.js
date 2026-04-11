__d(
  "PixPaymentRequestFeature",
  [
    "fbt",
    "$InternalEnum",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("$InternalEnum")({
      NO_PAYMENT_REQUEST_EXPERIENCE: 0,
      PAYMENT_REQUEST_HYBRID_OPTIONAL_AMOUNT: 2,
      PAYMENT_REQUEST_STANDARD_WITH_EDUCATION: 3,
      PAYMENT_REQUEST_STANDARD_WITH_MANDATORY_AMOUNT: 1,
      PAYMENT_REQUEST_STANDARD_WITH_OPTIONAL_AMOUNT: 4,
    });
    function u() {
      var t,
        n = o("WAWebABProps").getABPropConfigValue(
          "br_smb_pix_payment_request_variant",
        );
      return (t = e.cast(n)) != null ? t : e.NO_PAYMENT_REQUEST_EXPERIENCE;
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "br_smb_pix_payment_request_variant",
        ) !== 0
      );
    }
    function d() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "pix_onboarding_new_content_enabled",
        )
      );
    }
    function m(e) {
      return !o("WAWebChatGetters").getIsGroup(e) && c();
    }
    function p() {
      return s._(
        /*BTDS*/ "Adding an amount helps customers pay the correct price",
      );
    }
    ((l.PixPaymentRequestVariant = e),
      (l.getPixPaymentRequestVariant = u),
      (l.isPixPaymentRequestEnabled = c),
      (l.isPixOnboardingNewContentEnabled = d),
      (l.shouldOpenPaymentRequestFlow = m),
      (l.getPaymentRequestEducationText = p));
  },
  226,
);
