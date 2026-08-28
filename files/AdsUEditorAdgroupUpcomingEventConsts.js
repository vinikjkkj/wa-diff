__d(
  "AdsUEditorAdgroupUpcomingEventConsts",
  ["AdsAPIAdgroupPaths", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").List([
        r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.UPCOMING_EVENTS,
      ]),
      s = "https://fb.com/",
      u = "http://www.example.com/";
    ((l.UPCOMING_EVENTS_PATH =
      r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.UPCOMING_EVENTS),
      (l.UPCOMING_EVENTS_PATHS = e),
      (l.DEFAULT_UPCOMING_EVENT_DESTINATION_LINK = s),
      (l.TRAFFIC_UPCOMING_EVENT_DESTINATION_LINK = u));
  },
  98,
);
