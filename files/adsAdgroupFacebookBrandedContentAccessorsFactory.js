__d(
  "adsAdgroupFacebookBrandedContentAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          sponsor_page_id: n.basicFieldAccessorFactory(e, t, "sponsor_page_id"),
          shared_to_sponsor_status: n.basicFieldAccessorFactory(
            e,
            t,
            "shared_to_sponsor_status",
          ),
          sponsor_relationship: n.basicFieldAccessorFactory(
            e,
            t,
            "sponsor_relationship",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
