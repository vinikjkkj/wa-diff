__d(
  "WAWebCommunityDailyUtils",
  ["$InternalEnum", "WAWebDailyAggregatedStatsCollection"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "HOME_GROUP_DISCOVERIES",
        "HOME_GROUP_JOINS",
        "HOME_GROUP_NAVIGATIONS",
        "HOME_VIEWS",
      ]),
      s = n("$InternalEnum").Mirrored([
        "TAB_GROUP_NAVIGATIONS",
        "TAB_TO_HOME_VIEWS",
        "TAB_VIEWS",
        "TAB_VIEWS_VIA_CONTEXT_MENU",
        "NO_ACTION_TAB_VIEWS",
      ]);
    function u(t, n) {
      var r = o(
          "WAWebDailyAggregatedStatsCollection",
        ).DailyAggregatedStatsCollection.gaddForToday(),
        a = r.communityHome[t.toString()];
      switch (
        (a == null &&
          ((a = {
            communityHomeGroupDiscoveries: 0,
            communityHomeGroupJoins: 0,
            communityHomeGroupNavigations: 0,
            communityHomeViews: 0,
          }),
          (r.communityHome[t.toString()] = a)),
        n)
      ) {
        case e.HOME_GROUP_DISCOVERIES:
          a.communityHomeGroupDiscoveries++;
          break;
        case e.HOME_GROUP_JOINS:
          a.communityHomeGroupJoins++;
          break;
        case e.HOME_GROUP_NAVIGATIONS:
          a.communityHomeGroupNavigations++;
          break;
        case e.HOME_VIEWS:
          a.communityHomeViews++;
          break;
      }
    }
    function c(e) {
      var t = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      switch (e) {
        case s.TAB_GROUP_NAVIGATIONS:
          t.communityTabGroupNavigations++;
          break;
        case s.TAB_TO_HOME_VIEWS:
          t.communityTabToHomeViews++;
          break;
        case s.TAB_VIEWS:
          t.communityTabViews++;
          break;
        case s.TAB_VIEWS_VIA_CONTEXT_MENU:
          t.communityTabViewsViaContextMenu++;
          break;
        case s.NO_ACTION_TAB_VIEWS:
          t.communityNoActionTabViews++;
          break;
      }
    }
    ((l.CommunityDailyHomeMetricsType = e),
      (l.CommunityDailyTabMetricsType = s),
      (l.incrementCommunityHomeEvent = u),
      (l.incrementCommunityTabEvent = c));
  },
  98,
);
