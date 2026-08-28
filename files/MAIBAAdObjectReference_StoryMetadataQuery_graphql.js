__d(
  "MAIBAAdObjectReference_StoryMetadataQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "storyId" }],
        t = [
          {
            fields: [{ kind: "Variable", name: "id", variableName: "storyId" }],
            kind: "ObjectValue",
            name: "args",
          },
          {
            kind: "Literal",
            name: "caller_id",
            value: "MAIBA_ORGANIC_CONTENT_HOVER_CARD",
          },
        ],
        n = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "media_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "story_duration_in_sec",
              storageKey: null,
            },
          ],
          type: "TofuEntityWithStoryInfo",
          abstractKey: "__isTofuEntityWithStoryInfo",
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBAAdObjectReference_StoryMetadataQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "TofuEntity",
              kind: "LinkedField",
              name: "tofu_entity",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "entity_info",
                  plural: !1,
                  selections: [n],
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
          name: "MAIBAAdObjectReference_StoryMetadataQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "TofuEntity",
              kind: "LinkedField",
              name: "tofu_entity",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "entity_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    n,
                    r,
                  ],
                  storageKey: null,
                },
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27020177567613183",
          metadata: {},
          name: "MAIBAAdObjectReference_StoryMetadataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
