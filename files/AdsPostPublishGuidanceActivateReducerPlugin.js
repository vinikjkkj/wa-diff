__d(
  "AdsPostPublishGuidanceActivateReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            r = {};
          for (var o of n.enabledCards) r[o] = { status: "pending" };
          return {
            active: n.active && n.enabledCards.length > 0 && n.hasFragments,
            eligibility: r,
            fragmentSpec: (e = n.fragmentSpec) != null ? e : [],
          };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
