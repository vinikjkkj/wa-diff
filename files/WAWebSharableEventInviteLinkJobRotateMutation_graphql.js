__d(
  "WAWebSharableEventInviteLinkJobRotateMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XWAWARotateEventInviteLinkResponse",
            kind: "LinkedField",
            name: "xwa_event_rotate_invite_link",
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
          name: "WAWebSharableEventInviteLinkJobRotateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebSharableEventInviteLinkJobRotateMutation",
          selections: t,
        },
        params: {
          id: "29967378199535556",
          metadata: {},
          name: "WAWebSharableEventInviteLinkJobRotateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
