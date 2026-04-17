__d(
  "CometAggregatedEntitiesTooltipRenderer_entities.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        n = [e, t];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "CometAggregatedEntitiesTooltipRenderer_entities",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "count",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "sample_entities",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: n,
                type: "User",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: n,
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  e,
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "username",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_prioritize_ig_display_name",
                    storageKey: null,
                  },
                ],
                type: "InstagramUserV2",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "AggregatedEntitiesAtRange",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
