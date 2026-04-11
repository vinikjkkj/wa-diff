__d(
  "WAWebCommunityHomeActionWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CommunityHomeAction: [
            3494,
            {
              communityHomeGroupDiscoveries: [1, e.TYPES.INTEGER],
              communityHomeGroupJoins: [2, e.TYPES.INTEGER],
              communityHomeGroupNavigations: [3, e.TYPES.INTEGER],
              communityHomeId: [4, e.TYPES.STRING],
              communityHomeViews: [5, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CommunityHomeAction: [] },
      );
    l.CommunityHomeActionWamEvent = s;
  },
  98,
);
