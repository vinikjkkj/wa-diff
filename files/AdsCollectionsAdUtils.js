__d(
  "AdsCollectionsAdUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIDevicePlatform",
    "AdsBulkValueUtils",
    "AdsCanvasAdUtils",
    "AdsCollectionsConstants",
    "AdsEmptyValue",
    "AdsInstagramApplicabilityUtils",
    "AdsInteractiveComponentConstants",
    "AdsPlacementAPISpecReaderUtils",
    "AdsTokensConstants",
    "AdsUniformValue",
    "CatalogVertical",
    "adsInteractiveComponentsUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "getByPath",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "0",
      s = 4;
    function u(e) {
      if (!e) return null;
      var t = r("getByPath")(
        e,
        r(
          "AdsAPIAdgroupPaths",
        ).CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.COLLECTION_THUMBNAILS.slice(1),
      );
      return (
        (!t || t instanceof r("AdsEmptyValue")) &&
          (t = r("getByPath")(
            e,
            r(
              "AdsAPIAdgroupPaths",
            ).CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.COLLECTION_THUMBNAILS.slice(
              1,
            ),
          )),
        (!t || t instanceof r("AdsEmptyValue")) &&
          (t = r("getByPath")(
            e,
            r(
              "AdsAPIAdgroupPaths",
            ).CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.COLLECTION_THUMBNAILS.slice(
              1,
            ),
          )),
        t instanceof r("AdsEmptyValue")
          ? null
          : (t instanceof r("AdsUniformValue")
              ? (t = o("AdsBulkValueUtils").getValueOrMixed_DEPRECATED(t))
              : t instanceof Object && (t = Array.from(t)),
            t)
      );
    }
    function c(e) {
      if (!e) return null;
      var t = r("getByPath")(
        e,
        r(
          "AdsAPIAdgroupPaths",
        ).CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.RETAILER_ITEM_IDS.slice(1),
      );
      return (
        (!t || t instanceof r("AdsEmptyValue")) &&
          (t = r("getByPath")(
            e,
            r(
              "AdsAPIAdgroupPaths",
            ).CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.RETAILER_ITEM_IDS.slice(1),
          )),
        (!t || t instanceof r("AdsEmptyValue")) &&
          (t = r("getByPath")(
            e,
            r(
              "AdsAPIAdgroupPaths",
            ).CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.RETAILER_ITEM_IDS.slice(
              1,
            ),
          )),
        t instanceof r("AdsEmptyValue")
          ? null
          : (t instanceof r("AdsUniformValue")
              ? (t = o("AdsBulkValueUtils").getValueOrMixed_DEPRECATED(t))
              : t instanceof Object && (t = Array.from(t)),
            t)
      );
    }
    function d(e) {
      return m(e.creative);
    }
    function m(e) {
      var t = c(e),
        n = u(e);
      return !!(t && t.length !== 0) || !!(n && n.length !== 0);
    }
    function p(e) {
      return e.every(function (e) {
        return _(e.spec);
      });
    }
    function _(e) {
      if (!h(e)) return !1;
      var t = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ),
        n = o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
          e,
          r("AdsAPIDevicePlatform").MOBILE,
        ),
        a =
          t &&
          n &&
          r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(e, "feed"),
        i =
          t &&
          n &&
          r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            e,
            "instant_article",
          ),
        l =
          (t &&
            n &&
            r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
              e,
              "video_feeds",
            )) ||
          r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            e,
            "suggested_video",
          ),
        s =
          t &&
          r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            e,
            "facebook_reels",
          ),
        u =
          r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
            e,
            "instagram",
          ) &&
          (o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
            e,
            "stream",
          ) ||
            o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
              e,
              "story",
            ));
      return a || u || i || l || s;
    }
    function f(e) {
      return (
        (e = g(e)),
        (e.device_platforms =
          e.device_platforms != null
            ? e.device_platforms.filter(function (e) {
                return e === r("AdsAPIDevicePlatform").MOBILE;
              })
            : void 0),
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ) &&
          (e.facebook_positions =
            e.facebook_positions != null
              ? e.facebook_positions.filter(function (e) {
                  return (
                    e === "feed" ||
                    e === "instant_article" ||
                    e == "suggested_video" ||
                    e == "video_feeds"
                  );
                })
              : void 0),
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "instagram",
        ) &&
          (e.instagram_positions =
            e.instagram_positions != null
              ? e.instagram_positions.filter(function (e) {
                  return e === "stream" || e === "story";
                })
              : void 0),
        e
      );
    }
    function g(e) {
      var t;
      return babelHelpers.extends({}, e, {
        publisher_platforms:
          (t = e.publisher_platforms) == null
            ? void 0
            : t.filter(function (e) {
                return e === "facebook" || e === "instagram";
              }),
      });
    }
    function h(e) {
      if (!e.publisher_platforms || e.publisher_platforms.length === 0)
        return !1;
      var t = e.publisher_platforms.filter(function (e) {
        return e !== "facebook" && e !== "instagram";
      });
      return !!t && t.length === 0;
    }
    function y(e, t) {
      var n = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ),
        a = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(e, "feed"),
        i = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e,
          "instant_article",
        ),
        l =
          r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            e,
            "video_feeds",
          ) ||
          r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            e,
            "suggested_video",
          ),
        s = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e,
          "facebook_reels",
        ),
        u = o("AdsPlacementAPISpecReaderUtils").isActiveDevicePlatform(
          e,
          r("AdsAPIDevicePlatform").MOBILE,
        ),
        c = r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
          e,
          "instagram",
        ),
        d = r("AdsInstagramApplicabilityUtils").placementSpecHasStreamPlacement(
          e,
        ),
        m = r("AdsInstagramApplicabilityUtils").placementSpecHasStoryPlacement(
          e,
        ),
        p = r(
          "AdsInstagramApplicabilityUtils",
        ).placementSpecHasInstagramReelsPlacement(e);
      return (
        (u && n && a) ||
        (u && n && i) ||
        (u && n && l) ||
        (u && n && s) ||
        (c && d) ||
        p ||
        m
      );
    }
    function C(t) {
      for (
        var n = r("immutable").List(
          t.map(function (e) {
            return e.retailer_id;
          }),
        );
        n.count() < s;
      )
        n = n.push(e);
      return n;
    }
    function b(e, t) {
      if (!e)
        return o("AdsCollectionsConstants")
          .POST_CLICK_ITEM_DEFAULT_HEADLINE_TEMPLATE;
      switch (e) {
        case r("CatalogVertical").FLIGHTS:
          return "{{flight.flight_id}}";
        case r("CatalogVertical").HOTELS:
          return "{{hotel.name}}";
        case r("CatalogVertical").COMMERCE:
          return t != null ? S(t) : "{{product.name}}";
        case r("CatalogVertical").VEHICLES:
          return "{{vehicle.title}}";
        case r("CatalogVertical").MEDIA_TITLES:
          return "{{media_title.title}}";
        case r("CatalogVertical").LOCAL_SERVICE_BUSINESSES:
          return "{{local_service_business.title}}";
        default:
          return o("AdsCollectionsConstants")
            .POST_CLICK_ITEM_DEFAULT_HEADLINE_TEMPLATE;
      }
    }
    function v(e, t) {
      if (!e)
        return o("AdsCollectionsConstants")
          .POST_CLICK_ITEM_DEFAULT_DESCRIPTION_TEMPLATE;
      switch (e) {
        case r("CatalogVertical").FLIGHTS:
          return "{{flight.description}}";
        case r("CatalogVertical").HOTELS:
          return "{{hotel.price}}";
        case r("CatalogVertical").COMMERCE:
          return t != null
            ? R(t)
            : o("AdsCollectionsConstants")
                .POST_CLICK_ITEM_DEFAULT_DESCRIPTION_TEMPLATE;
        case r("CatalogVertical").VEHICLES:
          return "{{vehicle.price}}";
        case r("CatalogVertical").MEDIA_TITLES:
          return "{{media_title.description}}";
        case r("CatalogVertical").LOCAL_SERVICE_BUSINESSES:
          return "{{local_service_business.description}}";
        default:
          return o("AdsCollectionsConstants")
            .POST_CLICK_ITEM_DEFAULT_DESCRIPTION_TEMPLATE;
      }
    }
    function S(e) {
      switch (e) {
        case "APP_AND_SOFTWARE":
          return "{{app_and_software.name}}";
        case "ACTIVITY":
          return "{{activity.name}}";
        case "ARTICLE_AND_PUBLICATION":
          return "{{article_and_publication.name}}";
        case "SERVICE":
          return "{{service.name}}";
        case "MEDIA_TITLE":
          return "{{media_title.name}}";
        case "HOTEL":
          return "{{hotel.name}}";
        case "PRODUCT":
        default:
          return "{{product.name}}";
      }
    }
    function R(e) {
      switch (e) {
        case "APP_AND_SOFTWARE":
          return (
            "{{app_and_software.price " +
            o("AdsTokensConstants").NUMBER_OPTIONS.STRIP_ZEROS.PROPERTY +
            "}}"
          );
        case "ACTIVITY":
          return (
            "{{activity.price " +
            o("AdsTokensConstants").NUMBER_OPTIONS.STRIP_ZEROS.PROPERTY +
            "}}"
          );
        case "ARTICLE_AND_PUBLICATION":
          return (
            "{{article_and_publication.price " +
            o("AdsTokensConstants").NUMBER_OPTIONS.STRIP_ZEROS.PROPERTY +
            "}}"
          );
        case "SERVICE":
          return (
            "{{service.price " +
            o("AdsTokensConstants").NUMBER_OPTIONS.STRIP_ZEROS.PROPERTY +
            "}}"
          );
        case "MEDIA_TITLE":
          return (
            "{{media_title.price " +
            o("AdsTokensConstants").NUMBER_OPTIONS.STRIP_ZEROS.PROPERTY +
            "}}"
          );
        case "HOTEL":
          return (
            "{{hotel.price " +
            o("AdsTokensConstants").NUMBER_OPTIONS.STRIP_ZEROS.PROPERTY +
            "}}"
          );
        case "PRODUCT":
        default:
          return o("AdsCollectionsConstants")
            .POST_CLICK_ITEM_DEFAULT_DESCRIPTION_TEMPLATE;
      }
    }
    function L(e) {
      var t;
      return (
        (e == null || (t = e.creative) == null ? void 0 : t.product_set_id) !=
          null &&
        !o("adsInteractiveComponentsUtils").adgroupHasInteractiveComponents(
          e,
          o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG,
        )
      );
    }
    function E(e) {
      var t,
        n,
        r,
        a,
        i,
        l = m(e.creative),
        s =
          (t =
            (n =
              (r = e.creative) == null ||
              (r = r.object_story_spec) == null ||
              (r = r.link_data) == null
                ? void 0
                : r.link) != null
              ? n
              : (a = e.creative) == null ||
                  (a = a.object_story_spec) == null ||
                  (a = a.template_data) == null
                ? void 0
                : a.link) != null
            ? t
            : (i = e.creative) == null ||
                (i = i.object_story_spec) == null ||
                (i = i.video_data) == null ||
                (i = i.call_to_action) == null ||
                (i = i.value) == null
              ? void 0
              : i.link,
        u = o("AdsCanvasAdUtils").isEmptyCanvasLink(s);
      return l && u;
    }
    ((l.INFEED_PRODUCT_COUNT = s),
      (l.getCollectionThumbnails = u),
      (l.getRetailerItemIds = c),
      (l.isCollectionAdgroup = d),
      (l.isCollectionsAd = m),
      (l.isBulkPlacementCompatible = p),
      (l.isPlacementSpecCompatible = _),
      (l.filterUnsupportedPlacementForPlacementSpec = f),
      (l.filterUnsupportedPublisherPlatforms = g),
      (l.isCollectionCompatiblePublisherPlatform = h),
      (l.hasCompatiblePlacement = y),
      (l.getNewRetailerItemIds = C),
      (l.getPostClickItemDefaultHeadlineTemplate = b),
      (l.getPostClickItemDefaultDescriptionTemplate = v),
      (l.hasProductSetWithoutTag = L),
      (l.shouldShowNoMediaViewForCollectionAd = E));
  },
  98,
);
