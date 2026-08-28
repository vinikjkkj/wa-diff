__d(
  "MAIBAAdObjectHoverCardPopover_IGLWIQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        { defaultValue: null, kind: "LocalArgument", name: "adObjectId" },
      ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAAdObjectHoverCardPopover_IGLWIQuery",
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "adObjectId",
                  variableName: "adObjectId",
                },
              ],
              kind: "FragmentSpread",
              name: "useIGLWIAdObjectHoverCardData_Fragment",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAAdObjectHoverCardPopover_IGLWIQuery",
          selections: [
            {
              alias: "campaign_group",
              args: [
                { kind: "Variable", name: "id", variableName: "adObjectId" },
              ],
              concreteType: "MAIBAAdCampaignGroupData",
              kind: "LinkedField",
              name: "maiba_ad_campaign_group",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AdDeliveryStatusNode",
                  kind: "LinkedField",
                  name: "delivery_status_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "status",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "LWIAdsManagementCommonRenderer",
                  kind: "LinkedField",
                  name: "lwi_common_renderer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "body_text",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "datetime_text",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "LWIAdsManagementRendererImageInfo",
                      kind: "LinkedField",
                      name: "image_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "images",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "LWIAdsManagementRendererSpendInfo",
                      kind: "LinkedField",
                      name: "spend_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "title_text",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "meta_text",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27023731973925180",
          metadata: {},
          name: "MAIBAAdObjectHoverCardPopover_IGLWIQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
