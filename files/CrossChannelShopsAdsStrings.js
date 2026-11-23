__d(
  "CrossChannelShopsAdsStrings",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsUniqueMetricsID",
    "GeoBaseText.react",
    "GeoLink.react",
    "XCommerceManagerLaunchpadPageControllerRouteBuilder",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      e: {
        if (e === "FACEBOOK_SHOP") return s._(/*BTDS*/ "");
        if (e === "INSTAGRAM_SHOP") return s._(/*BTDS*/ "");
        if (e === "SHOP_DESTINATION_FACEBOOK_SETUP") return s._(/*BTDS*/ "");
        if (e === "SHOP_DESTINATION_GENERATED_FROM_URL")
          return s._(/*BTDS*/ "");
        if (e === "SHOP_DESTINATION_INSTAGRAM_SETUP") return s._(/*BTDS*/ "");
        if (e === "SHOP_DESTINATION_SETUP_BUTTON_LABEL")
          return s._(/*BTDS*/ "");
        if (e === "SHOP_DESTINATION_SETUP_TITLE") return s._(/*BTDS*/ "");
        if (e === "SHOP_DESTINATION_SETUP_DESCRIPTION") return s._(/*BTDS*/ "");
        if (
          e === "SHOP_DESTINATION_TOOLTIP_CONTENT_WITHIN" ||
          e === "SHOP_DESTINATION_TOOLTIP_CONTENT_GENERIC"
        )
          return s._(/*BTDS*/ "");
        if (e === "SHOP_DESTINATION_TOOLTIP_CONTENT_CAROUSEL")
          return s._(/*BTDS*/ "", [
            s._implicitParam(
              "=m2",
              u.jsx(r("AHGHelpTrayLink2.react"), {
                helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ]);
        if (e === "HOME_PAGE") return s._(/*BTDS*/ "");
        if (e === "HOME_PAGE_DISABLED_MESSAGE_TOOLTIP") return s._(/*BTDS*/ "");
        if (e === "PRODUCT_DESTINATIONS") return s._(/*BTDS*/ "");
        if (e === "COLLECTION_DESTINATIONS") return s._(/*BTDS*/ "");
        if (e === "RECOMMENDED_BASED_ON_URL") return s._(/*BTDS*/ "");
        if (e === "RECOMMENDED_BASED_ON_AD_CREATIVE") return s._(/*BTDS*/ "");
        if (e === "DESTINATION") return s._(/*BTDS*/ "");
        if (e === "SHOP_AUTOMATIC_DESTINATION_TYPE_LABEL")
          return s._(/*BTDS*/ "");
        if (e === "SHOP_AUTOMATIC_DESTINATION_TYPE_DESCRIPTION")
          return s._(/*BTDS*/ "", [
            s._param(
              "lean_more",
              u.jsx(r("GeoBaseText.react"), {
                color: "value",
                size: "accent",
                children: u.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").ABOUT_SAIP_CMS_ID,
                  label: s._(/*BTDS*/ ""),
                }),
              }),
            ),
          ]);
        if (
          e ===
          "SHOP_AUTOMATIC_DESTINATION_CONSOLIDATED_FLOW_DISABLE_OPTION_HOVER_TEXT"
        )
          return s._(/*BTDS*/ "", [
            s._implicitParam(
              "=m1",
              u.jsx(r("GeoLink.react"), {
                "data-testid": void 0,
                href: r("XCommerceManagerLaunchpadPageControllerRouteBuilder")
                  .buildUri({})
                  .toString(),
                target: "_blank",
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ]);
        if (
          e ===
          "SHOP_AUTOMATIC_DESTINATION_CONSOLIDATED_FLOW_DISABLE_OPTION_HOVER_TEXT_ODAX"
        )
          return s._(/*BTDS*/ "", [
            s._param(
              "link",
              u.jsx(r("GeoBaseText.react"), {
                color: "value",
                size: "accent",
                children: u.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID:
                    o("AdsUniqueMetricsID").ABOUT_FACEBOOK_SHOPS_CMS_ID,
                }),
              }),
            ),
          ]);
        if (e === "MUST_USE_COMMERCE_CATALOG_FOR_SHOPS_ADS_INCENTIVE_PROGRAM") {
          return (
            r("nullthrows")(
              t == null ? void 0 : t.commerceAccountName,
              "Commerce account name can not be null",
            ),
            s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m2",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "", [
                    s._param(
                      "Commerce Account Name",
                      t == null ? void 0 : t.commerceAccountName,
                    ),
                  ]),
                }),
              ),
            ])
          );
          break e;
        }
        if (e === "REASONS_TO_SHOP_DISABLED_MESSAGE_TOOLTIP")
          return s._(/*BTDS*/ "", [
            s._implicitParam("=m0", u.jsx("b", { children: s._(/*BTDS*/ "") })),
          ]);
        if (e === "SHOP_DESTINATION_RECOMMENDATION_LOADING_TITLE")
          return s._(/*BTDS*/ "");
        if (e === "SHOP_DESTINATION_RECOMMENDATION_LOADING_SUBTITLE")
          return s._(/*BTDS*/ "");
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    l.CrossChannelShopsAdsFbt = c;
  },
  226,
);
