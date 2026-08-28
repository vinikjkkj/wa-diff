__d(
  "AdsDeliveryVOEligibilityStrings",
  [
    "fbt",
    "AdsLearnMore.react",
    "AdsValueOptimizationUtils",
    "GeoLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(
        /*BTDS*/ "You can maximize value of conversions after you setup and select a Pixel.",
      ),
      d = s._(
        /*BTDS*/ "Value optimization is currently unavailable for iOS 14 ad accounts.",
      ),
      m = s._(
        /*BTDS*/ "This pixel you've selected isn't eligible for the maximize value performance goal. If you have an eligible pixel, you can select that instead. If not, choose a different performance goal.",
      ),
      p = s._(
        /*BTDS*/ "The minimum ROAS campaign bid strategy is only available if you're eligible for value optimization. You're not currently eligible.",
      ),
      _ = s._(
        /*BTDS*/ "Ad accounts owned by businesses new to Meta Products can use value optimization for ad delivery after several weeks of following our policies. If you don't want to wait, verify your business.",
      ),
      f = s._(
        /*BTDS*/ "ROAS goal isn't available because the catalog you selected doesn't have enough conversion events coming from your dataset. Check that your integration is set up properly or choose a different catalog.",
      ),
      g = s._(/*BTDS*/ "Active"),
      h = s._(/*BTDS*/ "Action required"),
      y = function () {
        return s._(
          /*BTDS*/ "Ad accounts owned by businesses new to Meta products can select value as the performance goal for their ads after several weeks of following our policies. If you don't want to wait, verify your business. {Business verification link}",
          [
            s._param(
              "Business verification link",
              u.jsx("div", {
                className: "x1y1aw1k",
                children: u.jsx(r("GeoLink.react"), {
                  href: "https://www.facebook.com/business/help/2058515294227817",
                  target: "_blank",
                  children: "Verify your business",
                }),
              }),
            ),
          ],
        );
      },
      C = function () {
        return s._(
          /*BTDS*/ "You can now use any conversion event with the {=m2} performance goal. {new line}{About maximizing the value}",
          [
            s._param("new line", u.jsx("br", {})),
            s._param(
              "About maximizing the value",
              u.jsx(r("AdsLearnMore.react"), {
                cmsID: o("AdsValueOptimizationUtils")
                  .MAXIMIZE_VALUE_OPTIMIZATION_CMSID,
                label: s._(
                  /*BTDS*/ "About maximizing the value of conversions",
                ),
              }),
            ),
            s._implicitParam(
              "=m2",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "Maximize value of conversions"),
              }),
            ),
          ],
        );
      };
    ((l.PIXEL_INELIGIBLE_VALUE_OPTIMIZATION_HOVER_CARD = c),
      (l.IOS14_INELIGIBLE_VALUE_OPTIMIZATION_HOVER_CARD = d),
      (l.INELIGIBLE_PIXEL_HOVER_CARD = m),
      (l.CAMPAIGN_GROUP_MIN_ROAS_DISABLED_HOVER_CARD = p),
      (l.CAMPAIGN_GROUP_MIN_ROAS_TRUST_TIER_DISABLED_HOVER_CARD = _),
      (l.CAMPAIGN_GROUP_MIN_ROAS_CATALOG_SALES_DISABLED_HOVER_CARD = f),
      (l.DELIVERY_STATUS_ACTIVE = g),
      (l.DELIVERY_STATUS_ACTION_REQUIRED = h),
      (l.getValueOptimizationDisableTooltipContent = y),
      (l.getNPVOtooltipContent = C));
  },
  226,
);
