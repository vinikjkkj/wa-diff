__d(
  "AdsMetadataConnectedSourcesUtils",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsAPIAdgroupRecord",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountSettingsIdProvider",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsConnectedSourcesAwarenessUtils",
    "AdsCreativeEndStateV2Utils",
    "AdsCreativeEnrollmentDefaultOnStoreUtils",
    "AdsImageIDClasses",
    "AdsInterfacesLogger",
    "AdsL1SimplificationArm1Utils",
    "AdsMetadataSiteExtensionDecisionTypes",
    "AdsMetadataSiteExtensionUtils",
    "AdsMetadataWebsiteDestinationUtils",
    "AdsPCAUnificationUtils",
    "AdsPECatalogCreationDecisionLogger",
    "AdsPEUrlSource",
    "AdsPromotedObjectTypes",
    "AdsSiteLinksSharedCooldownGK",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUserSettingsDataManager",
    "AdsUserSettingsProvider",
    "AdsWebsiteMediaEngagementExpansionUtils",
    "CatalogAdoptionExperimentationUtils",
    "CatalogBusinessEventsLoggerHelper",
    "ClickToMessageCTDFeatureGating",
    "ClickToWhatsAppFeatureGating",
    "DateConsts",
    "DateTime",
    "DeepRecordUtils",
    "PECatalogStickyOptOutGating",
    "PECatalogStickyOptOutLogger",
    "PECatalogStickyOptOutReader",
    "PECatalogStickyOptOutWriter",
    "SEFunnelLogger",
    "emptyArray",
    "gkx",
    "ifRequired",
    "isStringNullOrEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      return r("gkx")("7713");
    }
    function c(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("20281") : r("gkx")("15268")
      );
    }
    function d(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("9526") : r("gkx")("10109")
      );
    }
    function m() {
      return r("justknobx")._("6253");
    }
    function p(e, t, n, a, i, l, s, u) {
      var c;
      if (
        (l === void 0 && (l = "source"),
        r("AdsInterfacesLogger").logOnce({
          data:
            ((c = {}),
            (c.ad_account_id = e),
            (c.adgroup_id = t),
            (c.message = JSON.stringify({
              productSetID: n,
              sourceUrl: a,
              surface: i,
              urlTier: l,
            })),
            c),
          eventName: "ads_connected_sources_pe_url_fallback_catalog_defaulted",
        }),
        r("CatalogBusinessEventsLoggerHelper")
          .getAdsCreationLogger()
          .setEvent("ads_manager_pe_source_url_catalog_defaulting")
          .setAdAccountID(e)
          .setActionData({
            adgroup_id: t != null ? String(t) : null,
            product_set_id: n != null ? String(n) : null,
            source_url: a,
            surface: i,
            url_tier: l,
          })
          .log(),
        (u == null ? void 0 : u.shouldLogDecision) === !0)
      ) {
        var d =
          s != null
            ? s
            : l === "display"
              ? r("AdsPEUrlSource").DISPLAY
              : l === "source"
                ? r("AdsPEUrlSource").SOURCE
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        l,
                    );
                  })();
        o("AdsPECatalogCreationDecisionLogger").logPECatalogCreationDecision(
          {
            adAccountID: e,
            adgroupID: t,
            surface: i,
            url: a,
            urlTier: d,
            lookupKey: u == null ? void 0 : u.lookupKey,
          },
          {
            outcome: "success",
            reason: "catalog_defaulted",
            productSetID: n,
            catalogID: u == null ? void 0 : u.catalogID,
          },
        );
      }
    }
    function _(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.adgroup_id = t),
          (o.message = JSON.stringify({ sourceUrl: n })),
          o),
        eventName: "ads_connected_sources_pe_url_fallback_url_synced",
      });
    }
    var f = 12096e5,
      g = 12096e5,
      h = 4,
      y = 4,
      C = 1,
      b = 3,
      v = 1,
      S = 4;
    function R(e, t, n) {
      return e ? t : n;
    }
    var L = new Map([
        [
          (s = o("AdsAPIObjectives")).LINK_CLICKS,
          [(e = r("AdsPromotedObjectTypes")).WEBSITE, e.WHATSAPP],
        ],
        [
          s.OUTCOME_SALES,
          [
            e.PIXEL,
            e.WEBSITE_AND_IN_STORE,
            e.WHATSAPP,
            e.WEB_AND_APP,
            e.WEBSITE_AND_MESSAGES,
          ],
        ],
        [s.CONVERSIONS, [e.PIXEL]],
        [s.OUTCOME_ENGAGEMENT, [e.WHATSAPP, e.PIXEL]],
      ]),
      E = new Map([
        [s.LINK_CLICKS, [e.WEBSITE]],
        [s.OUTCOME_AWARENESS, [e.WEBSITE, e.NONE]],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL]],
        [s.OUTCOME_LEADS, [e.PIXEL]],
        [
          s.OUTCOME_SALES,
          [
            e.PIXEL,
            e.WEBSITE_AND_IN_STORE,
            e.WEB_AND_SHOP,
            e.WEB_AND_APP,
            e.WEBSITE_AND_MESSAGES,
          ],
        ],
        [s.CONVERSIONS, [e.PIXEL, e.WEB_AND_SHOP, e.WEB_AND_APP]],
      ]),
      k = new Map([
        [s.LINK_CLICKS, [e.WEBSITE]],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL]],
        [s.OUTCOME_LEADS, [e.PIXEL]],
        [
          s.OUTCOME_SALES,
          [e.PIXEL, e.WEBSITE_AND_IN_STORE, e.WEB_AND_SHOP, e.WEB_AND_APP],
        ],
        [s.CONVERSIONS, [e.PIXEL, e.WEB_AND_SHOP, e.WEB_AND_APP]],
      ]),
      I = n("$InternalEnum").Mirrored([
        "EMPTY_NEED_TO_ADD_MANUAL",
        "EMPTY_NOT_FOUND_NEED_TO_ADD_MANUAL",
        "NOT_ENOUGH_NEED_TO_ADD_MANUAL",
        "ENOUGH",
      ]),
      T = new Map([[s.APP_INSTALLS, [e.MOBILE_APP]]]),
      D = new Map([
        [s.APP_INSTALLS, [e.MOBILE_APP]],
        [s.CONVERSIONS, [e.MOBILE_APP]],
        [s.LINK_CLICKS, [e.MOBILE_APP]],
        [s.OUTCOME_ENGAGEMENT, [e.MOBILE_APP]],
        [
          s.OUTCOME_SALES,
          [e.MOBILE_APP, e.WEB_AND_APP, e.WEBSITE_APP_AND_IN_STORE],
        ],
      ]),
      x = new Map([
        [s.OUTCOME_AWARENESS, [e.NONE, e.WEBSITE]],
        [s.CONVERSIONS, [e.PIXEL]],
        [s.LINK_CLICKS, [e.WEBSITE]],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL]],
        [s.OUTCOME_LEADS, [e.PIXEL]],
        [s.OUTCOME_SALES, [e.PIXEL]],
      ]),
      $ = new Map([
        [s.LINK_CLICKS, [e.WEBSITE]],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL, e.WEBSITE]],
        [s.OUTCOME_LEADS, [e.PIXEL, e.WEBSITE]],
        [
          s.OUTCOME_SALES,
          [
            e.PIXEL,
            e.WEB_AND_APP,
            e.WEBSITE,
            e.WEB_AND_SHOP,
            e.WEBSITE_AND_IN_STORE,
          ],
        ],
      ]),
      P = [e.POST, e.VIDEO],
      N = [
        s.OUTCOME_ENGAGEMENT,
        s.LINK_CLICKS,
        s.OUTCOME_SALES,
        s.CONVERSIONS,
        s.OUTCOME_LEADS,
      ],
      M = [s.OUTCOME_ENGAGEMENT, s.LINK_CLICKS, s.OUTCOME_SALES],
      w = [s.OUTCOME_ENGAGEMENT, s.LINK_CLICKS, s.OUTCOME_SALES];
    function A(e) {
      return (
        o("AdsAPICampaignGroupRecordUtils").getPromotedObjectProductCatalogID(
          e,
        ) != null
      );
    }
    function F(e, t, n, r, o, a) {
      if (r.includes(t) && n === o && a()) {
        var i,
          l = (i = e.get(t)) != null ? i : [];
        if (l.includes(o)) return e;
        var s = new Map(e);
        return (s.set(t, [].concat(l, [o])), s);
      }
      return e;
    }
    function O(e) {
      return e.is_dynamic_creative_optimization === !0;
    }
    function B(e, t, n) {
      return t === r("AdsPromotedObjectTypes").WHATSAPP
        ? n === r("AdCampaignDestination").WHATSAPP
        : t === r("AdsPromotedObjectTypes").INSTAGRAM
          ? n === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
            o(
              "ClickToMessageCTDFeatureGating",
            ).enableCTDProductExtensionsIGPlacement(!0)
          : !0;
    }
    function W(e, t, n) {
      return Y(e, t, n) || K(e, t, n);
    }
    function q(e, t, n) {
      return se(e, t, n);
    }
    function U() {
      return o(
        "AdsCreativeEndStateV2Utils",
      ).shouldRenderCESConnectedSourcesUpdate();
    }
    function V() {
      return r("gkx")("2684");
    }
    function H(e, t, n, r) {
      var a,
        i = t.objective,
        l = o("AdsAPICampaignRecordUtils").getPromotedObjectType(i, e),
        s = !!(r.has(i) && (a = r.get(i)) != null && a.includes(l));
      return G(e, t, n, i, l, s);
    }
    function G(e, t, n, a, i, l, s) {
      s === void 0 && (s = !0);
      var u = l;
      (s &&
        u &&
        a === o("AdsAPIObjectives").OUTCOME_AWARENESS &&
        !o("AdsConnectedSourcesAwarenessUtils").isOCMRAwarenessGKEnabled() &&
        (u = !1),
        u === !0 &&
          w.includes(a) &&
          i === r("AdsPromotedObjectTypes").INSTAGRAM &&
          (u = o(
            "ClickToMessageCTDFeatureGating",
          ).enableCTDProductExtensionsIGPlacement(!0)));
      var c = A(t) && !o("AdsPCAUnificationUtils").isPcaUnificationEnabled(t);
      return !u || c ? !1 : z(e, n);
    }
    function z(e, t) {
      return !(
        O(e) ||
        o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAdOrCreativeAssetGroup(
          t,
        ) ||
        o("AdsChildAttachmentsUtils").isStaticCarouselAd(t) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(t.creative)
      );
    }
    function j(e, t) {
      var n = t.objective;
      if (n !== o("AdsAPIObjectives").OUTCOME_ENGAGEMENT) return !1;
      var r = o("AdsAPICampaignRecordUtils").getPromotedObjectType(n, e);
      return P.includes(r);
    }
    function K(e, t, n, a) {
      a === void 0 && (a = !1);
      var i = L,
        l = t.objective,
        s = e.destination_type,
        u = o("AdsAPICampaignRecordUtils").getPromotedObjectType(l, e);
      (it() && (i = lt(i)),
        (i = F(
          i,
          l,
          u,
          [
            o("AdsAPIObjectives").OUTCOME_SALES,
            o("AdsAPIObjectives").LINK_CLICKS,
          ],
          r("AdsPromotedObjectTypes").MOBILE_APP,
          function () {
            return r("gkx")("1848");
          },
        )),
        (i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").APP_INSTALLS],
          r("AdsPromotedObjectTypes").MOBILE_APP,
          function () {
            return r("gkx")("3139");
          },
        )),
        (i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").OUTCOME_SALES],
          r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE,
          function () {
            return r("gkx")("24640");
          },
        )),
        (i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").OUTCOME_LEADS],
          r("AdsPromotedObjectTypes").PIXEL,
          function () {
            return !0;
          },
        )),
        (i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").OUTCOME_LEADS],
          r("AdsPromotedObjectTypes").WHATSAPP,
          function () {
            return (
              s === r("AdCampaignDestination").WHATSAPP &&
              o("ClickToWhatsAppFeatureGating").isEligibleForLeadsCTWACatalog(
                !a,
              )
            );
          },
        )),
        (i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").OUTCOME_LEADS],
          r("AdsPromotedObjectTypes").ON_AD,
          function () {
            return o(
              "CatalogAdoptionExperimentationUtils",
            ).checkExpForCatalogAdoptionExperimentationNoBundles(
              "pe_expansion_leads_instant_form",
              "onsite_leadgen_pe",
              { adGroupId: n.id, silent: !a },
            );
          },
        )),
        (i = F(i, l, u, w, r("AdsPromotedObjectTypes").INSTAGRAM, function () {
          return o(
            "ClickToMessageCTDFeatureGating",
          ).enableCTDProductExtensionsIGPlacement(!0);
        })));
      for (var c of P)
        i = F(
          i,
          l,
          u,
          [o("AdsAPIObjectives").OUTCOME_ENGAGEMENT],
          c,
          function () {
            return o(
              "CatalogAdoptionExperimentationUtils",
            ).checkExpForCatalogAdoptionExperimentationNoBundles(
              "pe_expansion_engagement_on_your_ad",
              "engagement_on_your_ad_pe",
              { adGroupId: n.id, silent: !a },
            );
          },
        );
      return B(l, u, s) ? H(e, t, n, i) : !1;
    }
    function Q(e, t, n) {
      var r,
        a = o(
          "AdsMetadataSiteExtensionDecisionTypes",
        ).createSEDecisionInputResolution("not_required", "not_required"),
        i = (r = n.creative) == null ? void 0 : r.product_set_id;
      return i != null
        ? o("AdsMetadataSiteExtensionDecisionTypes").blockSEDecision(
            "IS_DYNAMIC_AD",
            a,
          )
        : o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAdOrCreativeAssetGroup(
              n,
            )
          ? o("AdsMetadataSiteExtensionDecisionTypes").blockSEDecision(
              "FLEXIBLE_FORMAT",
              a,
            )
          : o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
                n,
                ["multi_post_to_single_post_pre_test"],
              )
            ? o("AdsMetadataSiteExtensionDecisionTypes").blockSEDecision(
                "MULTI_POST",
                a,
              )
            : H(e, t, n, E)
              ? o("AdsMetadataSiteExtensionDecisionTypes").allowSEDecision(a, {
                  blockingReasonsExhaustive: !0,
                })
              : o("AdsMetadataSiteExtensionDecisionTypes").blockSEDecision(
                  "INELIGIBLE_CONNECTED_SOURCES_SETUP",
                  a,
                  {
                    blockingReasons: ["INELIGIBLE_CONNECTED_SOURCES_SETUP"],
                    blockingReasonsExhaustive: !0,
                  },
                );
    }
    var X = {
      FLEXIBLE_FORMAT: "flexible_format",
      INELIGIBLE_CONNECTED_SOURCES_SETUP: "ineligible_connected_sources_setup",
      IS_DYNAMIC_AD: "has_product_set",
      MULTI_POST: "multi_post",
    };
    function Y(e, t, n, r) {
      var a = Q(e, t, n),
        i = {
          adgroup_id: n.id,
          campaign_id: e.id,
          campaign_group_id: t.id,
          object_level: "ad_level",
          raw_object_creation_source: r,
        },
        l = t.objective,
        s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(l, e);
      if (a.outcome === "allow") {
        var u = {
          is_static_single_image_or_video: !0,
          campaign_objective: l,
          promoted_object_type: s,
        };
        return (
          o("SEFunnelLogger").logPrereqPass(i, u),
          o("SEFunnelLogger").logL1EligibilityPass(i, u),
          !0
        );
      }
      return (
        o("SEFunnelLogger").logPrereqFail(i, {
          ineligibility_reason: X[a.reason],
          campaign_objective: l,
          promoted_object_type: s,
        }),
        a.reason === "INELIGIBLE_CONNECTED_SOURCES_SETUP" &&
          o("SEFunnelLogger").logL1EligibilityFail(i, {
            is_static_single_image_or_video: !1,
            campaign_objective: l,
            promoted_object_type: s,
          }),
        !1
      );
    }
    function J(e, t, n) {
      var o;
      if (
        ((o = n.creative) == null ||
        (o = o.creative_sourcing_spec) == null ||
        (o = o.site_links_data_consented) == null
          ? void 0
          : o.enroll_status) !== "OPT_IN" ||
        Bt(n) === 0
      )
        return !1;
      var a = Q(e, t, n);
      return (
        a.outcome === "block" &&
        a.reason === "INELIGIBLE_CONNECTED_SOURCES_SETUP" &&
        z(e, n) &&
        !r("justknobx")._("7707")
      );
    }
    function Z(e, t) {
      var n =
        t != null
          ? t
          : e.every(function (e) {
              var t = e.adgroup,
                n = e.campaign,
                r = e.campaignGroup;
              return Q(n, r, t).outcome === "allow";
            });
      return n || ee(e);
    }
    function ee(e) {
      return (
        e.length > 0 &&
        e.every(function (e) {
          var t = e.adgroup,
            n = e.campaign,
            r = e.campaignGroup;
          return J(n, r, t);
        })
      );
    }
    function te(e, t, n) {
      return ne(e, t, n).isSuppressed;
    }
    function ne(e, t, n) {
      var o = Q(e, t, n).outcome === "allow";
      return {
        isSetupEligible: o,
        isSuppressed: !o && r("gkx")("27795") === !0,
      };
    }
    function re(e) {
      for (var t of e) {
        var n = t.adgroup,
          r = t.campaign,
          a = t.campaignGroup,
          i = Q(r, a, n);
        if (i.outcome === "block")
          return o("AdsMetadataSiteExtensionDecisionTypes").blockSEDecision(
            i.reason,
            i.inputResolution,
            {
              blockingReasons: i.blockingReasons,
              blockingReasonsExhaustive: !1,
            },
          );
      }
      return o("AdsMetadataSiteExtensionDecisionTypes").allowSEDecision(
        o(
          "AdsMetadataSiteExtensionDecisionTypes",
        ).createSEDecisionInputResolution("not_required", "not_required"),
        { blockingReasonsExhaustive: !0 },
      );
    }
    function oe(e) {
      var t = e.isCTMPEDefaultOn,
        n = e.siteLinksEligibilityDecision;
      if (n.outcome === "block")
        return o("AdsMetadataSiteExtensionDecisionTypes").blockSEDecision(
          n.reason,
          n.inputResolution,
          { blockingReasons: n.blockingReasons, blockingReasonsExhaustive: !1 },
        );
      var r = o(
        "AdsMetadataSiteExtensionDecisionTypes",
      ).createSEDecisionInputResolution("not_required", "not_required");
      return t
        ? o("AdsMetadataSiteExtensionDecisionTypes").blockSEDecision(
            "CTM_PE_DEFAULT_ON",
            r,
            { blockingReasonsExhaustive: !0 },
          )
        : o("AdsMetadataSiteExtensionDecisionTypes").allowSEDecision(r, {
            blockingReasonsExhaustive: !0,
          });
    }
    function ae(e, t, n, r, a) {
      var i;
      a === void 0 && (a = !0);
      var l = t.objective,
        s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(l, e),
        u = ((i = r.get(l)) == null ? void 0 : i.includes(s)) === !0;
      return G(
        e,
        t,
        n,
        l,
        s,
        o(
          "AdsMetadataWebsiteDestinationUtils",
        ).isWebsiteMetadataCampaignSetupEligible(l, s, u),
        a,
      );
    }
    function ie(e, t, n) {
      var r = t.objective;
      if (r === o("AdsAPIObjectives").OUTCOME_ENGAGEMENT) {
        var a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(r, e);
        if (
          o(
            "AdsWebsiteMediaEngagementExpansionUtils",
          ).isWebsiteMediaEngagementExpansionSetup(r, a)
        )
          return (
            G(
              e,
              t,
              n,
              r,
              a,
              o(
                "AdsWebsiteMediaEngagementExpansionUtils",
              ).hasExternalWebsiteLink(n),
            ) &&
            o(
              "AdsWebsiteMediaEngagementExpansionUtils",
            ).isWebsiteMediaEngagementExpansionEnabled()
          );
      }
      return r === o("AdsAPIObjectives").OUTCOME_AWARENESS &&
        !o("AdsWebsiteMediaEngagementExpansionUtils").hasExternalWebsiteLink(n)
        ? !1
        : ae(e, t, n, k, !1);
    }
    function le(e, t, n) {
      return H(e, t, n, $);
    }
    function se(e, t, n) {
      return ue(e, t, n) || ce(e, t, n);
    }
    function ue(e, t, n) {
      return D.has(t.objective) ? H(e, t, n, r("gkx")("9207") ? D : T) : !1;
    }
    function ce(e, t, n) {
      return (
        x.has(t.objective) &&
        r("gkx")("9207") &&
        H(e, t, n, x) &&
        r("gkx")("2292")
      );
    }
    function de(e, t, n, o, a, i) {
      return r("gkx")("23599") ? me(e, t, null, null, n, o, a, i) : !1;
    }
    function me(e, t, n, r, o, a, i, l) {
      var s = pe(e, t, o, a, i, l),
        u = s.shouldStickyOptOut;
      return u && r != null && n != null && r === n ? !1 : u;
    }
    function pe(e, t, n, r, a, i) {
      var l = t == null ? void 0 : t.ads_cs_catalog_opt_out_timestamp,
        s = fe(),
        u = Date.now(),
        c = o("PECatalogStickyOptOutGating").shouldReadGranularOptOut(e);
      return (
        o("PECatalogStickyOptOutLogger").logGranularStickyOptOutReadShadow(
          e,
          l,
          { pageId: r, objective: n, urlType: a },
          c,
          s,
          u,
          { adgroupId: i, userSettingsId: t == null ? void 0 : t.id },
        ),
        c
          ? o("PECatalogStickyOptOutReader").getStickyOptOutGranular(
              e,
              l,
              n,
              r,
              a,
              s,
              u,
            )
          : o("PECatalogStickyOptOutReader").getStickyOptOut(e, l, s, u)
      );
    }
    function _e(e, t, n, r, o) {
      return pe(e, t, n, r, o).shouldStickyOptOut;
    }
    function fe() {
      return f;
    }
    function ge(e, t) {
      var n,
        r,
        o =
          e != null &&
          (n =
            t == null || (r = t.ads_cs_sitelinks_opt_out_timestamp) == null
              ? void 0
              : r.get(e)) != null
            ? n
            : 0;
      return o === 0 ? null : { nowMs: Date.now(), stampMs: o };
    }
    function he(e, t, n) {
      var r = ge(e, t);
      if (r == null) return !1;
      var a = o("AdsSiteLinksSharedCooldownGK").isSiteLinksOptOutActive(
          r.stampMs,
          r.nowMs,
          o("AdsSiteLinksSharedCooldownGK").getSiteLinksDataConsentPauseDays(),
        ),
        i = o("AdsSiteLinksSharedCooldownGK").isSiteLinksOptOutActive(
          r.stampMs,
          r.nowMs,
          o("AdsSiteLinksSharedCooldownGK").getSEAlphaPauseDays(),
        );
      return a === i ||
        o("AdsSiteLinksSharedCooldownGK").isSEAlphaPauseEnabled(n)
        ? i
        : a;
    }
    function ye(e, t) {
      var n = ge(e, t);
      return (
        n != null &&
        o("AdsSiteLinksSharedCooldownGK").isSiteLinksOptOutActive(
          n.stampMs,
          n.nowMs,
          o("AdsSiteLinksSharedCooldownGK").getSEAlphaPauseDays(),
        )
      );
    }
    function Ce(e, t) {
      var n = ge(e, t);
      if (n == null) return null;
      var r = o("AdsSiteLinksSharedCooldownGK").isSEAlphaPauseEnabled(!0),
        a = r
          ? o("AdsSiteLinksSharedCooldownGK").getSEAlphaPauseDays()
          : o(
              "AdsSiteLinksSharedCooldownGK",
            ).getSiteLinksDataConsentPauseDays();
      return {
        expiresMs: n.stampMs + a * o("DateConsts").MS_PER_DAY,
        isActive: o("AdsSiteLinksSharedCooldownGK").isSiteLinksOptOutActive(
          n.stampMs,
          n.nowMs,
          a,
        ),
        isAlphaPause: r,
        nowMs: n.nowMs,
        stampMs: n.stampMs,
        windowDays: a,
      };
    }
    function be(e) {
      return e === "OPTED_IN" ? !0 : e === "OPTED_OUT" ? !1 : null;
    }
    function ve(e) {
      return be(
        e == null ? void 0 : e.website_selling_points_data_opt_in_status,
      );
    }
    function Se(e) {
      return be(e == null ? void 0 : e.website_reviews_data_opt_in_status);
    }
    var Re = 1;
    function Le(e) {
      return typeof e == "string"
        ? Math.floor(r("DateTime").fromISOString(e, 0).getUnixTimestamp() / 1e3)
        : Number(e != null ? e : 0);
    }
    function Ee(e) {
      var t = Le(e == null ? void 0 : e.website_media_opt_out_ts);
      return t <= 1
        ? !1
        : r("DateTime").now(0).getUnixTimestamp() - t * 1e3 <
            Re * o("DateConsts").MS_PER_DAY;
    }
    function ke(e, t) {
      var n = be(e == null ? void 0 : e.website_media_opt_in_status);
      return n === !1 && !t && r("justknobx")._("6310") && !Ee(e) ? null : n;
    }
    function Ie() {
      var e,
        t =
          (e = r("AdsUserSettingsProvider")()) == null
            ? void 0
            : e.getData().first();
      return t == null || t.isLoading() ? null : t.getValue();
    }
    function Te() {
      var e,
        t = r("AdsAccountSettingsIdProvider")();
      if (t == null) return null;
      var n =
          (e = r("AdsUserSettingsProvider")()) == null
            ? void 0
            : e.getData().get(t),
        o = n == null || n.isLoading() ? null : n.getValue();
      return o == null ? null : { settings: o, userSettingsID: t };
    }
    function De(e) {
      if (e == null) return null;
      var t = null;
      return (
        r("ifRequired")("AdsAdgroupDraftFragmentStore", function (n) {
          t = n.isNew(e);
        }),
        t
      );
    }
    function xe(e) {
      return (
        o("AdsAPIAdgroupRecordUtils").isDuplicatedAdgroup(e) &&
        o(
          "AdsCreativeEnrollmentDefaultOnStoreUtils",
        ).isEditorDefaultOnSkippedForDuplicationForSelectedAccount() &&
        De(e.id) === !0
      );
    }
    function $e(e, t) {
      return e === !0 && xe(t) ? null : e;
    }
    function Pe(e, t) {
      return e != null
        ? { actionType: "STICKY", enrollStatus: e ? "OPT_IN" : "OPT_OUT" }
        : t
          ? { actionType: "DEFAULT", enrollStatus: "OPT_IN" }
          : null;
    }
    function Ne(e, t) {
      var n,
        r,
        a = Date.now(),
        i =
          e != null &&
          (n =
            t == null || (r = t.ads_cs_dynamic_se_opt_out_timestamp) == null
              ? void 0
              : r.get(e)) != null
            ? n
            : 0,
        l = a - i < g,
        s = o("AdsSiteLinksSharedCooldownGK").isSiteLinksOptOutActive(
          i,
          a,
          o("AdsSiteLinksSharedCooldownGK").getSEAlphaPauseDays(),
        );
      return l === s ||
        o("AdsSiteLinksSharedCooldownGK").isSEAlphaPauseEnabled(!0)
        ? s
        : l;
    }
    function Me(e, t, n) {
      return (
        (o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
          ue(e, t, n)) ||
        (o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
          (W(e, t, n) || ce(e, t, n)) &&
          U())
      );
    }
    function we(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("gkx")("11348") === !0 : r("gkx")("11382") === !0
      );
    }
    function Ae(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
        q(e, t, n) &&
        U() &&
        we(!1)
      );
    }
    function Fe(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
        Y(e, t, n) &&
        U()
      );
    }
    function Oe(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
        K(e, t, n) &&
        U()
      );
    }
    function Be(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(n, e, t) &&
        ie(e, t, n) &&
        U()
      );
    }
    function We(e, t, n) {
      return (
        Fe(e, t, n) ||
        Oe(e, t, n) ||
        Ae(e, t, n) ||
        (Be(e, t, n) && r("gkx")("6023"))
      );
    }
    function qe(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.catalog) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function Ue(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.catalog) == null
          ? void 0
          : t.enroll_status) === "OPT_OUT"
      );
    }
    function Ve(e) {
      if (o("AdsMetadataSiteExtensionUtils").shouldV2DefaultOn(e))
        return "SITE_LINK_RECOMMENDATION_V2";
      if (o("AdsMetadataSiteExtensionUtils").shouldMLDefaultOn(e)) {
        var t = e == null ? void 0 : e.values().next().value,
          n = t == null ? void 0 : t.site_link_recommendation_type;
        switch (n) {
          case "GEN_AI":
          case "GEN_AI_ADOPTED_TRAFFIC":
          case "GEN_AI_CTA":
          case "GEN_AI_IAB":
          case "GEN_AI_IAB_RELEVANCY":
          case "GEN_AI_MULTI_ASSET":
          case "GEN_AI_P2P_RELEVANCY":
          case "GEN_AI_PIXEL":
          case "GEN_AI_SINGLE_ASSET":
          case "GENAI_SHORTENED":
            return "GEN_AI";
          case "CATALOG_RELEVANCY":
          case "CATALOG_RELEVANCY_COLLECTIONS":
          case "CATALOG_RELEVANCY_IAB":
          case "CATALOG_RELEVANCY_PDPS":
          case "CATALOG_RELEVANCY_PIXEL":
          case "CATALOG_RELEVANCY_PRAPI_COLLECTIONS":
          case "CATALOG_RELEVANCY_PRAPI_TO_P2P":
          case "CATALOG_RELEVANCY_PRODUCT_SET_TO_BEST_SELLERS":
          case "CRAWLED_COLLECTION":
          case "CRAWLED_HIGH_QUALITY":
          case "CRAWLED_HOMEPAGE_CREATIVE":
          case "CRAWLED_SERVICES":
          case "CRAWLED_UNCLASSIFIED_HIGH_QUALITY":
            return "CRAWLED_HIGH_QUALITY";
          case "SHOP":
          case "STICKY":
          case "BING_API":
          case "MANUAL":
          case "MANUAL_CAMPAIGN":
            return n;
          case "LLM_JUDGE_DEFAULTING":
            return "LLM_JUDGE_DEFAULTING";
        }
      }
      return null;
    }
    function He(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((a = {}),
          (a.message = JSON.stringify({
            productSetId: e,
            productCount: t,
            errorLocation: n,
          })),
          (a.adgroup_id = o),
          a),
        eventName: "ads_connected_sources_catalog_items_below_3",
      });
    }
    function Ge(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((a = {}),
          (a.message = JSON.stringify({ productSetId: e, productCount: t })),
          (a.duration = o),
          (a.adgroup_id = n),
          a),
        eventName: "ads_connected_sources_catalog_section_in_viewport",
      });
    }
    function ze(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = e.join(",")),
          (o.is_enabled = t),
          (o.custom_event_type = n),
          o),
        eventName: "ads_connected_sources_catalog_eligibility_selector",
      });
    }
    function je(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = n),
          (o.item_count = t == null ? void 0 : t.length),
          (o.action_type = e != null ? e : ""),
          (o.message = JSON.stringify(Array.from(t != null ? t : []))),
          o),
        eventName: "ads_connected_sources_site_links_default_on_notice_display",
      });
    }
    function Ke(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.caller = t),
          (i.subsequent_data = n),
          (i.message = o),
          (i.source = a),
          i),
        eventName: "ads_connected_sources_component_rendered",
      });
    }
    function Qe(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.caller = n),
          (i.subsequent_data = a),
          (i.source = o),
          (i.nav_source = t),
          i),
        eventName: "ads_connected_sources_update_site_links_manually",
      });
    }
    function Xe(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.subsequent_data = n),
          (o.caller = t),
          o),
        eventName: "ads_connected_sources_site_links_source_url_updated",
      });
    }
    function Ye(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data: ((n = {}), (n.adgroup_id = e), (n.subsequent_data = t), n),
        eventName: "ads_connected_sources_recommended_site_links_shown",
      });
    }
    function Je(e, t, n, o, a, i) {
      var l,
        s = n != null ? "OPT_IN" : "OPT_OUT",
        u = n === o ? "DEFAULT" : "CUSTOM";
      r("AdsInterfacesLogger").logOnce({
        data:
          ((l = {}),
          (l.adgroup_id = e),
          (l.event_source = t),
          (l.status = s),
          (l.change_type = u),
          (l.subsequent_data = a),
          (l.caller = i),
          l),
        eventName: "ads_creative_catalog_selection_changed",
      });
    }
    function Ze(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.is_enabled = t),
          (o.subsequent_data = n),
          o),
        eventName: "ads_connected_sources_da_info_label_eligibility_selector",
      });
    }
    function et(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.ad_account_id = e),
          (o.is_enabled = t),
          (o.subsequent_data = n),
          o),
        eventName: "ads_with_benefits_eligibility_selector",
      });
    }
    function tt(e, t, n, o) {
      var a, i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.ad_account_id = e),
          (i.item_count = o == null ? void 0 : o.size),
          (i.url = t != null ? t : ""),
          (i.action_type = n != null ? n : ""),
          (i.message = JSON.stringify(
            Array.from((a = o == null ? void 0 : o.values()) != null ? a : []),
          )),
          (i.subsequent_data = JSON.stringify({ is_dynamic_se_enabled: u() })),
          i),
        eventName: "ads_connected_sources_site_links_eligibile_for_default_on",
      });
    }
    function nt(e, t, n, o, a) {
      var i,
        l = JSON.stringify({
          default_product_set_id: n,
          default_catalog_domain: o,
          duplicate_source_product_set_state: a,
        });
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e.join(",")),
          (i.is_enabled = t),
          (i.subsequent_data = l),
          i),
        eventName: "ads_connected_sources_catalog_adding_by_default",
      });
    }
    function rt(e, t, n, o, a, i, l) {
      var s,
        u = JSON.stringify({
          old_product_set_id: n,
          new_product_set_id: t,
          old_catalog_id: a,
          new_catalog_id: o,
          url: i,
        });
      r("AdsInterfacesLogger").logOnce({
        data:
          ((s = {}),
          (s.adgroup_id = e.join(",")),
          (s.message = u),
          (s.subsequent_data = l),
          s),
        eventName: "ads_connected_sources_product_set_suggestion_change",
      });
    }
    function ot(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data: ((n = {}), (n.adgroup_id = e.join(",")), (n.message = t), n),
        eventName: "ads_connected_sources_product_set_change_toast_click",
      });
    }
    function at(e, t) {
      var n = t.objective,
        a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(n, e);
      return (
        n != null &&
        N.includes(n) &&
        a === r("AdsPromotedObjectTypes").MESSENGER
      );
    }
    function it() {
      return r("gkx")("4181");
    }
    function lt(e) {
      return (
        N.map(function (t) {
          if (e.has(t)) {
            var n,
              o = (n = e.get(t)) != null ? n : [];
            o.includes(r("AdsPromotedObjectTypes").MESSENGER) ||
              (o.push(r("AdsPromotedObjectTypes").MESSENGER), e.set(t, o));
          }
        }),
        e
      );
    }
    function st(e, t, n, a, i, l, s, u) {
      var c = { adgroupId: u, userSettingsId: a },
        d = !1,
        m = e == null ? new Map() : e;
      (n != null &&
        e != null &&
        e.has(t) &&
        (o("PECatalogStickyOptOutLogger").logGranularStickyOptOutWriteShadow(
          t,
          { pageId: l, objective: i, urlType: s },
          !1,
          c,
        ),
        o("PECatalogStickyOptOutWriter").applyOptIn(m, t, i, l, s),
        (d = !0)),
        n === null &&
          (o("PECatalogStickyOptOutLogger").logGranularStickyOptOutWriteShadow(
            t,
            { pageId: l, objective: i, urlType: s },
            !0,
            c,
          ),
          o("PECatalogStickyOptOutWriter").applyOptOut(
            m,
            t,
            i,
            l,
            s,
            Date.now(),
          ),
          (d = !0)),
        d &&
          a != null &&
          r(
            "AdsUserSettingsDataManager",
          ).setConnectedSourcesCatalogOptOutTimestamp(a, m));
    }
    function ut(e) {
      var t = new Map();
      return (
        e != null &&
          e.forEach(function (e, n) {
            t.set(n, e);
          }),
        t
      );
    }
    function ct(e) {
      var t,
        n,
        a,
        i =
          (t = r("AdsUserSettingsProvider")()) == null ||
          (t = t.getData()) == null
            ? void 0
            : t.keySeq().first();
      if (i != null) {
        var l =
          (n = r("AdsUserSettingsProvider")()) == null ? void 0 : n.get(i);
        if (!(l == null || l.isLoading())) {
          var s =
            (a = l.getValue()) == null
              ? void 0
              : a.ads_cs_catalog_opt_out_timestamp;
          if (s != null) {
            var u = ut(s),
              c = u.size;
            (o("PECatalogStickyOptOutWriter").applyOptIn(
              u,
              e,
              null,
              null,
              null,
            ),
              u.size !== c &&
                r(
                  "AdsUserSettingsDataManager",
                ).setConnectedSourcesCatalogOptOutTimestamp(i, u));
          }
        }
      }
    }
    function dt(e, t, n, a, i, l) {
      var s, u;
      if (
        !(
          !o("PECatalogStickyOptOutGating").shouldWriteGranularOptOut() ||
          n == null
        )
      ) {
        var c =
          (s = r("AdsUserSettingsProvider")()) == null ? void 0 : s.get(n);
        if (!(c == null || c.isLoading())) {
          var d = ut(
            (u = c.getValue()) == null
              ? void 0
              : u.ads_cs_catalog_opt_out_timestamp,
          );
          (t
            ? o("PECatalogStickyOptOutWriter").applyOptOut(
                d,
                e,
                a,
                i,
                l,
                Date.now(),
              )
            : o("PECatalogStickyOptOutWriter").applyOptIn(d, e, a, i, l),
            r(
              "AdsUserSettingsDataManager",
            ).setConnectedSourcesCatalogOptOutTimestamp(n, d));
        }
      }
    }
    function mt(e, t, n, a, i) {
      var l = !1,
        s = e == null ? new Map() : e;
      (n && e != null && e.has(t) && (s.delete(t), (l = !0)),
        n === !1 && (s.set(t, Date.now()), (l = !0)),
        l &&
          a != null &&
          (r(
            "AdsUserSettingsDataManager",
          ).setConnectedSourcesSitelinksOptOutTimestamp(a, s, t),
          o("SEFunnelLogger").logSESiteLinksCooldownStateChanged({
            accountID: t,
            adgroupID: i.adgroupID,
            campaignGroupID: i.campaignGroupID,
            campaignID: i.campaignID,
            cooldownAction: n ? "cleared" : "set",
            cooldownEntrypoint: i.entrypoint,
            formatKey: i.formatKey,
          })));
    }
    var pt = new WeakMap();
    function _t(e) {
      var t,
        n,
        a = e.adAccountID,
        i = e.adgroupID,
        l = e.campaignGroupID,
        s = e.campaignID,
        u = e.entrypoint,
        c = e.formatKey,
        d = e.isOptOut,
        m = e.isSiteLinksOnInPairedFormat,
        p = e.userSettingsID,
        _ = function (t) {
          o("SEFunnelLogger").logSESiteLinksCooldownStateChanged({
            accountID: a,
            adgroupID: i,
            campaignGroupID: l,
            campaignID: s,
            cooldownAction: t,
            cooldownEntrypoint: u,
            formatKey: c,
          });
        };
      if (d && m === !0) {
        _("noop_other_format_on");
        return;
      }
      if (p != null) {
        var f =
          (t = r("AdsUserSettingsProvider")()) == null ? void 0 : t.get(p);
        if (!(f == null || f.isLoading())) {
          var g = f.getValue(),
            h = ut(g == null ? void 0 : g.ads_cs_sitelinks_opt_out_timestamp),
            y = (n = g != null ? pt.get(g) : null) != null ? n : new Map();
          if (
            (y.forEach(function (e, t) {
              e == null ? h.delete(t) : h.set(t, e);
            }),
            !d && !h.has(a))
          ) {
            _("noop_no_entry");
            return;
          }
          if (!o("AdsSiteLinksSharedCooldownGK").isSEAlphaPauseEnabled()) {
            _(d ? "would_set" : "would_clear");
            return;
          }
          (mt(h, a, !d, p, {
            adgroupID: i,
            campaignGroupID: l,
            campaignID: s,
            entrypoint: u,
            formatKey: c,
          }),
            g != null && (y.set(a, d ? h.get(a) : null), pt.set(g, y)));
        }
      }
    }
    function ft(e, t, n, o) {
      var a = !1,
        i = e == null ? new Map() : e;
      (n && e != null && e.has(t) && (i.delete(t), (a = !0)),
        n === !1 && (i.set(t, Date.now()), (a = !0)),
        a &&
          o != null &&
          r(
            "AdsUserSettingsDataManager",
          ).setConnectedSourcesDynamicSEOptOutTimestamp(o, i));
    }
    function gt(e) {
      var t,
        n,
        a =
          e instanceof r("AdsAPIAdgroupRecord")
            ? o("DeepRecordUtils").maybeToPlainObject(
                (t = e.creative) == null ? void 0 : t.creative_sourcing_spec,
              )
            : (n = e.creative) == null
              ? void 0
              : n.creative_sourcing_spec,
        i = a == null ? void 0 : a.site_links_spec,
        l = 0;
      for (var s of i != null ? i : r("emptyArray"))
        s.site_link_image_url != null && l++;
      return l;
    }
    function ht(e) {
      var t =
        e === "STICKY"
          ? "STICKY"
          : e === "DEFAULT"
            ? "DEFAULT"
            : e === "MANUAL"
              ? "MANUAL"
              : "UNKOWN";
      return t;
    }
    function yt(e, t, n) {
      return (
        t === void 0 && (t = !1),
        !r("isStringNullOrEmpty")(n) &&
          (e === "DEFAULT" || e == null) &&
          t === !0
      );
    }
    function Ct(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.caller = t),
          (i.status = n.toString()),
          (i.source = o),
          (i.subsequent_data = a),
          i),
        eventName: "ads_connected_sources_site_links_toggle_click",
      });
    }
    function bt(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.caller = t),
          (a.status = n.toString()),
          (a.subsequent_data = o),
          a),
        eventName: "ads_connected_sources_site_links_toggle_impression",
      });
    }
    function vt(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((i = {}),
          (i.adgroup_id = e),
          (i.caller = t),
          (i.ad_preview_format = n),
          (i.status = o),
          (i.subsequent_data = a),
          i),
        eventName: "ads_connected_sources_site_links_live_preview_impression",
      });
    }
    function St(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((a = {}),
          (a.adgroup_id = e),
          (a.caller = t),
          (a.action_type = n),
          (a.subsequent_data = o),
          a),
        eventName: "ads_metadata_site_extension_managed_links_click",
      });
    }
    function Rt(e, t, n) {
      var r;
      return (
        (r = {}),
        (r.ad_account_id = e.adAccountID),
        (r.adgroup_id = e.adgroupID),
        (r.page_id = e.pageID),
        (r.caller = t),
        (r.subsequent_data = JSON.stringify(
          babelHelpers.extends({}, n, { catalog_id: e.catalogID }),
        )),
        r
      );
    }
    function Lt(e, t) {
      r("AdsInterfacesLogger").log({
        data: Rt(e, "AdsConnectedSourcesLeadGenX2P:" + t, { variant: t }),
        eventName: "ads_connected_sources_x2p_card_impression",
      });
    }
    function Et(e, t) {
      r("AdsInterfacesLogger").log({
        data: Rt(e, "AdsConnectedSourcesLeadGenX2PManageProductsButton", {
          variant: t,
        }),
        eventName: "ads_connected_sources_x2p_manage_products_click",
      });
    }
    function kt(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data: babelHelpers.extends(
          {},
          Rt(e, "AdsConnectedSourcesLeadGenX2PShowProductsToggle", {
            is_enabled: t,
          }),
          ((n = {}), (n.is_enabled = t), n),
        ),
        eventName: "ads_connected_sources_x2p_show_products_state",
      });
    }
    function It(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data: babelHelpers.extends(
          {},
          Rt(e, "AdsConnectedSourcesLeadGenX2PShowProductsToggle", {
            is_enabled: t,
          }),
          ((n = {}), (n.is_enabled = t), n),
        ),
        eventName: "ads_connected_sources_x2p_show_products_toggle",
      });
    }
    function Tt(e, t, n, o) {
      var a, i;
      r("AdsInterfacesLogger").log({
        data:
          ((i = {}),
          (i.product_set_id = e),
          (i.caller = "useX2PManageProductsModalSaveHandler"),
          (i.subsequent_data = JSON.stringify({
            catalog_id: o,
            is_all_selected: n,
            num_selected_products:
              (a = t == null ? void 0 : t.length) != null ? a : null,
            selected_product_ids: t,
          })),
          i),
        eventName: "ads_connected_sources_x2p_manage_products_save",
      });
    }
    function Dt(e) {
      return (
        (e == null ? void 0 : e.destination_type) ===
        r("AdCampaignDestination").WHATSAPP
      );
    }
    function xt(e) {
      return (
        (e == null ? void 0 : e.destination_type) ===
        r("AdCampaignDestination").INSTAGRAM_DIRECT
      );
    }
    function $t(e, t, n) {
      var a = t.objective,
        i = o("AdsAPICampaignRecordUtils").getPromotedObjectType(a, e);
      return ((M.includes(a) ||
        (a === o("AdsAPIObjectives").OUTCOME_LEADS &&
          o("ClickToWhatsAppFeatureGating").isEligibleForLeadsCTWACatalog(
            !0,
          ))) &&
        i === r("AdsPromotedObjectTypes").WHATSAPP &&
        e.destination_type === r("AdCampaignDestination").WHATSAPP) ||
        (N.includes(a) &&
          i === r("AdsPromotedObjectTypes").MESSENGER &&
          o("AdsUEditorMessagingDestinationUtils").destinationIncludesMessenger(
            e.destination_type,
          )) ||
        j(e, t)
        ? n
        : !0;
    }
    function Pt(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.is_enabled = t),
          (o.custom_event_type = n),
          o),
        eventName:
          "ads_connected_sources_website_summary_eligibility_selector_result",
      });
    }
    function Nt(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        data: ((t = {}), (t.adgroup_id = e), t),
        eventName:
          "ads_connected_sources_website_summary_eligibility_check_start",
      });
    }
    function Mt() {
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_metadata_website_summary_empty_url_in_graphql_query",
      });
    }
    function wt(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data: ((n = {}), (n.message = e), (n.accountid = t), n),
        eventName: "ads_metadata_website_summary_graphql_query_started_for_url",
      });
    }
    function At(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        data: ((n = {}), (n.url = e), (n.message = t), n),
        eventName:
          "ads_metadata_website_summary_graphql_query_response_for_url",
      });
    }
    function Ft() {
      return r("gkx")("22553") === !0;
    }
    function Ot(e) {
      if (
        !r("gkx")("21997") &&
        !o(
          "AdsL1SimplificationArm1Utils",
        ).isL1SimplificationArm1TreatmentWithoutExposure()
      )
        return null;
      var t = e == null ? void 0 : e.selectedBaseAssetID;
      if (
        t != null &&
        t.type === "image" &&
        t.id instanceof o("AdsImageIDClasses").AdsAccountImageID
      ) {
        var n,
          a = t.id.getHash();
        return (
          r("AdsInterfacesLogger").logOnce({
            data:
              ((n = {}),
              (n.message = JSON.stringify({ hasHash: a != null })),
              n),
            eventName: "ads_se_media_picker_hash_presence_debug",
          }),
          a
        );
      }
      return null;
    }
    function Bt(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.site_links_spec;
      return n == null ? 0 : Array.isArray(n) ? n.length : n.size;
    }
    function Wt(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.site_links_data_consented) == null
            ? void 0
            : t.enroll_status,
        o = Bt(e),
        a =
          e == null ||
          (n = e.creative) == null ||
          (n = n.creative_sourcing_spec) == null ||
          (n = n.dynamic_site_links_spec) == null
            ? void 0
            : n.enroll_status;
      return (r === "OPT_IN" && o > 0) || a === "OPT_IN";
    }
    ((l.isDynamicSEDefaultOptInEnabled = u),
      (l.isEPASourceUrlCatalogDefaultingEnabled = c),
      (l.isPECatalogUrlWaterfallEnabled = d),
      (l.isUrlMatchedCatalogSaveFixKilled = m),
      (l.logPESourceUrlFallbackCatalogDefaulted = p),
      (l.logPESourceUrlFallbackUrlSynced = _),
      (l.MIN_IMAGE_URL_COUNT = h),
      (l.MIN_SITE_LINK_PREVIEW_COUNT = y),
      (l.MIN_IMAGE_URL_COUNT_FOR_CAROUSEL = C),
      (l.MIN_CATALOG_PRODUCT_COUNT = b),
      (l.MIN_CATALOG_PRODUCT_COUNT_FOR_CTWA_PE = v),
      (l.MIN_CATALOG_PRODUCT_COUNT_FOR_PE_COLLECTION = S),
      (l.getEffectiveProductCount = R),
      (l.SiteLinkPanelDisplayType = I),
      (l.ON_YOUR_AD_PROMOTED_OBJECT_TYPES = P),
      (l.CTWAPESupportedObjectives = M),
      (l.isEligibleForMediaPickerByExperiment = U),
      (l.isEligibleForPromotionsByExperiment = V),
      (l.isEngagementOnYourAdSetup = j),
      (l.isEligibleForCatalogByCampaignAndAdgroup = K),
      (l.getSiteExtensionsEligibilityDecisionByCampaignAndAdgroup = Q),
      (l.isEligibleForSiteExtensionsByCampaignAndAdgroup = Y),
      (l.keepsOptedInSiteLinksOnIneligibleSetup = J),
      (l.isSiteLinksControlVisibleForAdObjects = Z),
      (l.keepsSiteLinksControlForAdObjects = ee),
      (l.shouldSuppressSiteLinksForIneligibleSetup = te),
      (l.getSiteLinksIneligibleSetupSuppression = ne),
      (l.getSiteExtensionsEligibilityDecisionForAdObjects = re),
      (l.getSiteLinksConsentVisibilityDecision = oe),
      (l.isEligibleForWebsiteMediaByCampaignAndAdgroup = ie),
      (l.isEligibleForPromotionsByCampaignAndAdgroup = le),
      (l.isEligibleForAppInformationByCampaignAndAdgroup = se),
      (l.getExistingPostStickyOptOut = de),
      (l.catalogShouldStickyOptOutByGK = me),
      (l.relevancyShouldStickyOptOutByGK = _e),
      (l.getStickyOptOutTimeperiodFromExperiment = fe),
      (l.sitelinkShouldStickyOptOut = he),
      (l.sitelinkShouldStickyOptOutUnderAlphaPause = ye),
      (l.getSiteLinksPauseDebugState = Ce),
      (l.websiteSellingPointsStickyOptIn = ve),
      (l.websiteSummaryTextStickyOptIn = Se),
      (l.isInWebsiteMediaOptOutCooldown = Ee),
      (l.websiteMediaStickyOptIn = ke),
      (l.readAdsUserSettingsDuringDispatch = Ie),
      (l.readAdsUserSettingsWithIDDuringDispatch = Te),
      (l.shouldSuppressAutomaticOptInForDuplicatedDraft = xe),
      (l.getStickyOptInForAdgroup = $e),
      (l.resolveStickyOrDefaultEnrollment = Pe),
      (l.dynamicSEShouldStickyOptOutByGK = Ne),
      (l.isEligibleForMediaPickerByCampaignAndAdgroupAndExperiment = Me),
      (l.isFFForAppInstallEnabled = we),
      (l.isEligibleForCESCreativeSetupWithAppInfo = Ae),
      (l.isEligibleForCESCreativeSetupWithSE = Fe),
      (l.isEligibleForCESCreativeSetupWithPE = Oe),
      (l.isEligibleForCESCreativeSetupWithWebsiteMedia = Be),
      (l.isEligibleForCESCreativeSetupWithPEOrSEOrAppInfo = We),
      (l.isConnectedSourcesOptInForAdgroup = qe),
      (l.isConnectedSourcesOptOutForAdgroup = Ue),
      (l.getSiteLinksDefaultOnType = Ve),
      (l.logCatalogItemsBelow3 = He),
      (l.logCatalogSectionInViewport = Ge),
      (l.logCatalogEligibilityResult = ze),
      (l.logDefaultOnNoticeDisplay = je),
      (l.logComponentRendered = Ke),
      (l.logUpdateSiteLink = Qe),
      (l.logSiteLinkSourceUrlUpdated = Xe),
      (l.logRecommendedSiteLinksShown = Ye),
      (l.logCatalogChanged = Je),
      (l.logDAInfoLabelEligibilityResult = Ze),
      (l.logAdsWithBenefitsEligibilityResult = et),
      (l.logEligibleForSiteLinksDefaultOn = tt),
      (l.logAddingCatalogByDefault = nt),
      (l.logProductSetSuggestionChange = rt),
      (l.logProductSetChangeToastCardClick = ot),
      (l.isCTMAdByCampaignGroupAndCampaign = at),
      (l.isEligibleAdAccount = it),
      (l.updateConnectedSourceCatalogOptOutTimestamp = st),
      (l.clearConnectedSourceCatalogOptOutForAccount = ct),
      (l.updateRelevancyOptOutTimestamp = dt),
      (l.updateConnectedSourceSitelinksOptOutTimestamp = mt),
      (l.updateSiteLinksSharedCooldownFromFormat = _t),
      (l.updateConnectedSourceDynamicSEOptOutTimestamp = ft),
      (l.countL1SpecImageUrl = gt),
      (l.convertAdsConnectedSourcesCatalogActionSourceToPEActionSource = ht),
      (l.shouldRefetchCatalog = yt),
      (l.logSiteLinksToggleClick = Ct),
      (l.logSiteLinksToggleShown = bt),
      (l.logSiteLinksLivePreviewImpression = vt),
      (l.logSiteExtensionManagedLinksClick = St),
      (l.logX2PCardImpression = Lt),
      (l.logX2PManageProductsClick = Et),
      (l.logX2PShowProductsState = kt),
      (l.logX2PShowProductsToggle = It),
      (l.logX2PManageProductsSave = Tt),
      (l.isCTWADestinationByCampaign = Dt),
      (l.isEligibleForCtdPeByCampaign = xt),
      (l.isEligibleForConnectedCatalogsByCatalogEligibility = $t),
      (l.logWebsiteSummaryEligibilityResult = Pt),
      (l.logWebsiteSummaryEligibilityCheckStart = Nt),
      (l.logWebsiteSummaryEmptyURLInGraphqlQuery = Mt),
      (l.logWebsiteSummaryGraphqlQueryStartForURL = wt),
      (l.logWebsiteSummaryGraphqlQueryResponseForURL = At),
      (l.isFFVideoSlideshowAppInfoDefaultOnEnabled = Ft),
      (l.getMediaPickerImageHash = Ot),
      (l.isSiteLinksOptedIn = Wt));
  },
  98,
);
