__d(
  "WAWebContactsAndGroupsNewCommunityAction",
  [
    "WAWebCommunityCreationFlowMetricUtils",
    "WAWebCommunityGatingUtils",
    "WAWebContactsAndGroupsSampleData",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumCommunityCreationEntrypointType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebCommunityGatingUtils").communitiesCreationEnabled();
    }
    function s(e) {
      o("WAWebContactsAndGroupsSampleData").openUnlessSampleData(function () {
        (o(
          "WAWebCommunityCreationFlowMetricUtils",
        ).UiCommunityCreationAction.startSession(
          o("WAWebWamEnumCommunityCreationEntrypointType")
            .COMMUNITY_CREATION_ENTRYPOINT_TYPE.OVERFLOW_MENU,
        ),
          o(
            "WAWebCommunityCreationFlowMetricUtils",
          ).UiCommunityCreationAction.enter(
            o("WAWebWamEnumCommunityCreationCurrentScreenType")
              .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITIES_TAB,
          ),
          e());
      });
    }
    ((l.canCreateCommunityFromContactsAndGroups = e),
      (l.startNewCommunityFromContactsAndGroups = s));
  },
  98,
);
