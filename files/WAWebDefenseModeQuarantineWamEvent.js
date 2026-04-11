__d(
  "WAWebDefenseModeQuarantineWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDefenseModeQuarantineAction",
    "WAWebWamEnumJidDomainType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        DefenseModeQuarantine: [
          7098,
          {
            defenseModeQuarantineEventCount: [
              2,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
            defenseModeQuarantineIsCapi: [
              3,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
            jidDomain: [4, o("WAWebWamEnumJidDomainType").JID_DOMAIN_TYPE],
            quarantineAction: [
              1,
              o("WAWebWamEnumDefenseModeQuarantineAction")
                .DEFENSE_MODE_QUARANTINE_ACTION,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { DefenseModeQuarantine: [] },
    );
    l.DefenseModeQuarantineWamEvent = e;
  },
  98,
);
