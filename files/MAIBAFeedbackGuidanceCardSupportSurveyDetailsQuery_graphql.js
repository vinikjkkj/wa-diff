__d(
  "MAIBAFeedbackGuidanceCardSupportSurveyDetailsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "channel_type",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "maiba_conversation_id",
        },
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "channel_type",
                variableName: "channel_type",
              },
              {
                kind: "Variable",
                name: "maiba_conversation_id",
                variableName: "maiba_conversation_id",
              },
            ],
            concreteType: "XFBSupportSurveyDetails",
            kind: "LinkedField",
            name: "maiba_support_survey_details",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "agc_support_survey_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "agc_survey_job_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "agc_survey_submitter_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "survey_delivery_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "tessa_integration_point_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "target_id",
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
          name: "MAIBAFeedbackGuidanceCardSupportSurveyDetailsQuery",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "MAIBAFeedbackGuidanceCardSupportSurveyDetailsQuery",
          selections: n,
        },
        params: {
          id: "27045518428415704",
          metadata: {},
          name: "MAIBAFeedbackGuidanceCardSupportSurveyDetailsQuery",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
