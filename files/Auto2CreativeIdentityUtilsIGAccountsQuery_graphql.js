__d(
  "Auto2CreativeIdentityUtilsIGAccountsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "pageIds" }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        n = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "ids", variableName: "pageIds" }],
            concreteType: "Page",
            kind: "LinkedField",
            name: "pages",
            plural: !0,
            selections: [
              t,
              {
                alias: null,
                args: null,
                concreteType: "PageToInstagramUsersV2Connection",
                kind: "LinkedField",
                name: "page_instagram_users_v2",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "InstagramUserV2",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [
                      t,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "instagram_actor_id",
                        storageKey: null,
                      },
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
                        name: "profile_picture_url",
                        storageKey: null,
                      },
                    ],
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
          name: "Auto2CreativeIdentityUtilsIGAccountsQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "Auto2CreativeIdentityUtilsIGAccountsQuery",
          selections: n,
        },
        params: {
          id: "34970414865906001",
          metadata: {},
          name: "Auto2CreativeIdentityUtilsIGAccountsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
