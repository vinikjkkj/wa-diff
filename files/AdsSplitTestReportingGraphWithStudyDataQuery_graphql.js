__d(
  "AdsSplitTestReportingGraphWithStudyDataQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "kpi" },
        t = { defaultValue: null, kind: "LocalArgument", name: "study_id" },
        n = [{ kind: "Variable", name: "id", variableName: "study_id" }],
        r = [{ kind: "Variable", name: "kpi", variableName: "kpi" }],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_ca_vs_bau_test",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          args: null,
          documentName:
            "AdsExperimentsRunWinnerModalButtonWrapperFragment_study_runWinnerV1",
          fragmentName:
            "AdsExperimentsRunWinnerModalButtonContainerFragment_placeholderStudy",
          fragmentPropName: "placeholderStudy",
          kind: "ModuleImport",
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "AdsSplitTestReportingGraphWithStudyDataQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: "study",
                args: n,
                concreteType: "AdStudy",
                kind: "LinkedField",
                name: "fetch__AdStudy",
                plural: !1,
                selections: [
                  {
                    args: r,
                    kind: "FragmentSpread",
                    name: "AdsSplitTestReportingWinnerCardWrapperFragment_study",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "useAdsSplitTestReportingMixedAttributionFragment_study",
                  },
                  {
                    kind: "CatchField",
                    field: {
                      alias: null,
                      args: null,
                      concreteType: "XFBAdABTestConfig",
                      kind: "LinkedField",
                      name: "ab_test_config",
                      plural: !1,
                      selections: [o],
                      storageKey: null,
                    },
                    to: "NULL",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "AdsSplitTestReportingGraphWithStudyDataQuery",
          selections: [
            {
              alias: "study",
              args: n,
              concreteType: "AdStudy",
              kind: "LinkedField",
              name: "fetch__AdStudy",
              plural: !1,
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "lightweight_type",
                  storageKey: null,
                },
                i,
                {
                  alias: "selectedKPIValue",
                  args: r,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "split_test_result_value_for_kpi_unified",
                  plural: !1,
                  selections: [
                    l,
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isTestResultValueForKPI",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBSplitTestConfidenceEntry",
                      kind: "LinkedField",
                      name: "confidence_entry",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "cell_index",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "confidence",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "cell_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "is_winner_cell",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  if: null,
                  kind: "Defer",
                  label:
                    "AdsSplitTestReportingWinnerCardCTAFragment_study$defer$AdsExperimentsRunWinnerModalButtonWrapperFragment_study",
                  selections: [i],
                },
                {
                  alias: null,
                  args: r,
                  concreteType: "SplitTestResultInfo",
                  kind: "LinkedField",
                  name: "split_test_result_info",
                  plural: !1,
                  selections: [l],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AdStudyCellsConnection",
                  kind: "LinkedField",
                  name: "cells",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdStudyCell",
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AdStudyCellAdEntitiesConnection",
                          kind: "LinkedField",
                          name: "ad_entities",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "nodes",
                              plural: !0,
                              selections: [
                                l,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "attribution_setting",
                                      storageKey: null,
                                    },
                                  ],
                                  type: "AdCampaign",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "aggregated_attribution_setting",
                                      storageKey: null,
                                    },
                                  ],
                                  type: "AdCampaignGroup",
                                  abstractKey: null,
                                },
                                a,
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        a,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBAdABTestConfig",
                  kind: "LinkedField",
                  name: "ab_test_config",
                  plural: !1,
                  selections: [o, a],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "40845964721668939",
          metadata: {},
          name: "AdsSplitTestReportingGraphWithStudyDataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
