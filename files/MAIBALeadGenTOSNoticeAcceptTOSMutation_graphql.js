__d(
  "MAIBALeadGenTOSNoticeAcceptTOSMutation.graphql",
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
                concreteType: "Page",
                kind: "LinkedField",
                name: "page",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
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
          name: "MAIBALeadGenTOSNoticeAcceptTOSMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBALeadGenTOSNoticeAcceptTOSMutation",
          selections: t,
        },
        params: {
          id: "38376319092011724",
          metadata: {},
          name: "MAIBALeadGenTOSNoticeAcceptTOSMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
