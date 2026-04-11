__d(
  "WAWebCommunityCreationWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCommunityCreationActionTakenType",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumCommunityCreationEntrypointType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CommunityCreation: [
            3492,
            {
              communityCreationActionCount: [1, e.TYPES.INTEGER],
              communityCreationActionTaken: [
                2,
                o("WAWebWamEnumCommunityCreationActionTakenType")
                  .COMMUNITY_CREATION_ACTION_TAKEN_TYPE,
              ],
              communityCreationCurrentScreen: [
                3,
                o("WAWebWamEnumCommunityCreationCurrentScreenType")
                  .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE,
              ],
              communityCreationEntrypoint: [
                5,
                o("WAWebWamEnumCommunityCreationEntrypointType")
                  .COMMUNITY_CREATION_ENTRYPOINT_TYPE,
              ],
              communityCreationSessionId: [4, e.TYPES.STRING],
              communityId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CommunityCreation: [] },
      );
    l.CommunityCreationWamEvent = s;
  },
  98,
);
