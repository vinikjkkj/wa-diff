__d(
  "PromoAdsFieldStrings",
  [
    "fbt",
    "AdsLearnMore.react",
    "AdsLearnMoreLinkOpenNewTab.react",
    "DateTime",
    "GeoBaseText.react",
    "GeoLink.react",
    "PromoAdsAdCopyCodeGuidanceUXGatingUtils",
    "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsDetectedOffersCmAmChangesGatingUtils",
    "PromoAdsEmailCaptureFieldStrings",
    "PromoAdsManualCodeDefaultSelectionGatingUtils",
    "SharedCommerceEmailOptInFbt",
    "Timezone",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.children,
        n = e.isFirst;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x1lliihq x1gslohp" },
            1: { className: "x1lliihq x1xmf6yo" },
          }[(n === !0) << 0],
          { children: t },
        ),
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = "1467642254076258",
      m = "832707885973695",
      p = "1522777354835511",
      _ = "4.6";
    function f(e, t, n) {
      return e
        ? s._(
            /*BTDS*/ "We sourced a promotion from your ad inventory, website or offers in Commerce Manager for {=m2}.",
            [
              s._implicitParam(
                "=m2",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{amount}\u0025 off", [
                    s._param("amount", t),
                  ]),
                }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "We sourced a promotion from your ad inventory, website or offers in Commerce Manager for {=m1}.",
            [
              s._implicitParam(
                "=m1",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{amount} off", [
                    s._param("amount", n),
                  ]),
                }),
              ),
            ],
          );
    }
    function g(e, t, n) {
      return e
        ? s._(/*BTDS*/ "{=m0}", [
            s._implicitParam(
              "=m0",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "{amount}\u0025 off", [
                  s._param("amount", t),
                ]),
              }),
            ),
          ])
        : s._(/*BTDS*/ "{=m1}.", [
            s._implicitParam(
              "=m1",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "{amount} off", [s._param("amount", n)]),
              }),
            ),
          ]);
    }
    function h() {
      return s._(/*BTDS*/ "Sourced from your website");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Manually added");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t, n, r) {
      return e
        ? s._(/*BTDS*/ "{=m0}", [
            s._implicitParam(
              "=m0",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "{amount}\u0025 off, {promoCode}", [
                  s._param("amount", t),
                  s._param("promoCode", r),
                ]),
              }),
            ),
          ])
        : s._(/*BTDS*/ "{=m1}", [
            s._implicitParam(
              "=m1",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "{amount} off, {promoCode}", [
                  s._param("amount", n),
                  s._param("promoCode", r),
                ]),
              }),
            ),
          ]);
    }
    function b(e, t) {
      return s._(/*BTDS*/ "{=m0}", [
        s._implicitParam(
          "=m0",
          u.jsx(r("GeoLink.react"), {
            href: e || "",
            onClick: t,
            target: "_blank",
            children: s._(
              /*BTDS*/ "Manage your email sign-up offer in Commerce Manager",
            ),
          }),
        ),
      ]);
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t) {
      return s._(/*BTDS*/ "Sourced from your {=m2}", [
        s._implicitParam(
          "=m2",
          u.jsx(r("GeoLink.react"), {
            href: e || "",
            onClick: t,
            target: "_blank",
            children: s._(/*BTDS*/ "Commerce Manager"),
          }),
        ),
      ]);
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
      return s._(/*BTDS*/ "You can access collected emails in {=m2}", [
        s._implicitParam(
          "=m2",
          u.jsx(r("GeoLink.react"), {
            href: e || "",
            onClick: t,
            target: "_blank",
            children: s._(/*BTDS*/ "Shopify"),
          }),
        ),
      ]);
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      return s._(/*BTDS*/ "You can change this URL any time in {=m2}.", [
        s._implicitParam(
          "=m2",
          u.jsx(r("GeoLink.react"), {
            href: e || "",
            target: "_blank",
            children: s._(/*BTDS*/ "Commerce Manager"),
          }),
        ),
      ]);
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e, t) {
      return s._(
        /*BTDS*/ "Email offers aren't available until you allow them for {website destination only bold} in {=m6}.",
        [
          s._param(
            "website destination only bold",
            u.jsx(r("GeoBaseText.react"), {
              color: "value",
              size: "value",
              weight: "bold",
              children: o(
                "SharedCommerceEmailOptInFbt",
              ).EMAIL_OPTIN_CARD_DISCOUNT_ROW_NAME_BAU(),
            }),
          ),
          s._implicitParam(
            "=m6",
            u.jsx(r("GeoLink.react"), {
              href: e || "",
              onClick: t,
              target: "_blank",
              children: s._(/*BTDS*/ "Commerce Manager"),
            }),
          ),
        ],
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t) {
      return s._(/*BTDS*/ "You can access collected emails in {=m2}.", [
        s._implicitParam(
          "=m2",
          u.jsx(r("GeoLink.react"), {
            href: e || "",
            onClick: t,
            target: "_blank",
            children: s._(/*BTDS*/ "Leads Center"),
          }),
        ),
      ]);
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "Promo codes");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s._(/*BTDS*/ "Promotions");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(
        /*BTDS*/ "Optimize your promotions automatically, or choose a specific one.",
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return s._(/*BTDS*/ "Optimize promotions automatically");
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(/*BTDS*/ "Not seeing the right promotion?");
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(/*BTDS*/ "No promotions available");
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return s._(
        /*BTDS*/ "Make sure offers on your ads match offers on your website",
      );
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(
        /*BTDS*/ "When detected offers is turned off, promotions from your website and your other ads won't automatically display on your ads.",
      );
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return s._(/*BTDS*/ "Turn on detected offers");
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w() {
      return s._(/*BTDS*/ "Detected offers is turned on");
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A() {
      return s._(/*BTDS*/ "Manage your settings in Commerce Manager");
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "Manage settings");
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O() {
      return s._(/*BTDS*/ "Couldn't turn on detected offers.");
    }
    O.displayName = O.name + " [from " + i.id + "]";
    var B = s._(/*BTDS*/ "Add promotion");
    function W(e, t, n) {
      return s._(
        /*BTDS*/ "Show available {offers link} before and after people tap your ad. Manage or turn off in {Commerce Manager link}.",
        [
          s._param(
            "offers link",
            u.jsx(r("GeoLink.react"), {
              onClick: e,
              children: s._(/*BTDS*/ "offers"),
            }),
          ),
          s._param(
            "Commerce Manager link",
            t != null
              ? u.jsx(r("GeoLink.react"), {
                  href: t,
                  onClick: n,
                  target: "_blank",
                  children: s._(/*BTDS*/ "Commerce Manager"),
                })
              : s._(/*BTDS*/ "Commerce Manager"),
          ),
        ],
      );
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(/*BTDS*/ "Code not added");
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return s._(/*BTDS*/ "Not selected");
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V() {
      return s._(/*BTDS*/ "Offer not added");
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return o(
        "PromoAdsAdsManagerGatingAndExperimentUtils",
      ).isPromoAdsAutoSourcedOfferTransparencyEnabled()
        ? s._(
            /*BTDS*/ "Choose between showing the best code or a specific code.",
          )
        : s._(
            /*BTDS*/ "Choose between automatically sourcing or manually adding promo codes.",
          );
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G() {
      return s._(/*BTDS*/ "Email sign-up offers");
    }
    G.displayName = G.name + " [from " + i.id + "]";
    function z(e, t) {
      return (e && r("gkx")("12408")) ||
        o(
          "PromoAdsAdsManagerEmailCaptureGenericCodeGatingUtils",
        ).isEmailCaptureGenericCodeOfferModalEnabled()
        ? s._(
            /*BTDS*/ "Add email sign-up offers to ads to encourage customers to share their email addresses. Your website's email pop-up will be disabled so that a customer is only asked for their email once.",
          )
        : s._(
            /*BTDS*/ "Offer a discount on Facebook ads linking to your website to encourage email sign-ups. Your website\u2019s email pop-up will be disabled so that a customer is only asked for their email once.",
          );
    }
    z.displayName = z.name + " [from " + i.id + "]";
    function j(e, t) {
      return (
        e === void 0 && (e = !1),
        e &&
        o(
          "PromoAdsAdsManagerGatingAndExperimentUtils",
        ).isShopifySyncedOfferBAUExpansionAdExEnabled()
          ? s._(
              /*BTDS*/ "Meta will highlight promo codes on your ad to encourage conversions except for {Shopify-synced codes link}, which may be shown regardless of this setting. {About highlighting your promotions}",
              [
                s._param(
                  "Shopify-synced codes link",
                  u.jsx(r("AdsLearnMoreLinkOpenNewTab.react"), {
                    cmsID: p,
                    onClick: t,
                    children: s._(/*BTDS*/ "Shopify-synced codes"),
                  }),
                ),
                s._param(
                  "About highlighting your promotions",
                  u.jsx(r("AdsLearnMore.react"), { cmsID: m, label: Q() }),
                ),
              ],
            )
          : !e &&
              o(
                "PromoAdsAdsManagerGatingAndExperimentUtils",
              ).isReconBAUExpansionAdExEnabled()
            ? s._(
                /*BTDS*/ "Meta will highlight promo codes on your ad to encourage conversions. Promotions from your account may also appear across your other ads to people who have already engaged with this ad. {About highlighting your promotions}",
                [
                  s._param(
                    "About highlighting your promotions",
                    u.jsx(r("AdsLearnMore.react"), { cmsID: m, label: Q() }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Meta will highlight promo codes on your ad to encourage conversions. {About highlighting your promotions}",
                [
                  s._param(
                    "About highlighting your promotions",
                    u.jsx(r("AdsLearnMore.react"), { cmsID: m, label: Q() }),
                  ),
                ],
              )
      );
    }
    j.displayName = j.name + " [from " + i.id + "]";
    function K(e, t) {
      return (
        e === void 0 && (e = !1),
        e &&
        o(
          "PromoAdsAdsManagerGatingAndExperimentUtils",
        ).isShopifySyncedOfferBAUExpansionAdExEnabled()
          ? s._(
              /*BTDS*/ "Highlight your promotions before and after people tap on your ad to increase conversions and capture email leads except for {Shopify-synced codes link}, which may be shown regardless of this setting.",
              [
                s._param(
                  "Shopify-synced codes link",
                  u.jsx(r("AdsLearnMoreLinkOpenNewTab.react"), {
                    cmsID: p,
                    onClick: t,
                    children: s._(/*BTDS*/ "Shopify-synced codes"),
                  }),
                ),
              ],
            )
          : !e &&
              o(
                "PromoAdsAdsManagerGatingAndExperimentUtils",
              ).isReconBAUExpansionAdExEnabled()
            ? s._(
                /*BTDS*/ "Highlight your promotions before and after people tap on your ad to increase conversions and capture email leads. Promotions from your account may also appear across your other ads to people who have already engaged with this ad.",
              )
            : s._(
                /*BTDS*/ "Highlight your promotions before and after people tap on your ad to increase conversions and capture email leads.",
              )
      );
    }
    K.displayName = K.name + " [from " + i.id + "]";
    function Q() {
      return s._(/*BTDS*/ "About highlighting your promotions");
    }
    Q.displayName = Q.name + " [from " + i.id + "]";
    function X() {
      return s._(/*BTDS*/ "About promo codes");
    }
    X.displayName = X.name + " [from " + i.id + "]";
    function Y() {
      return s._(/*BTDS*/ "About email sign-up offers");
    }
    Y.displayName = Y.name + " [from " + i.id + "]";
    function J() {
      return s._(/*BTDS*/ "Amount");
    }
    J.displayName = J.name + " [from " + i.id + "]";
    var Z = s._(/*BTDS*/ "Link to privacy policy"),
      ee = s._(/*BTDS*/ "http:\/\/www.example.com"),
      te = s._(
        /*BTDS*/ "The privacy policy link you entered is invalid. Please check your privacy policy link and try again.",
      ),
      ne = s._(
        /*BTDS*/ "Consider providing a privacy policy when collecting emails. Even though it's not required, it can reassure customers that their information is handled responsibly.",
      ),
      re = s._(
        /*BTDS*/ "Customers will only see the discount on your shops after signing up for marketing emails. It is your responsibility to fund this discount and accept the possibility of overlap with existing customers from your online store.",
      );
    function oe(e) {
      return e
        ? o("PromoAdsEmailCaptureFieldStrings")
            .EMAIL_CAPTURE_V3_DESCRIPTION_TEXT
        : re;
    }
    function ae(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} codes selected","_1":"1 code selected"}',
        [s._plural(e, "number")],
      );
    }
    function ie(e) {
      return o(
        "PromoAdsAdsManagerGatingAndExperimentUtils",
      ).isPromoAdsAutoSourcedOfferTransparencyEnabled()
        ? o(
            "PromoAdsDetectedOffersCmAmChangesGatingUtils",
          ).isVanillaPromoAdsDetectedOffersCmAmChangesEnabled()
          ? s._(
              /*BTDS*/ "Meta will highlight the promo code most likely to maximize conversions on your ads.",
            )
          : s._(
              /*BTDS*/ "Meta will regularly detect your ad text, creative, website and manually created promo codes to find the one most likely to maximise conversions on your ads.",
            )
        : o(
              "PromoAdsAdCopyCodeGuidanceUXGatingUtils",
            ).isPromoAdsAdCopyCodeGuidanceUXEnabled(!0)
          ? s._(
              /*BTDS*/ "Meta will choose the best option from your eligible codes.",
            )
          : e &&
              o(
                "PromoAdsAdsManagerGatingAndExperimentUtils",
              ).isShopifySyncEnabled(!0)
            ? o(
                "PromoAdsDetectedOffersCmAmChangesGatingUtils",
              ).isVanillaPromoAdsDetectedOffersCmAmChangesEnabled()
              ? s._(
                  /*BTDS*/ "Meta will highlight the promo code most likely to maximize conversions on your ads.",
                )
              : s._(
                  /*BTDS*/ "Meta will automatically source promo codes from your ad inventory, Shopify store and\/or offers in Commerce Manager and choose the highest-quality code to highlight. We will auto update active, eligible promo codes.",
                )
            : o(
                  "PromoAdsDetectedOffersCmAmChangesGatingUtils",
                ).isVanillaPromoAdsDetectedOffersCmAmChangesEnabled()
              ? s._(
                  /*BTDS*/ "Meta will highlight the promo code most likely to maximize conversions on your ads.",
                )
              : s._(
                  /*BTDS*/ "Meta will automatically source promo codes from your ad inventory, website and\/or offers in Commerce Manager and choose the highest-quality code to highlight. We will auto update active, eligible promo codes.",
                );
    }
    ie.displayName = ie.name + " [from " + i.id + "]";
    function le() {
      return s._(
        /*BTDS*/ "We didn't find any codes from your ad inventory. {Learn more about automatically sourced codes}",
        [
          s._param(
            "Learn more about automatically sourced codes",
            u.jsx(r("AdsLearnMore.react"), {
              cmsID: d,
              label: s._(
                /*BTDS*/ "Learn more about automatically sourced codes",
              ),
            }),
          ),
        ],
      );
    }
    le.displayName = le.name + " [from " + i.id + "]";
    function se(e) {
      var t = r("DateTime").now(o("Timezone").getEnvironmentTimezoneID());
      return s._(
        /*BTDS*/ "You have {amount} ad(s) affected by this change as of {date} at {time}.",
        [
          s._param("amount", e),
          s._param("date", t.format("M d, Y")),
          s._param("time", t.format("g:ia")),
        ],
      );
    }
    se.displayName = se.name + " [from " + i.id + "]";
    var ue = s._(/*BTDS*/ "Active ads affected by change"),
      ce = s._(
        /*BTDS*/ "The code must include at least 2 letters, and only use letters, numbers, dashes and underscores.",
      );
    function de() {
      return o(
        "PromoAdsAdsManagerGatingAndExperimentUtils",
      ).isPromoAdsAutoSourcedOfferTransparencyEnabled()
        ? me
        : s._(/*BTDS*/ "Automatically source codes");
    }
    de.displayName = de.name + " [from " + i.id + "]";
    var me = s._(/*BTDS*/ "Automatically show the best code"),
      pe = s._(/*BTDS*/ "No code available");
    function _e() {
      return s._(
        /*BTDS*/ "Meta will look for active promo codes from your ads and website. Once a code is found, it will appear here.",
      );
    }
    _e.displayName = _e.name + " [from " + i.id + "]";
    function fe() {
      return s._(
        /*BTDS*/ "If this code expires or becomes inactive, we'll replace it with another active code.",
      );
    }
    fe.displayName = fe.name + " [from " + i.id + "]";
    var ge = s._(/*BTDS*/ "Highlight your promotions"),
      he = s._(/*BTDS*/ "Add a code");
    function ye() {
      return o(
        "PromoAdsAdsManagerGatingAndExperimentUtils",
      ).isPromoAdsAutoSourcedOfferTransparencyEnabled()
        ? s._(/*BTDS*/ "Show a specific code")
        : s._(/*BTDS*/ "Manually select a code");
    }
    ye.displayName = ye.name + " [from " + i.id + "]";
    function Ce() {
      return o(
        "PromoAdsManualCodeDefaultSelectionGatingUtils",
      ).isPromoAdsManualCodeDefaultSelectionEnabled(!0)
        ? s._(/*BTDS*/ "Select an existing promo code or add a new one.")
        : s._(
            /*BTDS*/ "Select a promo code from existing codes or add a new one.",
          );
    }
    function be() {
      return o(
        "PromoAdsAdsManagerGatingAndExperimentUtils",
      ).isPromoAdsIgStoriesCTAPreClickExperienceEnabled()
        ? s._(
            /*BTDS*/ "People tap on your ad, then see a promo code or email sign-up offer in their in-app browser. The code can be copied or automatically applied at checkout. {newline1}{newline2} If you opt in to both promo codes and email sign-up offers, we'll show the promotion that is more likely to drive conversions. {About preclick}{Desc of individual preclick surfaces}{About highlight your promotions}{About email sign-up offers}",
            [
              s._param("newline1", u.jsx("br", {})),
              s._param("newline2", u.jsx("br", {})),
              s._param(
                "About preclick",
                u.jsx("p", {
                  children: s._(
                    /*BTDS*/ "Promotions may also appear before people tap on your ad for the following placements:",
                  ),
                }),
              ),
              s._param("Desc of individual preclick surfaces", ve()),
              s._param(
                "About highlight your promotions",
                u.jsx(c, {
                  isFirst: !0,
                  children: u.jsx(r("AdsLearnMore.react"), {
                    cmsID: d,
                    label: X(),
                  }),
                }),
              ),
              s._param(
                "About email sign-up offers",
                u.jsx(c, {
                  children: u.jsx(r("AdsLearnMore.react"), {
                    cmsID: m,
                    label: Y(),
                  }),
                }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "People tap on your ad which shows a promo code or email sign-up offer. The code can be copied or automatically applied at checkout. {newline1}{newline2} If you opt in to both promo codes and email sign-up offers, we'll show the promotion that is more likely to drive conversions. {About highlight your promotions}{About email sign-up offers}",
            [
              s._param("newline1", u.jsx("br", {})),
              s._param("newline2", u.jsx("br", {})),
              s._param(
                "About highlight your promotions",
                u.jsx(c, {
                  isFirst: !0,
                  children: u.jsx(r("AdsLearnMore.react"), {
                    cmsID: d,
                    label: X(),
                  }),
                }),
              ),
              s._param(
                "About email sign-up offers",
                u.jsx(c, {
                  children: u.jsx(r("AdsLearnMore.react"), {
                    cmsID: m,
                    label: Y(),
                  }),
                }),
              ),
            ],
          );
    }
    be.displayName = be.name + " [from " + i.id + "]";
    function ve() {
      return s._(/*BTDS*/ "{instagram_stories_text}", [
        s._param(
          "instagram_stories_text",
          o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isPromoAdsIgStoriesCTAPreClickExperienceEnabled()
            ? s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx("ul", {
                    className: "xtaz4m5 x106a9eq",
                    children: s._(/*BTDS*/ "{=m1}", [
                      s._implicitParam(
                        "=m1",
                        u.jsx("li", {
                          children: s._(
                            /*BTDS*/ 'On {=m1}, we may change your CTA to "See offer."',
                            [
                              s._implicitParam(
                                "=m1",
                                u.jsx("b", {
                                  children: s._(/*BTDS*/ "Instagram Stories"),
                                }),
                              ),
                            ],
                          ),
                        }),
                      ),
                    ]),
                  }),
                ),
              ])
            : null,
        ),
      ]);
    }
    ve.displayName = ve.name + " [from " + i.id + "]";
    var Se = s._(/*BTDS*/ "Exclude code"),
      Re = s._(/*BTDS*/ "Select codes"),
      Le = s._(/*BTDS*/ "Excluded codes"),
      Ee = s._(/*BTDS*/ "No results"),
      ke = s._(/*BTDS*/ "Code from ad text can\u2019t be excluded."),
      Ie = s._(
        /*BTDS*/ "Both an offer amount and privacy policy URL are required to collect emails.",
      ),
      Te = s._(/*BTDS*/ "An offer amount is required to collect emails."),
      De = s._(/*BTDS*/ "A privacy policy URL is required to collect emails."),
      xe = s._(/*BTDS*/ "A promo code is required to collect emails."),
      $e = s._(/*BTDS*/ "Change email sign-up offer"),
      Pe = s._(/*BTDS*/ "Change email sign-up offer"),
      Ne = s._(
        /*BTDS*/ "This change will apply to all active email sign-up offer ads in this ad account.",
      ),
      Me = s._(
        /*BTDS*/ "Customers will only see the discount on your shops after signing up for marketing emails. You\u2019ll need to fund this discount and accept the possibility of overlap with existing customers from your online store.",
      ),
      we = s._(
        /*BTDS*/ "Customers will only see the discount after signing up for marketing emails. You\u2019ll need to fund this discount and accept the possibility of overlap with existing customers from your online store.",
      );
    function Ae(e) {
      return e ? we : Me;
    }
    var Fe = s._(/*BTDS*/ "Offer amount"),
      Oe = s._(/*BTDS*/ "Save"),
      Be = s._(/*BTDS*/ "Add"),
      We = s._(/*BTDS*/ "Add an offer"),
      qe = s._(/*BTDS*/ "Edit email sign-up offers"),
      Ue = s._(/*BTDS*/ "Add an email sign-up offer"),
      Ve = s._(
        /*BTDS*/ "Fill out every section to improve your customer\u2019s experience. You can manage and update your offers in Commerce Manager.",
      );
    function He(e) {
      return e
        ? o("PromoAdsEmailCaptureFieldStrings")
            .PROMO_ADS_V3_EMAIL_CAPTURE_MODAL_DESCRIPTION
        : Ve;
    }
    var Ge = s._(/*BTDS*/ "You can edit this offer later in Commerce Manager."),
      ze = s._(
        /*BTDS*/ "Fill out every section to improve your customer\u2019s experience.",
      );
    function je(e) {
      return e
        ? o("PromoAdsEmailCaptureFieldStrings")
            .PROMO_ADS_V3_EMAIL_CAPTURE_MODAL_DESCRIPTION
        : ze;
    }
    var Ke = s._(
      /*BTDS*/ "Ensure your offer and code are valid on your website in order to collect emails.",
    );
    function Qe(e) {
      return e
        ? o("PromoAdsEmailCaptureFieldStrings")
            .PROMO_ADS_V3_EMAIL_CAPTURE_MODAL_DESCRIPTION
        : Ke;
    }
    var Xe = s._(/*BTDS*/ "Edit"),
      Ye = s._(/*BTDS*/ "Offer amount");
    function Je() {
      var e = o(
        "PromoAdsAdsManagerGatingAndExperimentUtils",
      ).shouldHideHelpArticleLinksForV3();
      return s._(
        /*BTDS*/ "People tap on your ad, then see an offer while browsing Facebook, Instagram or your website. Promo codes can be copied or automatically applied at checkout. {newline1}{newline2} When you optimize your promotions automatically, we'll pick the promotion most likely to get people to convert, without offering discounts to more people than needed. If you've turned on both promo codes and email sign-up offers, we'll show whichever is more likely to improve conversions. {newline3}{newline4} Offers may also appear before people tap on your ad for certain placements. {newline5}{About promotions}{About email sign-up offers}",
        [
          s._param("newline1", u.jsx("br", {})),
          s._param("newline2", u.jsx("br", {})),
          s._param("newline3", u.jsx("br", {})),
          s._param("newline4", u.jsx("br", {})),
          s._param("newline5", e ? null : u.jsx("br", {})),
          s._param(
            "About promotions",
            e
              ? null
              : u.jsx(c, {
                  isFirst: !0,
                  children: u.jsx(r("AdsLearnMore.react"), {
                    cmsID: d,
                    label: s._(/*BTDS*/ "About promotions"),
                  }),
                }),
          ),
          s._param(
            "About email sign-up offers",
            e
              ? null
              : u.jsx(c, {
                  children: u.jsx(r("AdsLearnMore.react"), {
                    cmsID: m,
                    label: Y(),
                  }),
                }),
          ),
        ],
      );
    }
    Je.displayName = Je.name + " [from " + i.id + "]";
    var Ze = s._(/*BTDS*/ "How promotions work"),
      et = s._(/*BTDS*/ "Opt in to promo codes"),
      tt = s._(
        /*BTDS*/ "You could get {percent}\u0025 more conversions by using promo codes",
        [s._param("percent", _)],
      ),
      nt = s._(
        /*BTDS*/ "Opt in to using promo codes to drive more people to try your products and optimize your ad spend.",
      ),
      rt = s._(
        /*BTDS*/ "This result is based on an analysis run between Dec 2024 and Jan 2025. The analysis compared performance between ads with promo codes and those without for small and medium advertisers. Results may vary.",
      ),
      ot = s._(/*BTDS*/ "Highlight your promotion on Instagram Stories"),
      at = s._(/*BTDS*/ "Highlight your promotions on Instagram Stories");
    function it() {
      return s._(/*BTDS*/ "Instagram Stories");
    }
    it.displayName = it.name + " [from " + i.id + "]";
    function lt() {
      return s._(/*BTDS*/ "In-app browser after tap");
    }
    ((lt.displayName = lt.name + " [from " + i.id + "]"),
      (l.helpCenterIdForPromoAds = d),
      (l.helpCenterIdForShopifySyncedOffers = p),
      (l.getEmailCaptureOfferDetailFbt = f),
      (l.getEmailCaptureOfferCardFbt = g),
      (l.getEmailCaptureOfferWebsiteSourceFbt = h),
      (l.getEmailCaptureOfferManualSourceFbt = y),
      (l.getEmailCaptureGenericOfferCardFbt = C),
      (l.getEmailCaptureOfferManageInCommerceManagerFbt = b),
      (l.getEmailCaptureOfferCommerceManagerSourceFbt = v),
      (l.getEmailCaptureOfferShopifyFbt = S),
      (l.getEmailCapturePrivacyPolicyTooltipFbt = R),
      (l.getDisabledEmailCaptureCheckboxText = L),
      (l.getEmailCaptureLeadsCenterDescriptionFbt = E),
      (l.getPromoCodesOptInLabel = k),
      (l.getPromoAdsAlwaysOnSectionLabel = I),
      (l.getPromoAdsAlwaysOnDropdownDescription = T),
      (l.getPromoAdsAlwaysOnDisplayBestLabel = D),
      (l.getPromoAdsAlwaysOnNotSeeingPromotionLabel = x),
      (l.getPromoAdsAlwaysOnNoPromotionsAvailableLabel = $),
      (l.getPromoAdsNoAvailablePromotionsGuidanceTitle = P),
      (l.getPromoAdsNoAvailablePromotionsGuidanceBody = N),
      (l.getPromoAdsNoAvailablePromotionsGuidanceCTA = M),
      (l.getPromoAdsDetectedOffersEnabledToastTitle = w),
      (l.getPromoAdsDetectedOffersEnabledToastDescription = A),
      (l.getPromoAdsDetectedOffersEnabledToastCTA = F),
      (l.getPromoAdsDetectedOffersEnableErrorToastTitle = O),
      (l.PROMO_ADS_ALWAYS_ON_ADD_PROMOTION_BUTTON_LABEL = B),
      (l.getPromoAdsAlwaysOnDescriptionFbt = W),
      (l.getCodeNotAddedLabel = q),
      (l.getNotSelectedLabel = U),
      (l.getOfferNotAddedLabel = V),
      (l.getPromoCodesHelpText = H),
      (l.getEmailCaptureOptInLabel = G),
      (l.getEmailCaptureHelpText = z),
      (l.getPromoAdsEmailCaptureDescriptionFbt = j),
      (l.getPromoAdsWithPreClickDescriptionFbt = K),
      (l.getPromoAdsEmailCaptureOfferAmountLabelFbt = J),
      (l.PRIVACY_POLICY_LINK_INPUT_LABEL = Z),
      (l.PRIVACY_POLICY_LINK_PLACEHOLDER = ee),
      (l.PRIVACY_POLICY_LINK_ERROR_MESSAGE = te),
      (l.PRIVACY_POLICY_HELP_TEXT = ne),
      (l.getEmailCaptureDescriptionText = oe),
      (l.getNumberOfCodeSelectedLabel = ae),
      (l.getPromoAdsAutoSourcedCouponDescriptionFbt = ie),
      (l.getPromoAdsAutoSourceCouponDisabledMessageFbt = le),
      (l.getEmailCaptureConfirmationFbt = se),
      (l.EMAIL_CAPTURE_CONFIRMATION_PAGE_HEADER = ue),
      (l.PROMO_ADS_MANUAL_COUPON_TOKENIZER_TOOLTIP = ce),
      (l.getPromoAdsAutoSourceCodeLabel = de),
      (l.PROMO_ADS_NO_CODE_AVAILABLE_LABEL = pe),
      (l.getPromoAdsNoCodeAvailableTooltipFbt = _e),
      (l.getPromoAdsCodeAvailableTooltipFbt = fe),
      (l.PROMO_ADS_MODULE_FIELD_HEADER = ge),
      (l.PROMO_ADS_ADD_A_CODE_LABEL = he),
      (l.getPromoAdsManualCodeSelectionLabel = ye),
      (l.getPromoAdsManualCodeDescription = Ce),
      (l.getPromoCodeHelpTextBodyFbt = be),
      (l.PROMO_ADS_EDIT_EXCLUDED_CODE = Se),
      (l.PROMO_ADS_EXCLUDED_CODE_PLACEHOLDER = Re),
      (l.PROMO_ADS_EXCLUDED_CODES = Le),
      (l.PROMO_ADS_NO_RESULTS = Ee),
      (l.PROMO_ADS_CANNOT_EDIT_AD_COPY_CODE_TOOLTIP = ke),
      (l.PROMO_ADS_EMAIL_CAPTURE_MODAL_CAN_NOT_SAVE_NO_OFFER_AMOUNT_OR_VALID_PRIVACY_TOOLTIP =
        Ie),
      (l.PROMO_ADS_EMAIL_CAPTURE_MODAL_CAN_NOT_SAVE_NO_OFFER_AMOUNT_TOOLTIP =
        Te),
      (l.PROMO_ADS_EMAIL_CAPTURE_MODAL_CAN_NOT_SAVE_NO_VALID_PRIVACY_URL_TOOLTIP =
        De),
      (l.PROMO_ADS_EMAIL_CAPTURE_MODAL_CAN_NOT_SAVE_NO_PROMO_CODE_TOOLTIP = xe),
      (l.PROMO_ADS_EMAIL_CAPTURE_UPDATE_OFFER_LABEL = $e),
      (l.PROMO_ADS_EMAIL_CAPTURE_UPDATE_OFFER_MODAL_HEADER = Pe),
      (l.PROMO_ADS_EMAIL_CAPTURE_UPDATE_OFFER_MODAL_DESCRIPTION = Ne),
      (l.getEmailCaptureGenericCodeDescriptionText = Ae),
      (l.PROMO_ADS_EMAIL_CAPTURE_GENERIC_CODE_OFFER_AMOUNT_LABEL = Fe),
      (l.PROMO_ADS_EMAIL_CAPTURE_MODAL_PRIMARY_BUTTON_LABEL = Oe),
      (l.PROMO_ADS_EMAIL_CAPTURE_SET_UP_MODAL_PRIMARY_BUTTON_LABEL = Be),
      (l.PROMO_ADS_EMAIL_CAPTURE_SET_UP_OFFER_BUTTON_LABEL = We),
      (l.PROMO_ADS_EMAIL_CAPTURE_MODAL_EDIT_HEADER = qe),
      (l.PROMO_ADS_EMAIL_CAPTURE_MODAL_ADD_AN_OFFER_HEADER = Ue),
      (l.getPromoAdsEmailCaptureModalAddOfferDescription = He),
      (l.PROMO_ADS_EMAIL_CAPTURE_MODAL_EDIT_DESCRIPTION = Ge),
      (l.getPromoAdsEmailCaptureModalNoCmsDescription = je),
      (l.getPromoAdsEmailCaptureModalGenericCodeDescription = Qe),
      (l.PROMO_ADS_EMAIL_CAPTURE_EDIT_OFFER_TEXT = Xe),
      (l.PROMO_ADS_EMAIL_CAPTURE_MODAL_OFFER_AMOUNT_INPUT = Ye),
      (l.getPromoAdsAlwaysOnHelpTextBodyFbt = Je),
      (l.PROMO_ADS_HIGHLIGHT_HELP_TEXT_TITLE = Ze),
      (l.PROMO_ADS_UPSELL_GUIDANCE_LABEL = et),
      (l.PROMO_ADS_UPSELL_GUIDANCE_HEADER = tt),
      (l.PROMO_ADS_UPSELL_GUIDANCE_BODY = nt),
      (l.PROMO_ADS_UPSELL_GUIDANCE_TOOLTIP = rt),
      (l.PROMO_ADS_PREVIEW_INSTAGRAM_STORIES_TOOLTIP_LABEL = ot),
      (l.PROMO_ADS_PREVIEW_INSTAGRAM_STORIES_TOOLTIP_LABEL_PLURAL = at),
      (l.getPromoAdsPreviewIGStoriesLabelText = it),
      (l.getPromoAdsPreviewPostClickLabelText = lt));
  },
  226,
);
