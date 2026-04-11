__d(
  "WAWebGetFBAccountPagesQuery.graphql",
  ["WAWebGetFBAccountPagesQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }],
        t = [{ kind: "Variable", name: "id", variableName: "userId" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: [{ kind: "Literal", name: "is_promotable", value: !0 }],
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
                {
                  alias: "name",
                  args: null,
                  kind: "ScalarField",
                  name: "ads_name",
                  storageKey: null,
                },
                r,
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
                  name: "permitted_tasks",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: "facebook_pages(is_promotable:true)",
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebGetFBAccountPagesQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [o],
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
          name: "WAWebGetFBAccountPagesQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [o, r],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("WAWebGetFBAccountPagesQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebGetFBAccountPagesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
