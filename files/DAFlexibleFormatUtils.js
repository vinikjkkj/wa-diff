__d(
  "DAFlexibleFormatUtils",
  [
    "errorCode",
    "AdsChildAttachmentsUtils",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsDACreativeFlexMediaUtils",
    "AdsDynamicAdsUtils",
    "AdsObjectTypeUtils",
    "ClickToWhatsAppFeatureGating",
    "DeepRecordUtils",
    "IGAdsSensitiveVerticalsUtils",
    "gkx",
    "hasFormatTransformationWithDataSource",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 5,
      u = [2501138, 2501139, 1443337];
    function c(e, t) {
      if ((t === void 0 && (t = !1), r("justknobx")._("1033"))) return !1;
      var n = e.adgroup,
        a = e.campaign;
      return n == null ||
        a == null ||
        o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          a.destination_type,
          !1,
        )
        ? !1
        : d(n, t);
    }
    function d(e, t) {
      var n;
      return (
        t === void 0 && (t = !1),
        r("justknobx")._("1033") ||
        !o("AdsObjectTypeUtils").isDynamicProductAd(e) ||
        o("AdsDynamicAdsUtils").isStaticAdUsingProductSet(e) ||
        !o("AdsChildAttachmentsUtils").isCarouselAd(e) ||
        (p(e) && !b() && !m(e) && !D(e)) ||
        ((n = e.creative) == null ? void 0 : n.branded_content_boosting_type) !=
          null
          ? !1
          : t
            ? v()
            : v("silent")
      );
    }
    function m(e) {
      var t,
        n,
        o =
          e == null || (t = e.creative) == null
            ? void 0
            : t.format_transformation_spec;
      return (n =
        o == null
          ? void 0
          : o.some(function (e) {
              var t =
                  e instanceof r("immutable").Map
                    ? e.getIn(["format"])
                    : e == null
                      ? void 0
                      : e.format,
                n =
                  e instanceof r("immutable").Map
                    ? e.getIn(["data_source"])
                    : e == null
                      ? void 0
                      : e.data_source;
              return (
                (n = Array.isArray(n)
                  ? n
                  : n instanceof r("immutable").List
                    ? n.toArray()
                    : []),
                t === "carousel" && n.includes("catalog")
              );
            })) != null
        ? n
        : !1;
    }
    function p(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.template_data) == null
            ? void 0
            : t.child_attachments;
      return n == null
        ? !1
        : n.some(function (e) {
            var t =
                e instanceof r("immutable").Map
                  ? e.getIn(["static_card"])
                  : e.static_card,
              n =
                e instanceof r("immutable").Map
                  ? e.getIn(["place_data"])
                  : e.place_data,
              o =
                e instanceof r("immutable").Map
                  ? e.getIn(["template_video_spec"])
                  : e.template_video_spec;
            return (t === !0 && n == null) || o != null;
          });
    }
    function _(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.template_data) == null
            ? void 0
            : t.child_attachments;
      return n == null
        ? !1
        : n.some(function (e) {
            var t =
                e instanceof r("immutable").Map
                  ? e.getIn(["static_card"])
                  : e.static_card,
              n =
                e instanceof r("immutable").Map
                  ? e.getIn(["place_data"])
                  : e.place_data;
            return t === !0 && n != null;
          });
    }
    function f(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.object_story_spec) == null ||
        (t = t.template_data) == null
          ? void 0
          : t.multi_share_end_card) === !0
      );
    }
    function g(e) {
      return (
        o("AdsObjectTypeUtils").isDynamicProductAd(e) && !p(e) && v("silent")
      );
    }
    function h() {
      return r("justknobx")._("5130");
    }
    function y() {
      return r("justknobx")._("2986");
    }
    function C(e) {
      return e ? r("gkx")("14151") : r("gkx")("14284");
    }
    function b() {
      return r("justknobx")._("1283");
    }
    function v(e) {
      return e ? r("gkx")("16963") : r("gkx")("382");
    }
    function S(e) {
      return e ? r("gkx")("19875") : r("gkx")("19747");
    }
    function R(e) {
      return e ? r("gkx")("18241") : r("gkx")("18242");
    }
    function L(e) {
      return e ? r("gkx")("19630") : r("gkx")("19631");
    }
    function E(e) {
      var t = e == null ? void 0 : e.key;
      return typeof t == "number" && u.includes(t);
    }
    function k(e, t, n, r) {
      return !(!d(e) || !T() || !I(t, n, r));
    }
    function I(e, t, n) {
      var r,
        o =
          e == null ||
          (r = e.get(t)) == null ||
          (r = r.find(function (e) {
            return e.data_source === n;
          })) == null
            ? void 0
            : r.status;
      return o !== "OPT_OUT";
    }
    function T() {
      return !(
        r("gkx")("13010") ||
        r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
      );
    }
    function D(e) {
      var t,
        n,
        r = o("DeepRecordUtils").maybeToPlainObject(e),
        a =
          r == null ||
          (t = r.creative) == null ||
          (t = t.media_sourcing_spec) == null ||
          (t = t.related_media) == null ||
          (t = t.images) == null
            ? void 0
            : t.filter(function (e) {
                return o(
                  "AdsDACreativeFlexMediaUtils",
                ).isValidDARelatedMediaOptInStatus(e.opt_in_status);
              }),
        i =
          r == null ||
          (n = r.creative) == null ||
          (n = n.media_sourcing_spec) == null ||
          (n = n.related_media) == null ||
          (n = n.videos) == null
            ? void 0
            : n.filter(function (e) {
                return o(
                  "AdsDACreativeFlexMediaUtils",
                ).isValidDARelatedMediaOptInStatus(e.opt_in_status);
              });
      return (a != null && a.length > 0) || (i != null && i.length > 0);
    }
    function x(e) {
      var t,
        n,
        r,
        a,
        i,
        l = o("DeepRecordUtils").maybeToPlainObject(e),
        s =
          l == null || (t = l.creative) == null
            ? void 0
            : t.media_sourcing_spec;
      if (s == null) return !1;
      var u = (n = s.related_media) == null ? void 0 : n.images,
        c = (r = s.related_media) == null ? void 0 : r.videos;
      if ((u != null && u.length > 0) || (c != null && c.length > 0)) return !0;
      var d = s.images,
        m = s.videos;
      return !!(
        ((a =
          d == null
            ? void 0
            : d.some(function (e) {
                return (e == null ? void 0 : e.source) === "related_media";
              })) != null &&
          a) ||
        ((i =
          m == null
            ? void 0
            : m.some(function (e) {
                return (e == null ? void 0 : e.source) === "related_media";
              })) != null &&
          i)
      );
    }
    function $(e) {
      var t = [];
      return (
        p(e) && t.push("uploaded_media"),
        D(e) && t.push("related_media"),
        t
      );
    }
    function P(e) {
      var t,
        n,
        r = o("DeepRecordUtils").maybeToPlainObject(e);
      if (!p(e) || !L("silent")) return !1;
      var a =
          r == null ||
          (t = r.creative) == null ||
          (t = t.media_sourcing_spec) == null ||
          (t = t.related_media) == null ||
          (t = t.images) == null
            ? void 0
            : t.find(function (e) {
                return (
                  e.opt_in_status ===
                  o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType
                    .OPT_IN_AS_INFERRED_DA_INTRO_CARD
                );
              }),
        i =
          r == null ||
          (n = r.creative) == null ||
          (n = n.media_sourcing_spec) == null ||
          (n = n.related_media) == null ||
          (n = n.videos) == null
            ? void 0
            : n.find(function (e) {
                return (
                  e.opt_in_status ===
                  o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType
                    .OPT_IN_AS_INFERRED_DA_INTRO_CARD
                );
              });
      return a != null || i != null;
    }
    function N(e, t) {
      return o(
        "hasFormatTransformationWithDataSource",
      ).hasFormatTransformationWithDataSource(
        e,
        "single_media",
        "related_media",
      ) ||
        o(
          "hasFormatTransformationWithDataSource",
        ).hasFormatTransformationWithDataSource(
          e,
          "single_media",
          "manual_uploads",
        )
        ? !0
        : t === !0
          ? !o(
              "hasFormatTransformationWithDataSource",
            ).hasFormatTransformationWithDataSource(e, "single_media", "none")
          : !1;
    }
    function M(e) {
      if (!r("gkx")("12494") || e.length === 0) return !1;
      var t =
        e.every(function (e) {
          return p(e);
        }) ||
        e.every(function (e) {
          return !p(e);
        });
      return t
        ? e.every(function (e) {
            return d(e);
          })
        : !1;
    }
    function w(e) {
      if (e.length <= 1) return !0;
      var t = function (t) {
          var e,
            n,
            r = o("AdsChildAttachmentsUtils").getChildAttachments(t),
            a = r == null ? void 0 : r[0];
          return (e =
            (n = a == null ? void 0 : a.image_hash) != null
              ? n
              : a == null
                ? void 0
                : a.video_id) != null
            ? e
            : null;
        },
        n = t(e[0]);
      return e.every(function (e) {
        return t(e) === n;
      });
    }
    ((l.MIN_IMAGE_COUNT_FOR_DA_CAROUSEL_TO_COLLECTION = e),
      (l.isEligibleForDACarouselIntroCardRevamp = c),
      (l.isAdgroupEligibleForDACarouselIntroCardRevamp = d),
      (l.hasCarouselFormatTransformatSpec = m),
      (l.hasDAIntroCard = p),
      (l.hasDAMapCard = _),
      (l.hasDAProfileCard = f),
      (l.shouldAddLeadingStaticCard = g),
      (l.isDACreativeFlexDefaultOnJKEnabled = h),
      (l.isDACreativeFlexDefaultOnProviderEnabled = y),
      (l.isDACreativeFlexDefaultOnGKEnabled = C),
      (l.isM1_1FlowEnabledForM0Flow = b),
      (l.passFlexibleFormatAdexGK = v),
      (l.passFlexibleFormatFilteringGK = S),
      (l.passFlexibleFormatAndRelatedMediaAdexGK = R),
      (l.passUpdatePrimaryAdWithDAIntroCardGK = L),
      (l.isDynamicAdsCatalogProductIntroCardError = E),
      (l.shouldApplyCollectionWithUploadedMediaDefaultOn = k),
      (l.isUserEligibleForDAFormatControlDefaultOn = I),
      (l.isAdAccountEligibleForDAFormatControlDefaultOn = T),
      (l.hasRelatedMedia = D),
      (l.hasRelatedMediaInSpec = x),
      (l.getAvailableMediaSources = $),
      (l.hasInferredDAIntroCard = P),
      (l.shouldShowMediaFilterForDA = N),
      (l.canBulkEditDAFlexibleFormat = M),
      (l.hasUniformIntroCardMedia = w));
  },
  98,
);
