__d(
  "WAWebEmailInviteSendGroupMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        n = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "XWASendEmailInvitesPayload",
            kind: "LinkedField",
            name: "xwa_send_email_invites",
            plural: !1,
            selections: [
              t,
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
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "email",
                    storageKey: null,
                  },
                  t,
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
          name: "WAWebEmailInviteSendGroupMutation",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebEmailInviteSendGroupMutation",
          selections: n,
        },
        params: {
          id: "28484430131216234",
          metadata: {},
          name: "WAWebEmailInviteSendGroupMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
