__d(
  "WAWebBizBroadcastProDataSharingConsentMutation.graphql",
  ["WAWebBizBroadcastProDataSharingConsentMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "businessID" },
          { defaultValue: null, kind: "LocalArgument", name: "consentStatus" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "business",
                    variableName: "businessID",
                  },
                  {
                    kind: "Variable",
                    name: "marketing_message_optimization_consent_status",
                    variableName: "consentStatus",
                  },
                ],
                kind: "ObjectValue",
                name: "data",
              },
            ],
            concreteType:
              "XFBUpsertConsentMarketingMessageWhatsAppEventSharingBusinessDefaultResponsePayload",
            kind: "LinkedField",
            name: "xfb_upsert_consent_marketing_message_whats_app_event_sharing_business_default",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType:
                  "XFBMarketingMessageWhatsAppEventSharingBusinessDefault",
                kind: "LinkedField",
                name: "marketing_message_whats_app_event_sharing_business_default",
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
                    name: "marketing_message_optimization_consent_status",
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
          name: "WAWebBizBroadcastProDataSharingConsentMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProDataSharingConsentMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProDataSharingConsentMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProDataSharingConsentMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
