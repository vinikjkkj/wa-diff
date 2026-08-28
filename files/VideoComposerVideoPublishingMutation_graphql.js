__d(
  "VideoComposerVideoPublishingMutation.graphql",
  ["VideoComposerVideoPublishingMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "VideoPublishResponsePayload",
            kind: "LinkedField",
            name: "video_publish",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "video_asset_id",
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
          name: "VideoComposerVideoPublishingMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "VideoComposerVideoPublishingMutation",
          selections: t,
        },
        params: {
          id: n("VideoComposerVideoPublishingMutation_facebookRelayOperation"),
          metadata: {},
          name: "VideoComposerVideoPublishingMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
