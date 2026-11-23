__d(
  "AdsFlexibleFormatTransformationUtils",
  [
    "AdCreativeFeatureActionTypeUtils",
    "AdsAPIAdgroupRecordUtils",
    "AdsAppExperiencesUtils",
    "AdsUGCExtendAdCardGating",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t === "collage"
        ? e === "collage" || e === "photo_collage"
        : e === t;
    }
    function s(t, n) {
      var o,
        a,
        i,
        l =
          ((o = t.creative) == null ? void 0 : o.format_transformation_spec) !=
          null,
        s =
          (a = t.creative) == null ||
          (a = a.degrees_of_freedom_spec) == null ||
          (a = a.creative_features_spec) == null ||
          (a = a.site_extensions) == null
            ? void 0
            : a.enroll_status;
      if (
        s !== "OPT_IN" &&
        (n === "sa_collection" ||
          (!l && (n === "carousel" || n === "video_slideshow")))
      )
        return !1;
      var u = (i = t.creative) == null ? void 0 : i.format_transformation_spec;
      if ((u instanceof r("immutable").List && (u = u.toJS()), u != null)) {
        var c = n;
        if (n === "video_slideshow") {
          var d = u.some(function (e) {
            return e.format === "video_slideshow";
          });
          d || (c = "carousel");
        }
        var m = u.filter(function (t) {
          var n = t.data_source;
          return (
            e(t.format, c) &&
            n != null &&
            n.length > 0 &&
            !n.includes("site_links")
          );
        });
        if (m.length > 0) return !1;
      }
      return !0;
    }
    var u = ["sa_collection", "carousel", "video_slideshow"];
    function c(e) {
      var t,
        n,
        r,
        a =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null
            ? void 0
            : t.site_extensions,
        i = a == null || (n = a.action_metadata) == null ? void 0 : n.type,
        l =
          (a == null ? void 0 : a.enroll_status) === "OPT_OUT"
            ? !o(
                "AdCreativeFeatureActionTypeUtils",
              ).isExplicitAdvertiserActionType(i)
            : (a == null ? void 0 : a.enroll_status) === "OPT_IN" &&
              i === "DEFAULT";
      return (
        l &&
        ((r = e.creative) == null ? void 0 : r.format_transformation_spec) !=
          null &&
        !u.some(function (t) {
          return s(e, t);
        })
      );
    }
    function d(e, t) {
      var n,
        r =
          (n = e.creative) == null || (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.app_info_spec,
        o = (r == null ? void 0 : r.enroll_status) === "OPT_IN",
        a = m(e, t);
      return a && o;
    }
    function m(t, n) {
      var o,
        a = (o = t.creative) == null ? void 0 : o.format_transformation_spec;
      if ((a instanceof r("immutable").List && (a = a.toJS()), a != null)) {
        var i = a.filter(function (t) {
          var r = t.data_source;
          return (
            e(t.format, n) &&
            r != null &&
            r.length > 0 &&
            !r.includes("app_information")
          );
        });
        if (i.length > 0) return !1;
      }
      return !0;
    }
    function p(t, n) {
      var o,
        a,
        i,
        l,
        s =
          ((o = t.creative) == null ? void 0 : o.format_transformation_spec) !=
          null,
        u =
          (a = t.creative) == null ||
          (a = a.degrees_of_freedom_spec) == null ||
          (a = a.creative_features_spec) == null ||
          (a = a.product_extensions) == null
            ? void 0
            : a.enroll_status;
      if (u !== "OPT_IN" && (n === "sa_collection" || (!s && n === "carousel")))
        return !1;
      var c =
        (i = t.creative) == null ||
        (i = i.degrees_of_freedom_spec) == null ||
        (i = i.creative_features_spec) == null ||
        (i = i.product_extensions) == null ||
        (i = i.customizations) == null ||
        (i = i.pe_carousel) == null
          ? void 0
          : i.enroll_status;
      if (n === "carousel" && c !== "OPT_IN") return !1;
      var d = (l = t.creative) == null ? void 0 : l.format_transformation_spec;
      if ((d instanceof r("immutable").List && (d = d.toJS()), d != null)) {
        var m = d.filter(function (t) {
          var r = t.data_source;
          return (
            e(t.format, n) &&
            r != null &&
            r.length > 0 &&
            !r.includes("catalog")
          );
        });
        if (m.length > 0) return !1;
      }
      return !0;
    }
    function _(e) {
      var t = e.adObjectsList;
      return t == null || t.length === 0
        ? !1
        : t.every(function (e) {
            var t = e.adgroup,
              n = e.campaignGroup;
            if (t != null && o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t))
              return !1;
            var r = n == null ? void 0 : n.special_ad_categories;
            return o(
              "AdsAppExperiencesUtils",
            ).isAdSetupEligibleForAppExperiences(
              r == null ? null : Array.from(r, String),
              n == null ? void 0 : n.buying_type,
              !1,
              null,
              null,
            );
          });
    }
    function f(e, t, n) {
      return e === "sa_collection" && t === "ugc"
        ? g(n)
        : e !== "sa_collection" || (t !== "catalog" && t !== "site_links")
          ? !1
          : o(
              "AdsAppExperiencesUtils",
            ).isAdgroupEligibleForAdExtensionsL1AEMigration(_(n));
    }
    function g(e) {
      var t,
        n = e.ugcDraftContext;
      return (
        (n == null ? void 0 : n.status) === "ready" &&
        n.shop.detectedUGCEnabled &&
        o("AdsUGCExtendAdCardGating").hasExtendAdSourceBesidesUGC(
          (t = e.eligibleFormatDataSourceMap) == null
            ? void 0
            : t.get("sa_collection"),
        ) &&
        _(e) &&
        !o("AdsAppExperiencesUtils").isEligibleForL1AEM4() &&
        !o("AdsAppExperiencesUtils").isEligibleForL1AEM41() &&
        o("AdsUGCExtendAdCardGating").isUGCExtendAdSurface(
          e.account,
          e.adObjectsList,
        ) &&
        o("AdsUGCExtendAdCardGating").isUGCOnExtendAdCard()
      );
    }
    function h(e, t) {
      var n,
        r,
        o =
          (n =
            (r = t.eligibleFormatDataSourceMap) == null ? void 0 : r.get(e)) !=
          null
            ? n
            : [];
      return o.filter(function (n) {
        return !f(e, n, t);
      });
    }
    function y(e, t) {
      var n;
      t === void 0 && (t = "catalog");
      var o = (n = e.creative) == null ? void 0 : n.format_transformation_spec;
      if ((o instanceof r("immutable").List && (o = o.toJS()), o == null))
        return null;
      var a = o.find(function (e) {
          return e.format === "carousel";
        }),
        i = a == null ? void 0 : a.customizations;
      if (!Array.isArray(i)) return null;
      var l = null;
      for (var s of i)
        if (s.name === "preserve_hero_media") {
          var u = s.scope;
          if (u == null || u.length === 0) l = s.enroll_status;
          else if (u.includes(t)) return s.enroll_status;
        }
      return l;
    }
    ((l.ftsEntryMatchesFormat = e),
      (l.getHasOptedInSiteLinksForGivenTargetFormat = s),
      (l.isSiteLinksFormatConsentOff = c),
      (l.getIsAppInfoPreviewEligible = d),
      (l.getHasOptedInAppInformationForGivenTargetFormat = m),
      (l.getHasOptedInProductExtensionsForGivenTargetFormat = p),
      (l.isRetiredByADUToL1AEPhase1 = f),
      (l.getRenderableDataSourcesForFormat = h),
      (l.getUseIntroCardCustomizationFromFTS = y));
  },
  98,
);
