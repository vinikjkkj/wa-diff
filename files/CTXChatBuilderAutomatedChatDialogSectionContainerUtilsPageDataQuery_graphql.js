__d(
  "CTXChatBuilderAutomatedChatDialogSectionContainerUtilsPageDataQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientPage__id.graphql",
    "ClientPage-resolvers",
    "Query-client_page-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "selected_page_id",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "pageID",
            variableName: "selected_page_id",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: [r],
                type: "ClientPage",
                abstractKey: null,
              },
              kind: "RelayResolver",
              storageKey: null,
              isOutputType: !1,
            },
          ],
          type: "ClientPage",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0 },
          name: "CTXChatBuilderAutomatedChatDialogSectionContainerUtilsPageDataQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              concreteType: "ClientPage",
              modelResolvers: {
                ClientPage: {
                  alias: null,
                  args: null,
                  fragment: {
                    args: null,
                    kind: "FragmentSpread",
                    name: "ClientPage__id",
                  },
                  kind: "RelayLiveResolver",
                  name: "__relay_model_instance",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("ClientPage__id.graphql"),
                    n("ClientPage-resolvers").ClientPage,
                    "id",
                    !0,
                  ),
                  path: "override_client_page.__relay_model_instance",
                },
              },
              serverObjectOperations: null,
              backingField: {
                alias: null,
                args: t,
                fragment: null,
                kind: "RelayResolver",
                name: "override_client_page",
                resolverModule: n("Query-client_page-resolver")
                  .override_client_page,
                path: "override_client_page",
              },
              linkedField: {
                alias: null,
                args: t,
                concreteType: "ClientPage",
                kind: "LinkedField",
                name: "override_client_page",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "useGetAdsMessengerPageDataSelector_Fragment",
                  },
                ],
                storageKey: null,
              },
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CTXChatBuilderAutomatedChatDialogSectionContainerUtilsPageDataQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              backingField: {
                name: "override_client_page",
                args: t,
                fragment: null,
                kind: "RelayResolver",
                storageKey: null,
                isOutputType: !1,
              },
              linkedField: {
                alias: null,
                args: t,
                concreteType: "ClientPage",
                kind: "LinkedField",
                name: "override_client_page",
                plural: !1,
                selections: [
                  {
                    name: "self",
                    args: null,
                    fragment: o,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  {
                    name: "override_name",
                    args: null,
                    fragment: o,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  {
                    name: "override_picture",
                    args: null,
                    fragment: o,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  {
                    name: "override_get_started_nullstate",
                    args: null,
                    fragment: o,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  r,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "353537875bd50e583e1fd813b502a97d",
          id: null,
          metadata: {},
          name: "CTXChatBuilderAutomatedChatDialogSectionContainerUtilsPageDataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
