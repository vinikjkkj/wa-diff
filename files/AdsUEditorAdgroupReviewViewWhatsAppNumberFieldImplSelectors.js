__d(
  "AdsUEditorAdgroupReviewViewWhatsAppNumberFieldImplSelectors",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsBulkValueUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsMixedValue",
    "AdsPageStore",
    "AdsPlacementAPISpecReaderUtils",
    "AdsUEditorAdgroupDiffSelectors",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorSelectors",
    "adsAdgroupMessageMarketingWhatsAppPhoneNumberIDSelector",
    "adsAdsManagerWABASelector",
    "adsCreateBranchSelector",
    "adsCreateSelector",
    "adsMessageMarketingWABASelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupPartnershipAdsIdentityDropdownsSelector",
    "adsUEditorAdgroupPartnershipAdsIdentitySectionSelector",
    "getWAMOStatusPAReviewWhatsAppBulkAds",
    "getWAMOStatusPAReviewWhatsAppIdentities",
    "getWAMOStatusPAReviewWhatsAppNumberBulkInfo",
    "getWAMOStatusPAReviewWhatsAppNumberRowInfo",
    "gkx",
    "isEveryWAMOStatusSelector",
    "selectWAMOStatusCtwaPhoneNumberID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return {
        ctwaPhoneNumberIDToFetch: null,
        firstIdentity: null,
        isPartnershipAd: !1,
        secondIdentity: null,
        terminalFieldInfo: e,
      };
    }
    var c = u({ shouldRender: !1 }),
      d = { isBulkReview: !1 },
      m = (s = r("adsCreateSelector"))(
        [],
        function () {
          return c;
        },
        { name: i.id + ".notRenderedRowStateSelector" },
      ),
      p = s(
        [],
        function () {
          return d;
        },
        { name: i.id + ".noBulkReviewSelector" },
      ),
      _ = o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
        var t, n, r, o, a, i;
        return [
          (t = e.creative) == null || (t = t.object_story_spec) == null
            ? void 0
            : t.page_id,
          (n = e.creative) == null ? void 0 : n.instagram_actor_id,
          (r = e.creative) == null || (r = r.facebook_branded_content) == null
            ? void 0
            : r.sponsor_page_id,
          (o = e.creative) == null || (o = o.instagram_branded_content) == null
            ? void 0
            : o.sponsor_id,
          (a = e.creative) == null
            ? void 0
            : a.whatsapp_business_phone_number_id,
          (i = e.creative) == null
            ? void 0
            : i.whatsapp_mm_business_phone_number_id,
        ].join("|");
      }),
      f = o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
        var t;
        return (
          ((t = e.creative) == null || (t = t.branded_content) == null
            ? void 0
            : t.ui_version) === 1
        );
      }),
      g = s(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          var e, n;
          return (e =
            (n = r("selectWAMOStatusCtwaPhoneNumberID")(
              t.map(function (e) {
                var t,
                  n,
                  r = e.adgroup,
                  o = e.campaign;
                return {
                  creativePageWhatsAppNumberID: null,
                  creativePhoneNumberID:
                    (t = r.creative) == null
                      ? void 0
                      : t.whatsapp_business_phone_number_id,
                  promotedObjectPageWhatsAppNumberID: null,
                  promotedObjectPhoneNumberID:
                    (n = o.promoted_object) == null
                      ? void 0
                      : n.whats_app_business_phone_number_id,
                };
              }),
            )) == null
              ? void 0
              : n.id) != null
            ? e
            : null;
        },
        { name: i.id + ".ctwaPhoneNumberIDSelector" },
      ),
      h = s(
        [
          r("adsUEditorAdgroupPartnershipAdsIdentityDropdownsSelector"),
          o("adsUEditorAdgroupPartnershipAdsIdentitySectionSelector")
            .adsUEditorAdgroupPartnershipAdsIdentitySectionSelector,
          g,
          o("adsAdgroupMessageMarketingWhatsAppPhoneNumberIDSelector")
            .adsAdgroupMessageMarketingWhatsAppPhoneNumberIDSelector,
          r("adsMessageMarketingWABASelector"),
          r("adsAdsManagerWABASelector"),
          f,
        ],
        function (t, n, a, i, l, s, d) {
          var e,
            m = t.adgroups,
            p = t.campaignPageID,
            _ = t.destinationType,
            f = t.hasWhatsappMMPlacement,
            g = n.advertiserPageID,
            h = n.isDraftAd,
            y = n.isLoading,
            C = n.isMixedValueForPrimaryFBPage,
            b = n.isMixedValueForPrimaryIGAccount,
            v = n.isMixedValueForSecondaryFBPage,
            S = n.isMixedValueForSecondaryIGAccount,
            R = n.primaryIdentityFBPage,
            L = n.primaryIdentityIGAccount,
            E = n.secondaryIdentityFBPage,
            k = n.secondaryIdentityIGAccount;
          if (C || b || v || S || d instanceof r("AdsMixedValue"))
            return u({ isMixed: !0 });
          if (y) return u({ showLoadingSpinner: !0 });
          var I = o("AdsBulkValueUtils").getUniformValueOrDefault(d, !1),
            T = R.getValue(),
            D = L.getValue();
          if (T == null && D == null) return c;
          var x = f && r("gkx")("24302"),
            $ = x && i != null;
          if ($) {
            if (l.hasError()) return u({ showLoadingError: !0 });
            if (l.getValue() == null) return u({ showLoadingSpinner: !0 });
          }
          var P = $
              ? (e = l.getValue()) == null
                ? void 0
                : e.find(function (e) {
                    return e.whatsAppNumberID === i;
                  })
              : null,
            N = r("getWAMOStatusPAReviewWhatsAppIdentities")({
              adgroups: m,
              advertiserPageID: g,
              campaignPageID: p,
              ctwaPhoneNumberID: a,
              destinationType: _,
              isDraftAd: h,
              isMarketingMessages: x,
              marketingMessagesNumber: P == null ? void 0 : P.whatsAppNumber,
              primaryFBPage: T,
              primaryIGAccount: D,
              secondaryFBPage: E.getValue(),
              secondaryIGAccount: k.getValue(),
              whatsAppBusinessAccounts: s.getValue(),
            });
          return N == null
            ? c
            : babelHelpers.extends({}, N, {
                isPartnershipAd: I,
                terminalFieldInfo: null,
              });
        },
        { name: i.id + ".whatsAppNumberRowStateSelector" },
      ),
      y = r("adsCreateBranchSelector")(r("isEveryWAMOStatusSelector"), h, m),
      C = s(
        [y],
        function (t) {
          return r("getWAMOStatusPAReviewWhatsAppNumberRowInfo")(t, null);
        },
        {
          name:
            i.id + ".adsUEditorAdgroupReviewViewWhatsAppNumberFieldSelector",
        },
      ),
      b = o("AdsUEditorAdgroupDiffSelectors").diffBetweenContextByValueSelector(
        _,
      ),
      v = (e = o("AdsUEditorAdgroupSelectors")).adObjectsList.mapTransform(
        function (e) {
          var t,
            n,
            r,
            o,
            a,
            i,
            l,
            s,
            u,
            c = e.adgroup,
            d = e.campaign;
          return {
            adgroup: c,
            adName: c.name,
            campaignPageID:
              (t = d.promoted_object) == null ? void 0 : t.page_id,
            creativePhoneNumberID:
              (n = c.creative) == null
                ? void 0
                : n.whatsapp_business_phone_number_id,
            destinationType: d.destination_type,
            isPartnershipAd:
              ((r = c.creative) == null || (r = r.branded_content) == null
                ? void 0
                : r.ui_version) === 1,
            marketingMessagesPhoneNumberID:
              (o =
                (a = c.creative) == null
                  ? void 0
                  : a.whatsapp_mm_business_phone_number_id) != null
                ? o
                : (i = c.creative) == null || (i = i.object_story_spec) == null
                  ? void 0
                  : i.whats_app_business_phone_number_id,
            promotedObjectPhoneNumberID:
              (l = d.promoted_object) == null
                ? void 0
                : l.whats_app_business_phone_number_id,
            secondaryIGAccountID:
              (s = c.creative) == null ||
              (s = s.instagram_branded_content) == null
                ? void 0
                : s.sponsor_id,
            secondaryPageID:
              (u = c.creative) == null ||
              (u = u.facebook_branded_content) == null
                ? void 0
                : u.sponsor_page_id,
          };
        },
      ),
      S = e.adgroups.mapTransform(function (e, t) {
        return r("AdsAdgroupSemanticFields").instagramActorID.get(t, e);
      }),
      R = e.adgroups.mapTransform(
        o("AdsAPIAdgroupRecordUtils").getBrandedContentPrimaryPageID,
      ),
      L = s(
        [
          r("adsUEditorAdgroupPartnershipAdsIdentityDropdownsSelector"),
          o("adsUEditorAdgroupPartnershipAdsIdentitySectionSelector")
            .adsUEditorAdgroupPartnershipAdsIdentitySectionSelector,
          v,
          R,
          S,
          e.placementSpecsMap,
          r("AdsPageStore").getSelector,
          r("adsMessageMarketingWABASelector"),
          r("adsAdsManagerWABASelector"),
        ],
        function (t, n, a, i, l, s, u, c, m) {
          if (a.size < 2) return d;
          var e = t.publishStatusMap,
            p = n.advertiserPageID,
            _ = r("gkx")("24302");
          return r("getWAMOStatusPAReviewWhatsAppNumberBulkInfo")(
            r("getWAMOStatusPAReviewWhatsAppBulkAds")(
              a
                .entrySeq()
                .toArray()
                .map(function (t) {
                  var n,
                    r = t[0],
                    a = t[1],
                    u = s.get(r);
                  return babelHelpers.extends({}, a, {
                    adID: r,
                    hasWhatsappMMPlacement:
                      u != null &&
                      o(
                        "AdsPlacementAPISpecReaderUtils",
                      ).isActiveWhatsAppPosition(u, "marketing_messages"),
                    isDraftAd:
                      ((n = e.get(r)) == null ? void 0 : n.hasDraft) === !0,
                    primaryIGAccountID: l.get(r),
                    primaryPageID: i.get(r),
                  });
                }),
              {
                advertiserPageID: p,
                getPage: function (t) {
                  var e = u(t);
                  return o("AdsLoadStateUtils_LEGACY").isLoaded(e)
                    ? {
                        isIABP: e.is_instagram_account_backed_page === !0,
                        name: e.name,
                      }
                    : null;
                },
                isMarketingMessagesEnabled: _,
                marketingMessagesAccounts: c.getValue(),
                whatsAppBusinessAccounts: m.getValue(),
              },
            ),
          );
        },
        { name: i.id + ".whatsAppNumberBulkFieldSelector" },
      ),
      E = r("adsCreateBranchSelector")(r("isEveryWAMOStatusSelector"), L, p);
    ((l.adsUEditorAdgroupReviewViewWhatsAppNumberRowStateSelector = y),
      (l.adsUEditorAdgroupReviewViewWhatsAppNumberFieldSelector = C),
      (l.adsUEditorAdgroupReviewViewWhatsAppNumberDiffSelector = b),
      (l.adsUEditorAdgroupReviewViewWhatsAppNumberBulkFieldSelector = E));
  },
  98,
);
