__d(
  "WAWebBusinessInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBusinessInteractionActionType",
    "WAWebWamEnumBusinessInteractionEntryPointApp",
    "WAWebWamEnumBusinessInteractionEntryPointSource",
    "WAWebWamEnumBusinessInteractionInternalEntryPoint",
    "WAWebWamEnumBusinessInteractionTargetScreenType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        BusinessInteraction: [
          3450,
          {
            businessInteractionAction: [
              1,
              o("WAWebWamEnumBusinessInteractionActionType")
                .BUSINESS_INTERACTION_ACTION_TYPE,
            ],
            businessInteractionTargetScreen: [
              2,
              o("WAWebWamEnumBusinessInteractionTargetScreenType")
                .BUSINESS_INTERACTION_TARGET_SCREEN_TYPE,
            ],
            businessJid: [3, o("WAWebWamCodegenUtils").TYPES.STRING],
            entryPointApp: [
              4,
              o("WAWebWamEnumBusinessInteractionEntryPointApp")
                .BUSINESS_INTERACTION_ENTRY_POINT_APP,
            ],
            entryPointSource: [
              5,
              o("WAWebWamEnumBusinessInteractionEntryPointSource")
                .BUSINESS_INTERACTION_ENTRY_POINT_SOURCE,
            ],
            internalEntryPoint: [
              6,
              o("WAWebWamEnumBusinessInteractionInternalEntryPoint")
                .BUSINESS_INTERACTION_INTERNAL_ENTRY_POINT,
            ],
            sequenceNumber: [7, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "private",
          113760892,
        ],
      },
      { BusinessInteraction: [] },
    );
    l.BusinessInteractionWamEvent = e;
  },
  98,
);
