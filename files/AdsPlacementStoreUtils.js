__d(
  "AdsPlacementStoreUtils",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPICampaignRecordUtilsShared",
    "AdsBrandSafetyUtils",
    "AdsCampaignGroupCreationSourceForPlacement",
    "AdsLoadObjectUtils",
    "AdsPartialAutomaticPlacementUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementConstants",
    "AdsPlacementRawSpecUtils",
    "AdsPlacementUtils",
    "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
    "adsGetUsingAdSequencing",
    "areEqual",
    "immutable",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return (e || (e = r("areEqual")))(this, t);
    }
    function u(e) {
      if (Array.isArray(e)) return e;
      if (e != null && r("immutable").List.isList(e)) return e.toArray();
    }
    function c(e) {
      return o("AdsLoadObjectUtils")
        .all(e)
        .map(function (e) {
          var t,
            n,
            r,
            o = e[0],
            a = e[1];
          return (t =
            (n = o.promoted_object) == null ? void 0 : n.product_catalog_id) !=
            null
            ? t
            : (r = a.promoted_object) == null
              ? void 0
              : r.product_catalog_id;
        });
    }
    function d(e, t, n) {
      var r = n(t),
        o = c(r),
        a = r[0],
        i = r[1];
      return {
        accountLoadObject: e,
        campaignLoadObject: a,
        campaignGroupLoadObject: i,
        productCatalogIDLoadObject: o,
      };
    }
    function m(e) {
      var t = e.accountLoadObject,
        n = e.accountPlacementExclusions,
        a = e.campaignGroupLoadObject,
        i = e.campaignLoadObject,
        l = e.isBusinessHighTrustForMM,
        c = e.productCatalogIDLoadObject;
      return o("AdsLoadObjectUtils")
        .all([t, i, a, o("AdsLoadObjectUtils").wrapIfNull(c)])
        .map(function (e) {
          var t,
            a,
            i,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y = e[0],
            C = e[1],
            b = e[2],
            v = e[3],
            S = y.account_id,
            R = y.capabilities,
            L = b.buying_type,
            E =
              (t = C.promoted_object) == null
                ? void 0
                : t.full_funnel_objective,
            k = E || b.objective,
            I = (a = C.promoted_object) == null ? void 0 : a.object_store_url,
            T = C.billing_event,
            D =
              (i = (c = C.promoted_object) == null ? void 0 : c.page_id) != null
                ? i
                : (d = b.promoted_object) == null
                  ? void 0
                  : d.page_id,
            x = C.optimization_goal,
            $ = C.rf_prediction_id,
            P = (m = C.is_dynamic_creative_optimization) != null ? m : void 0,
            N = !!((p = C.promoted_object) != null && p.offer_id),
            M = (_ = C.targeting) == null ? void 0 : _.direct_install_devices,
            w = (f = C.targeting) == null ? void 0 : f.geo_locations,
            A = C.destination_type,
            F = C.promoted_object,
            O = o("AdsAPICampaignRecordUtils").getPromotedObjectType(k, C),
            B = C.conversion_locations,
            W = C.catalog_vertical,
            q = r("adsGetUsingAdSequencing")(C.creative_sequence),
            U = o(
              "AdsPlacementAPISpecReaderUtils",
            ).convertCampaignToPlacementSpec_LEGACY(C),
            V = A === r("AdCampaignDestination").FACEBOOK,
            H = A === r("AdCampaignDestination").PHONE_CALL,
            G = o(
              "AdsAPICampaignRecordUtilsShared",
            ).getIsWhatsAppMarketingMessagesActiveByDefault(C),
            z =
              (g = y.marketing_messages_account_settings) == null
                ? void 0
                : g.messenger_activation_status,
            j = u(b.special_ad_categories),
            K = u(b.special_ad_category_country),
            Q = o(
              "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
            ).isTargetFrequencyInAuction(L, k, x, $),
            X = (h = b.is_opted_into_experiments) != null ? h : !1,
            Y =
              b.ad_creation_package_config != null
                ? "CREATION_PACKAGE"
                : o(
                    "AdsCampaignGroupCreationSourceForPlacement",
                  ).normalizeCampaignGroupCreationSourceForPlacement(
                    b.campaign_group_creation_source,
                  );
          return {
            account: y,
            adAccountID: S,
            accountPlacementExclusions: n,
            billingEvent: T,
            buyingType: L,
            campaignGroupCreationSource: Y,
            capabilities: R,
            catalogVertical: W,
            configuredPlacementSpec: U,
            containsDCO: P,
            containsOffer: N,
            conversionLocations: B,
            usingAdSequencing: q,
            destinationType: A,
            directInstallDevices: M,
            objective: k,
            objectStoreURL: I,
            optimizationGoal: x,
            promotedObject: F,
            isClickToCallAds: H,
            isClickToMPAds: V,
            productCatalogID: v,
            promotedObjectType: O,
            promotedPageID: D,
            targetingGeoLocations: w,
            isBusinessHighTrustForMM: l,
            isWhatsAppMarketingMessagesActiveByDefault: G,
            messengerMessageMarketingActivationStatus: z,
            equals: s,
            specialAdCategories: j,
            specialAdCategoryCountry: K,
            isTargetFrequencyInAuctionEnabled: Q,
            isOptedIntoExperiments: X,
          };
        });
    }
    function p(e) {
      return e.map(function (e) {
        var t = e.account,
          n = e.accountPlacementExclusions,
          a = e.buyingType,
          i = e.campaignGroupCreationSource,
          l = e.capabilities,
          s = e.catalogVertical,
          u = e.configuredPlacementSpec,
          c = e.containsDCO,
          d = e.containsOffer,
          m = e.conversionLocations,
          p = e.destinationType,
          _ = e.directInstallDevices,
          f = e.isBusinessHighTrustForMM,
          g = e.isClickToCallAds,
          h = e.isClickToMPAds,
          y = e.isOptedIntoExperiments,
          C = e.isTargetFrequencyInAuctionEnabled,
          b = e.isWhatsAppMarketingMessagesActiveByDefault,
          v = e.messengerMessageMarketingActivationStatus,
          S = e.objective,
          R = e.objectStoreURL,
          L = e.optimizationGoal,
          E = e.productCatalogID,
          k = e.promotedObject,
          I = e.promotedObjectType,
          T = e.promotedPageID,
          D = e.specialAdCategories,
          x = e.specialAdCategoryCountry,
          $ = e.targetingGeoLocations,
          P = e.usingAdSequencing,
          N = k == null ? void 0 : k.product_set_id,
          M = o(
            "AdsPartialAutomaticPlacementUtils",
          ).getPartialAutomaticPlatformsFromPlacementSpec(u);
        if (M.length !== 0) {
          var w = {
            account: t,
            accountPlacementExclusions: n,
            objective: S,
            buyingType: a,
            campaignGroupCreationSource: i,
            capabilities: l,
            catalogVertical: s,
            isClickToCallAds: g,
            isClickToMPAds: h,
            promotedObjectType: I,
            conversionLocations: m,
            usingAdSequencing: P,
            objectStoreURL: R,
            promotedPageID: T,
            productCatalogID: E,
            destinationType: p,
            containsOffer: !!d,
            optimizationGoal: L,
            containsDCO: !!c,
            directInstallDevices: _,
            targetingGeoLocations: $,
            spec: u,
            isBusinessHighTrustForMM: f,
            isWhatsAppMarketingMessagesActiveByDefault: b,
            messengerMessageMarketingActivationStatus: v,
            specialAdCategories: D,
            specialAdCategoryCountry: x,
            isOptedIntoExperiments: y,
            promotedObject: k,
            productSetID: N,
          };
          return o("AdsPlacementRawSpecUtils").mergePartialPlacement(u, w);
        }
        if (o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(u))
          return r("AdsPlacementUtils").getDefaultCampaignPlacement(
            {
              account: t,
              accountPlacementExclusions: n,
              objective: S,
              buyingType: a,
              campaignGroupCreationSource: i,
              capabilities: l,
              catalogVertical: s,
              isClickToCallAds: g,
              isClickToMPAds: h,
              promotedObjectType: I,
              conversionLocations: m,
              usingAdSequencing: P,
              objectStoreURL: R,
              promotedPageID: T,
              productCatalogID: E,
              destinationType: p,
              containsOffer: !!d,
              optimizationGoal: L,
              containsDCO: !!c,
              directInstallDevices: _,
              targetingGeoLocations: $,
              isBusinessHighTrustForMM: f,
              isWhatsAppMarketingMessagesActiveByDefault: b,
              messengerMessageMarketingActivationStatus: v,
              specialAdCategories: D,
              specialAdCategoryCountry: x,
              isTargetFrequencyInAuctionEnabled: C,
              isOptedIntoExperiments: y,
              promotedObject: k,
              productSetID: N,
            },
            r("whitelistObjectKeys")(
              u,
              o("AdsPlacementConstants").PLACEMENT_NON_EFFECTIVE_FIELDS,
            ),
          );
        var A = r(
          "AdsBrandSafetyUtils",
        ).getEffectiveBrandSafetyInventoryFilterLevels(t, u);
        return (A.length > 0 && (u.brand_safety_content_filter_levels = A), u);
      });
    }
    ((l.getPlacementDependencyData = d),
      (l.placementDependencyDataToDependency = m),
      (l.getPlacementSpecLoadObjectFromDependency = p));
  },
  98,
);
