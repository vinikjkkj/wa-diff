__d(
  "WAWebDefenseModeClickWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDefenseModeClickControlName",
    "WAWebWamEnumDefenseModeClickDesiredState",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        DefenseModeClick: [
          7096,
          {
            controlName: [
              1,
              o("WAWebWamEnumDefenseModeClickControlName")
                .DEFENSE_MODE_CLICK_CONTROL_NAME,
            ],
            defenseModeClickAccepted: [
              2,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
            desiredState: [
              3,
              o("WAWebWamEnumDefenseModeClickDesiredState")
                .DEFENSE_MODE_CLICK_DESIRED_STATE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { DefenseModeClick: [] },
    );
    l.DefenseModeClickWamEvent = e;
  },
  98,
);
