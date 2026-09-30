__d(
  "WAWebOrgAdminGraphQLManagedChannelsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "orgID" }],
        t = [{ kind: "Variable", name: "org_id", variableName: "orgID" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "error_reason",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          concreteType: "XWAOrgManagedChannelsConnection",
          kind: "LinkedField",
          name: "managed_channels",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWAOrgManagedChannel",
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
                  kind: "ScalarField",
                  name: "description",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "invite_code",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrgManagedChannelPicture",
                  kind: "LinkedField",
                  name: "picture",
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
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLManagedChannelsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                n,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrg",
                  kind: "LinkedField",
                  name: "org_info",
                  plural: !1,
                  selections: [a],
                  storageKey: null,
                },
              ],
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
          name: "WAWebOrgAdminGraphQLManagedChannelsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                n,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrg",
                  kind: "LinkedField",
                  name: "org_info",
                  plural: !1,
                  selections: [a, o],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28671299149132484",
          metadata: {},
          name: "WAWebOrgAdminGraphQLManagedChannelsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
