__d(
  "AdsUEditorWebsiteMutators",
  [
    "invariant",
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsDataAtom",
    "AdsLandingViewTypeUtils",
    "AdsLocalAwarenessUtils",
    "AdsPageStore",
    "AdsPageUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupCallAddOnDefaultingMutator",
    "AdsUEditorAdgroupMultiProductMutators",
    "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorHostIDs",
    "AdsUEditorWebsiteUtils",
    "AdsUnifiedCreativeAPIFields",
    "AdsWebsiteLinkDefaultingAction",
    "ApiAdObjectTypes",
    "Promise",
    "WebToWhatsappUtils",
    "WebToXDefaultingUtils",
    "adsAdgroupIsDynamicProductCarouselAd",
    "adsAssetFeedHasCallToActionValue",
    "isAccountEligibleForThreeCOL2AdEx",
    "isAdsCanvasLink",
    "isTruthy",
    "isValidURL",
    "justknobx",
    "nullthrows",
    "promiseDone",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = function (t) {
        var e,
          n = t.adgroup,
          a = t.campaignGroupPromotedPageID,
          i = t.objective,
          l = t.objectType,
          s = t.promotedObjectType,
          u = t.specPlugin;
        if (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(n))
          return r("adsAssetFeedHasCallToActionValue")(n, 0, "link");
        if (l !== r("ApiAdObjectTypes").SHARE) return !1;
        var c =
          (e = r("AdsAdgroupSemanticFields").callToActionValue.get(u, n)) ==
          null
            ? void 0
            : e.get("link");
        return c == null
          ? !1
          : !o("AdsAdgroupSpecUtils").isCTALinkCustomizable(n, i, a, s);
      },
      d = function (t) {
        var e = t.adgroup,
          n = t.campaignGroupPromotedPageID,
          a = t.index,
          i = t.objective,
          l = o("AdsChildAttachmentsUtils").getInChild(
            a,
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.LINK,
            e,
          );
        return l == null
          ? !1
          : !o("AdsAdgroupSpecUtils").isCTALinkCustomizable(e, i, n);
      },
      m = function (t) {
        var e,
          n = t.adgroup,
          a = t.campaignGroupPromotedPageID,
          i = t.isExistingPostAdCTX,
          l = i === void 0 ? !1 : i,
          s = t.objective,
          u = t.promotedObjectType,
          d = t.specPlugin,
          m = t.websiteURL,
          _ = n,
          f = (e = _.creative) == null ? void 0 : e.object_type;
        (f === r("ApiAdObjectTypes").SHARE &&
        o("AdsAdgroupSpecUtils").isLinkDataEligible(s, u) &&
        !g(_, s, a) &&
        !o("AdsAPIAdgroupRecordUtils").isTemplateCreative(_) &&
        !o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(_) &&
        !l
          ? ((_ = o("AdsCreativeFormatMutatorUtils").mutateCreativeMediaType(
              _,
              "SINGLE_LINK",
            )),
            (_ = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.attachment_style.set(
              "link",
              _,
            )))
          : (_ = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.attachment_style.delete(_)),
          c({
            adgroup: _,
            objectType: f != null ? f : "",
            objective: s,
            campaignGroupPromotedPageID: a,
            promotedObjectType: u,
            specPlugin: d,
          }) &&
            (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(_)
              ? (_ = o(
                  "AdsUEditorCallToActionMutators",
                ).setCallToActionValueField(_, d, "link", m))
              : (_ = r(
                  "AdsAdgroupSemanticFields",
                ).callToActionValue.isSupported(d, _)
                  ? r("AdsAdgroupSemanticFields").callToActionValue.set(
                      d,
                      _,
                      (
                        r("AdsAdgroupSemanticFields").callToActionValue.get(
                          d,
                          _,
                        ) ||
                        o(
                          "AdsAPIAdgroupCallToActionValueRecord",
                        ).createEmptyCallToActionValueFromAdgroup(_)
                      ).set("link", m),
                    )
                  : _)),
          o("AdsAdgroupSpecUtils").isAppLinkDataEligible(s, u) &&
            ((_ = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachNonPlaceDataChild(
              r("AdsAPIChildAttachmentPaths").LINK,
              m,
              _,
            )),
            (_ = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachNonPlaceDataChild(
              r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.LINK,
              m,
              _,
            ))));
        var h = r("AdsAdgroupSemanticFields").callToActionType.get(d, _);
        if (
          (h != null &&
            h === "MESSAGE_PAGE" &&
            u === r("AdsPromotedObjectTypes").PRODUCT_SET &&
            (_ = o("AdsUEditorCallToActionMutators").setCallToActionValueField(
              _,
              d,
              "link",
              m,
            )),
          o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(_) &&
            !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(_) &&
            !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(_))
        ) {
          var y = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
            _,
            "link_urls",
          );
          _ = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            _,
            d,
            r("AdsUnifiedCreativeAPIFields").linkURL,
            y,
            "website_url",
            m,
          );
        } else {
          var C, b;
          _ = r("AdsAdgroupSemanticFields").linkURL.set(d, _, m);
          var v =
              (C = r("AdsAdgroupRecordAccessors").creative) == null
                ? void 0
                : C.omnichannel_link_spec.get(_),
            S =
              (b = r("AdsAdgroupRecordAccessors").creative) == null ||
              (b = b.omnichannel_link_spec) == null ||
              (b = b.web) == null
                ? void 0
                : b.url.get(_);
          v != null &&
            S == null &&
            (_ = r(
              "AdsAdgroupRecordAccessors",
            ).creative.omnichannel_link_spec.web.url.set(m, _));
        }
        return (
          (_ = p(_, o("AdsUEditorWebsiteUtils").getVideoLPPFormat(_, s))),
          _
        );
      },
      p = function (t, n) {
        var e = t;
        return (
          n != null &&
            (e = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.link_format.set(
              n,
              e,
            )),
          e
        );
      },
      _ = function (t) {
        var e = t.adgroup,
          n = t.campaignGroupPromotedPageID,
          a = t.objective,
          i = t.promotedObjectType,
          l = t.specPlugin,
          s = t.websiteURL,
          u = e;
        return o("AdsChildAttachmentsUtils").isStaticCarouselAd(u)
          ? ((u = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachNonPlaceDataChild(
              r("AdsAPIChildAttachmentPaths").LINK,
              s,
              u,
            )),
            o("AdsUEditorAdgroupMultiProductMutators").forEachChild(
              u,
              function (e, t, l) {
                o("AdsChildAttachmentsUtils").hasPlaceData(e) ||
                  (d({
                    index: t,
                    adgroup: u,
                    objective: a,
                    campaignGroupPromotedPageID: n,
                    promotedObjectType: i,
                  }) &&
                    (u = o("AdsUEditorAdgroupMultiProductMutators").setInChild(
                      t,
                      r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.LINK,
                      s,
                      u,
                    )));
              },
            ),
            u)
          : m({
              specPlugin: l,
              websiteURL: s,
              adgroup: u,
              objective: a,
              promotedObjectType: i,
              campaignGroupPromotedPageID: n,
            });
      },
      f = function (t) {
        var e = t.adgroup,
          n = t.websiteURL;
        return o("AdsUEditorAdgroupMultiProductMutators").setInEachDynamicChild(
          r("AdsAPIChildAttachmentPaths").LINK,
          n,
          e,
        );
      },
      g = function (t, n, r) {
        return o("AdsLocalAwarenessUtils").isDynamicLocalAwareness(n, r);
      },
      h = function (t) {
        var e,
          n = t.adgroup,
          a = t.campaignGroupPromotedPageID,
          i = t.landingViewType,
          l = t.objective,
          u = t.pages,
          c = t.promotedObjectType,
          d = t.specPlugin;
        r("vulture")("XzRybR1YavzpxLNJW6Z9Ph5Cayg=");
        var m =
          (e = n.creative) == null || (e = e.object_story_spec) == null
            ? void 0
            : e.page_id;
        (m && u && u.has(m)) || s(0, 2379);
        var p = r("nullthrows")(u.get(m)),
          f = o("AdsLandingViewTypeUtils").linkFromType(i, p),
          g = _({
            specPlugin: d,
            websiteURL: f,
            adgroup: n,
            objective: l,
            promotedObjectType: c,
            campaignGroupPromotedPageID: a,
          });
        return g;
      };
    function y(e) {
      var t = e.adgroup,
        n = e.campaign,
        a = e.campaignGroup,
        i = e.specPlugin,
        l = e.websiteURL,
        s = l,
        u = a.objective,
        c = o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(a),
        d = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: n,
          campaignGroup: a,
        });
      if (
        r("justknobx")._("4598") &&
        (s === "" || s == null) &&
        u === r("AdsAPIObjectives").APP_INSTALLS &&
        d === r("AdsPromotedObjectTypes").MOBILE_APP
      ) {
        var p = o("AdsAPICampaignRecordUtils").getObjectStoreURL(n);
        p != null && (s = p);
      }
      var g = m({
        websiteURL: s,
        adgroup: t,
        campaignGroupPromotedPageID: c,
        objective: u,
        promotedObjectType: d,
        specPlugin: i,
      });
      return (
        r("adsAdgroupIsDynamicProductCarouselAd")(t, i, a.objective) &&
          (g = f({ websiteURL: s, adgroup: g })),
        (r("isAdsCanvasLink")(s) ||
          d === r("AdsPromotedObjectTypes").REMINDER) &&
          (g = _({
            websiteURL: s,
            adgroup: g,
            campaignGroupPromotedPageID: c,
            objective: u,
            promotedObjectType: d,
            specPlugin: i,
          })),
        d === r("AdsPromotedObjectTypes").WEB_AND_APP &&
          o("AdsChildAttachmentsUtils").isStaticCarouselAd(g) &&
          r("isValidURL")(s) &&
          r("isTruthy")(s) &&
          o("isAccountEligibleForThreeCOL2AdEx").is3coEnableCarouselFormat() &&
          (g = o(
            "AdsUEditorAdgroupMultiProductMutators",
          ).setInEachNonPlaceDataChildIfEmpty(
            r("AdsAPIChildAttachmentPaths").LINK,
            s,
            g,
          )),
        g
      );
    }
    function C(t, a, l, s, c, d, m) {
      var p,
        _ = a;
      if (
        d === r("AdsPromotedObjectTypes").WEBSITE &&
        m === r("AdsAPIObjectives").LINK_CLICKS
      ) {
        var f = o("WebToWhatsappUtils").isWebToXEligibleForSingleCreative(
          { campaign: s, campaignGroup: c, adgroup: a },
          l,
        );
        if (f) {
          var g,
            h,
            y = o("AdsPageUtils").getPageID(a),
            C =
              y != null ? r("AdsPageStore").getLoadObject(y).getValue() : null,
            b =
              r("isTruthy")(
                C == null ? void 0 : C.most_frequent_website_link,
              ) ||
              r("isTruthy")(C == null ? void 0 : C.last_website_link) ||
              r("isTruthy")(C == null ? void 0 : C.link_in_bio),
            v = b
              ? o(
                  "WebToWhatsappUtils",
                ).isInAdsManagerLeadsObjectiveWeblinkPrefillV2QE(c.objective)
              : !1,
            S = b
              ? o(
                  "WebToWhatsappUtils",
                ).isInAdsManagerEngagementObjectiveWeblinkPrefillV2QE(
                  c.objective,
                )
              : !1,
            R =
              v || S
                ? o(
                    "WebToWhatsappUtils",
                  ).getAdsManagerWeblinkPrefillV2UrlSourceQE(c.objective)
                : null,
            L =
              (g = C == null ? void 0 : C.most_frequent_website_link) != null
                ? g
                : null,
            E = o("AdsUEditorWebsiteUtils").getDefaultWebsiteUrl(
              c.objective,
              C,
              R,
              L,
              v || S,
            );
          C &&
            r("isTruthy")(E) &&
            ((u || (u = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              r("AdsWebsiteLinkDefaultingAction").dispatch(
                { isWeblinkDefaulted: !0 },
                {
                  line: "647",
                  module: "AdsUEditorWebsiteMutators.js",
                  moduleID: i.id,
                },
              );
            }),
            (v ||
              S ||
              o(
                "WebToWhatsappUtils",
              ).isInAdsManagerLinkClicksObjectiveWeblinkPrefillQE(
                c.objective,
                !1,
                t == null ? void 0 : t.account_id,
              )) &&
              (_ = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setStickyWeblinkPrefill(_, E, C, c.objective)));
          var k = o("WebToXDefaultingUtils").enableBrowserAddOnDefaultingType(
              t,
              [a.id],
              c,
              s,
              a,
              r("AdsUEditorHostIDs").EDITING,
              C,
              "conversion_switch_L2",
              s == null ||
                (h = s.toJS()) == null ||
                (h = h.targeting) == null ||
                (h = h.geo_locations) == null
                ? void 0
                : h.countries,
              s == null ? void 0 : s.optimization_goal,
            ),
            I = k.type;
          switch (I) {
            case "whatsapp":
              ((_ = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setWhatsAppWebsiteExtensionType(_)),
                r("promiseDone")(
                  (e || (e = n("Promise"))).resolve({}),
                  function () {
                    r("AdsUEditorAdgroupWebToWhatsappDefaultedAction").dispatch(
                      {
                        adgroupIDs: [a.id],
                        hostID: r("AdsUEditorHostIDs").EDITING,
                      },
                      {
                        line: "686",
                        module: "AdsUEditorWebsiteMutators.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ));
              break;
            case "instagram_direct":
              _ = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setInstagramDirectWebsiteExtensionType(_);
              break;
            case "messenger":
              _ = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setMessengerWebsiteExtensionType(_);
              break;
            case "messaging_apps":
              _ = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setMessagingAppsWebsiteExtensionType(
                _,
                [].concat((p = k.multiDestinationType) != null ? p : []),
                void 0,
                m,
              );
              break;
            case "phone_call":
              _ = o(
                "AdsUEditorAdgroupCallAddOnDefaultingMutator",
              ).applyCallAddOnDefaultBrowserAddOn(
                _,
                C == null ? void 0 : C.phone_number_prefill,
                y,
              );
              break;
            case "none":
            case "instant_form":
              _ = o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).cleanWebsiteExtensionFields(_);
              break;
          }
          _ = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setPageWelcomeMessageOnWebsiteExtensionTypeSelection(_, y, I, m);
        }
      }
      return _;
    }
    function b(e, t, n) {
      if (n == null) return e;
      if (
        t.objective === r("AdsAPIObjectives").OUTCOME_SALES &&
        n.conversion_location === r("AdsPromotedObjectTypes").PIXEL &&
        (n.source === "wtwa_upsell_am_landing" ||
          n.source === "wtm_ad4ad_am_landing" ||
          n.source === "wtx_metrics_ad4ad_wtm_am_landing" ||
          n.source === "wtm_aymt_coldstart_am_landing" ||
          n.source === "wtwa_wam_upsell_am_landing" ||
          n.source === "aymt_wtwa_email_upsell_am_landing" ||
          n.source === "wtx_create_ad_tofu_wtm_am_landing" ||
          n.source === "wtx_create_ad_tofu_wtm_no_insight_am_landing")
      ) {
        var o = n.default_page_id;
        if (o != null)
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.page_id.set(o, e);
      }
      return e;
    }
    ((l.setWebsiteURL = m),
      (l.setWebsiteURLInChildren = _),
      (l.setLandingViewType = h),
      (l.setWebsiteURLReducerUtil = y),
      (l.setBrowserAddOnDefaulting = C),
      (l.setSmartDefaultingAdgroupField = b));
  },
  98,
);
