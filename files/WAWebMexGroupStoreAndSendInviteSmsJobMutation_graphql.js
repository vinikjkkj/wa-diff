__d(
  "WAWebMexGroupStoreAndSendInviteSmsJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWA2GroupStoreAndSendInvitesSMSResponse",
            kind: "LinkedField",
            name: "xwa2_group_store_and_send_invites_sms",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "group_jid",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType:
                  "XWA2GroupStoreAndSendInvitesSMSParticipantResponse",
                kind: "LinkedField",
                name: "participant_responses",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "jid",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "server_sent",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "error_code",
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
          name: "WAWebMexGroupStoreAndSendInviteSmsJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexGroupStoreAndSendInviteSmsJobMutation",
          selections: t,
        },
        params: {
          id: "29313771494886407",
          metadata: {},
          name: "WAWebMexGroupStoreAndSendInviteSmsJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
