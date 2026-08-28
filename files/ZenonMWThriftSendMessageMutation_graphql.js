__d(
  "ZenonMWThriftSendMessageMutation.graphql",
  ["ZenonMWThriftSendMessageMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "RtcWebSendMultiwayThriftSignalingMessageResponsePayload",
            kind: "LinkedField",
            name: "rtc_web_send_multiway_thrift_signaling_message",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "response",
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
          name: "ZenonMWThriftSendMessageMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "ZenonMWThriftSendMessageMutation",
          selections: t,
        },
        params: {
          id: n("ZenonMWThriftSendMessageMutation_facebookRelayOperation"),
          metadata: {},
          name: "ZenonMWThriftSendMessageMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
