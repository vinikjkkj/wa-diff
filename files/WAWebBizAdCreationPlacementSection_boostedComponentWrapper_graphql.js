__d(
  "WAWebBizAdCreationPlacementSection_boostedComponentWrapper.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationPlacementSection_boostedComponentWrapper",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "options",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdsLWIPublisherPlatform",
              kind: "LinkedField",
              name: "eligible_publisher_platforms",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "label",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "type",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "BoostedComponentCommonWrapper",
      abstractKey: "__isBoostedComponentCommonWrapper",
    };
    a.exports = e;
  },
  null,
);
