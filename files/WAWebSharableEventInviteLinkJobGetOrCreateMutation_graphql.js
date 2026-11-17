__d(
  "WAWebSharableEventInviteLinkJobGetOrCreateMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWAWAGetOrCreateEventInviteLinkResponse",
            kind: "LinkedField",
            name: "xwa_event_get_or_create_invite_link",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "link_token",
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
          name: "WAWebSharableEventInviteLinkJobGetOrCreateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebSharableEventInviteLinkJobGetOrCreateMutation",
          selections: t,
        },
        params: {
          id: "29279192645010802",
          metadata: {},
          name: "WAWebSharableEventInviteLinkJobGetOrCreateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
