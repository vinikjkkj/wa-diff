__d(
  "MAIBARenderCTAButtonsComponentFragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBARenderCTAButtonsComponentFragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "recommendation_hash_string",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "recommendation_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_precreate",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "www_request_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "target",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_object_ids",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "levels",
                  storageKey: null,
                },
              ],
              type: "XFBUGPAdRecommendationAdObjectTarget",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "runtime_metadata",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "XFBAdAccountRecommendationRootCauseIdentifierExtraData",
                  kind: "LinkedField",
                  name: "root_cause_identifier",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "XFBAdAccountRecommendationRootCauseIdentifierLabelToAdObjectIDsEntry",
                      kind: "LinkedField",
                      name: "label_to_ad_object_ids",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "key",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "root_cause_identifier_label",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAdAccountRecommendationExtraDataForGQLGen",
                  kind: "LinkedField",
                  name: "metadata",
                  plural: !1,
                  selections: [
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "SYDGuidanceHubUGPUtils_useUGPToGetCTAExtraData",
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "worst_performing_ad_object_ids",
                  storageKey: null,
                },
              ],
              type: "XFBUGPGuidanceEngineRuntimeMetadata",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useAdsOneClickCommonData_ugpRecData",
        },
      ],
      type: "XFBUGPAdRecommendation",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
