__d(
  "WAWebTeamLinkCreateInvitationMutation.graphql",
  ["WAWebTeamLinkCreateInvitationMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "employeeName",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "lid" },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "employee_name",
                variableName: "employeeName",
              },
              { kind: "Variable", name: "lid", variableName: "lid" },
            ],
            concreteType: "WhatsAppTeamLinkAgentInvitation",
            kind: "LinkedField",
            name: "whatsapp_teamlink_create_agent_invitation",
            plural: !1,
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
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebTeamLinkCreateInvitationMutation",
          selections: r,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebTeamLinkCreateInvitationMutation",
          selections: r,
        },
        params: {
          id: n("WAWebTeamLinkCreateInvitationMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebTeamLinkCreateInvitationMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
