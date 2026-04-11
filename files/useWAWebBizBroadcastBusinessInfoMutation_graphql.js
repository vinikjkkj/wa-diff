__d(
  "useWAWebBizBroadcastBusinessInfoMutation.graphql",
  ["useWAWebBizBroadcastBusinessInfoMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
        ],
        r = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "XWAWhatsAppSMBMarketingMessageBusinessInfoMutationResponse",
            kind: "LinkedField",
            name: "xwa_smb_mm_business_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType:
                  "XWAWhatsAppSMBMarketingMessagesBusinessInfoEntWithID",
                kind: "LinkedField",
                name: "business",
                plural: !1,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType:
                  "XWAWhatsAppSMBMarketingMessagesBusinessInfoEntWithID",
                kind: "LinkedField",
                name: "business_payment_account",
                plural: !1,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType:
                  "XWAWhatsAppSMBMarketingMessagesBusinessInfoEntWithID",
                kind: "LinkedField",
                name: "ad_account",
                plural: !1,
                selections: t,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType:
                  "XWAWhatsAppSMBMarketingMessagesBusinessInfoEntWithID",
                kind: "LinkedField",
                name: "page",
                plural: !1,
                selections: t,
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
          name: "useWAWebBizBroadcastBusinessInfoMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizBroadcastBusinessInfoMutation",
          selections: r,
        },
        params: {
          id: n(
            "useWAWebBizBroadcastBusinessInfoMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizBroadcastBusinessInfoMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
