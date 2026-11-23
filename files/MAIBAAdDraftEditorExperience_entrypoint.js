__d(
  "MAIBAAdDraftEditorExperience.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBAAdDraftEditorContextProviderQuery$Parameters",
    "MAIBASimpleCreateExperience.entrypoint",
    "NestedRelayEntryPointBuilderUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e;
        return {
          entryPoints: t.useWrappedSimpleCreate
            ? {
                simpleCreate: o(
                  "NestedRelayEntryPointBuilderUtils",
                ).NestedRelayEntryPoint({
                  entryPoint: r("MAIBASimpleCreateExperience.entrypoint"),
                  entryPointParams: {
                    accountID: t.accountID,
                    campaignGroupID: t.campaignGroupID,
                  },
                }),
              }
            : {},
          queries: {
            adDraftEditorQueryRef: {
              parameters: r(
                "MAIBAAdDraftEditorContextProviderQuery$Parameters",
              ),
              variables: {
                accountID: t.accountID,
                adgroupIDs: t.adgroupIDs,
                boostFlowID: t.draftID,
                campaignGroupID: t.campaignGroupID,
                campaignIDs: t.campaignIDs,
                draftID: t.draftID,
                isAdsManager:
                  t.product === "ads_manager" && r("justknobx")._("5678"),
                isBoost: t.product === "boost",
                isIG: t.product === "ig",
                paymentSummaryEntryPoint:
                  t.product === "ig" ? "ig_desktop_boost" : "maiba",
                flowID: t.flowID,
                useOutcomeForecastV2: t.useOutcomeForecastV2,
              },
              options: {
                fetchKey: String((e = t.workspaceVersion) != null ? e : 0),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBAAdDraftEditorExperience.react",
      ).__setRef("MAIBAAdDraftEditorExperience.entrypoint"),
    };
    l.default = e;
  },
  98,
);
