__d(
  "MAIBAIndiaFinServLaunchpadModalQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adAccountID",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaignRelayIDs",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "regulationTypes",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skipEligibilityAPI",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "skipSAVEM2Fields",
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "regulation_type",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        s = [a],
        u = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: s,
                type: "ClientAdAccount",
                abstractKey: null,
              },
              kind: "RelayResolver",
              storageKey: null,
              isOutputType: !1,
            },
          ],
          type: "ClientAdAccount",
          abstractKey: null,
        },
        c = [
          { kind: "Variable", name: "ids", variableName: "campaignRelayIDs" },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o],
          kind: "Fragment",
          metadata: null,
          name: "MAIBAIndiaFinServLaunchpadModalQuery",
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "adAccountID",
                  variableName: "adAccountID",
                },
                {
                  kind: "Variable",
                  name: "campaignRelayIDs",
                  variableName: "campaignRelayIDs",
                },
                {
                  kind: "Variable",
                  name: "skipEligibilityAPI",
                  variableName: "skipEligibilityAPI",
                },
                {
                  kind: "Variable",
                  name: "skipSAVEM2Fields",
                  variableName: "skipSAVEM2Fields",
                },
              ],
              kind: "FragmentSpread",
              name: "MAIBAIndiaFinServLaunchpadModalFragment",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, r, o, t],
          kind: "Operation",
          name: "MAIBAIndiaFinServLaunchpadModalQuery",
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "legacy_account_id",
                  variableName: "adAccountID",
                },
              ],
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: "adMarketID",
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBCAAPData",
                  kind: "LinkedField",
                  name: "caap",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "regulation_types",
                          variableName: "regulationTypes",
                        },
                      ],
                      concreteType: "XFBCAAPRegulation",
                      kind: "LinkedField",
                      name: "regulations",
                      plural: !0,
                      selections: [
                        i,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "launch_status",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "enforcement_date",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBVerifiedEntityDisplayInformation",
                          kind: "LinkedField",
                          name: "verified_entities",
                          plural: !0,
                          selections: [l],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  condition: "skipEligibilityAPI",
                  kind: "Condition",
                  passingValue: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBAVExperienceAPI",
                      kind: "LinkedField",
                      name: "av_experience_api",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: [
                            {
                              kind: "Literal",
                              name: "caller_source",
                              value: "ADS_MANAGER_DESKTOP",
                            },
                            { kind: "Literal", name: "expose_gks", value: !0 },
                            {
                              kind: "Variable",
                              name: "regulation_categories",
                              variableName: "regulationTypes",
                            },
                          ],
                          concreteType: "XFBAdvertiserVerificationEligiblity",
                          kind: "LinkedField",
                          name: "advertiser_verification_eligiblitiy_status_for_regulation_categories",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "XFBRegulationsConfigDetails",
                              kind: "LinkedField",
                              name: "regulation_config_details",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "auth_bap_product",
                                  storageKey: null,
                                },
                                i,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "enforcement_start_date",
                                  storageKey: null,
                                },
                                {
                                  condition: "skipSAVEM2Fields",
                                  kind: "Condition",
                                  passingValue: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "is_license_required",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "license_regulation_type_list",
                                      storageKey: null,
                                    },
                                  ],
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "regulation_type_list",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "name",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "verification_category_type",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "XFBVerificationEligibilityStatus",
                              kind: "LinkedField",
                              name: "verification_eligibility_status",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "phase",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XFBVerificationEntityStatusInfo",
                                  kind: "LinkedField",
                                  name: "verification_entities",
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "entity_id",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "full_descriptive_name",
                                      storageKey: null,
                                    },
                                    l,
                                    {
                                      condition: "skipSAVEM2Fields",
                                      kind: "Condition",
                                      passingValue: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "XFBLicenseInfo",
                                          kind: "LinkedField",
                                          name: "licenses",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "is_active",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "satisfies_regulations",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "license_number",
                                              storageKey: null,
                                            },
                                            a,
                                          ],
                                          storageKey: null,
                                        },
                                      ],
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
                },
              ],
              storageKey: null,
            },
            {
              condition: "skipSAVEM2Fields",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  kind: "ClientEdgeToClientObject",
                  backingField: {
                    name: "selected_ad_account",
                    args: null,
                    fragment: null,
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !1,
                  },
                  linkedField: {
                    alias: null,
                    args: null,
                    concreteType: "ClientAdAccount",
                    kind: "LinkedField",
                    name: "selected_ad_account",
                    plural: !1,
                    selections: [
                      {
                        name: "account_id",
                        args: null,
                        fragment: u,
                        kind: "RelayResolver",
                        storageKey: null,
                        isOutputType: !0,
                      },
                      {
                        kind: "ClientEdgeToClientObject",
                        backingField: {
                          name: "combined_campaigns",
                          args: c,
                          fragment: u,
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !1,
                        },
                        linkedField: {
                          alias: null,
                          args: c,
                          concreteType: "CombinedCampaign",
                          kind: "LinkedField",
                          name: "combined_campaigns",
                          plural: !0,
                          selections: [
                            {
                              name: "regional_regulation_identities",
                              args: null,
                              fragment: {
                                kind: "InlineFragment",
                                selections: [
                                  {
                                    name: "__relay_model_instance",
                                    args: null,
                                    fragment: {
                                      kind: "InlineFragment",
                                      selections: s,
                                      type: "CombinedCampaign",
                                      abstractKey: null,
                                    },
                                    kind: "RelayResolver",
                                    storageKey: null,
                                    isOutputType: !1,
                                  },
                                ],
                                type: "CombinedCampaign",
                                abstractKey: null,
                              },
                              kind: "RelayResolver",
                              storageKey: null,
                              isOutputType: !0,
                            },
                            a,
                          ],
                          storageKey: null,
                        },
                      },
                      a,
                    ],
                    storageKey: null,
                  },
                },
              ],
            },
          ],
        },
        params: {
          id: "29093994530258847",
          metadata: { live: { config_id: "" } },
          name: "MAIBAIndiaFinServLaunchpadModalQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
