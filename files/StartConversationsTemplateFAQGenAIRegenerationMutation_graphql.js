__d(
  "StartConversationsTemplateFAQGenAIRegenerationMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ad_account_id",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "ad_caption" },
        n = { defaultValue: null, kind: "LocalArgument", name: "ad_id" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "current_icebreaker",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "destination_type",
        },
        a = { defaultValue: null, kind: "LocalArgument", name: "ent_id" },
        i = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        l = { defaultValue: null, kind: "LocalArgument", name: "post_id" },
        s = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
              {
                kind: "Variable",
                name: "ad_caption",
                variableName: "ad_caption",
              },
              { kind: "Variable", name: "ad_id", variableName: "ad_id" },
              {
                kind: "Variable",
                name: "current_icebreaker",
                variableName: "current_icebreaker",
              },
              {
                kind: "Variable",
                name: "destination_type",
                variableName: "destination_type",
              },
              { kind: "Variable", name: "ent_id", variableName: "ent_id" },
              { kind: "Variable", name: "page_id", variableName: "page_id" },
              { kind: "Variable", name: "post_id", variableName: "post_id" },
            ],
            concreteType: "XFBTClickToMessageRegenerationOutput",
            kind: "LinkedField",
            name: "xfb_get_ai_regenerated_icebreaker_automated_response",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBTIcebreaker",
                kind: "LinkedField",
                name: "icebreaker",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "title",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "response",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ai_regeneration_id",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o, a, i, l],
          kind: "Fragment",
          metadata: null,
          name: "StartConversationsTemplateFAQGenAIRegenerationMutation",
          selections: s,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, i, l, o, t, n, a, r],
          kind: "Operation",
          name: "StartConversationsTemplateFAQGenAIRegenerationMutation",
          selections: s,
        },
        params: {
          id: "31143139031998113",
          metadata: {},
          name: "StartConversationsTemplateFAQGenAIRegenerationMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
