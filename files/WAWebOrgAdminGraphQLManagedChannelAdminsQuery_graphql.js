__d(
  "WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "channelID" },
        t = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        n = [{ kind: "Variable", name: "org_id", variableName: "orgID" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "error_reason",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: [
            { kind: "Variable", name: "channel_id", variableName: "channelID" },
          ],
          concreteType: "XWAOrgManagedChannel",
          kind: "LinkedField",
          name: "managed_channel",
          plural: !1,
          selections: [
            a,
            {
              alias: null,
              args: null,
              concreteType: "XWAOrgManagedChannelAdmins",
              kind: "LinkedField",
              name: "admins",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrgManagedChannelAdmin",
                  kind: "LinkedField",
                  name: "members",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "lid",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "role",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "outside_organization_count",
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
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLManagedChannelAdminsQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrg",
                  kind: "LinkedField",
                  name: "org_info",
                  plural: !1,
                  selections: [i],
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
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLManagedChannelAdminsQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "XWAOrgGetResponse",
              kind: "LinkedField",
              name: "xwa_org_get",
              plural: !1,
              selections: [
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: "XWAOrg",
                  kind: "LinkedField",
                  name: "org_info",
                  plural: !1,
                  selections: [i, a],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29593944580197266",
          metadata: {},
          name: "WAWebOrgAdminGraphQLManagedChannelAdminsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
