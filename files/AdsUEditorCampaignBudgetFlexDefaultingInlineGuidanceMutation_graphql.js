__d(
  "AdsUEditorCampaignBudgetFlexDefaultingInlineGuidanceMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "OptOutAdAccountFlexDuplicationDefaultingOptOutResponsePayload",
            kind: "LinkedField",
            name: "opt_out_ad_account_flex_duplication_defaulting_opt_out",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdAccountFlexDuplicationDefaultingOptOut",
                kind: "LinkedField",
                name: "ad_account_flex_duplication_defaulting_opt_out",
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
          name: "AdsUEditorCampaignBudgetFlexDefaultingInlineGuidanceMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsUEditorCampaignBudgetFlexDefaultingInlineGuidanceMutation",
          selections: t,
        },
        params: {
          id: "27891531963870538",
          metadata: {},
          name: "AdsUEditorCampaignBudgetFlexDefaultingInlineGuidanceMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
