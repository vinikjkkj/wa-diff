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
        if (e === "FACEBOOK_SHOP") return s._(/*BTDS*/ "Shop on Facebook");
        if (e === "INSTAGRAM_SHOP") return s._(/*BTDS*/ "Shop on Instagram");
        if (e === "SHOP_DESTINATION_FACEBOOK_SETUP")
          return s._(/*BTDS*/ "Add Facebook channel");
        if (e === "SHOP_DESTINATION_GENERATED_FROM_URL")
          return s._(/*BTDS*/ "Based on website URL");
        if (e === "SHOP_DESTINATION_INSTAGRAM_SETUP")
          return s._(/*BTDS*/ "Add Instagram channel");
        if (e === "SHOP_DESTINATION_SETUP_BUTTON_LABEL")
          return s._(/*BTDS*/ "Set up in commerce manager");
        if (e === "SHOP_DESTINATION_SETUP_TITLE")
          return s._(/*BTDS*/ "Set up a sales channel for your shop");
        if (e === "SHOP_DESTINATION_SETUP_DESCRIPTION")
          return s._(
            /*BTDS*/ "Connect your Facebook Page or Instagram profile to your commerce account in order to use them as an ad destination.",
          );
        if (
          e === "SHOP_DESTINATION_TOOLTIP_CONTENT_WITHIN" ||
          e === "SHOP_DESTINATION_TOOLTIP_CONTENT_GENERIC"
        )
          return s._(
            /*BTDS*/ "The shop destination is selected based on the Facebook Page and Instagram profile you chose in the Identity section. People will be sent from ads to the relevant destination within your shop.",
          );
        if (e === "SHOP_DESTINATION_TOOLTIP_CONTENT_CAROUSEL")
          return s._(
            /*BTDS*/ "When {=m2} click or tap your last carousel card, they will be directed to your shop's home page. The last card is optional and it won't appear in all placements.",
            [
              s._implicitParam(
                "=m2",
                u.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        if (e === "HOME_PAGE") return s._(/*BTDS*/ "Home page");
        if (e === "HOME_PAGE_DISABLED_MESSAGE_TOOLTIP")
          return s._(
            /*BTDS*/ "The Home Page of your shop is a mandatory destination option. It is the only destination available at the moment.",
          );
        if (e === "PRODUCT_DESTINATIONS") return s._(/*BTDS*/ "Product pages");
        if (e === "COLLECTION_DESTINATIONS") return s._(/*BTDS*/ "Collections");
        if (e === "RECOMMENDED_BASED_ON_URL")
          return s._(/*BTDS*/ "Recommended based on URL match");
        if (e === "RECOMMENDED_BASED_ON_AD_CREATIVE")
          return s._(/*BTDS*/ "Recommended based on ad creative");
        if (e === "DESTINATION") return s._(/*BTDS*/ "Shop destination");
        if (e === "SHOP_AUTOMATIC_DESTINATION_TYPE_LABEL")
          return s._(/*BTDS*/ "Website and shop");
        if (e === "SHOP_AUTOMATIC_DESTINATION_TYPE_DESCRIPTION")
          return s._(
            /*BTDS*/ "We'll automatically send people where we think they're most likely to convert: your website or your shop on Facebook or Instagram. {lean_more}",
            [
              s._param(
                "lean_more",
                u.jsx(r("GeoBaseText.react"), {
                  color: "value",
                  size: "accent",
                  children: u.jsx(r("AHGHelpTrayLink2.react"), {
                    helpCenterID: o("AdsUniqueMetricsID").ABOUT_SAIP_CMS_ID,
                    label: s._(/*BTDS*/ "About Shops ads"),
                  }),
                }),
              ),
            ],
          );
        if (
          e ===
          "SHOP_AUTOMATIC_DESTINATION_CONSOLIDATED_FLOW_DISABLE_OPTION_HOVER_TEXT"
        )
          return s._(
            /*BTDS*/ "To choose this conversion location, set up a shop in Commerce Manager. {=m1}",
            [
              s._implicitParam(
                "=m1",
                u.jsx(r("GeoLink.react"), {
                  "data-testid": void 0,
                  href: r("XCommerceManagerLaunchpadPageControllerRouteBuilder")
                    .buildUri({})
                    .toString(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "Set up a shop"),
                }),
              ),
            ],
          );
        if (
          e ===
          "SHOP_AUTOMATIC_DESTINATION_CONSOLIDATED_FLOW_DISABLE_OPTION_HOVER_TEXT_ODAX"
        )
          return s._(
            /*BTDS*/ "We'll automatically send people either to your website, or to your shop on Facebook or Instagram. Each person will be directed to the destination that we think will most likely lead to a conversion. To choose this conversion event location, set up a shop in Commerce Manager. {link}",
            [
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
            ],
          );
        if (e === "MUST_USE_COMMERCE_CATALOG_FOR_SHOPS_ADS_INCENTIVE_PROGRAM") {
          return (
            r("nullthrows")(
              t == null ? void 0 : t.commerceAccountName,
              "Commerce account name can not be null",
            ),
            s._(
              /*BTDS*/ "This ad must use the catalog that is connected to the selected commerce account {=m2} .",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx("strong", {
                    children: s._(/*BTDS*/ "{Commerce Account Name}", [
                      s._param(
                        "Commerce Account Name",
                        t == null ? void 0 : t.commerceAccountName,
                      ),
                    ]),
                  }),
                ),
              ],
            )
          );
          break e;
        }
        if (e === "PRODUCT_CATEGORIES_DISABLED_FOR_SHOPS_ADS_INCENTIVE_PROGRAM")
          return s._(
            /*BTDS*/ "Product categories are not available for ads that send traffic to your website and shop.",
          );
        if (e === "PRODUCT_CATEGORIES_DISABLED_FOR_SHOPS_ADS_DEFAULTED")
          return s._(
            /*BTDS*/ "{=m0}, so currently product categories are not available.",
            [
              s._implicitParam(
                "=m0",
                u.jsx("b", {
                  children: s._(
                    /*BTDS*/ "You\u2019re creating an ad that sends traffic to your website and shop",
                  ),
                }),
              ),
            ],
          );
        if (e === "SLIDESHOW_DISABLED_FOR_SHOP_ADS_INCENTIVE_PROGRAM")
          return s._(
            /*BTDS*/ "Slideshows are not available for ads that send traffic to your website and shop.",
          );
        if (e === "SLIDESHOW_DISABLED_FOR_SHOP_ADS_DEFAULTED")
          return s._(
            /*BTDS*/ "{=m0}, so slideshow is currently not available.",
            [
              s._implicitParam(
                "=m0",
                u.jsx("b", {
                  children: s._(
                    /*BTDS*/ "You\u2019re creating an ad that sends traffic to your website and shop",
                  ),
                }),
              ),
            ],
          );
        if (e === "REASONS_TO_SHOP_DISABLED_MESSAGE_TOOLTIP")
          return s._(
            /*BTDS*/ "{=m0} is not available because you\u2019ve included an offer in your ad.",
            [
              s._implicitParam(
                "=m0",
                u.jsx("b", { children: s._(/*BTDS*/ "Reasons to shop") }),
              ),
            ],
          );
        if (e === "SHOP_DESTINATION_RECOMMENDATION_LOADING_TITLE")
          return s._(/*BTDS*/ "Recommending destination...");
        if (e === "SHOP_DESTINATION_RECOMMENDATION_LOADING_SUBTITLE")
          return s._(/*BTDS*/ "Based on website URL");
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
