__d(
  "WAWebMexGroupStoreInviteSmsJobMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWA2GroupStoreInvitesResponse",
            kind: "LinkedField",
            name: "xwa2_group_store_invites_sms",
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
                concreteType: "XWA2GroupStoreInvitesParticpantResponse",
                kind: "LinkedField",
                name: "participant_responses",
                plural: !0,
                selections: [
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
          name: "WAWebMexGroupStoreInviteSmsJobMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexGroupStoreInviteSmsJobMutation",
          selections: t,
        },
        params: {
          id: "26810859745268181",
          metadata: {},
          name: "WAWebMexGroupStoreInviteSmsJobMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
