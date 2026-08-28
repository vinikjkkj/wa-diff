__d(
  "adsAssetFeedSpecUpcomingEventMetadataAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          date_format: n.basicFieldAccessorFactory(e, t, "date_format"),
          detection_source: n.basicFieldAccessorFactory(
            e,
            t,
            "detection_source",
          ),
          disabled_reasons: n.basicListFieldAccessorFactory(
            e,
            t,
            "disabled_reasons",
          ),
          event_dates: n.basicListFieldAccessorFactory(e, t, "event_dates"),
        },
      );
    }
    l.default = e;
  },
  98,
);
