__d(
  "HandleStoryBumperExposureMutation.graphql",
  ["HandleStoryBumperExposureMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "bumperClass" },
          { defaultValue: null, kind: "LocalArgument", name: "wasHidden" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "bumper_class",
                variableName: "bumperClass",
              },
              {
                kind: "Variable",
                name: "was_hidden",
                variableName: "wasHidden",
              },
            ],
            concreteType: "HandleStoryBumperExposureResponsePayload",
            kind: "LinkedField",
            name: "handle_story_bumper_exposure",
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
          name: "HandleStoryBumperExposureMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "HandleStoryBumperExposureMutation",
          selections: t,
        },
        params: {
          id: n("HandleStoryBumperExposureMutation_facebookRelayOperation"),
          metadata: {},
          name: "HandleStoryBumperExposureMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
