__d(
  "CometFeedStoryAudienceStrategy_audience$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometFeedStoryAudienceStrategy_audience$normalization",
      selections: [
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_prod_eligible",
              storageKey: null,
            },
          ],
          type: "ICometStorySection",
          abstractKey: "__isICometStorySection",
        },
        {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "story",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PrivacyScope",
              kind: "LinkedField",
              name: "privacy_scope",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "icon_image",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "description",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
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
    };
    a.exports = e;
  },
  null,
);
