__d(
  "WAWebSharableEventInviteLinkJobInvalidateMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWAWAInvalidateEventInviteLinkResponse",
            kind: "LinkedField",
            name: "xwa_event_invalidate_invite_link",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "WAWebSharableEventInviteLinkJobInvalidateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebSharableEventInviteLinkJobInvalidateMutation",
          selections: t,
        },
        params: {
          id: "40073877888927531",
          metadata: {},
          name: "WAWebSharableEventInviteLinkJobInvalidateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
