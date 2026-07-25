__d(
  "WAWebBizBroadcastProUpdateCampaignActionMutation.graphql",
  ["WAWebBizBroadcastProUpdateCampaignActionMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "XFBUpdateWhatsAppBusinessMmLiteCampaignResponsePayload",
            kind: "LinkedField",
            name: "xfb_update_whats_app_business_mm_lite_campaign",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWhatsAppBusinessMMLiteCampaign",
                kind: "LinkedField",
                name: "whats_app_business_mm_lite_campaign",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                ],
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
          name: "WAWebBizBroadcastProUpdateCampaignActionMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProUpdateCampaignActionMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProUpdateCampaignActionMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProUpdateCampaignActionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
