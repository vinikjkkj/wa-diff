__d(
  "MAIBAIGGoalEditorModalContainer_adgroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAIGGoalEditorModalContainer_adgroup",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_call_to_action_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_deep_link_url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_instagram_user_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_instagram_username",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_link_url",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "AdDraftBoostedPost",
          kind: "LinkedField",
          name: "boosted_post",
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
        {
          alias: null,
          args: null,
          concreteType: "AdsCreativeSpecification",
          kind: "LinkedField",
          name: "creative_spec",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdCreativeSourcingSpecification",
              kind: "LinkedField",
              name: "creative_sourcing_spec",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "associated_product_set_id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "AdCreativeDegreesOfFreedomSpecification",
              kind: "LinkedField",
              name: "degrees_of_freedom_spec",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdCreativeFeaturesSpecWrapper",
                  kind: "LinkedField",
                  name: "creative_features_spec",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdCreativeFeatureSpecAttachment",
                      kind: "LinkedField",
                      name: "product_extensions",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "enroll_status",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAdgroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
