__d(
  "ProfileCometActionFriendRequestHandler_handler$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        a = [t];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometActionFriendRequestHandler_handler$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "profile_action",
            plural: !1,
            selections: [
              e,
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
                      e,
                      {
                        kind: "InlineFragment",
                        selections: [
                          t,
                          n,
                          r,
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "gender",
                            storageKey: null,
                          },
                          o,
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [t, n, r, o],
                        type: "RestrictedUser",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: a,
                        type: "Node",
                        abstractKey: "__isNode",
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "profile_owner",
                    plural: !1,
                    selections: a,
                    storageKey: null,
                  },
                ],
                type: "ProfileActionFriendRequest",
                abstractKey: null,
              },
              t,
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
