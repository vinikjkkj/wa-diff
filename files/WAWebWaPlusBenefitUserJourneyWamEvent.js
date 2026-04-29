__d(
  "WAWebWaPlusBenefitUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWpbujAction",
    "WAWebWamEnumWpbujBenefitStatus",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujOutcomeName",
    "WAWebWamEnumWpbujSource",
    "WAWebWamEnumWpbujSurface",
    "WAWebWamEnumWsuaProductType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WaPlusBenefitUserJourney: [
            7896,
            {
              wpbujAction: [1, o("WAWebWamEnumWpbujAction").WPBUJ_ACTION],
              wpbujActionTarget: [11, e.TYPES.STRING],
              wpbujBenefitStatus: [
                2,
                o("WAWebWamEnumWpbujBenefitStatus").WPBUJ_BENEFIT_STATUS,
              ],
              wpbujBenefitType: [
                3,
                o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE,
              ],
              wpbujCustomFields: [4, e.TYPES.STRING],
              wpbujErrorMessage: [5, e.TYPES.STRING],
              wpbujOutcomeName: [
                6,
                o("WAWebWamEnumWpbujOutcomeName").WPBUJ_OUTCOME_NAME,
              ],
              wpbujSessionId: [7, e.TYPES.STRING],
              wpbujSource: [8, o("WAWebWamEnumWpbujSource").WPBUJ_SOURCE],
              wpbujSurface: [9, o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE],
              wsuaProductType: [
                10,
                o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WaPlusBenefitUserJourney: [] },
      );
    l.WaPlusBenefitUserJourneyWamEvent = s;
  },
  98,
);
