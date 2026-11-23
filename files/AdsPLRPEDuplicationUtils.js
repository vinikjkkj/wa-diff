__d(
  "AdsPLRPEDuplicationUtils",
  [
    "AdsCopyDataManager",
    "AdsCopySource",
    "AdsExperimentsCreateTestModalUtils",
    "AdsPLRPEDuplicationUtilsRecommendationActionMutation.graphql",
    "AdsPerfInteractionsController",
    "RelayModern",
    "goURI",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t,
        n = e.accountID,
        r = e.catalogID,
        o = e.draftID,
        a = e.productSetID,
        i = e.recommendedAdgroupID,
        l = e.virtualProductSetID,
        s = {
          catalog_id: r,
          product_set_id: a != null ? a : null,
          virtual_product_set_id: l != null ? l : null,
        };
      return {
        accountID: n,
        draftID: o,
        ids: [i],
        newParentID: null,
        requestID: 0,
        extraData: {
          adsDuplicationUpgradeProductExtensionsData: ((t = {}), (t[i] = s), t),
        },
      };
    }
    function u(e, t) {
      var n,
        r = e.find(function (e) {
          return e.ad_object_type === "ad" && e.source_ad_object_id === t;
        });
      return (n = r == null ? void 0 : r.ad_object_id) != null ? n : null;
    }
    function c(e, t) {
      return "/adsmanager/manage/ads?act=" + e + "&selected_ad_ids=" + t;
    }
    function d(t, r) {
      var a = r.accountID,
        i = r.catalogID,
        l = r.productSetID,
        s = r.recommendedAdgroupID,
        u = r.virtualProductSetID,
        c = u != null,
        d = c ? i : l,
        m = c ? "duplicate_pe_virtual" : "duplicate_pe_existing";
      return d == null
        ? Promise.resolve()
        : new Promise(function (r) {
            o("RelayModern").commitMutation(t, {
              mutation:
                e !== void 0
                  ? e
                  : (e = n(
                      "AdsPLRPEDuplicationUtilsRecommendationActionMutation.graphql",
                    )),
              variables: {
                adAccountID: a,
                productSetID: d,
                entityID: s,
                category: m,
                actionType: "accept",
              },
              onCompleted: function () {
                return r();
              },
              onError: function () {
                r();
              },
            });
          });
    }
    async function m(e, t) {
      var n = t.accountID,
        a = t.catalogID,
        l = t.productSetID,
        m = t.recommendedAdgroupID,
        p = t.virtualProductSetID,
        _ = d(e, t).catch(function () {});
      r("AdsPerfInteractionsController").startInteraction(
        "am.product_insights.sa_to_pe_duplication",
        i.id,
      );
      var f = await o("AdsExperimentsCreateTestModalUtils").lazyGetDraftID(n),
        g = s({
          accountID: n,
          catalogID: a,
          draftID: f,
          productSetID: l,
          recommendedAdgroupID: m,
          virtualProductSetID: p,
        });
      o("AdsCopyDataManager").copy(
        [g],
        r("AdsCopySource").PLR_PE_RECOMMENDATION,
        "ad",
        function (e) {
          var t = u(e, m);
          if (t != null) {
            var o = 5e3,
              a = new Promise(function (e) {
                window.setTimeout(e, o);
              });
            r("promiseDone")(
              Promise.race([_, a]).then(function () {
                r("goURI")(c(n, t));
              }),
            );
          }
        },
        null,
      );
    }
    ((l.buildPEDuplicationRequest = s),
      (l.getDuplicatedAdgroupID = u),
      (l.buildAdEditorURL = c),
      (l.recordPERecommendationAccepted = d),
      (l.genDuplicateAsProductShowcaseAd = m));
  },
  98,
);
