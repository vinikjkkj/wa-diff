__d(
  "WAWebTeamLinkUpdateAgentRoleMutation.graphql",
  ["WAWebTeamLinkUpdateAgentRoleMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "employeeName",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "lid" },
        r = { defaultValue: null, kind: "LocalArgument", name: "teamRole" },
        o = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "employee_name",
                variableName: "employeeName",
              },
              { kind: "Variable", name: "lid", variableName: "lid" },
              { kind: "Variable", name: "team_role", variableName: "teamRole" },
            ],
            concreteType: "WhatsAppTeamLinkUpdateAgentRoleResponse",
            kind: "LinkedField",
            name: "whatsapp_teamlink_update_agent_role",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "WhatsAppTeamLinkAgentProfile",
                kind: "LinkedField",
                name: "employee",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "employee_lid",
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
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebTeamLinkUpdateAgentRoleMutation",
          selections: o,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e, r],
          kind: "Operation",
          name: "WAWebTeamLinkUpdateAgentRoleMutation",
          selections: o,
        },
        params: {
          id: n("WAWebTeamLinkUpdateAgentRoleMutation_facebookRelayOperation"),
          metadata: {},
          name: "WAWebTeamLinkUpdateAgentRoleMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
