__d(
  "adsBidAdjustmentsAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          age_range: n.basicFieldAccessorFactory(e, t, "age_range"),
          page_types: n.basicFieldAccessorFactory(e, t, "page_types"),
          user_groups: n.basicFieldAccessorFactory(e, t, "user_groups"),
          delete_user_groups: n.basicFieldAccessorFactory(
            e,
            t,
            "delete_user_groups",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
