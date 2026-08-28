__d(
  "AdsAdgroupPlacementAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          audience_network_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "audience_network_positions",
          ),
          facebook_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "facebook_positions",
          ),
          instagram_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "instagram_positions",
          ),
          messenger_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "messenger_positions",
          ),
          oculus_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "oculus_positions",
          ),
          threads_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "threads_positions",
          ),
          whatsapp_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "whatsapp_positions",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
