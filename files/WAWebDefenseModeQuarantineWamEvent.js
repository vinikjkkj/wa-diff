__d(
  "WAWebDefenseModeQuarantineWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDefenseModeQuarantineAction",
    "WAWebWamEnumJidDomainType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          DefenseModeQuarantine: [
            7098,
            {
              dedupKey: [5, e.TYPES.INTEGER],
              defenseModeQuarantineEventCount: [2, e.TYPES.INTEGER],
              defenseModeQuarantineIsCapi: [3, e.TYPES.BOOLEAN],
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
    l.DefenseModeQuarantineWamEvent = s;
  },
  98,
);
