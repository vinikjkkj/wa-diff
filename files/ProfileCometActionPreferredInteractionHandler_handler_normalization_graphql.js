__d(
  "ProfileCometActionPreferredInteractionHandler_handler$normalization.graphql",
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
      };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometActionPreferredInteractionHandler_handler$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "profile_action",
            plural: !1,
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
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "profile_owner",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "ProfileCustomCTA",
                        kind: "LinkedField",
                        name: "profile_plus_custom_cta",
                        plural: !1,
                        selections: [e],
                        storageKey: null,
                      },
                      e,
                    ],
                    storageKey: null,
                  },
                ],
                type: "ProfileActionPreferredInteraction",
                abstractKey: null,
              },
              e,
            ],
            storageKey: null,
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
