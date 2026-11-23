__d(
  "MAIBAAdDraftEditorContextProvider_refreshAdgroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          kind: "Variable",
          name: "isAdsManager",
          variableName: "isAdsManager",
        },
        t = [e];
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "flowID" },
          { defaultValue: null, kind: "LocalArgument", name: "isAdsManager" },
        ],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "MAIBAAdDraftEditorContextProvider_refreshAdgroup",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "draft_fragment_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "draft_validation_status",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AdDraftValidationError",
            kind: "LinkedField",
            name: "draft_validation_errors",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_code",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_description",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "blame_field_spec",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: t,
            kind: "FragmentSpread",
            name: "MAIBAAdCreativeCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdIdentityCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdNameCard_adgroup",
          },
          {
            args: [
              { kind: "Variable", name: "flowID", variableName: "flowID" },
              e,
            ],
            kind: "FragmentSpread",
            name: "MAIBAAdPreviewCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAAdRowCard_adgroup",
          },
          { args: t, kind: "FragmentSpread", name: "MAIBAAdSetupCard_adgroup" },
          {
            args: t,
            kind: "FragmentSpread",
            name: "MAIBACampaignSummaryCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAConversionCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBALWIGoalCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAIGGoalCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAIGAITransparencyCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBALWIGoalCard_adgroupBoostEligibility",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBACreativeCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBADestinationCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBALeadFormCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAMessageTemplateCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBAPixelEventCard_adgroup",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "MAIBASpecialAdCategoryCard_adgroup",
          },
        ],
        type: "AdAdgroupWithDraftData",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
