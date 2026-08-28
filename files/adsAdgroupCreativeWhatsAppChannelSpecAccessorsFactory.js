__d(
  "adsAdgroupCreativeWhatsAppChannelSpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          channel_id: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "channel_id",
          ),
          channel_url: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "channel_url",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
