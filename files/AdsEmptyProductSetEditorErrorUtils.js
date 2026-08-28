__d(
  "AdsEmptyProductSetEditorErrorUtils",
  [
    "errorCode",
    "fbt",
    "AdsAPICampaignPaths",
    "AdsStackedErrorsCardUtils",
    "GeoLink.react",
    "JSResource",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = 4469006,
      m = "620275848114281",
      p = "https://business.facebook.com/commerce/",
      _ = u._(/*BTDS*/ "Go to Commerce Manager"),
      f = u._(/*BTDS*/ "Commerce Manager"),
      g = u._(
        /*BTDS*/ "Your ad stopped running because the product set associated with this ad is empty and can't be shown in your ads. To resume delivery, update your product set in Commerce Manager.",
      );
    function h(e) {
      return (e == null ? void 0 : e.key) === d;
    }
    function y() {
      return g;
    }
    function C() {
      return u._(
        /*BTDS*/ "This product set is empty. To resume delivery, update your product set in {commerceManagerLink}.",
        [
          u._param(
            "commerceManagerLink",
            c.jsx(r("GeoLink.react"), {
              href: p,
              target: "_blank",
              children: f,
            }),
          ),
        ],
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return {
        cta: _,
        ctaRenderer: function (t) {
          var e = t.accountID,
            n = t.adgroup,
            o = t.adObjectLevel,
            a = t.campaignGroup,
            i = t.error,
            l = t.inReviewMode,
            s = t.onBeforeActivation,
            u = t.pageIDs,
            d = r("lazyLoadComponent")(
              r("JSResource")(
                "AdsEmptyProductSetCommerceManagerErrorCTA.react",
              ).__setRef("AdsEmptyProductSetEditorErrorUtils"),
            );
          return c.jsx(d, {
            accountID: e,
            adObjectLevel: o,
            adgroup: n,
            campaignGroup: a,
            error: i,
            inReviewMode: l,
            onBeforeActivation: s,
            pageIDs: u,
          });
        },
        customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
          .LINK,
        helpCenterID: m,
        path: r("AdsAPICampaignPaths").PROMOTED_OBJECT.PRODUCT_SET_ID,
      };
    }
    ((l.EMPTY_PRODUCT_SET_ERROR_CODE = d),
      (l.EMPTY_PRODUCT_SET_HELP_CENTER_ID = m),
      (l.isEmptyProductSetError = h),
      (l.getEmptyProductSetEditorErrorMessage = y),
      (l.getEmptyProductSetPromotedProductsInlineMessage = C),
      (l.getEmptyProductSetEditorErrorExtraData = b));
  },
  226,
);
