__d(
  "WAWebContactSearchExperienceWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumSearchActionName",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ContactSearchExperience: [
          6574,
          {
            contactSearchEntrypoint: [
              5,
              o("WAWebWamEnumContactSearchEntrypoint")
                .CONTACT_SEARCH_ENTRYPOINT,
            ],
            isUsernameSearch: [1, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            searchActionName: [
              2,
              o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME,
            ],
            searchStartsWithAt: [4, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ContactSearchExperience: [] },
    );
    l.ContactSearchExperienceWamEvent = e;
  },
  98,
);
