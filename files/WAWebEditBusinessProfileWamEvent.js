__d(
  "WAWebEditBusinessProfileWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBusinessProfileEntryPoint",
    "WAWebWamEnumBusinessProfileField",
    "WAWebWamEnumEditProfileAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EditBusinessProfile: [
            1466,
            {
              businessProfileEntryPoint: [
                10,
                o("WAWebWamEnumBusinessProfileEntryPoint")
                  .BUSINESS_PROFILE_ENTRY_POINT,
              ],
              editBusinessProfileSessionId: [2, e.TYPES.STRING],
              editProfileAction: [
                1,
                o("WAWebWamEnumEditProfileAction").EDIT_PROFILE_ACTION,
              ],
              editProfileActionField: [
                9,
                o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD,
              ],
              hasAddress: [5, e.TYPES.BOOLEAN],
              hasCategory: [4, e.TYPES.BOOLEAN],
              hasDescription: [3, e.TYPES.BOOLEAN],
              hasEmail: [7, e.TYPES.BOOLEAN],
              hasHours: [6, e.TYPES.BOOLEAN],
              hasPaymentInfo: [11, e.TYPES.BOOLEAN],
              hasWebsite: [8, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EditBusinessProfile: [] },
      );
    l.EditBusinessProfileWamEvent = s;
  },
  98,
);
