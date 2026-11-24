__d(
  "MAIBANonOSCTAAdsManagerAction",
  [
    "AdDraftFragmentSource",
    "AdsAccountStore",
    "AdsCopyCopyDataAction",
    "AdsCopySource",
    "AdsDraftSelectionStore",
    "AdsExperimentsCreativeTestModalSharedState",
    "AdsFluxHooks",
    "AdsHelpTrayIPChatUILogger",
    "AdsInterfacesCreationSectionMode",
    "AdsMgmtDrawerActions",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPECreateDuplicateAdgroupsAction",
    "AdsPERouterHelper",
    "AdsReviewViewQuickSwitchToEditFieldDataAction",
    "AdsToggleSource",
    "AdsUEditorCampaignAutoScrollKey",
    "AdsUEditorCampaignGroupSectionAutoScrollKey",
    "MAIBACTAActionability",
    "MAIBAExternalUrlEntityRenderer.react",
    "MAIBAL4AdAccountContext",
    "MAIBAURIUtils",
    "adsExperimentsCreativeMulticellTestEligibility",
    "gkx",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      return r("gkx")("26103");
    }
    var c = new Set([
      "AB_TEST",
      "DUPLICATE",
      "EDIT_AD_CREATIVE",
      "EDIT_AUDIENCE",
      "EDIT_BUDGET",
      "EDIT_PLACEMENT",
    ]);
    function d(e) {
      return e.action === "AB_TEST" && u() && e.ad_object_type === "AD";
    }
    function m(e) {
      var t;
      e === void 0 && (e = null);
      var n = o("MAIBAL4AdAccountContext").useMAIBAL4AdAccountContext(),
        r = n.selectedAdAccount,
        a = (t = r.account_status) != null ? t : e,
        i = o("AdsFluxHooks").useAdsSelector(
          o("AdsPEAdgroupSelectors").getByFieldsSelector,
        ),
        l = o("AdsFluxHooks").useAdsSelector(
          o("AdsPECampaignSelectors").getByFieldsSelector,
        ),
        s = o("AdsFluxHooks").useAdsSelector(
          o("AdsPECampaignGroupSelectors").getByFieldsSelector,
        ),
        c = function (t) {
          var e;
          if (!d(t)) return "regular";
          var n =
              t.ad_object_ids[0] != null
                ? i(t.ad_object_ids[0], {
                    adset_id: null,
                    include_in_ad_study_id: null,
                    lightweight_split_test: null,
                  }).getValue()
                : null,
            r =
              (n == null ? void 0 : n.adset_id) != null
                ? l(n.adset_id, {
                    bid_strategy: null,
                    campaign_id: null,
                    end_time: null,
                    is_dynamic_creative_optimization: null,
                  }).getValue()
                : null,
            a =
              (r == null ? void 0 : r.campaign_id) != null
                ? s(r.campaign_id, { bid_strategy: null }).getValue()
                : null;
          return (r == null ? void 0 : r.end_time) != null &&
            new Date(r.end_time) < new Date()
            ? "regular"
            : n != null &&
                (n.include_in_ad_study_id != null ||
                  n.lightweight_split_test != null ||
                  (r == null ? void 0 : r.is_dynamic_creative_optimization) ===
                    !0 ||
                  (r != null &&
                    !o(
                      "adsExperimentsCreativeMulticellTestEligibility",
                    ).hasLowestCostWithoutCapBidStrategy(
                      {
                        bid_strategy:
                          (e = a == null ? void 0 : a.bid_strategy) != null
                            ? e
                            : null,
                      },
                      r,
                    )))
              ? "ineligible"
              : "creative";
        },
        m = function (t) {
          var e = t.action;
          if (
            e === "EDIT_AD_CREATIVE" &&
            o("MAIBACTAActionability").isAnyAdIGBoosted(t.ad_object_ids, i)
          )
            return "IG-boosted post (edit in Instagram app)";
          if (!o("MAIBACTAActionability").HIDE_ON_DEAD_ACTIONS.has(e) && !d(t))
            return null;
          if (o("MAIBACTAActionability").isAccountBlocked(a))
            return "account blocked";
          if (e === "DUPLICATE" && u()) {
            if (
              o("MAIBACTAActionability").isEveryAdObjectNonDuplicatable(
                t.ad_object_type,
                t.ad_object_ids,
                i,
                l,
                s,
              )
            )
              return "targeted ad object(s) non-duplicatable";
          } else if (
            o("MAIBACTAActionability").isEveryAdObjectDead(
              t.ad_object_type,
              t.ad_object_ids,
              i,
              l,
              s,
            )
          )
            return "targeted ad object(s) non-actionable";
          return c(t) === "ineligible"
            ? "ineligible for the creative test"
            : null;
        };
      return {
        getHideReason: m,
        opensCreativeTest: function (t) {
          return c(t) === "creative";
        },
      };
    }
    function p(e) {
      var t,
        n = e.children,
        a =
          (t = o("AdsFluxHooks")
            .useAdsSelector(r("AdsAccountStore").getSelectedAccount)
            .getValue()) == null
            ? void 0
            : t.account_status;
      return n(m(a == null ? null : String(a)));
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = o("AdsFluxHooks").adsFluxContainer(p, null, {
      containerName: i.id,
    });
    function f(e) {
      return e === "AD"
        ? {
            duplicateSource: r("AdDraftFragmentSource").CLICK_AD_DUPLICATE,
            navSection: "L1",
            objectLevel: "ad",
          }
        : e === "ADSET"
          ? {
              duplicateSource: r("AdDraftFragmentSource")
                .CLICK_CAMPAIGN_DUPLICATE,
              navSection: "L2",
              objectLevel: "ad_set",
            }
          : {
              duplicateSource: r("AdDraftFragmentSource")
                .CLICK_CAMPAIGN_GROUP_DUPLICATE,
              navSection: "L3",
              objectLevel: "campaign",
            };
    }
    function g(e, t) {
      var n = e.ad_object_type === "CAMPAIGN",
        a = n ? "campaign" : "ad_set",
        l = n
          ? r("immutable").List([
              r("AdsUEditorCampaignGroupSectionAutoScrollKey")
                .CAMPAIGN_GROUP_BUDGET_SECTION_COMPONENT,
            ])
          : void 0;
      (o("AdsMgmtDrawerActions").openTarget(
        "EDITOR_DRAWER",
        e.ad_object_ids,
        a,
        r("AdsToggleSource").maiba_cta,
        !1,
        l,
      ),
        n ||
          window.setTimeout(function () {
            var n = document.getElementById("campaignBasicSection") != null,
              l = document.getElementById("campaignBasicPGDSection") != null;
            if (!n && !l) {
              o("AdsHelpTrayIPChatUILogger").logAdsAIMarkdownRenderingError(
                "click",
                "MAIBAMessageNonOSCTARenderer",
                JSON.stringify({
                  action: e.action,
                  ad_object_ids: e.ad_object_ids,
                  ad_object_type: e.ad_object_type,
                  error:
                    "Neither campaignBasicSection nor campaignBasicPGDSection found in DOM for EDIT_BUDGET scroll",
                }),
                t != null ? t : "",
              );
              return;
            }
            var s = n
              ? r("AdsUEditorCampaignAutoScrollKey")
                  .CAMPAIGN_BUDGET_SECTION_COMPONENT
              : r("AdsUEditorCampaignAutoScrollKey")
                  .CAMPAIGN_BASIC_PGD_SECTION_COMPONENT;
            r("AdsReviewViewQuickSwitchToEditFieldDataAction").dispatch(
              {
                adObjectLevel: a,
                aoPluginKey: null,
                inReviewMode: !1,
                quickSwitchFieldPath: r("immutable").List([s]),
              },
              {
                line: "316",
                module: "MAIBANonOSCTAAdsManagerAction.web.js",
                moduleID: i.id,
              },
            );
          }, 2e3));
    }
    function h(e, t) {
      if (e.ad_object_ids.length === 0) {
        o("AdsHelpTrayIPChatUILogger").logAdsAIMarkdownRenderingError(
          "click",
          "MAIBAMessageNonOSCTARenderer",
          JSON.stringify({
            action: e.action,
            ad_object_ids: e.ad_object_ids,
            ad_object_type: e.ad_object_type,
            label: e.label,
            redirect_url: e.redirect_url,
          }),
          t != null ? t : "",
        );
        return;
      }
      var n = f(e.ad_object_type),
        a = n.duplicateSource,
        l = n.navSection,
        s = n.objectLevel,
        u = r("AdsAccountStore").getSelectedAccount().getValue();
      r("AdsPERouterHelper")
        .getRouteBuilder()
        .selectedIDs(e.ad_object_ids, s)
        .section(l)
        .onComplete(function () {
          if (u != null)
            e: {
              if (
                e.ad_object_type === "ADSET" ||
                e.ad_object_type === "CAMPAIGN"
              ) {
                var t = r("AdsDraftSelectionStore").getOrThrow(u.account_id);
                r("AdsCopyCopyDataAction").dispatch(
                  {
                    copyRequests: [
                      {
                        accountID: u.account_id,
                        draftID: t,
                        ids: e.ad_object_ids,
                        newParentID: null,
                        requestID: 0,
                        shouldIncludeComment: !0,
                      },
                    ],
                    level: s,
                    source: r("AdsCopySource").COPY_ACTION_STORE,
                  },
                  {
                    line: "359",
                    module: "MAIBANonOSCTAAdsManagerAction.web.js",
                    moduleID: i.id,
                  },
                );
                break e;
              }
              {
                r("AdsPECreateDuplicateAdgroupsAction").dispatch(
                  {
                    campaignCreationData: [
                      {
                        id: null,
                        isNew: !1,
                        mode: r("AdsInterfacesCreationSectionMode").SAME,
                        name: "",
                        promotedObject: null,
                      },
                    ],
                    campaignGroupCreationData: {
                      buyingType: null,
                      id: null,
                      isNewDraft: !1,
                      mode: r("AdsInterfacesCreationSectionMode").SAME,
                      name: "",
                      objective: "",
                      promotedObject: null,
                      toplineID: null,
                    },
                    commonCreationData: {
                      account: u,
                      accountID: u.account_id,
                      destinationCampaignGroupObjective: null,
                      duplicateCount: 1,
                      duplicateImages: null,
                      fragmentSource: a,
                      isDynamicCreativeOptimization: !1,
                      shouldIncludeComment: !0,
                      source: a,
                      toplineID: null,
                    },
                    sourceAdgroupIDs: Array.from(e.ad_object_ids),
                  },
                  {
                    line: "375",
                    module: "MAIBANonOSCTAAdsManagerAction.web.js",
                    moduleID: i.id,
                  },
                );
                break e;
              }
            }
        })
        .navigate();
    }
    function y(e, t, n, a, i) {
      var l = o("MAIBAURIUtils").buildAdsManagerDeeplink({
        accountId: t,
        adObjectIds: e.ad_object_ids,
        adObjectType: e.ad_object_type,
      });
      (l == null &&
        o("AdsHelpTrayIPChatUILogger").logAdsAIMarkdownRenderingError(
          "click",
          "MAIBAMessageNonOSCTARenderer",
          JSON.stringify({
            action: e.action,
            ad_object_ids: e.ad_object_ids,
            ad_object_type: e.ad_object_type,
            label: e.label,
            redirect_url: e.redirect_url,
          }),
          n != null ? n : "",
        ),
        i
          ? (r("AdsExperimentsCreativeTestModalSharedState").showModal(
              !1,
              e.ad_object_ids,
            ),
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              e.ad_object_ids,
              "ad",
              r("AdsToggleSource").maiba_cta,
            ))
          : l != null &&
            (l.addQueryData("maiba_actions", "ab_test_modal>open"),
            o("MAIBAExternalUrlEntityRenderer.react").getMAIBAURIClickHandler(
              l.toString(),
              a,
              n,
            )()));
    }
    function C(e, t) {
      (o("AdsMgmtDrawerActions").openTarget(
        "EDITOR_DRAWER",
        e.ad_object_ids,
        "ad",
        r("AdsToggleSource").maiba_cta,
        !1,
      ),
        window.setTimeout(function () {
          var n,
            r =
              (n = document.querySelector(
                ".adsPathScrollAnchor-adgroupAdsCreativeSectionComponent",
              )) != null
                ? n
                : document.getElementById("creativeEditorComponent");
          r != null
            ? r.scrollIntoView({ behavior: "smooth", block: "start" })
            : o("AdsHelpTrayIPChatUILogger").logAdsAIMarkdownRenderingError(
                "click",
                "MAIBAMessageNonOSCTARenderer",
                JSON.stringify({
                  action: e.action,
                  ad_object_ids: e.ad_object_ids,
                  ad_object_type: e.ad_object_type,
                  error:
                    "Creative section scroll target not found in DOM for EDIT_AD_CREATIVE scroll",
                }),
                t != null ? t : "",
              );
        }, 2e3));
    }
    function b(e, t) {
      var n = t.accountID,
        a = t.botResponseId,
        i = t.externalConversationId,
        l = t.opensCreativeTest;
      e: {
        var s = e.action;
        if (s === "AB_TEST") {
          y(e, n, a, i, l);
          break e;
        }
        if (s === "DUPLICATE") {
          h(e, a);
          break e;
        }
        if (s === "EDIT_AD_CREATIVE") {
          C(e, a);
          break e;
        }
        if (s === "EDIT_AUDIENCE") {
          o("AdsMgmtDrawerActions").openTarget(
            "EDITOR_DRAWER",
            e.ad_object_ids,
            "ad_set",
            r("AdsToggleSource").maiba_cta,
            !1,
            r("immutable").List([
              r("AdsUEditorCampaignAutoScrollKey")
                .CAMPAIGN_TARGETING_SECTION_COMPONENT,
            ]),
          );
          break e;
        }
        if (s === "EDIT_BUDGET") {
          g(e, a);
          break e;
        }
        if (s === "EDIT_PLACEMENT") {
          o("AdsMgmtDrawerActions").openTarget(
            "EDITOR_DRAWER",
            e.ad_object_ids,
            "ad_set",
            r("AdsToggleSource").maiba_cta,
            !1,
            r("immutable").List([
              r("AdsUEditorCampaignAutoScrollKey")
                .CAMPAIGN_PLACEMENT_SECTION_COMPONENT,
            ]),
          );
          break e;
        }
        break e;
      }
    }
    ((l.MAIBA_ADS_MANAGER_CTA_ACTIONS = c),
      (l.isMAIBALLMRecABTestAdLevel = d),
      (l.useMAIBAAdsManagerCTAChecks = m),
      (l.MAIBAAdsManagerCTAChecksContainer = _),
      (l.runMAIBANonOSCTAAdsManagerAction = b));
  },
  98,
);
