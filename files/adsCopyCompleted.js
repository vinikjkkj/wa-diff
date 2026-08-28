__d(
  "adsCopyCompleted",
  [
    "AdsApplicationUtils",
    "AdsCopyActionUtils",
    "AdsCopySource",
    "AdsCrepeAdObjectUtils",
    "AdsCrepePackageConfigUtil",
    "AdsDraftGroupByUtils",
    "AdsDuplicationIntoPackageUtils",
    "AdsManagerQPLUserFlowLogger",
    "AdsMgmtOpenTrayStore",
    "AdsPENavigationUtils",
    "AdsPERouterHelper",
    "AdsPerfInteractionLogDataUtil",
    "AdsPerfInteractionPFRHubUtils",
    "AdsToggleSource",
    "AdsUEditorHostIDs",
    "FBLogger",
    "QPLUserFlow",
    "adsCreateSelector",
    "adsDuplicationMaybeDispatchPromoAdsAlwaysOnToast",
    "adsGetIsMessageMarketingEnabledFromAdgroupIDSelector",
    "adsGetIsMessageMarketingEnabledFromCampaignGroupIDSelector",
    "adsGetIsMessageMarketingEnabledFromCampaignIDSelector",
    "adsMgmtTrayStateSelector",
    "adsPECrepeEditorStepIndexSelector",
    "adsPECrepeIsPackageSelector",
    "adsPECrepePackageConfigForAdObjectIDAndLevelSelector",
    "adsPECrepePackageConfigForAdObjectIDSelector",
    "cr:38161",
    "curry",
    "first",
    "gkx",
    "ifRequired",
    "maybeApplyIDs",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (n == null || n.length === 0) return !1;
      var a = r("AdsPERouterHelper").getRouter().getQueryParams(),
        i = a.current_step,
        l = a.package_config_id,
        s = o("AdsCrepeAdObjectUtils").getAdObjectTypeFromLevel(t);
      if (l == null) {
        var u;
        l =
          (u = r("adsPECrepePackageConfigForAdObjectIDAndLevelSelector")()(
            o("AdsCrepePackageConfigUtil").getObjectIDAndLevelMemoized(n[0], t),
          )) == null
            ? void 0
            : u.id;
      }
      if (l != null)
        return (
          (i = o(
            "adsPECrepeEditorStepIndexSelector",
          ).adsPECrepeGetEditorStepIndexForObjectTypeSelector()(s)),
          i === -1 && (i = 0),
          e
            .section("PACKAGE_AD_CREATION")
            .setCreationPackageConfigID(l)
            .setCurrentStep(i),
          !0
        );
      var c = r("AdsPENavigationUtils").getNavSectionFromAdObjectLevel(t);
      return (e.section(c), !0);
    }
    var s = function (t) {
      return r("adsCreateSelector")(
        [r("adsPECrepePackageConfigForAdObjectIDSelector")],
        function (n) {
          var e;
          return (
            ((e = n({ objectID: r("first")(t) })) == null ? void 0 : e.id) !=
            null
          );
        },
        { name: i.id },
      );
    };
    function u(e, t, n) {
      var r,
        o = !1;
      return (
        e != null ? (o = e.some(n)) : t != null && (o = t.some(n)),
        o && ((r = t == null ? void 0 : t.length) != null ? r : 0) > 1
      );
    }
    function c(t, a, l, c, d, m) {
      if (o("AdsApplicationUtils").isPowerEditor()) {
        var p,
          _,
          f,
          g,
          h,
          y,
          C = [],
          b = [];
        ((C = r("ifRequired")(
          "adsMgmtCampaignSelectedIdsSelector",
          function (e) {
            var t = e.adsMgmtCampaignSelectedIdsSelector;
            return t();
          },
          function () {
            return (
              r("FBLogger")("ads").mustfix(
                "Duplication Error: %s isn't required",
                "adsMgmtCampaignSelectedIdsSelector",
              ),
              []
            );
          },
        )),
          (b = r("ifRequired")(
            "adsMgmtCampaignGroupSelectedIdsSelector",
            function (e) {
              var t = e.adsMgmtCampaignGroupSelectedIdsSelector;
              return t();
            },
            function () {
              return (
                r("FBLogger")("ads").mustfix(
                  "Duplication Error: %s isn't required",
                  "adsMgmtCampaignGroupSelectedIdsSelector",
                ),
                []
              );
            },
          )));
        var v = o("AdsDraftGroupByUtils").groupAdObjectIDsByLevel(a);
        if (l === r("AdsCopySource").CREATION_PACKAGE_MFR_UPGRADE) {
          c == null || c(a);
          return;
        }
        if (l === r("AdsCopySource").SIMPLE_CREATE_QUICK_DUPLICATE) {
          (n("cr:38161").dispatch(
            {
              adgroupIDs: v.ad,
              fragments: a,
              hostID: r("AdsUEditorHostIDs").EDITING,
              newParentCampaignGroupIds: d,
              responses: t,
              shouldKeepOriginalsInCampaignTree: !1,
              source: l,
            },
            { line: "194", module: "adsCopyCompleted.js", moduleID: i.id },
          ),
            c == null || c(a));
          return;
        }
        var S = r("adsPECrepeIsPackageSelector")(),
          R = o("AdsCopyActionUtils").createCopyCompletedData(v, C, b),
          L = s((p = R.campaignGroupIDs) != null ? p : [])(),
          E = r("AdsPERouterHelper").getRouter().getActiveState(),
          k = r("adsMgmtTrayStateSelector")(),
          I =
            (b.length === 1 && E.section === "L3") ||
            (C.length === 1 && E.section === "L2") ||
            (((_ = R.adgroupIDs) == null ? void 0 : _.length) === 1 &&
              E.section === "L1"),
          T = !1;
        if (r("gkx")("13496")) {
          var D = u(
              b,
              R.campaignGroupIDs,
              r("adsGetIsMessageMarketingEnabledFromCampaignGroupIDSelector")(),
            ),
            x = u(
              C,
              R.campaignIDs,
              r("adsGetIsMessageMarketingEnabledFromCampaignIDSelector")(),
            ),
            $ = u(
              null,
              R.adgroupIDs,
              r("adsGetIsMessageMarketingEnabledFromAdgroupIDSelector")(),
            );
          T = D || x || $;
        }
        if (l === r("AdsCopySource").DUPLICATE_AND_PUBLISH) {
          (o("AdsManagerQPLUserFlowLogger").forEachMarker(
            r("qpl")._(270218207, "7032"),
            function (e, t, n) {
              r("QPLUserFlow").endSuccess(n, {
                instanceKey: t,
                annotations: {
                  string: { end_action_name: "duplicate_and_publish" },
                },
              });
            },
          ),
            n("cr:38161").dispatch(
              {
                responses: t,
                fragments: a,
                adgroupIDs: v.ad,
                source: l,
                shouldKeepOriginalsInCampaignTree: k != null,
                hostID: r("AdsUEditorHostIDs").EDITING,
                newParentCampaignGroupIds: d,
              },
              { line: "268", module: "adsCopyCompleted.js", moduleID: i.id },
            ),
            c == null || c(a));
          return;
        }
        if (
          (S && E.section !== "PACKAGE_AD_CREATION" && !I) ||
          (L &&
            ((f = (g = R.campaignGroupIDs) == null ? void 0 : g.length) != null
              ? f
              : 0) > 1) ||
          l === r("AdsCopySource").ASC_FRAGMENTATION_MFR ||
          T
        ) {
          var P, N;
          n("cr:38161").dispatch(
            {
              responses: t,
              fragments: a,
              adgroupIDs: v.ad,
              source: l,
              shouldKeepOriginalsInCampaignTree: k != null,
              hostID: r("AdsUEditorHostIDs").EDITING,
              newParentCampaignGroupIds: d,
            },
            { line: "292", module: "adsCopyCompleted.js", moduleID: i.id },
          );
          var M =
              (P = t[0]) == null ||
              (P = P.extraData) == null ||
              (P = P.unificationUpgradeData) == null
                ? void 0
                : P.isUnificationUpgrade,
            w =
              (N = t[0]) == null || (N = N.extraData) == null
                ? void 0
                : N.isEligibleForBAUToPGDStandardDuplication;
          if (
            ((l === r("AdsCopySource").ASC_FRAGMENTATION_MFR ||
              l === r("AdsCopySource").SHOPS_ADS_L3_UPGRADE_DUPLICATE ||
              l === r("AdsCopySource").BLENDED_ADS_L3_UPGRADE_DUPLICATE ||
              M === !0 ||
              w === !0) &&
              c &&
              c(a),
            l !== r("AdsCopySource").SHOPS_ADS_L3_UPGRADE_DUPLICATE &&
              l !== r("AdsCopySource").BLENDED_ADS_L3_UPGRADE_DUPLICATE &&
              M !== !0 &&
              w !== !0)
          ) {
            var A;
            o(
              "AdsPerfInteractionLogDataUtil",
            ).addHeroTracingInteractionCustomMetadata(
              m,
              ((A = {}), (A.duplication_no_reroute = !0), A),
            );
            return;
          }
        }
        var F =
            o(
              "AdsMgmtOpenTrayStore",
            ).AdsMgmtOpenTrayStore.getIsEditorHidden() === !1,
          O = function () {
            n("cr:38161").dispatch(
              {
                responses: t,
                fragments: a,
                adgroupIDs: v.ad,
                shouldKeepOriginalsInCampaignTree: k != null && F,
                source: l,
                hostID: r("AdsUEditorHostIDs").EDITING,
                newParentCampaignGroupIds: d,
              },
              { line: "331", module: "adsCopyCompleted.js", moduleID: i.id },
            );
          },
          B = r("AdsPERouterHelper").getRouteBuilder(),
          W = {
            toggleSource: r("AdsToggleSource").copy,
            shouldEditorBeHidden: !1,
          };
        B.action(function () {
          (c && c(a),
            (l === r("AdsCopySource").QUICK_DUPLICATE_ACTION_REDUCER ||
              l === r("AdsCopySource").PASTE_FROM_CLIPBOARD) &&
              r("adsDuplicationMaybeDispatchPromoAdsAlwaysOnToast")(a),
            o("AdsPerfInteractionPFRHubUtils").startPFRInteraction(i.id));
        }).context(W);
        var q = r("curry")(o("maybeApplyIDs").maybeApplyIDsImpl, B),
          U = r("curry")(e, B);
        if (
          (q("campaign", R.campaignGroupIDs),
          q("ad_set", R.campaignIDs),
          ((h = t[0]) == null || (h = h.extraData) == null
            ? void 0
            : h.isOptedInForCreativeTesting) === !0)
        ) {
          var V, H;
          q(
            "ad",
            (V = (H = R.adgroupIDs) == null ? void 0 : H.slice(0, 1)) != null
              ? V
              : [],
          );
        } else q("ad", R.adgroupIDs);
        U("campaign", R.campaignGroupIDs) ||
          U("ad_set", R.campaignIDs) ||
          U("ad", R.adgroupIDs);
        var G = (y = t[0]) == null ? void 0 : y.fullAdDraftFragments;
        if (
          G != null &&
          o("AdsDuplicationIntoPackageUtils").isCreationSourceAdDuplication(
            G[0].source,
          )
        ) {
          var z,
            j,
            K =
              (z =
                (j = G[0].values.find(function (e) {
                  return e.field === "campaign_id";
                })) == null
                  ? void 0
                  : j.new_value) != null
                ? z
                : "",
            Q = K.split('"').join("");
          if (
            Q.length > 0 &&
            o(
              "AdsDuplicationIntoPackageUtils",
            ).isDestinationPackageCampaignGroup(Q)
          ) {
            var X,
              Y,
              J =
                (X =
                  (Y = G[0].values.find(function (e) {
                    return e.field === "adset_id";
                  })) == null
                    ? void 0
                    : Y.new_value) != null
                  ? X
                  : "",
              Z = J.split('"').join("");
            return (
              o(
                "AdsDuplicationIntoPackageUtils",
              ).setSelectedIDsForCreationPackage(B, [Q], [Z]),
              B.action(function () {
                (O(), c && c(a));
              }),
              B.navigate()
            );
          }
        }
        var ee = S && l === r("AdsCopySource").PASTE_FROM_CLIPBOARD;
        (!ee && !L && B.tray("EDITOR_DRAWER"), B.navigate(!0), O());
      } else {
        var te = r("AdsPERouterHelper").getRouteBuilder();
        te.action(function () {
          n("cr:38161").dispatch(
            {
              responses: t,
              fragments: a,
              adgroupIDs: o("AdsDraftGroupByUtils").groupAdObjectIDsByLevel(a)
                .ad,
              shouldKeepOriginalsInCampaignTree: !0,
              source: l,
              hostID: null,
              newParentCampaignGroupIds: d,
            },
            { line: "440", module: "adsCopyCompleted.js", moduleID: i.id },
          );
        });
      }
    }
    l.default = c;
  },
  98,
);
