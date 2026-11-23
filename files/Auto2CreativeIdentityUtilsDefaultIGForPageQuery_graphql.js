__d(
  "Auto2CreativeIdentityUtilsDefaultIGForPageQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "pageIds" }],
        t = [{ kind: "Variable", name: "ids", variableName: "pageIds" }],
        n = [{ kind: "Literal", name: "first", value: 1 }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = [
          {
            alias: null,
            args: null,
            concreteType: "InstagramUserV2",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [
              r,
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
        a = {
          alias: null,
          args: n,
          concreteType: "PageToInstagramUsersV2Connection",
          kind: "LinkedField",
          name: "page_instagram_users_v2",
          plural: !1,
          selections: o,
          storageKey: "page_instagram_users_v2(first:1)",
        },
        i = {
          alias: null,
          args: n,
          concreteType: "PageToPageBackedInstagramUsersV2Connection",
          kind: "LinkedField",
          name: "page_backed_instagram_users_v2",
          plural: !1,
          selections: o,
          storageKey: "page_backed_instagram_users_v2(first:1)",
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "Auto2CreativeIdentityUtilsDefaultIGForPageQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "pages",
              plural: !0,
              selections: [a, i],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "Auto2CreativeIdentityUtilsDefaultIGForPageQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "pages",
              plural: !0,
              selections: [a, i, r],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27013032651630837",
          metadata: {},
          name: "Auto2CreativeIdentityUtilsDefaultIGForPageQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
