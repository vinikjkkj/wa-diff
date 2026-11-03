__d(
  "ProfileCometActionFriendRequestHandler_handler.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
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
          name: "friendship_status",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "ProfileCometActionFriendRequestHandler_handler",
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
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "restrictable_profile_owner",
                    plural: !1,
                    selections: [
                      {
                        kind: "InlineFragment",
                        selections: e,
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: e,
                        type: "RestrictedUser",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "ProfileActionFriendRequest",
                abstractKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometActiveFriendMenu_action",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "ProfileCometIncomingFriendRequestMenu_action",
              },
            ],
            storageKey: null,
          },
        ],
        type: "ProfileActionFriendRequestHandler",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
