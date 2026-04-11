__d(
  "WAWebCommunityTabActionWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CommunityTabAction: [
            3496,
            {
              communityNoActionTabViews: [4, e.TYPES.INTEGER],
              communityTabGroupNavigations: [1, e.TYPES.INTEGER],
              communityTabToHomeViews: [2, e.TYPES.INTEGER],
              communityTabViews: [3, e.TYPES.INTEGER],
              communityTabViewsViaContextMenu: [5, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CommunityTabAction: [] },
      );
    l.CommunityTabActionWamEvent = s;
  },
  98,
);
