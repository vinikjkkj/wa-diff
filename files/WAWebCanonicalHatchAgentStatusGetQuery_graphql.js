__d(
  "WAWebCanonicalHatchAgentStatusGetQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "WAGenAIHatchChannelMetadata",
          kind: "LinkedField",
          name: "wa_genai_hatch_channel_metadata",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "WAGenAIHatchAgentStatusResponse",
              kind: "LinkedField",
              name: "agent_status",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "activity_code",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "activity_text",
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
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebCanonicalHatchAgentStatusGetQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebCanonicalHatchAgentStatusGetQuery",
          selections: e,
        },
        params: {
          id: "25845071235188952",
          metadata: {},
          name: "WAWebCanonicalHatchAgentStatusGetQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
