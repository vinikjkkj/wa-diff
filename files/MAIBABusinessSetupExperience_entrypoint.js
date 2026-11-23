__d(
  "MAIBABusinessSetupExperience.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBABusinessSetupContextProviderQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e;
        return {
          queries: {
            businessSetupQueryRef: {
              parameters: r(
                "MAIBABusinessSetupContextProviderQuery$Parameters",
              ),
              variables: {
                adAccountIDs: t.adAccountIDs,
                appStateInput: {
                  app_type: "BUSINESS_SETUP",
                  external_conversation_id: t.externalConversationID,
                },
                businessIDs: t.businessID != null ? [t.businessID] : [],
                pageIDs: t.pageIDs,
              },
              options: {
                fetchKey: String((e = t.workspaceVersion) != null ? e : 0),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBABusinessSetupExperience.react",
      ).__setRef("MAIBABusinessSetupExperience.entrypoint"),
    };
    l.default = e;
  },
  98,
);
