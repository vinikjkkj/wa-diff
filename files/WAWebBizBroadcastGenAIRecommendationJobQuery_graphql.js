__d(
  "WAWebBizBroadcastGenAIRecommendationJobQuery.graphql",
  ["WAWebBizBroadcastGenAIRecommendationJobQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "data" }],
        t = [{ kind: "Variable", name: "data", variableName: "data" }],
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWAWhatsAppBusinessBroadcastGenAIToneMessagePair",
              kind: "LinkedField",
              name: "tone_message_pair",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "tone",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "message",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "follow_ups",
              storageKey: null,
            },
          ],
          type: "XWAWhatsAppBusinessBroadcastGenAIRecommendationResultSuccess",
          abstractKey: null,
        },
        o = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "error_message",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "error_code",
              storageKey: null,
            },
          ],
          type: "XWAWhatsAppBusinessBroadcastGenAIRecommendationResultError",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastGenAIRecommendationJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType:
                "XWAWhatsAppBusinessBroadcastGenAIRecommendationResponse",
              kind: "LinkedField",
              name: "xwa_business_broadcast_genai_recommendation",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "response",
                  plural: !1,
                  selections: [r, o],
                  storageKey: null,
                },
              ],
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
          name: "WAWebBizBroadcastGenAIRecommendationJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType:
                "XWAWhatsAppBusinessBroadcastGenAIRecommendationResponse",
              kind: "LinkedField",
              name: "xwa_business_broadcast_genai_recommendation",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "response",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    r,
                    o,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastGenAIRecommendationJobQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastGenAIRecommendationJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
