__d(
  "adsCreativeAppInfoSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeSourcingActionMetadataAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          action_metadata: r(
            "adsCreativeSourcingActionMetadataAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.action_metadata;
            },
            [].concat(t, ["action_metadata"]),
          ),
          enroll_status: n.basicFieldAccessorFactory(e, t, "enroll_status"),
          icon_image_url: n.basicFieldAccessorFactory(e, t, "icon_image_url"),
          screenshot_urls: n.basicListFieldAccessorFactory(
            e,
            t,
            "screenshot_urls",
          ),
        },
      );
    }
    function s(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          action_metadata: r(
            "adsCreativeSourcingActionMetadataAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.action_metadata;
            },
            [].concat(t, ["action_metadata"]),
          ),
          enroll_status: n.basicFieldAccessorFactory(e, t, "enroll_status"),
          app_author: n.basicFieldAccessorFactory(e, t, "app_author"),
          app_category: n.basicFieldAccessorFactory(e, t, "app_category"),
          app_description: n.basicFieldAccessorFactory(e, t, "app_description"),
          app_name: n.basicFieldAccessorFactory(e, t, "app_name"),
          app_price: n.basicFieldAccessorFactory(e, t, "app_price"),
          app_subtitle: n.basicFieldAccessorFactory(e, t, "app_subtitle"),
        },
      );
    }
    function u(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          action_metadata: r(
            "adsCreativeSourcingActionMetadataAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.action_metadata;
            },
            [].concat(t, ["action_metadata"]),
          ),
          enroll_status: n.basicFieldAccessorFactory(e, t, "enroll_status"),
          ratings: n.basicFieldAccessorFactory(e, t, "ratings"),
          star_reviews: n.basicListFieldAccessorFactory(e, t, "star_reviews"),
          summary_rating: n.basicFieldAccessorFactory(e, t, "summary_rating"),
          top_reviews: n.basicListFieldAccessorFactory(e, t, "top_reviews"),
        },
      );
    }
    function c(t, n) {
      var a;
      return babelHelpers.extends(
        {},
        (a = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(t, n),
        {
          action_metadata: r(
            "adsCreativeSourcingActionMetadataAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.action_metadata;
            },
            [].concat(n, ["action_metadata"]),
          ),
          application_id: a.basicFieldAccessorFactory(t, n, "application_id"),
          enroll_status: a.basicFieldAccessorFactory(t, n, "enroll_status"),
          app_information: s(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.app_information;
            },
            [].concat(n, ["app_information"]),
          ),
          media: e(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.media;
            },
            [].concat(n, ["media"]),
          ),
          object_store_url: a.basicFieldAccessorFactory(
            t,
            n,
            "object_store_url",
          ),
          ratings_and_reviews: u(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.ratings_and_reviews;
            },
            [].concat(n, ["ratings_and_reviews"]),
          ),
        },
      );
    }
    l.default = c;
  },
  98,
);
