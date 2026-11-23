__d(
  "WhatsAppMarketingCampaignCustomerListPickerListsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "wabaId" }],
        t = [{ kind: "Variable", name: "id", variableName: "wabaId" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          concreteType:
            "WhatsAppBusinessAccountDefaultSubscriberPoolSubscriberListsConnection",
          kind: "LinkedField",
          name: "default_subscriber_pool_subscriber_lists",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdCustomAudience",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                n,
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
                  kind: "ScalarField",
                  name: "approximate_count",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "CustomAudienceSizeRange",
                  kind: "LinkedField",
                  name: "audience_size_range",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "lower_bound",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "upper_bound",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "CustomAudienceOperationStatus",
                  kind: "LinkedField",
                  name: "operation_status",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "status_code",
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
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WhatsAppMarketingCampaignCustomerListPickerListsQuery",
          selections: [
            {
              alias: "whatsAppBusinessAccount",
              args: t,
              concreteType: "WhatsAppBusinessAccount",
              kind: "LinkedField",
              name: "fetch__WhatsAppBusinessAccount",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WhatsAppMarketingCampaignCustomerListPickerListsQuery",
          selections: [
            {
              alias: "whatsAppBusinessAccount",
              args: t,
              concreteType: "WhatsAppBusinessAccount",
              kind: "LinkedField",
              name: "fetch__WhatsAppBusinessAccount",
              plural: !1,
              selections: [r, n],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29196443379968097",
          metadata: {},
          name: "WhatsAppMarketingCampaignCustomerListPickerListsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
