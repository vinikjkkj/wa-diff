__d(
  "WAWebGroupProfilePictureWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupProfileActionType",
    "WAWebWamEnumPreciseSizeBucket",
    "WAWebWamEnumProfilePictureType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupProfilePicture: [
            3652,
            {
              groupCreationDs: [1, e.TYPES.STRING],
              groupProfileAction: [
                7,
                o("WAWebWamEnumGroupProfileActionType")
                  .GROUP_PROFILE_ACTION_TYPE,
              ],
              hasProfilePicture: [3, e.TYPES.BOOLEAN],
              isAdmin: [4, e.TYPES.BOOLEAN],
              preciseGroupSizeBucket: [
                5,
                o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET,
              ],
              profilePictureType: [
                6,
                o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupProfilePicture: [] },
      );
    l.GroupProfilePictureWamEvent = s;
  },
  98,
);
