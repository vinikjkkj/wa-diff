__d(
  "adsCreativeLiveVideoReminderSpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          enroll_status: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "enroll_status"),
          start_time: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "start_time",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
