__d(
  "WAWebCtwaAdCreationAndManagementJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCtwaAdAccountType",
    "WAWebWamEnumLwiActionType",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumLwiSubEntryPoint",
    "WAWebWamEnumLwiSurface",
    "WAWebWamEnumTargetComponent",
    "WAWebWamEnumWaAdAccountEligibility",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CtwaAdCreationAndManagementJourney: [
            6562,
            {
              ctwaAdAccountType: [
                1,
                o("WAWebWamEnumCtwaAdAccountType").CTWA_AD_ACCOUNT_TYPE,
              ],
              extraAttributes: [2, e.TYPES.STRING],
              lwiActionType: [
                3,
                o("WAWebWamEnumLwiActionType").LWI_ACTION_TYPE,
              ],
              lwiEntryPoint: [
                4,
                o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT,
              ],
              lwiFlowId: [5, e.TYPES.STRING],
              lwiSubEntryPoint: [
                6,
                o("WAWebWamEnumLwiSubEntryPoint").LWI_SUB_ENTRY_POINT,
              ],
              lwiSurface: [7, o("WAWebWamEnumLwiSurface").LWI_SURFACE],
              seqId: [8, e.TYPES.INTEGER],
              targetComponent: [
                9,
                o("WAWebWamEnumTargetComponent").TARGET_COMPONENT,
              ],
              unifiedSessionId: [10, e.TYPES.STRING],
              waAdAccountEligibility: [
                11,
                o("WAWebWamEnumWaAdAccountEligibility")
                  .WA_AD_ACCOUNT_ELIGIBILITY,
              ],
              waAdAccountId: [12, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CtwaAdCreationAndManagementJourney: [] },
      );
    l.CtwaAdCreationAndManagementJourneyWamEvent = s;
  },
  98,
);
