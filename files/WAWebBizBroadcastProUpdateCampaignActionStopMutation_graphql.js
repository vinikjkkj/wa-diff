__d(
  "WAWebBizBroadcastProUpdateCampaignActionStopMutation.graphql",
  [
    "WAWebBizBroadcastProUpdateCampaignActionStopMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "campaign_id" },
          { defaultValue: null, kind: "LocalArgument", name: "status" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "campaign_id",
                variableName: "campaign_id",
              },
              { kind: "Variable", name: "status", variableName: "status" },
            ],
            concreteType: "XFBWhatsAppBusinessMMLiteCampaign",
            kind: "LinkedField",
            name: "update_wa_bb_pro_campaign",
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
                name: "bb_pro_can_stop",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "bb_pro_display_status",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProUpdateCampaignActionStopMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProUpdateCampaignActionStopMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProUpdateCampaignActionStopMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProUpdateCampaignActionStopMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
