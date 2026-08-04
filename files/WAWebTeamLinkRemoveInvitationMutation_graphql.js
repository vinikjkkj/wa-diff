__d(
  "WAWebTeamLinkRemoveInvitationMutation.graphql",
  ["WAWebTeamLinkRemoveInvitationMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "lid" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "lid", variableName: "lid" }],
            concreteType: "WhatsAppTeamLinkRemoveAgentInvitation",
            kind: "LinkedField",
            name: "whatsapp_teamlink_remove_agent_invitation",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "removed",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "was_onboarded",
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
          name: "WAWebTeamLinkRemoveInvitationMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebTeamLinkRemoveInvitationMutation",
          selections: t,
        },
        params: {
          id: n("WAWebTeamLinkRemoveInvitationMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebTeamLinkRemoveInvitationMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
