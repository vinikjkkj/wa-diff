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
    "areEqual",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return (e || (e = r("areEqual")))(this, t);
    }
    function u(e) {
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
    function c(e, t, n) {
      return m(d(e, t, n));
    }
    function d(e, t, n) {
      var r = n(t),
        o = u(r),
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
        l = e.hasRecentMessengerStoryAdPlacementLoadObject,
        u = e.isBusinessHighTrustForMM,
        c = e.productCatalogIDLoadObject;
      return o("AdsLoadObjectUtils")
        .all([
          t,
          i,
          a,
          o("AdsLoadObjectUtils").wrapIfNull(c),
          o("AdsLoadObjectUtils").wrapIfNull(l),
        ])
        .map(function (e) {
          var t,
            a,
            i,
            l,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C = e[0],
            b = e[1],
            v = e[2],
            S = e[3],
            R = e[4],
            L = C.account_id,
            E = C.capabilities,
            k = v.buying_type,
            I =
              (t = b.promoted_object) == null
                ? void 0
                : t.full_funnel_objective,
            T = I || v.objective,
            D = (a = b.promoted_object) == null ? void 0 : a.object_store_url,
            x = b.billing_event,
            $ =
              (i = (l = b.promoted_object) == null ? void 0 : l.page_id) != null
                ? i
                : (c = v.promoted_object) == null
                  ? void 0
                  : c.page_id,
            P = b.optimization_goal,
            N = b.rf_prediction_id,
            M = (d = b.is_dynamic_creative_optimization) != null ? d : void 0,
            w = !!((m = b.promoted_object) != null && m.offer_id),
            A = (p = b.targeting) == null ? void 0 : p.direct_install_devices,
            F = (_ = b.targeting) == null ? void 0 : _.geo_locations,
            O = b.destination_type,
            B = b.promoted_object,
            W = o("AdsAPICampaignRecordUtils").getPromotedObjectType(T, b),
            q = b.conversion_locations,
            U = b.catalog_vertical,
            V = Array.isArray(b.creative_sequence)
              ? b.creative_sequence
              : (f = b.creative_sequence) == null
                ? void 0
                : f.toArray(),
            H = (V != null ? V : []).length > 0,
            G = o(
              "AdsPlacementAPISpecReaderUtils",
            ).convertCampaignToPlacementSpec_LEGACY(b),
            z = O === r("AdCampaignDestination").FACEBOOK,
            j = O === r("AdCampaignDestination").PHONE_CALL,
            K = o(
              "AdsAPICampaignRecordUtilsShared",
            ).getIsWhatsAppMarketingMessagesActiveByDefault(b),
            Q =
              (g = C.marketing_messages_account_settings) == null
                ? void 0
                : g.messenger_activation_status,
            X = Array.isArray(v.special_ad_categories)
              ? v.special_ad_categories
              : (h = v.special_ad_categories) == null
                ? void 0
                : h.toArray(),
            Y = o(
              "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
            ).isTargetFrequencyInAuction(k, T, P, N),
            J = (y = v.is_opted_into_experiments) != null ? y : !1,
            Z =
              v.ad_creation_package_config != null
                ? "CREATION_PACKAGE"
                : o(
                    "AdsCampaignGroupCreationSourceForPlacement",
                  ).normalizeCampaignGroupCreationSourceForPlacement(
                    v.campaign_group_creation_source,
                  );
          return {
            account: C,
            adAccountID: L,
            accountPlacementExclusions: n,
            billingEvent: x,
            buyingType: k,
            campaignGroupCreationSource: Z,
            capabilities: E,
            catalogVertical: U,
            configuredPlacementSpec: G,
            containsDCO: M,
            containsOffer: w,
            conversionLocations: q,
            usingAdSequencing: H,
            destinationType: O,
            directInstallDevices: A,
            objective: T,
            objectStoreURL: D,
            optimizationGoal: P,
            promotedObject: B,
            isClickToCallAds: j,
            isClickToMPAds: z,
            productCatalogID: S,
            promotedObjectType: W,
            promotedPageID: $,
            targetingGeoLocations: F,
            hasRecentMessengerStoryAdPlacement: R === !0,
            isBusinessHighTrustForMM: u,
            isWhatsAppMarketingMessagesActiveByDefault: K,
            messengerMessageMarketingActivationStatus: Q,
            equals: s,
            specialAdCategories: X,
            isTargetFrequencyInAuctionEnabled: Y,
            isOptedIntoExperiments: J,
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
          f = e.hasRecentMessengerStoryAdPlacement,
          g = e.isBusinessHighTrustForMM,
          h = e.isClickToCallAds,
          y = e.isClickToMPAds,
          C = e.isOptedIntoExperiments,
          b = e.isTargetFrequencyInAuctionEnabled,
          v = e.isWhatsAppMarketingMessagesActiveByDefault,
          S = e.messengerMessageMarketingActivationStatus,
          R = e.objective,
          L = e.objectStoreURL,
          E = e.optimizationGoal,
          k = e.productCatalogID,
          I = e.promotedObject,
          T = e.promotedObjectType,
          D = e.promotedPageID,
          x = e.specialAdCategories,
          $ = e.targetingGeoLocations,
          P = e.usingAdSequencing,
          N = I == null ? void 0 : I.product_set_id,
          M = o(
            "AdsPartialAutomaticPlacementUtils",
          ).getPartialAutomaticPlatformsFromPlacementSpec(u);
        if (M.length !== 0) {
          var w = {
            account: t,
            accountPlacementExclusions: n,
            objective: R,
            buyingType: a,
            campaignGroupCreationSource: i,
            capabilities: l,
            catalogVertical: s,
            isClickToCallAds: h,
            isClickToMPAds: y,
            promotedObjectType: T,
            conversionLocations: m,
            usingAdSequencing: P,
            objectStoreURL: L,
            promotedPageID: D,
            productCatalogID: k,
            destinationType: p,
            containsOffer: !!d,
            optimizationGoal: E,
            containsDCO: !!c,
            directInstallDevices: _,
            hasRecentMessengerStoryAdPlacement: f,
            targetingGeoLocations: $,
            spec: u,
            isBusinessHighTrustForMM: g,
            isWhatsAppMarketingMessagesActiveByDefault: v,
            messengerMessageMarketingActivationStatus: S,
            specialAdCategories: x,
            isOptedIntoExperiments: C,
            promotedObject: I,
            productSetID: N,
          };
          return o("AdsPlacementRawSpecUtils").mergePartialPlacement(u, w);
        }
        if (o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(u))
          return r("AdsPlacementUtils").getDefaultCampaignPlacement(
            {
              account: t,
              accountPlacementExclusions: n,
              objective: R,
              buyingType: a,
              campaignGroupCreationSource: i,
              capabilities: l,
              catalogVertical: s,
              isClickToCallAds: h,
              isClickToMPAds: y,
              promotedObjectType: T,
              conversionLocations: m,
              usingAdSequencing: P,
              objectStoreURL: L,
              promotedPageID: D,
              productCatalogID: k,
              destinationType: p,
              containsOffer: !!d,
              optimizationGoal: E,
              containsDCO: !!c,
              directInstallDevices: _,
              hasRecentMessengerStoryAdPlacement: f,
              targetingGeoLocations: $,
              isBusinessHighTrustForMM: g,
              isWhatsAppMarketingMessagesActiveByDefault: v,
              messengerMessageMarketingActivationStatus: S,
              specialAdCategories: x,
              isTargetFrequencyInAuctionEnabled: b,
              isOptedIntoExperiments: C,
              promotedObject: I,
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
    ((l.getPlacementDependency = c),
      (l.getPlacementDependencyData = d),
      (l.placementDependencyDataToDependency = m),
      (l.getPlacementSpecLoadObjectFromDependency = p));
  },
  98,
);
