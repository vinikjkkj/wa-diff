__d(
  "MAIBAOrganicContentObjectHoverCardQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "post_id" }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "entity_type",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "created_at",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          concreteType: "MAIBATofuImageSource",
          kind: "LinkedField",
          name: "image_source",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "post_type",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "media_type",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "story_duration_in_sec",
          storageKey: null,
        },
        s = [
          {
            alias: "tofu_entity",
            args: [{ kind: "Variable", name: "id", variableName: "post_id" }],
            concreteType: "MAIBATofuEntityData",
            kind: "LinkedField",
            name: "maiba_tofu_entity",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MAIBATofuEntityInfo",
                kind: "LinkedField",
                name: "entity_info",
                plural: !1,
                selections: [
                  t,
                  n,
                  r,
                  o,
                  a,
                  i,
                  l,
                  {
                    alias: null,
                    args: null,
                    concreteType: "MAIBATofuEntityInfo",
                    kind: "LinkedField",
                    name: "boosted_content",
                    plural: !1,
                    selections: [t, n, r, o, a, i, l],
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
          name: "MAIBAOrganicContentObjectHoverCardQuery",
          selections: s,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAOrganicContentObjectHoverCardQuery",
          selections: s,
        },
        params: {
          id: "29435433429408367",
          metadata: {},
          name: "MAIBAOrganicContentObjectHoverCardQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
