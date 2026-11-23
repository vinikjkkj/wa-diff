__d(
  "MAIBASimpleCreateExperienceQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignGroupID",
          },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "legacy_account_id",
              variableName: "accountID",
            },
          ],
          concreteType: "AdAccount",
          kind: "LinkedField",
          name: "ad_account",
          plural: !1,
          selections: [t],
          storageKey: null,
        },
        o = [{ kind: "Variable", name: "id", variableName: "campaignGroupID" }],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "draft_fragment_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "MAIBASimpleCreateExperienceQuery",
          selections: [
            r,
            {
              kind: "ClientEdgeToClientObject",
              concreteType: "ClientAdAccount",
              modelResolvers: {
                ClientAdAccount: {
                  alias: null,
                  args: null,
                  fragment: {
                    args: null,
                    kind: "FragmentSpread",
                    name: "ClientAdAccount__id",
                  },
                  kind: "RelayLiveResolver",
                  name: "__relay_model_instance",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("ClientAdAccount__id.graphql"),
                    n("ClientAdAccount-resolvers").ClientAdAccount,
                    "id",
                    !1,
                  ),
                  path: "selected_ad_account.__relay_model_instance",
                },
              },
              serverObjectOperations: null,
              backingField: {
                alias: null,
                args: null,
                fragment: null,
                kind: "RelayLiveResolver",
                name: "selected_ad_account",
                resolverModule: n("Query-selected_ad_account-resolver")
                  .selected_ad_account,
                path: "selected_ad_account",
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "adsPECurrentDraftIDSelectorAccountIDFragment",
                  },
                ],
                storageKey: null,
              },
            },
            {
              kind: "CatchField",
              field: {
                alias: "campaign_group",
                args: o,
                concreteType: "AdCampaignGroupWithDraftData",
                kind: "LinkedField",
                name: "fetch__AdCampaignGroupWithDraftData",
                plural: !1,
                selections: [a, i],
                storageKey: null,
              },
              to: "NULL",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBASimpleCreateExperienceQuery",
          selections: [
            r,
            {
              kind: "ClientEdgeToClientObject",
              backingField: {
                name: "selected_ad_account",
                args: null,
                fragment: null,
                kind: "RelayResolver",
                storageKey: null,
                isOutputType: !1,
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    alias: "account_id",
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                  t,
                ],
                storageKey: null,
              },
            },
            {
              alias: "campaign_group",
              args: o,
              concreteType: "AdCampaignGroupWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdCampaignGroupWithDraftData",
              plural: !1,
              selections: [a, i, t],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28310035928690388",
          metadata: {},
          name: "MAIBASimpleCreateExperienceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
