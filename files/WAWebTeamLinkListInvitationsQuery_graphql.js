__d(
  "WAWebTeamLinkListInvitationsQuery.graphql",
  ["WAWebTeamLinkListInvitationsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: [{ kind: "Literal", name: "include_offboarded", value: !0 }],
          concreteType: "WhatsAppTeamLinkAgentInvitation",
          kind: "LinkedField",
          name: "whatsapp_teamlink_list_agent_invitations",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "employee_lid",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "employee_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "team_role",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "invitation_status",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "nonce_code",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "expires_at",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "offboarded_at",
              storageKey: null,
            },
          ],
          storageKey:
            "whatsapp_teamlink_list_agent_invitations(include_offboarded:true)",
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebTeamLinkListInvitationsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebTeamLinkListInvitationsQuery",
          selections: e,
        },
        params: {
          id: n("WAWebTeamLinkListInvitationsQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebTeamLinkListInvitationsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
