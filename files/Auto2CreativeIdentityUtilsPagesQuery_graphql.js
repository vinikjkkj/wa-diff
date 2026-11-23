__d(
  "Auto2CreativeIdentityUtilsPagesQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "filter" },
        t = { defaultValue: null, kind: "LocalArgument", name: "limit" },
        n = { defaultValue: null, kind: "LocalArgument", name: "userId" },
        r = [{ kind: "Variable", name: "id", variableName: "userId" }],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: [
            { kind: "Variable", name: "first", variableName: "limit" },
            { kind: "Literal", name: "is_promotable", value: !0 },
            {
              kind: "Variable",
              name: "name_or_id_contains",
              variableName: "filter",
            },
          ],
          concreteType: "UserFacebookPagesConnection",
          kind: "LinkedField",
          name: "facebook_pages",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Page",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                o,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "profile_picture",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "uri",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_create_ads_access",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_transitioned_to_new_page_experience",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_page_ale_ban_hammered",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_published",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "permitted_tasks",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "Auto2CreativeIdentityUtilsPagesQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [a],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [n, e, t],
          kind: "Operation",
          name: "Auto2CreativeIdentityUtilsPagesQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [a, o],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "34758934327084476",
          metadata: {},
          name: "Auto2CreativeIdentityUtilsPagesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
