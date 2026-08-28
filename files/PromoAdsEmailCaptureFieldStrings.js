__d(
  "PromoAdsEmailCaptureFieldStrings",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "4.6",
      d = s._(/*BTDS*/ "Set up an email sign-up offer"),
      m = s._(/*BTDS*/ "Edit email sign-up offer"),
      p = s._(
        /*BTDS*/ "Fill out every section to improve your customer's experience.",
      ),
      _ = s._(
        /*BTDS*/ "Offer a discount that can be automatically applied at checkout on your website.",
      ),
      f = s._(
        /*BTDS*/ "Customers will only see the discount after signing up for marketing emails. It is your responsibility to fund this discount and accept the possibility of overlap with existing customers from your online store.",
      );
    function g(e) {
      return e ? _ : p;
    }
    var h = s._(/*BTDS*/ "Change email sign-up offer"),
      y = s._(
        /*BTDS*/ "This change will apply to all active email sign-up offer ads in this ad account.",
      ),
      C = s._(/*BTDS*/ "Email sign-up offer has been created"),
      b = s._(
        /*BTDS*/ "This offer has been created in Commerce Manager. You can manage it in Commerce Manager.",
      ),
      v = s._(/*BTDS*/ "Email sign-up offer has been edited"),
      S = s._(/*BTDS*/ "Opt in to email sign-up offers"),
      R = s._(
        /*BTDS*/ "You could get {uplift}x more email leads by using email sign-up offers",
        [s._param("uplift", c)],
      ),
      L = s._(
        /*BTDS*/ "Collect more emails from potential customers when you offer a discount after an email sign-up.",
      ),
      E = s._(
        /*BTDS*/ "This result is based on an experiment run between July 24, 2025 and Aug 7, 2025. The experiment compared the performance between ads that used email sign-up offers on Facebook's in-app browser and those that did not for 1200+ advertisers. This is provided to give you an idea of possible performance, but performance isn't guaranteed.",
      ),
      k = s._(/*BTDS*/ "Email sign-up offer found on your website");
    function I(e, t, n, r) {
      return e
        ? s._(
            /*BTDS*/ "An offer for {=m2} (Code: {=m6}) is available to use in your ads.",
            [
              s._implicitParam(
                "=m2",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{amount}\u0025 off", [
                    s._param("amount", t),
                  ]),
                }),
              ),
              s._implicitParam(
                "=m6",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{promoCode}", [
                    s._param("promoCode", r),
                  ]),
                }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "An offer for {=m2} (Code: {=m6}) is available to use in your ads.",
            [
              s._implicitParam(
                "=m2",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{amount} off", [
                    s._param("amount", n),
                  ]),
                }),
              ),
              s._implicitParam(
                "=m6",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{promoCode}", [
                    s._param("promoCode", r),
                  ]),
                }),
              ),
            ],
          );
    }
    function T(e, t, n) {
      return e
        ? s._(/*BTDS*/ "An offer for {=m2} is available to use in your ads.", [
            s._implicitParam(
              "=m2",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "{amount}\u0025 off", [
                  s._param("amount", t),
                ]),
              }),
            ),
          ])
        : s._(/*BTDS*/ "An offer for {=m2} is available to use in your ads.", [
            s._implicitParam(
              "=m2",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "{amount} off", [s._param("amount", n)]),
              }),
            ),
          ]);
    }
    var D = s._(/*BTDS*/ "Apply offer"),
      x = s._(/*BTDS*/ "Edit offer"),
      $ = s._(/*BTDS*/ "Use email sign-up offer from your shop");
    function P(e) {
      return e
        ? s._(
            /*BTDS*/ "Your shop has an email sign-up offer set up in Shopify. Apply it to your ads to collect email leads.",
          )
        : s._(
            /*BTDS*/ "Your shop has an email sign-up offer set up in Commerce Manager. Apply it to your ads to collect email leads.",
          );
    }
    P.displayName = P.name + " [from " + i.id + "]";
    var N = s._(/*BTDS*/ "Promo code failed at checkout on your website"),
      M = s._(
        /*BTDS*/ "We detected that your promo code failed to apply at checkout for some customers. Make sure this code works on your website, or edit the code.",
      ),
      w = s._(/*BTDS*/ "I've fixed the issue"),
      A = s._(/*BTDS*/ "Edit code");
    ((l.PROMO_ADS_EMAIL_CAPTURE_UNIQUE_CODE_MODAL_ADD_OFFER_HEADER = d),
      (l.PROMO_ADS_EMAIL_CAPTURE_UNIQUE_CODE_MODAL_EDIT_HEADER = m),
      (l.PROMO_ADS_V3_EMAIL_CAPTURE_MODAL_DESCRIPTION = _),
      (l.EMAIL_CAPTURE_V3_DESCRIPTION_TEXT = f),
      (l.getPromoAdsEmailCaptureUniqueCodeModalEditDescription = g),
      (l.PROMO_ADS_EMAIL_CAPTURE_GENERIC_CODE_MODAL_EDIT_HEADER = h),
      (l.PROMO_ADS_EMAIL_CAPTURE_GENERIC_CODE_MODAL_EDIT_DESCRIPTION = y),
      (l.EMAIL_CAPTURE_GENERIC_CODE_CREATE_SUCCESS_TOAST = C),
      (l.EMAIL_CAPTURE_GENERIC_CODE_CREATE_WITH_CM_SUCCESS_TOAST_BODY = b),
      (l.EMAIL_CAPTURE_GENERIC_CODE_EDIT_SUCCESS_TOAST = v),
      (l.EMAIL_CAPTURE_UPSELL_GUIDANCE_LABEL = S),
      (l.EMCAIL_CAPTURE_UPSELL_GUIDANCE_HEADER = R),
      (l.EMAIL_CAPTURE_UPSELL_GUIDANCE_BODY = L),
      (l.EMAIL_CAPTURE_UPSELL_GUIDANCE_TOOLTIP = E),
      (l.PROMO_ADS_EMAIL_CAPTURE_RECOMMENDED_OFFER_TITLE = k),
      (l.getEmailCaptureRecommendedOfferDescriptionFbt = I),
      (l.getEmailCaptureRecommendedOfferDescriptionNoCodeFbt = T),
      (l.PROMO_ADS_EMAIL_CAPTURE_APPLY_OFFER_BUTTON_LABEL = D),
      (l.PROMO_ADS_EMAIL_CAPTURE_EDIT_OFFER_BUTTON_LABEL = x),
      (l.PROMO_ADS_EMAIL_CAPTURE_SHOPS_ONLY_OFFER_TITLE = $),
      (l.getEmailCaptureShopsOnlyOfferDescriptionFbt = P),
      (l.PROMO_ADS_EMAIL_CAPTURE_LOW_QUALITY_OFFER_TITLE = N),
      (l.PROMO_ADS_EMAIL_CAPTURE_LOW_QUALITY_OFFER_DESCRIPTION = M),
      (l.PROMO_ADS_EMAIL_CAPTURE_LOW_QUALITY_FIXED_BUTTON_LABEL = w),
      (l.PROMO_ADS_EMAIL_CAPTURE_LOW_QUALITY_EDIT_CODE_BUTTON_LABEL = A));
  },
  226,
);
