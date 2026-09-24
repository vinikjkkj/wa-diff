__d(
  "ReelsIFUHScroll_feedUnit.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ReelsIFUHScroll_feedUnit",
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
          name: "tracking",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "debug_info",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "showcase_story_type",
          storageKey: null,
        },
        {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 6 }],
          concreteType: "ShowcaseItem",
          kind: "LinkedField",
          name: "showcase_item",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "attachment",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "ReelsIFUCard_reel",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: "showcase_item(first:6)",
        },
      ],
      type: "ShowcaseFeedUnit",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
