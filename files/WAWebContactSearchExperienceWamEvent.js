__d(
  "WAWebContactSearchExperienceWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumKeyEntryErrorType",
    "WAWebWamEnumSearchActionName",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ContactSearchExperience: [
            6574,
            {
              contactSearchEntrypoint: [
                5,
                o("WAWebWamEnumContactSearchEntrypoint")
                  .CONTACT_SEARCH_ENTRYPOINT,
              ],
              dedupKey: [7, e.TYPES.INTEGER],
              isSearchTargetBusiness: [6, e.TYPES.BOOLEAN],
              isUsernameSearch: [1, e.TYPES.BOOLEAN],
              keyEntryErrorType: [
                8,
                o("WAWebWamEnumKeyEntryErrorType").KEY_ENTRY_ERROR_TYPE,
              ],
              searchActionName: [
                2,
                o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME,
              ],
              searchStartsWithAt: [4, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ContactSearchExperience: [] },
      );
    l.ContactSearchExperienceWamEvent = s;
  },
  98,
);
