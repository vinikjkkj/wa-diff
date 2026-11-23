__d(
  "MAIBAMessageSignalsCTARendererEnableAutomaticEventsMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "enable" },
        t = { defaultValue: null, kind: "LocalArgument", name: "pixel_id" },
        n = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "enable", variableName: "enable" },
              { kind: "Variable", name: "pixel_id", variableName: "pixel_id" },
            ],
            concreteType: "XFBPixelAutomaticEventsSetupMutationResponse",
            kind: "LinkedField",
            name: "xfb_pixel_set_enable_automatic_events_setup",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "enabled",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "auto_accepted_count",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "MAIBAMessageSignalsCTARendererEnableAutomaticEventsMutation",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "MAIBAMessageSignalsCTARendererEnableAutomaticEventsMutation",
          selections: n,
        },
        params: {
          id: "38558715557105651",
          metadata: {},
          name: "MAIBAMessageSignalsCTARendererEnableAutomaticEventsMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
