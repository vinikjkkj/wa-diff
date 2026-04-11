__d(
  "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation.graphql",
  [
    "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "savedAudienceID",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "saved_audience_id",
                variableName: "savedAudienceID",
              },
            ],
            kind: "ScalarField",
            name: "delete_saved_audience",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
