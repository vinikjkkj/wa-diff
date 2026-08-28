__d(
  "AdsAdgroupConnectedSourcesMutators",
  [
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsProductExtensionsUtil",
    "AdsUEditorWebsiteMutators",
    "AdsWebsiteMediaSpecMutators",
    "FBLogger",
    "ProductSetOptimizationSettingForAdgroupAPI",
    "SEFunnelLogger",
    "getErrorSafe",
    "immutable",
    "isEmpty",
    "justknobx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("AdsCreativeSiteLinksAPICallUtils").__setRef(
        "AdsAdgroupConnectedSourcesMutators",
      );
    function u(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.product_extensions.delete,
        r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec.catalog
          .delete,
        r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
          .associated_product_set_id.delete,
      )(e);
    }
    function c(e, t, n, r, o, a, i, l, s, u, c, p, _) {
      (s === void 0 && (s = !1),
        u === void 0 && (u = null),
        c === void 0 && (c = null),
        p === void 0 && (p = null),
        _ === void 0 && (_ = !1));
      var f = r != null ? r : "MANUAL";
      return n ? d(e, t, f, o, a, i, l, s, u, c, p, _) : m(e, f, o, a, u, c, p);
    }
    function d(e, t, a, i, l, s, u, c, d, m, p, _) {
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
            o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
              "product_extensions",
            )),
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
    function m(e, t, n, a, i, l, s) {
      (i === void 0 && (i = null),
        l === void 0 && (l = null),
        s === void 0 && (s = null));
      var u = e.account_id;
      return (
        r("justknobx")._("1384")
          ? u != null &&
            n != null &&
            t === "MANUAL" &&
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).updateConnectedSourceCatalogOptOutTimestamp(
              a,
              u,
              null,
              n,
              i,
              l,
              s,
              e.id,
            )
          : u != null &&
            n != null &&
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).updateConnectedSourceCatalogOptOutTimestamp(
              a,
              u,
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
    function p(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.source_url.set(t),
      )(e);
    }
    function _(e, t) {
      var n;
      if (t == null || t === "") return e;
      var r =
        (n = e.creative) == null || (n = n.creative_sourcing_spec) == null
          ? void 0
          : n.source_url;
      if (r != null && r !== "") return e;
      var a = e,
        i = !1;
      ((a = p(e, t)), (i = !0));
      var l = e.account_id;
      return (
        o("SEFunnelLogger").logL1SourceUrlSync(
          {
            ad_account_id: l != null ? String(l) : null,
            adgroup_id: e.id != null ? String(e.id) : null,
            object_level: "ad_level",
          },
          { gk_passed: !0, source_url_updated: i },
        ),
        a
      );
    }
    function f(e, t, n) {
      return {
        ad_account_id: n != null ? String(n) : null,
        adgroup_id: e.id != null ? String(e.id) : null,
        campaign_id: (t == null ? void 0 : t.id) != null ? String(t.id) : null,
        object_level: "ad_level",
      };
    }
    function g(e, t, n, a) {
      var i = r("justknobx")._("3523");
      return (
        i ||
          o("SEFunnelLogger").logL1DefaultingTrigger(f(e, t, n), {
            caller: a,
            skip_reason: "weblink_prefill_jk_off",
            triggered: !1,
          }),
        i
      );
    }
    function h(e, t, n, a, i, l, u, c, d) {
      var m,
        p = function (r, i) {
          o("SEFunnelLogger").logL1DefaultingTrigger(f(e, n, a), {
            caller: d,
            skip_reason: i,
            triggered: r,
          });
        };
      if (!r("justknobx")._("4840")) {
        p(!1, "jk_off");
        return;
      }
      if (t == null || t === "") {
        p(!1, "no_weblink");
        return;
      }
      if (n == null || a == null) {
        p(!1, "missing_context");
        return;
      }
      if (c) {
        p(!1, "default_on");
        return;
      }
      var _ =
        (m = e.creative) == null || (m = m.creative_sourcing_spec) == null
          ? void 0
          : m.site_links_spec;
      if (_ != null && _.size > 0) {
        p(!1, "has_site_links");
        return;
      }
      (p(!0, null),
        s
          .load()
          .then(function (r) {
            return r.loadSiteLinksWithMutation(
              n,
              t,
              null,
              a,
              e.id,
              i,
              d,
              l != null ? [].concat(l) : null,
              u,
              null,
            );
          })
          .catch(function (e) {
            r("FBLogger")("ads")
              .catching(r("getErrorSafe")(e))
              .mustfix("Site-links defaulting orchestrator trigger failed");
          }));
    }
    function y(e, t) {
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
        _ = (n = e.creative) == null ? void 0 : n.creative_sourcing_spec,
        f = r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec;
      switch (t) {
        case "website_media":
          return ((a =
            _ == null ||
            (i = _.website_media_spec) == null ||
            (i = i.media) == null
              ? void 0
              : i.size) != null
            ? a
            : 0) === 0 ||
            (_ == null || (l = _.website_media_spec) == null
              ? void 0
              : l.enroll_status) === "OPT_IN"
            ? e
            : o("AdsMutators").chain(
                f.website_media_spec.enroll_status.set("OPT_IN"),
                f.website_media_spec.action_metadata.type.set("MANUAL"),
              )(e);
        case "app_info":
          return ((_ == null ||
          (s = _.app_info_spec) == null ||
          (s = s.media) == null
            ? void 0
            : s.enroll_status) !== "OPT_IN" &&
            (_ == null ||
            (u = _.app_info_spec) == null ||
            (u = u.app_information) == null
              ? void 0
              : u.enroll_status) !== "OPT_IN" &&
            (_ == null ||
            (c = _.app_info_spec) == null ||
            (c = c.ratings_and_reviews) == null
              ? void 0
              : c.enroll_status) !== "OPT_IN") ||
            (_ == null || (d = _.app_info_spec) == null
              ? void 0
              : d.enroll_status) === "OPT_IN"
            ? e
            : o("AdsMutators").chain(
                f.app_info_spec.enroll_status.set("OPT_IN"),
                f.app_info_spec.action_metadata.type.set("MANUAL"),
              )(e);
        case "app_reviews":
          return (_ == null ||
          (m = _.app_info_spec) == null ||
          (m = m.ratings_and_reviews) == null
            ? void 0
            : m.enroll_status) === "OPT_IN"
            ? e
            : o("AdsMutators").chain(
                f.app_info_spec.ratings_and_reviews.enroll_status.set("OPT_IN"),
                f.app_info_spec.ratings_and_reviews.action_metadata.type.set(
                  "MANUAL",
                ),
              )(e);
        case "products":
          return (_ == null || (p = _.catalog) == null
            ? void 0
            : p.enroll_status) === "OPT_IN"
            ? e
            : o("AdsMutators").chain(
                f.catalog.enroll_status.set("OPT_IN"),
                f.catalog.action_metadata.type.set("MANUAL"),
              )(e);
        default:
          return e;
      }
    }
    function C(e, t) {
      var n,
        a,
        i = e;
      if (
        (((n = e.creative) == null || (n = n.creative_sourcing_spec) == null
          ? void 0
          : n.featured_offering_spec) != null &&
          ((i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.media.delete(
            i,
          )),
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.featured_offering_asset_id.delete(
            i,
          )),
          (i = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.featured_offering_spec.mgenai_website_entity_id.delete(
            i,
          ))),
        ((a = e.creative) == null || (a = a.creative_sourcing_spec) == null
          ? void 0
          : a.website_media_spec) != null &&
          (i = o("AdsWebsiteMediaSpecMutators").resetWebsiteMediaSpec(i)),
        t === !0)
      ) {
        var l, s;
        (((l = e.creative) == null || (l = l.creative_sourcing_spec) == null
          ? void 0
          : l.site_links_spec) != null &&
          (i = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
              .site_links_spec.delete,
          )(i)),
          ((s = e.creative) == null || (s = s.creative_sourcing_spec) == null
            ? void 0
            : s.site_links_data_consented) != null &&
            (i = o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
                .site_links_data_consented.delete,
            )(i)));
      }
      return i;
    }
    function b(e) {
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
    function v(e) {
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
    function S(t, n, a, i, l) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.source_url.set(l),
        function (t) {
          if (
            n != null &&
            a != null &&
            i != null &&
            !o("AdsProductExtensionsUtil").isFromExistingPost(t)
          ) {
            var s = r("AdsAPIAdgroupRecordGetWebsiteURL")(t, i);
            if ((e || (e = r("isEmpty")))(s) && !(e || (e = r("isEmpty")))(l)) {
              var u, c;
              return (
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).logPESourceUrlFallbackUrlSynced(
                  (u = t.account_id) != null ? u : null,
                  (c = t.id) != null ? c : null,
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
    function R(e, t, n, a, i) {
      var l,
        s =
          a != null && (l = r("AdsAPIAdgroupRecordGetWebsiteURL")(e, a)) != null
            ? l
            : "",
        u = e;
      return (
        t != null &&
          n != null &&
          a != null &&
          (u = o("AdsUEditorWebsiteMutators").setWebsiteURLReducerUtil({
            adgroup: e,
            campaign: t,
            campaignGroup: n,
            specPlugin: a,
            websiteURL: i,
          })),
        !o("AdsProductExtensionsUtil").isFromExistingPost(u) &&
          i !== s &&
          (u = p(u, i)),
        u
      );
    }
    ((l.adsDeleteConnectedSourceCatalogMutator = u),
      (l.setConnectedSourcesCatalogEnrollStatusMutator = c),
      (l.setSourceUrlMutator = p),
      (l.syncSourceUrlIfUnsetMutator = _),
      (l.isSiteLinksTriggerOnWeblinkPrefillEnabled = g),
      (l.triggerSiteLinksIfEligible = h),
      (l.upwardGrantConnectedSourceConsentMutator = y),
      (l.clearStaleWebsiteHighlightsMutator = C),
      (l.clearDefaultSourcedCatalogMutator = b),
      (l.clearStaleAppInfoMutator = v),
      (l.setSourceUrlAndDestinationUrlMutator = S),
      (l.setDestinationUrlAndSourceUrlMutator = R));
  },
  98,
);
