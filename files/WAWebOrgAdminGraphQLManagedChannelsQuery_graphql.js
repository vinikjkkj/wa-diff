__d(
  "WAWebOrgAdminGraphQLManagedChannelsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "orgID" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "org_id", variableName: "orgID" }],
            concreteType: "XWAOrgManagedChannelListResponse",
            kind: "LinkedField",
            name: "xwa_org_managed_channels",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_reason",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XWAOrgManagedChannel",
                kind: "LinkedField",
                name: "channels",
                plural: !0,
                selections: [
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
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLManagedChannelsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLManagedChannelsQuery",
          selections: t,
        },
        params: {
          id: "27988950254107459",
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
