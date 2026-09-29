__d(
  "WAWebOrgAdminGraphQLAddChannelMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "channelID" },
        t = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "channel_id",
                variableName: "channelID",
              },
              { kind: "Variable", name: "org_id", variableName: "orgID" },
            ],
            concreteType: "XWAOrgManagedChannelAddPayload",
            kind: "LinkedField",
            name: "xwa_org_managed_channel_add",
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
                name: "channel",
                plural: !1,
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
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLAddChannelMutation",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLAddChannelMutation",
          selections: n,
        },
        params: {
          id: "28394837166818065",
          metadata: {},
          name: "WAWebOrgAdminGraphQLAddChannelMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
