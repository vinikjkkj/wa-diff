__d(
  "AdsAdgroupConnectedSourcesMutators",
  [
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsConnectedSourcesProductsOptOutUtils",
    "AdsCreativeEnrollmentDefaultOnStoreUtils",
    "AdsGovernedCreativeFeaturesMutators",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataSpecBuilderMutators",
    "AdsMutators",
    "AdsProductExtensionsUtil",
    "AdsSiteLinksComparableDomain",
    "AdsUEditorWebsiteMutators",
    "AdsWebsiteMediaSpecMutators",
    "FBLogger",
    "ODS",
    "ProductSetOptimizationSettingForAdgroupAPI",
    "SEFunnelLogger",
    "adsCallToActionGetDefaultCallToActionType",
    "catalogEnrollTypesToIgnoreForPE",
    "getErrorSafe",
    "gkx",
    "immutable",
    "isEmpty",
    "isSEScaledAlphaEnabled",
    "isSiteLinksManuallyOn",
    "isValidURL",
    "justknobx",
    "requireDeferred",
    "toSiteLinksSpecToWrite",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("requireDeferred")("AdsCreativeSiteLinksAPICallUtils").__setRef(
        "AdsAdgroupConnectedSourcesMutators",
      );
    function c(e, t) {
      var n,
        a =
          (n = e.creative) == null ||
          (n = n.creative_sourcing_spec) == null ||
          (n = n.catalog) == null ||
          (n = n.action_metadata) == null
            ? void 0
            : n.type;
      return !r("gkx")("29360") ||
        !o(
          "AdsMetadataConnectedSourcesUtils",
        ).isConnectedSourcesOptInForAdgroup(e) ||
        a === "MANUAL" ||
        (a != null &&
          o(
            "catalogEnrollTypesToIgnoreForPE",
          ).CATALOG_ENROLL_TYPES_TO_IGNORE.includes(a))
        ? t
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.catalog.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(
              "MANUAL",
            ),
            r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
              .associated_product_set_id.delete,
          )(t);
    }
    function d(e, t, n) {
      if (
        !o(
          "AdsConnectedSourcesProductsOptOutUtils",
        ).shouldWithdrawDefaultCatalogForNewStickyProductsOptOut(e, t, n)
      )
        return t;
      var r = c(t, t);
      return (
        r !== t &&
          (s || (s = o("ODS"))).bumpEntityKey(
            8427,
            "AdsAdgroupConnectedSourcesMutators",
            "default_catalog_withdrawn_for_sticky_products_opt_out",
          ),
        r
      );
    }
    function m(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.product_extensions.delete,
        r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec.catalog
          .delete,
        r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
          .associated_product_set_id.delete,
      )(e);
    }
    function p(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r("AdsAdgroupRecordAccessors")).creative.degrees_of_freedom_spec
          .creative_features_spec.site_extensions.delete,
        t.creative.creative_sourcing_spec.site_links_spec.delete,
        t.creative.creative_sourcing_spec.site_links_data_consented.delete,
        t.creative.creative_sourcing_spec.dynamic_site_links_spec.delete,
      )(e);
    }
    function _(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
          .site_links_data_consented,
        n = r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.site_extensions,
        o = e;
      return (
        t.enroll_status.get(e) !== "OPT_OUT" &&
          (o = t.action_metadata.type.set(
            "DEFAULT",
            t.enroll_status.set("OPT_OUT", o),
          )),
        n.enroll_status.get(e) !== "OPT_OUT" &&
          (o = n.action_metadata.type.set(
            "DEFAULT_OFF",
            n.enroll_status.set("OPT_OUT", o),
          )),
        o
      );
    }
    function f(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r(
          "AdsAdgroupRecordAccessors",
        )).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
          "OPT_OUT",
        ),
        t.creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
          "MANUAL",
        ),
        t.creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
          "OPT_OUT",
        ),
        t.creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
          "MANUAL",
        ),
      )(e);
    }
    function g(e, t) {
      return t == null || t.isEmpty()
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.site_links_spec.set(
            r("toSiteLinksSpecToWrite")(t),
            e,
          );
    }
    function h(e, t) {
      var n,
        a = o("AdsSiteLinksComparableDomain").getSiteLinksComparableDomain(t);
      return a == null ||
        !r("isValidURL")(t) ||
        r("isSEScaledAlphaEnabled")({ silent: !0 }) ||
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) ||
        o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e) ||
        a !==
          o("AdsSiteLinksComparableDomain").getSiteLinksComparableDomain(
            (n = e.creative) == null || (n = n.creative_sourcing_spec) == null
              ? void 0
              : n.source_url,
          ) ||
        o("AdsSiteLinksComparableDomain").isRetailerMode(e)
        ? e
        : b(e, a);
    }
    function y() {
      return !r("justknobx")._("7002");
    }
    function C(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.site_links_data_consented) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function b(e, t) {
      var n,
        a =
          (n = e.creative) == null || (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.site_links_spec,
        i =
          a == null
            ? void 0
            : a.filter(function (e) {
                var n = o("AdsSiteLinksComparableDomain").readStoredSiteLink(e);
                return (
                  o("AdsSiteLinksComparableDomain").isKeptSiteLink(n) ||
                  o(
                    "AdsSiteLinksComparableDomain",
                  ).getSiteLinksComparableDomain(n.site_link_url) === t
                );
              });
      if (i == null || i.size === (a == null ? void 0 : a.size)) return e;
      var l = r(
        "AdsAdgroupRecordAccessors",
      ).creative.creative_sourcing_spec.site_links_spec.set(i, e);
      return i.size > 0 || r("isSiteLinksManuallyOn")(l) || (C(l) && y())
        ? l
        : _(l);
    }
    function v(e, t) {
      return (
        t != null &&
        t !== "MANUAL" &&
        !o(
          "catalogEnrollTypesToIgnoreForPE",
        ).CATALOG_ENROLL_TYPES_TO_IGNORE.includes(t) &&
        o(
          "AdsConnectedSourcesProductsOptOutUtils",
        ).shouldSkipDefaultCatalogForStickyProductsOptOut(e)
      );
    }
    function S(e, t, n, r, a, i, l, u, c, d, m, p, _, f) {
      (c === void 0 && (c = !1),
        d === void 0 && (d = null),
        m === void 0 && (m = null),
        p === void 0 && (p = null),
        _ === void 0 && (_ = !1),
        f === void 0 && (f = null));
      var g = r != null ? r : "MANUAL";
      return n &&
        g !== "MANUAL" &&
        o(
          "AdsGovernedCreativeFeaturesMutators",
        ).isCreativeSetupGovernanceEnabled() &&
        o(
          "AdsCreativeEnrollmentDefaultOnStoreUtils",
        ).isCreativeEnrollmentDefaultOnVetoedForSelectedAccount("catalog")
        ? e
        : n && v(e, r)
          ? ((s || (s = o("ODS"))).bumpEntityKey(
              8427,
              "AdsAdgroupConnectedSourcesMutators",
              "default_catalog_skipped_for_products_opt_out",
            ),
            e)
          : n
            ? L(e, t, g, a, i, l, u, c, d, m, p, _)
            : E(e, g, a, i, d, m, p, f);
    }
    function R(e) {
      return e === !0 || !r("gkx")("27623");
    }
    function L(e, t, a, i, l, s, u, c, d, m, p, _) {
      (a === void 0 && (a = "DEFAULT"),
        c === void 0 && (c = !1),
        d === void 0 && (d = null),
        m === void 0 && (m = null),
        p === void 0 && (p = null),
        _ === void 0 && (_ = !1));
      var f = e.account_id;
      f != null &&
        i != null &&
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).updateConnectedSourceCatalogOptOutTimestamp(
          l,
          f,
          t,
          i,
          d,
          m,
          p,
          e.id,
        );
      var g =
          _ ||
          (a !== "MANUAL" &&
            (o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
              "product_extensions",
            ) ||
              o(
                "AdsCreativeEnrollmentDefaultOnStoreUtils",
              ).isCreativeEnrollmentDefaultOnVetoedForSelectedAccount(
                "product_extensions",
              ))),
        h = n("immutable"),
        y =
          s != null && s.length > 0
            ? s.map(function (e) {
                return h.Map(e);
              })
            : null,
        C = [].concat(
          g
            ? []
            : [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                  "OPT_IN",
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                  o(
                    "AdsMetadataConnectedSourcesUtils",
                  ).convertAdsConnectedSourcesCatalogActionSourceToPEActionSource(
                    a,
                  ),
                ),
              ].concat(
                c
                  ? []
                  : [
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
                        "OPT_IN",
                      ),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
                        "DEFAULT",
                      ),
                    ],
              ),
          [
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.catalog.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(
              a,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.associated_product_set_id.set(t),
            r("AdsAdgroupRecordAccessors").product_set_optimization_setting.set(
              u != null
                ? u
                : o("ProductSetOptimizationSettingForAdgroupAPI")
                    .ProductSetOptimizationSettingForAdgroupAPI.DISABLED,
            ),
          ],
          y != null
            ? [
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.product_data.set(h.List(y)),
              ]
            : [],
        );
      return o("AdsMutators").chain.apply(o("AdsMutators"), C)(e);
    }
    function E(e, t, n, a, i, l, s, u) {
      (i === void 0 && (i = null),
        l === void 0 && (l = null),
        s === void 0 && (s = null),
        u === void 0 && (u = null));
      var c = e.account_id;
      return (
        c != null &&
          n != null &&
          t === "MANUAL" &&
          R(u) &&
          o(
            "AdsMetadataConnectedSourcesUtils",
          ).updateConnectedSourceCatalogOptOutTimestamp(
            a,
            c,
            null,
            n,
            i,
            l,
            s,
            e.id,
          ),
        o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.enroll_status.set(
            "OPT_OUT",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(t),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
            "OPT_OUT",
          ),
          r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .creative_features_spec.product_extensions.customizations.delete,
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).convertAdsConnectedSourcesCatalogActionSourceToPEActionSource(t),
          ),
          r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
            .associated_product_set_id.delete,
        )(e)
      );
    }
    function k(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.source_url.set(t),
      )(e);
    }
    function I(e, t, n) {
      var r;
      if (t == null || t === "") return e;
      var a =
        (r = e.creative) == null || (r = r.creative_sourcing_spec) == null
          ? void 0
          : r.source_url;
      if (a != null && a !== "") return e;
      var i = e,
        l = !1;
      ((i = k(e, t)), (l = !0));
      var s = e.account_id;
      return (
        o("SEFunnelLogger").logL1SourceUrlSync(
          {
            ad_account_id: s != null ? String(s) : null,
            adgroup_id: e.id != null ? String(e.id) : null,
            object_level: "ad_level",
            raw_object_creation_source: n,
          },
          { gk_passed: !0, source_url_updated: l },
        ),
        i
      );
    }
    function T(e, t, n, r) {
      return {
        ad_account_id: n != null ? String(n) : null,
        adgroup_id: e.id != null ? String(e.id) : null,
        campaign_id: (t == null ? void 0 : t.id) != null ? String(t.id) : null,
        object_level: "ad_level",
        raw_object_creation_source: r,
      };
    }
    function D(e, t, n, a, i) {
      var l = r("justknobx")._("3523");
      return (
        l ||
          o("SEFunnelLogger").logL1DefaultingTrigger(T(e, t, n, i), {
            caller: a,
            skip_reason: "weblink_prefill_jk_off",
            triggered: !1,
          }),
        l
      );
    }
    function x(e, t, n, a, i, l, s, c, d, m) {
      var p,
        _ = function (r, i) {
          o("SEFunnelLogger").logL1DefaultingTrigger(T(e, n, a, m), {
            caller: d,
            skip_reason: i,
            triggered: r,
          });
        };
      if (!r("justknobx")._("4840")) {
        _(!1, "jk_off");
        return;
      }
      if (t == null || t === "") {
        _(!1, "no_weblink");
        return;
      }
      if (n == null || a == null) {
        _(!1, "missing_context");
        return;
      }
      if (c) {
        _(!1, "default_on");
        return;
      }
      var f =
        (p = e.creative) == null || (p = p.creative_sourcing_spec) == null
          ? void 0
          : p.site_links_spec;
      if (f != null && f.size > 0) {
        _(!1, "has_site_links");
        return;
      }
      (_(!0, null),
        u
          .load()
          .then(function (r) {
            return r.loadSiteLinksWithMutation(
              n,
              t,
              a,
              e.id,
              i,
              d,
              l != null ? [].concat(l) : null,
              s,
              e,
              null,
              m,
            );
          })
          .catch(function (e) {
            r("FBLogger")("ads")
              .catching(r("getErrorSafe")(e))
              .mustfix("Site-links defaulting orchestrator trigger failed");
          }));
    }
    function $(e, t) {
      var n,
        a,
        i = r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
          .website_media_spec,
        l = i.enroll_status.get(e) === "OPT_OUT";
      return t
        ? l &&
          ((n = (a = i.media.get(e)) == null ? void 0 : a.size) != null
            ? n
            : 0) === 0
          ? i.action_metadata.type.delete(i.enroll_status.delete(e))
          : P(e, "website_media")
        : l
          ? e
          : o("AdsMutators").chain(
              i.enroll_status.set("OPT_OUT"),
              i.action_metadata.type.set("MANUAL"),
            )(e);
    }
    function P(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y = (n = e.creative) == null ? void 0 : n.creative_sourcing_spec,
        C = r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec;
      switch (t) {
        case "website_media":
          return ((a =
            y == null ||
            (i = y.website_media_spec) == null ||
            (i = i.media) == null
              ? void 0
              : i.size) != null
            ? a
            : 0) === 0 ||
            (y == null || (l = y.website_media_spec) == null
              ? void 0
              : l.enroll_status) === "OPT_IN"
            ? e
            : r("justknobx")._("7643")
              ? o(
                  "AdsMetadataSpecBuilderMutators",
                ).WebsiteMediaSpecBuilder.withEnrollment(
                  o(
                    "AdsMetadataSpecBuilderMutators",
                  ).WebsiteMediaSpecBuilder.markDataAvailable(e),
                  "OPT_IN",
                  "MANUAL",
                )
              : o("AdsMutators").chain(
                  C.website_media_spec.enroll_status.set("OPT_IN"),
                  C.website_media_spec.action_metadata.type.set("MANUAL"),
                )(e);
        case "site_links":
          return (((s =
            y == null || (u = y.site_links_spec) == null ? void 0 : u.size) !=
          null
            ? s
            : 0) === 0 &&
            (y == null || (c = y.dynamic_site_links_spec) == null
              ? void 0
              : c.enroll_status) !== "OPT_IN") ||
            (y == null || (d = y.site_links_data_consented) == null
              ? void 0
              : d.enroll_status) === "OPT_IN" ||
            !r("justknobx")._("7268")
            ? e
            : o("AdsMutators").chain(
                C.site_links_data_consented.enroll_status.set("OPT_IN"),
                C.site_links_data_consented.action_metadata.type.set("MANUAL"),
                C.site_links_data_consented.scope.set("DATA_CONSENT_ELIGIBLE"),
              )(e);
        case "app_info":
          return ((y == null ||
          (m = y.app_info_spec) == null ||
          (m = m.media) == null
            ? void 0
            : m.enroll_status) !== "OPT_IN" &&
            (y == null ||
            (p = y.app_info_spec) == null ||
            (p = p.app_information) == null
              ? void 0
              : p.enroll_status) !== "OPT_IN" &&
            (y == null ||
            (_ = y.app_info_spec) == null ||
            (_ = _.ratings_and_reviews) == null
              ? void 0
              : _.enroll_status) !== "OPT_IN") ||
            (y == null || (f = y.app_info_spec) == null
              ? void 0
              : f.enroll_status) === "OPT_IN"
            ? e
            : o("AdsMutators").chain(
                C.app_info_spec.enroll_status.set("OPT_IN"),
                C.app_info_spec.action_metadata.type.set("MANUAL"),
              )(e);
        case "app_reviews":
          return (y == null ||
          (g = y.app_info_spec) == null ||
          (g = g.ratings_and_reviews) == null
            ? void 0
            : g.enroll_status) === "OPT_IN"
            ? e
            : o("AdsMutators").chain(
                C.app_info_spec.ratings_and_reviews.enroll_status.set("OPT_IN"),
                C.app_info_spec.ratings_and_reviews.action_metadata.type.set(
                  "MANUAL",
                ),
              )(e);
        case "products":
          return (y == null || (h = y.catalog) == null
            ? void 0
            : h.enroll_status) === "OPT_IN"
            ? e
            : o("AdsMutators").chain(
                C.catalog.enroll_status.set("OPT_IN"),
                C.catalog.action_metadata.type.set("MANUAL"),
              )(e);
        default:
          return e;
      }
    }
    function N(e) {
      var t,
        n,
        a = e;
      return (
        ((t = e.creative) == null || (t = t.creative_sourcing_spec) == null
          ? void 0
          : t.featured_offering_spec) != null &&
          ((a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.media.delete(
            a,
          )),
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.featured_offering_asset_id.delete(
            a,
          )),
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.mgenai_website_entity_id.delete(
            a,
          ))),
        ((n = e.creative) == null || (n = n.creative_sourcing_spec) == null
          ? void 0
          : n.website_media_spec) != null &&
          (a = r("justknobx")._("7643")
            ? o(
                "AdsMetadataSpecBuilderMutators",
              ).WebsiteMediaSpecBuilder.buildNeverFetchedSpec(a)
            : o("AdsWebsiteMediaSpecMutators").resetWebsiteMediaSpec(a)),
        a
      );
    }
    function M(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.catalog) == null ||
          (t = t.action_metadata) == null
            ? void 0
            : t.type;
      return n !== "DEFAULT"
        ? e
        : o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
              .catalog.delete,
            r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
              .associated_product_set_id.delete,
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.product_extensions.delete,
          )(e);
    }
    function w(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.app_info_spec;
      return n == null
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.app_info_spec.delete(e);
    }
    function A(t, n, a, i, l) {
      var s,
        u,
        c,
        d,
        m,
        p =
          (s = t.creative) == null ||
          (s = s.call_to_action) == null ||
          (s = s.value) == null
            ? void 0
            : s.link;
      if (
        !o("AdsProductExtensionsUtil").isFromExistingPost(
          r("AdsAdgroupRecordAccessors").creative.call_to_action.delete(t),
        ) ||
        (!(e || (e = r("isEmpty")))(p) && p !== l) ||
        o("AdsAssetFeedUtils").hasAssetFeedSpecWithoutOnlyOnsiteDestinations(t)
      )
        return null;
      var _ = a == null ? void 0 : a.objective,
        f =
          (u =
            (c =
              (d = t.creative) == null || (d = d.call_to_action) == null
                ? void 0
                : d.type) != null
              ? c
              : (m = t.creative) == null
                ? void 0
                : m.call_to_action_type) != null
            ? u
            : _ != null
              ? r("adsCallToActionGetDefaultCallToActionType")(
                  _,
                  o("AdsAPICampaignRecordUtils").getPromotedObjectType(_, n),
                )
              : null;
      return f == null
        ? null
        : o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.call_to_action_type.set(f),
            r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(f),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.link.set(i),
          )(t);
    }
    function F(t, n, a, i, l, s) {
      var u;
      s === void 0 && (s = !1);
      var c =
        (u = t.creative) == null || (u = u.creative_sourcing_spec) == null
          ? void 0
          : u.source_url;
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.source_url.set(l),
        function (t) {
          if (s && !(e || (e = r("isEmpty")))(l)) {
            var u = A(t, n, a, l, c);
            if (u != null) return u;
          }
          if (
            n != null &&
            a != null &&
            i != null &&
            !o("AdsProductExtensionsUtil").isFromExistingPost(t)
          ) {
            var d = r("AdsAPIAdgroupRecordGetWebsiteURL")(t, i);
            if ((e || (e = r("isEmpty")))(d) && !(e || (e = r("isEmpty")))(l)) {
              var m, p;
              return (
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).logPESourceUrlFallbackUrlSynced(
                  (m = t.account_id) != null ? m : null,
                  (p = t.id) != null ? p : null,
                  l,
                ),
                o("AdsUEditorWebsiteMutators").setWebsiteURLReducerUtil({
                  adgroup: t,
                  campaign: n,
                  campaignGroup: a,
                  specPlugin: i,
                  websiteURL: l,
                })
              );
            }
          }
          return t;
        },
      )(t);
    }
    function O(e, t, n, a, i, l) {
      var s,
        u =
          l !== void 0
            ? l != null
              ? l
              : ""
            : a != null &&
                (s = r("AdsAPIAdgroupRecordGetWebsiteURL")(e, a)) != null
              ? s
              : "",
        c = e;
      return (
        t != null &&
          n != null &&
          a != null &&
          (c = o("AdsUEditorWebsiteMutators").setWebsiteURLReducerUtil({
            adgroup: e,
            campaign: t,
            campaignGroup: n,
            specPlugin: a,
            websiteURL: i,
          })),
        !o("AdsProductExtensionsUtil").isFromExistingPost(c) &&
          i !== u &&
          (c = k(c, i)),
        c
      );
    }
    ((l.withdrawDefaultedCatalogConsentMutator = c),
      (l.withdrawDefaultedCatalogForNewStickyProductsOptOutMutator = d),
      (l.adsDeleteConnectedSourceCatalogMutator = m),
      (l.adsDeleteConnectedSourceSiteExtensionsMutator = p),
      (l.setEmptySiteLinksOffMutator = _),
      (l.setKeptSiteLinksManualOffMutator = f),
      (l.setKeptSiteLinksSpecMutator = g),
      (l.prepareSiteLinksDomainChangeMutator = h),
      (l.isKeepSiteLinksOnThroughDomainRefreshEnabled = y),
      (l.clearStaleSiteLinksForDomainMutator = b),
      (l.isAutomaticCatalogOptInSkipped = v),
      (l.setConnectedSourcesCatalogEnrollStatusMutator = S),
      (l.setSourceUrlMutator = k),
      (l.syncSourceUrlIfUnsetMutator = I),
      (l.isSiteLinksTriggerOnWeblinkPrefillEnabled = D),
      (l.triggerSiteLinksIfEligible = x),
      (l.toggleWebsiteMediaConsentMutator = $),
      (l.upwardGrantConnectedSourceConsentMutator = P),
      (l.clearStaleWebsiteHighlightsMutator = N),
      (l.clearDefaultSourcedCatalogMutator = M),
      (l.clearStaleAppInfoMutator = w),
      (l.setSourceUrlAndDestinationUrlMutator = F),
      (l.setDestinationUrlAndSourceUrlMutator = O));
  },
  98,
);
