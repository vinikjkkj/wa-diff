__d(
  "MAIBASkipPlannerResponseMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "external_conversation_id",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "external_conversation_id",
                    variableName: "external_conversation_id",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            kind: "ScalarField",
            name: "xfb_maiba_skip_planner_response",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBASkipPlannerResponseMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBASkipPlannerResponseMutation",
          selections: t,
        },
        params: {
          id: "26392597363751507",
          metadata: {},
          name: "MAIBASkipPlannerResponseMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
