__d(
  "WAWebCanonicalHatchLinkedStatusGetQuery.graphql",
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
              concreteType: "WAGenAIHatchLinkedStatusResponse",
              kind: "LinkedField",
              name: "linked_status",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_channel",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "status",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_paired",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "channel_fbid",
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
          name: "WAWebCanonicalHatchLinkedStatusGetQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebCanonicalHatchLinkedStatusGetQuery",
          selections: e,
        },
        params: {
          id: "35121461644169181",
          metadata: {},
          name: "WAWebCanonicalHatchLinkedStatusGetQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
