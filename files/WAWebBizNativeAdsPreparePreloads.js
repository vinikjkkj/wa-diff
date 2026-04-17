__d(
  "WAWebBizNativeAdsPreparePreloads",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationConsts",
    "WAWebBizAdCreationRoot.entrypoint",
    "WAWebBizAdManagementRootQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i =
          (a = n == null ? void 0 : n.adAccountId) != null ? a : e.adAccountId,
        l = e.pageId;
      if (l == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "prepareAdCreationEntrypoint called without pageId \u2014 identity resolution must complete before reloading entrypoint",
        );
      return o("CometRelay").loadEntryPoint(
        {
          getEnvironment: function () {
            return e.relayEnvironment;
          },
        },
        r("WAWebBizAdCreationRoot.entrypoint"),
        {
          page_id: l,
          flow_id: t,
          ad_account_type: e.accountType,
          ad_account_id: i,
          boost_id: n == null ? void 0 : n.boostId,
          draft_id: n == null ? void 0 : n.draftId,
        },
      );
    }
    function s(e) {
      return o("CometRelay").loadQuery(
        e.relayEnvironment,
        r("WAWebBizAdManagementRootQuery$Parameters"),
        {
          page_id_1: e.adManagementQueryVariables.pageId1,
          page_id_2: e.adManagementQueryVariables.pageId2,
          draft_page_id: e.adManagementQueryVariables.draftPageId,
          options: {},
          first: o("WAWebBizAdCreationConsts").AD_MANAGEMENT_INITIAL_LOAD_COUNT,
          after: null,
        },
        { fetchPolicy: "network-only" },
      );
    }
    ((l.prepareAdCreationEntrypoint = e), (l.prepareAdManagementQuery = s));
  },
  98,
);
