__d(
  "AdsUpcomingEventsModalReducerPlugins",
  ["AdsUEditorAdgroupUpcomingEventDetailsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return (
        n === void 0 &&
          (n = o("AdsUEditorAdgroupUpcomingEventDetailsTypes").AddEventTab
            .ScheduledEvents),
        r === void 0 && (r = null),
        babelHelpers.extends({}, e, { isShown: t, tab: n, eventTimeUTC: r })
      );
    }
    var s = {
        reduce: function (n, r) {
          return e(n, !0, r.tab, r.eventTimeUTC);
        },
      },
      u = {
        reduce: function (n, r) {
          return e(n, !1);
        },
      };
    ((l.onOpen = s), (l.onClose = u));
  },
  98,
);
