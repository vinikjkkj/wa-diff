__d(
  "adsAdgroupBrandedContentAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "ApiAdCreativeBrandedContentPartnersFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          partners: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.partners;
            },
            [].concat(t, ["partners"]),
            Object.values(r("ApiAdCreativeBrandedContentPartnersFields")),
          ),
          ui_version: n.basicFieldAccessorFactory(e, t, "ui_version"),
          ad_format: n.basicFieldAccessorFactory(e, t, "ad_format"),
          permission_type: n.basicFieldAccessorFactory(e, t, "permission_type"),
          facebook_boost_post_access_token: n.basicFieldAccessorFactory(
            e,
            t,
            "facebook_boost_post_access_token",
          ),
          instagram_boost_post_access_token: n.basicFieldAccessorFactory(
            e,
            t,
            "instagram_boost_post_access_token",
          ),
          parent_source_facebook_post_id: n.basicFieldAccessorFactory(
            e,
            t,
            "parent_source_facebook_post_id",
          ),
          parent_source_instagram_media_id: n.basicFieldAccessorFactory(
            e,
            t,
            "parent_source_instagram_media_id",
          ),
          promoted_page_id: n.basicFieldAccessorFactory(
            e,
            t,
            "promoted_page_id",
          ),
          content_search_input: n.basicFieldAccessorFactory(
            e,
            t,
            "content_search_input",
          ),
          testimonial: n.basicFieldAccessorFactory(e, t, "testimonial"),
          product_set_partner_selection_status: n.basicFieldAccessorFactory(
            e,
            t,
            "product_set_partner_selection_status",
          ),
          acting_business_id: n.basicFieldAccessorFactory(
            e,
            t,
            "acting_business_id",
          ),
          deliver_dynamic_partner_content: n.basicFieldAccessorFactory(
            e,
            t,
            "deliver_dynamic_partner_content",
          ),
          automated_adgroup_creation: n.basicFieldAccessorFactory(
            e,
            t,
            "automated_adgroup_creation",
          ),
          content_list: babelHelpers.extends(
            {},
            n.baseFieldAccessorFactory(
              function (t) {
                var n;
                return (n = e(t)) == null ? void 0 : n.content_list;
              },
              [].concat(t, ["content_list"]),
            ),
            {
              id: n.basicFieldAccessorFactory(
                function (t) {
                  var n;
                  return (n = e(t)) == null ? void 0 : n.content_list;
                },
                [].concat(t, ["content_list"]),
                "id",
              ),
              import_time: n.basicFieldAccessorFactory(
                function (t) {
                  var n;
                  return (n = e(t)) == null ? void 0 : n.content_list;
                },
                [].concat(t, ["content_list"]),
                "import_time",
              ),
            },
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
