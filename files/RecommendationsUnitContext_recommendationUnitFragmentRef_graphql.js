__d(
  "RecommendationsUnitContext_recommendationUnitFragmentRef.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "RecommendationsUnitContext_recommendationUnitFragmentRef",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "user",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "User",
              kind: "LinkedField",
              name: "if_viewer_can_see_pymk_unit_on_initial_load",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBProfileEntityConvergenceHeaderRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
