__d(
  "adsAdgroupStaticFallbackSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdgroupLinkDataCallToActionAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          call_to_action: r("adsAdgroupLinkDataCallToActionAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.call_to_action;
            },
            [].concat(t, ["call_to_action"]),
          ),
          description: n.basicFieldAccessorFactory(e, t, "description"),
          image_hash: n.basicFieldAccessorFactory(e, t, "image_hash"),
          link: n.basicFieldAccessorFactory(e, t, "link"),
          message: n.basicFieldAccessorFactory(e, t, "message"),
          name: n.basicFieldAccessorFactory(e, t, "name"),
        },
      );
    }
    l.default = e;
  },
  98,
);
