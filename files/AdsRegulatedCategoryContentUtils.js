__d(
  "AdsRegulatedCategoryContentUtils",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsLearnMoreStrings",
    "AdsRegulatedCategory",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(
        /*BTDS*/ "Age range must be 18-65+ when running ads in this Special Ad Category.",
      ),
      d = new Map([
        [
          "AD_CAMPAIGN_CREDIT_MISSING_SAC_PAGE_CATEGORY",
          r("AdsRegulatedCategory").FINANCIAL_PRODUCTS_SERVICES,
        ],
        [
          "AD_CAMPAIGN_CREDIT_MISSING_SAC_RECENT_REJECTIONS",
          r("AdsRegulatedCategory").FINANCIAL_PRODUCTS_SERVICES,
        ],
        [
          "AD_CAMPAIGN_HOUSING_MISSING_SAC_PAGE_CATEGORY",
          r("AdsRegulatedCategory").HOUSING,
        ],
        [
          "AD_CAMPAIGN_HOUSING_MISSING_SAC_RECENT_REJECTIONS",
          r("AdsRegulatedCategory").HOUSING,
        ],
        [
          "AD_CAMPAIGN_EMPLOYMENT_MISSING_SAC_PAGE_CATEGORY",
          r("AdsRegulatedCategory").EMPLOYMENT,
        ],
        [
          "AD_CAMPAIGN_EMPLOYMENT_MISSING_SAC_RECENT_REJECTIONS",
          r("AdsRegulatedCategory").EMPLOYMENT,
        ],
      ]);
    function m(e) {
      return d.get(e);
    }
    function p(e, t) {
      var n = t === "max" ? e + "+" : e;
      return s._(
        /*BTDS*/ "You must select {AgeLabel} when running ads in this Special Ad Category.",
        [s._param("AgeLabel", n)],
      );
    }
    function _(e, t) {
      var n = e + "-" + t + "+";
      return s._(
        /*BTDS*/ "Select the age range {ageRange} when running ads in this Special Ad Category. {link to Special Ad Category help content}",
        [
          s._param("ageRange", n),
          s._param(
            "link to Special Ad Category help content",
            u.jsx(g, { useCase: "fixed_range" }),
          ),
        ],
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(
        /*BTDS*/ "Select the age range that meets your local and industry requirements for this Special Ad Category. {link to Special Ad Category help content}",
        [
          s._param(
            "link to Special Ad Category help content",
            u.jsx(g, { useCase: "variable_minimum_age" }),
          ),
        ],
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(r("AHGHelpTrayLink2.react"), {
              helpCenterID: "2220749868045706",
              label: o("AdsLearnMoreStrings").INLINE_LEARN_MORE,
              onClick: h,
            })),
            (t[0] = n))
          : (n = t[0]),
        n
      );
    }
    function h() {}
    function y() {
      return s._(/*BTDS*/ "For additional information, read {=m2}.", [
        s._implicitParam(
          "=m2",
          u.jsx(r("AHGHelpTrayLink2.react"), {
            helpCenterID: "567423788405762",
            onClick: function () {},
            children: s._(
              /*BTDS*/ "About ads for financial products and services",
            ),
          }),
        ),
      ]);
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      return e
        ? s._(
            /*BTDS*/ "18 is the only minimum age you can select when running ads in this Special Ad Category.",
          )
        : c;
    }
    function b(e) {
      return e
        ? s._(
            /*BTDS*/ "You can't select a maximum age below 65+ when running ads in this Special Ad Category.",
          )
        : c;
    }
    ((l.SAFR_AGE_RANGE_DISABLED = c),
      (l.getRegulatedCategoryFromMessageType = m),
      (l.getRegulatedCategoryDisabledSelectorValueTooltip = p),
      (l.getAgeRangeSelectionText = _),
      (l.getVMASelectionText = f),
      (l.getFPSCampaignWizardFooterContent = y),
      (l.getMinAgeSelectorDisabledTooltip = C),
      (l.getMaxAgeSelectorDisabledTooltip = b));
  },
  226,
);
