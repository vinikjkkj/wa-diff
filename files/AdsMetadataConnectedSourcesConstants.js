__d(
  "AdsMetadataConnectedSourcesConstants",
  [
    "errorCode",
    "fbt",
    "AdsError",
    "AdsMetadataWebsiteSourceItemTypes",
    "adsErrorDesc",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = "3787607341463348",
      c = 3,
      d = 5,
      m = "ADVERTISER_MANUAL_SITE_LINK_UPLOAD",
      p =
        "https://business.facebook.com/legal/commerce_product_merchant_agreement",
      _ =
        "/images/ads/ads_manager/metadata/SiteLinks-Mock-Preview-FixedWidth.png",
      f =
        "/images/ads/ads_manager/metadata/ShoppingLinks-Mock-Preview-FixedWidth.png",
      g = u._(/*BTDS*/ "Site links"),
      h = u._(/*BTDS*/ "Offers"),
      y = u._(/*BTDS*/ "Display label"),
      C = u._(/*BTDS*/ "Write a label for your link"),
      b = u._(
        /*BTDS*/ "By default, this URL will be your ad's website destination. You can change your ad's destination under Website options in Destination.",
      ),
      v = u._(/*BTDS*/ "URL"),
      S = u._(/*BTDS*/ "http:\/\/www.example.com\/page"),
      R = u._(/*BTDS*/ "Thumbnail"),
      L = u._(/*BTDS*/ "Remove"),
      E = [
        "Sandals & Slides",
        "Best sellers",
        "Bags",
        "Auto",
        "Women",
        "Men",
        "Luxury",
        "Pants",
        "Accessories",
      ],
      k = [
        "www.nike.com/w/mens-best-76m50znik1",
        "www.nike.com/w/women-best-sadad2342",
        "www.nike.com/w/new-products",
        "www.lululemon.com/collections/new-products",
        "www.lululemon.com/collections/best-sellers",
        "www.lululemon.com/collections/sandles",
        "www.lululemon.com/collections/bags",
      ],
      I = u._(/*BTDS*/ "Offer type"),
      T = u._(/*BTDS*/ "Percentage sale (fixed)"),
      D = u._(/*BTDS*/ "Cash sale (fixed)"),
      x = u._(/*BTDS*/ "Amount"),
      $ = u._(/*BTDS*/ "Dates valid"),
      P = u._(/*BTDS*/ "Add"),
      N = u._(/*BTDS*/ "Valid"),
      M = u._(
        /*BTDS*/ "Add a website URL to automatically enhance your ad with offers.",
      ),
      w = u._(
        /*BTDS*/ "Enter a URL to automatically find site links you can choose to add. By default, we\u2019ll use your destination website URL.",
      ),
      A = u._(
        /*BTDS*/ "Enter a URL to automatically find site links you can choose to add. By default, we'll use your destination website URL.",
      ),
      F = u._(
        /*BTDS*/ "By default, this URL will be your ad's website destination.",
      ),
      O = u._(/*BTDS*/ "Preview URL"),
      B = u._(/*BTDS*/ "Upload thumbnail"),
      W = u._(/*BTDS*/ "Edit"),
      q = u._(/*BTDS*/ "Enter a display label and URL to add a site link."),
      U = u._(/*BTDS*/ "Select sets"),
      V = u._(/*BTDS*/ "Sales Channels"),
      H = u._(/*BTDS*/ "Retailer links"),
      G = u._(/*BTDS*/ "Choose for products sold by different retailers"),
      z = u._(/*BTDS*/ "Shopping links"),
      j = u._(/*BTDS*/ "Discovery links"),
      K = u._(/*BTDS*/ "Create a traffic campaign to use retailer links."),
      Q = u._(/*BTDS*/ "Good for linking to products on different sites"),
      X = u._(/*BTDS*/ "Site links"),
      Y = u._(/*BTDS*/ "Choose for product categories on your site"),
      J = u._(/*BTDS*/ "Good for linking to product categories on your site"),
      Z = u._(/*BTDS*/ "Catalog"),
      ee = u._(/*BTDS*/ "Product set"),
      te = u._(/*BTDS*/ "Randomize order"),
      ne = u._(/*BTDS*/ "Randomize the order that links are shown in the ad"),
      re = function (t) {
        return t ===
          o("AdsMetadataWebsiteSourceItemTypes").SalesChannel.RETAILER_LINKS
          ? u._(
              /*BTDS*/ "To use another set of site links, first remove the site links added to Shopping links",
            )
          : u._(
              /*BTDS*/ "To use another set of site links, first remove the site links added to Discovery links",
            );
      },
      oe = 300,
      ae = 300,
      ie = function (t) {
        return new (r("AdsError"))(
          2061006,
          r("adsErrorDesc")._(
            function (e, t) {
              return e._(
                /*BTDS*/ "The URL you entered ({link}) doesn't direct to a website. Please check your website URL and try again.",
                [e._param("link", t.link)],
              );
            },
            { link: t },
          ),
          { level: r("AdsError").Level.WARN },
        );
      },
      le = function (t) {
        var e = E[Math.floor(Math.random() * E.length)],
          n = k[Math.floor(Math.random() * k.length)];
        return { description: n, metadataType: t, primaryText: e };
      },
      se = [10, 20, 30, 40, 50, 60],
      ue = ["PERCENTAGE_OFF", "AMOUNT_OFF"],
      ce = function () {
        var e = se[Math.floor(Math.random() * se.length)],
          t = ue[Math.floor(Math.random() * ue.length)];
        return {
          promotion_value: e,
          promotion_type: t,
          required_code: null,
          id: null,
          start_date: null,
          end_date: null,
          promotion_source: "ADVERTISER_INPUT",
        };
      };
    ((l.AD_SOURCES_HELP_CENTER_CMS_ID = e),
      (l.SITE_LINKS_COUNT_LOWER_LIMIT = c),
      (l.SITE_LINK_DEFAULT_ON_NOTICE_DISPLAY_LIMIT = d),
      (l.SITE_LINK_THUMBNAIL_IMAGE_CREATION_SOURCE = m),
      (l.SELLER_AGREEMENT = p),
      (l.SITE_LINKS_MOCK_PREVIEW_URL = _),
      (l.SHOPPING_LINKS_MOCK_PREVIEW_URL = f),
      (l.SITE_LINKS_SECTION_TITLE = g),
      (l.PROMOTION_SECTION_TITLE = h),
      (l.DISPLAY_LABEL_INPUT_LABEL = y),
      (l.DISPLAY_LABEL_INPUT_PLACEHOLDER = C),
      (l.HELP_TEXT_FOR_SOURCE_URL = b),
      (l.URL_INPUT_LABEL = v),
      (l.URL_INPUT_PLACEHOLDER = S),
      (l.THUMBNAIL_UPLOAD_LABEL = R),
      (l.THUMBNAIL_REMOVE_IMAGE = L),
      (l.OFFER_TYPE_INPUT_LABEL = I),
      (l.OFFER_TYPE_PERCENTAGE_OFF_LABEL = T),
      (l.OFFER_TYPE_AMOUNT_OFF_LABEL = D),
      (l.OFFER_VALUE_INPUT_LABEL = x),
      (l.OFFER_VALID_DATES_INPUT_LABEL = $),
      (l.ADD_BUTTON = P),
      (l.VALID = N),
      (l.DESCRIPTION_PROMO_ONLY = M),
      (l.DESCRIPTION_SITE_LINK_ONLY = w),
      (l.DESCRIPTION_SITE_LINK_AND_PROMO = A),
      (l.DESCRIPTION_WEBSITE_ONLY = F),
      (l.PREVIEW_URL_LABEL = O),
      (l.UPLOAD_THUMBNAIL_BUTTON_LABEL = B),
      (l.EDIT_SITE_LINK_LABEL = W),
      (l.HELP_TEXT_FOR_SITE_LINK_ADD_BUTTON = q),
      (l.SALES_CHANNEL_SET_LABEL = U),
      (l.SALES_CHANNEL_PLACEHOLDER = V),
      (l.SALES_CHANNEL_RETAILER_LINKS = H),
      (l.SALES_CHANNEL_RETAILER_LINKS_DESCRIPTION = G),
      (l.SALES_CHANNEL_SHOPPING_LINKS = z),
      (l.SALES_CHANNEL_DISCOVERY_LINKS = j),
      (l.SALES_CHANNEL_RETAILER_LINKS_DISABLED = K),
      (l.SALES_CHANNEL_RETAILER_LINKS_TOOLTIP = Q),
      (l.SALES_CHANNEL_SITE_LINKS = X),
      (l.SALES_CHANNEL_SITE_LINKS_DESCRIPTION = Y),
      (l.SALES_CHANNEL_SITE_LINKS_TOOLTIP = J),
      (l.CATALOG_LABEL = Z),
      (l.PRODUCT_SET_LABEL = ee),
      (l.RANDOMIZE_ORDER_LABEL = te),
      (l.RANDOMIZE_ORDER_LABEL_TOOLTIP = ne),
      (l.getSalesChannelDisabledHoverText = re),
      (l.SITE_LINK_IMAGE_THUMBNAIL_UPLOAD_MIN_HEIGHT = oe),
      (l.SITE_LINK_IMAGE_THUMBNAIL_UPLOAD_MIN_WIDTH = ae),
      (l.getInvalidURLError = ie),
      (l.getMetadataItemExample = le),
      (l.getPromotionMetadataExample = ce));
  },
  226,
);
