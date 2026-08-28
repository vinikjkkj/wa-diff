__d(
  "adsExperimentsCreateABTestReducer",
  [
    "AdsExperimentCreateTestValidatorUtils",
    "AdsExperimentsCreateTestStateUtils",
    "adsExperimentsCreateABTestInitialState",
    "adsExperimentsScenarioTestInitialState",
    "immutable",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch (t.type) {
        case "reset":
          return r("adsExperimentsCreateABTestInitialState");
        case "setTestName":
          return (
            r("vulture")("uhAGDrkp-U0FOpol5O75QvXRr1g="),
            o(
              "AdsExperimentCreateTestValidatorUtils",
            ).adsExperimentCreateTestValidate(
              babelHelpers.extends({}, e, { testName: t.testName }),
            )
          );
        case "setFieldModifiedByUser":
          return (
            r("vulture")("GOeYoLbv0ijdMfCUj1yYwVkqwtQ="),
            o(
              "AdsExperimentCreateTestValidatorUtils",
            ).adsExperimentCreateTestValidate(
              babelHelpers.extends({}, e, {
                fieldsModifiedByUser: e.fieldsModifiedByUser.add(t.field),
              }),
            )
          );
        case "setStartTime":
          return (
            r("vulture")("QxGI79G1e3EDbiOMjjbvugdk8dI="),
            o(
              "AdsExperimentCreateTestValidatorUtils",
            ).adsExperimentCreateTestValidate(
              babelHelpers.extends({}, e, { startTime: t.startTime }),
            )
          );
        case "setEndTime":
          return (
            r("vulture")("1SEbShLyLZKshGwk5TYCuXExCgA="),
            o(
              "AdsExperimentCreateTestValidatorUtils",
            ).adsExperimentCreateTestValidate(
              babelHelpers.extends({}, e, { endTime: t.endTime }),
            )
          );
        case "setBudget":
          return (
            r("vulture")("BgdheRhQmdKWyRxtYbG4bUOUYwk="),
            o(
              "AdsExperimentCreateTestValidatorUtils",
            ).adsExperimentCreateTestValidate(
              babelHelpers.extends({}, e, {
                budget: Math.ceil(t.budget),
                useCampaignBudget: t.useCampaignBudget,
              }),
            )
          );
        case "setBudgetMode":
          return (
            r("vulture")("2tM16f_eF-x9OcNBgBXdxY7EuzM="),
            o(
              "AdsExperimentCreateTestValidatorUtils",
            ).adsExperimentCreateTestValidate(
              babelHelpers.extends({}, e, { budgetMode: t.budgetMode }),
            )
          );
        case "setKeyMetric":
          return (
            r("vulture")("F9-wsj-hBeOkEtIDs1AchBTeIt0="),
            o(
              "AdsExperimentCreateTestValidatorUtils",
            ).adsExperimentCreateTestValidate(
              babelHelpers.extends({}, e, {
                keyMetrics:
                  t.metric == null
                    ? e.keyMetrics.remove(t.index)
                    : e.keyMetrics.set(t.index, t.metric),
              }),
            )
          );
        case "setKeyMetrics":
          return o(
            "AdsExperimentCreateTestValidatorUtils",
          ).adsExperimentCreateTestValidate(
            babelHelpers.extends({}, e, {
              keyMetrics: r("immutable").List(t.metrics),
            }),
          );
        case "setCreateError":
          return babelHelpers.extends({}, e, { createTestError: t.error });
        case "setCampaignGroupName":
          return (
            r("vulture")("xlGpw9I3wYIzyzEmiv_fCnJbnys="),
            babelHelpers.extends({}, e, {
              cellData: e.cellData.update(t.index, function (e) {
                return babelHelpers.extends({}, e, {
                  campaignGroupName: t.campaignGroupName,
                });
              }),
            })
          );
        case "setAdObjectFragments": {
          var n;
          return (
            r("vulture")("gYqu6ttKHx8kBUApl4gSYpVMSHs="),
            r("immutable").is(
              (n = e.cellData.get(t.index)) == null
                ? void 0
                : n.adObjectFragments,
              t.adObjectFragments,
            )
              ? e
              : babelHelpers.extends({}, e, {
                  cellData: e.cellData.update(t.index, function (e) {
                    return babelHelpers.extends({}, e, {
                      adObjectFragments: t.adObjectFragments,
                    });
                  }),
                })
          );
        }
        case "setValidator": {
          r("vulture")("HPbPL1EebcnydDNVKt1dZrLw-vE=");
          var a = t.validator;
          return a == null
            ? babelHelpers.extends({}, e, {
                validators: e.validators.remove(t.field),
                errors: e.errors.filterNot(function (e, n) {
                  return (
                    o(
                      "AdsExperimentsCreateTestStateUtils",
                    ).adsExperimentsParseCreateTestErrorKey(n).field ===
                    o(
                      "AdsExperimentsCreateTestStateUtils",
                    ).adsExperimentsParseCreateTestErrorKey(t.field).field
                  );
                }),
              })
            : babelHelpers.extends({}, e, {
                errors: a(e),
                validators: e.validators.set(t.field, a),
              });
        }
        case "setstudyLevel": {
          var i = t.studyLevel;
          return babelHelpers.extends({}, e, { studyLevel: i });
        }
        case "addCell": {
          r("vulture")("jv0WmwLQ75d2OkY8WNlgrT3nY_g=");
          var l = e.cellData.push({
            adObjectFragments: null,
            campaignGroupName: null,
            scenarioTestState: r("adsExperimentsScenarioTestInitialState"),
          });
          return babelHelpers.extends({}, e, { cellData: l, numCells: l.size });
        }
        case "removeCell": {
          r("vulture")("bHxAFqHQALlBhsy2CUTQbhXt5pE=");
          var s = e.cellData.remove(t.index);
          return babelHelpers.extends({}, e, { cellData: s, numCells: s.size });
        }
        default:
          return (r("vulture")("iLztXIa8eprtZ53LN-Fc13p1V1k="), t.type, e);
      }
    }
    l.default = e;
  },
  98,
);
