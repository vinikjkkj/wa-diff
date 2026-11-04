__d(
  "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "gid" },
        t = { defaultValue: null, kind: "LocalArgument", name: "orgID" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "rosterEntryIDs",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "utmCampaign" },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        a = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "gid", variableName: "gid" },
              { kind: "Variable", name: "org_id", variableName: "orgID" },
              {
                kind: "Variable",
                name: "roster_entry_ids",
                variableName: "rosterEntryIDs",
              },
              {
                kind: "Variable",
                name: "utm_campaign",
                variableName: "utmCampaign",
              },
            ],
            concreteType: "XWAOrgManagedGroupEmailInviteResponse",
            kind: "LinkedField",
            name: "xwa_org_managed_group_send_email_invites",
            plural: !1,
            selections: [
              o,
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
                concreteType: "XWAEmailInviteResult",
                kind: "LinkedField",
                name: "results",
                plural: !0,
                selections: [o],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation",
          selections: a,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e, n, r],
          kind: "Operation",
          name: "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation",
          selections: a,
        },
        params: {
          id: "29088707084112709",
          metadata: {},
          name: "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
