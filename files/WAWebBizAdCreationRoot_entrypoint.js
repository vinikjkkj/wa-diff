__d(
  "WAWebBizAdCreationRoot.entrypoint",
  [
    "JSResourceForInteraction",
    "WAWebBizAdCreationEntryMode",
    "WAWebBizAdCreationRootQuery$Parameters",
    "WAWebBizAdCreationRootRecreateSourceQuery$Parameters",
    "getWAWebBizAdCreationEntryMode",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = s(t);
        return {
          queries: babelHelpers.extends(
            {
              creationRootQueryReference: {
                options: { fetchPolicy: "network-only" },
                parameters: r("WAWebBizAdCreationRootQuery$Parameters"),
                variables: {
                  draftID: t.draft_id,
                  input: {
                    ad_account_id: t.ad_account_id,
                    boost_id: t.boost_id,
                    flow_id: t.flow_id,
                    page_id: t.page_id,
                    product: "BOOSTED_MESSAGE",
                  },
                  isFBAccount: t.ad_account_type === "FB",
                  isWAAccount: t.ad_account_type === "WAA",
                  pageID: t.page_id,
                },
              },
            },
            e != null
              ? {
                  recreateSourceQueryReference: {
                    options: { fetchPolicy: "network-only" },
                    parameters: r(
                      "WAWebBizAdCreationRootRecreateSourceQuery$Parameters",
                    ),
                    variables: { boostID: e },
                  },
                }
              : {},
          ),
        };
      },
      root: r("JSResourceForInteraction")(
        "WAWebBizAdCreationRoot.react",
      ).__setRef("WAWebBizAdCreationRoot.entrypoint"),
    };
    function s(e) {
      var t = e.boost_id,
        n = e.draft_id,
        o =
          r("getWAWebBizAdCreationEntryMode")({ boostID: t, draftID: n }) ===
          r("WAWebBizAdCreationEntryMode").RECREATE;
      return o && r("justknobx")._("3027") ? t : null;
    }
    l.default = e;
  },
  98,
);
