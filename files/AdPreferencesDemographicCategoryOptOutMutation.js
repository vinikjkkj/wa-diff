__d(
  "AdPreferencesDemographicCategoryOptOutMutation",
  ["AdPreferencesDemographicCategoryOptOutMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("AdPreferencesDemographicCategoryOptOutMutation.graphql"));
    function u(e, t, n) {
      var r = function (r) {
        var t = r.get(e);
        t != null && t.setValue(!n, "is_removed");
      };
      return [s, { updater: r, variables: { bctID: t, isUndo: n } }];
    }
    l.makeMutation = u;
  },
  98,
);
