__d(
  "WAWebAudienceManagementWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAudienceEventSurfaceType",
    "WAWebWamEnumAudienceManagementActionType",
    "WAWebWamEnumAudiencePredicateTypeEnum",
    "WAWebWamEnumAudienceResolutionTriggerType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        AudienceManagement: [
          7900,
          {
            audienceEventSurface: [
              1,
              o("WAWebWamEnumAudienceEventSurfaceType")
                .AUDIENCE_EVENT_SURFACE_TYPE,
            ],
            audienceExtraData: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
            audienceManagementAction: [
              3,
              o("WAWebWamEnumAudienceManagementActionType")
                .AUDIENCE_MANAGEMENT_ACTION_TYPE,
            ],
            audiencePredicateType: [
              4,
              o("WAWebWamEnumAudiencePredicateTypeEnum")
                .AUDIENCE_PREDICATE_TYPE_ENUM,
            ],
            audienceResolutionTrigger: [
              5,
              o("WAWebWamEnumAudienceResolutionTriggerType")
                .AUDIENCE_RESOLUTION_TRIGGER_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { AudienceManagement: [] },
    );
    l.AudienceManagementWamEvent = e;
  },
  98,
);
