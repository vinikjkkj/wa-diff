__d(
  "MAIBAConversionConnectDialogHostLeadGenAcceptTOSMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "LeadGenAcceptTosResponsePayload",
            kind: "LinkedField",
            name: "lead_gen_accept_tos",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
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
          name: "MAIBAConversionConnectDialogHostLeadGenAcceptTOSMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAConversionConnectDialogHostLeadGenAcceptTOSMutation",
          selections: t,
        },
        params: {
          id: "39957418660573498",
          metadata: {},
          name: "MAIBAConversionConnectDialogHostLeadGenAcceptTOSMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
