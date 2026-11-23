__d(
  "MAIBACreativeSuggestionsExperienceQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "ideaID" },
        t = { defaultValue: null, kind: "LocalArgument", name: "unitID" },
        n = [
          { kind: "Variable", name: "idea_id", variableName: "ideaID" },
          { kind: "Variable", name: "unit_id", variableName: "unitID" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unit_id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "concept_id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          concreteType: "XFBMAIBACreativeCompassIdeasObjectIdea",
          kind: "LinkedField",
          name: "ideas",
          plural: !0,
          selections: [
            o,
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
              name: "rationale",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          concreteType: "XFBMAIBACreativeCompassIdeasObjectIdeaCreative",
          kind: "LinkedField",
          name: "idea_creatives",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "creative_id",
              storageKey: null,
            },
            o,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "image_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "video_url",
              storageKey: null,
            },
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
              name: "overlay_elements_json",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "root_creative_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "adgroup_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBACreativeSuggestionsExperienceQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "MAIBACreativeCompassIdeasObject",
              kind: "LinkedField",
              name: "maiba_creative_compass_ideas",
              plural: !1,
              selections: [r, a, i],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "MAIBACreativeSuggestionsExperienceQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "MAIBACreativeCompassIdeasObject",
              kind: "LinkedField",
              name: "maiba_creative_compass_ideas",
              plural: !1,
              selections: [
                r,
                a,
                i,
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
        },
        params: {
          id: "29054242070874054",
          metadata: {},
          name: "MAIBACreativeSuggestionsExperienceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
