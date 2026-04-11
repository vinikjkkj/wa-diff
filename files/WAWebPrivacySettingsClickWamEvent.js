__d(
  "WAWebPrivacySettingsClickWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumPrivacyControlEntryPointType",
    "WAWebWamEnumPrivacyControlItemType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PrivacySettingsClick: [
          3726,
          {
            privacyControlEntryPoint: [
              1,
              o("WAWebWamEnumPrivacyControlEntryPointType")
                .PRIVACY_CONTROL_ENTRY_POINT_TYPE,
            ],
            privacyControlItem: [
              2,
              o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { PrivacySettingsClick: [] },
    );
    l.PrivacySettingsClickWamEvent = e;
  },
  98,
);
