__d(
  "AdPreferencesInterestCategoryOptOutMutation",
  ["AdPreferencesInterestCategoryOptOutMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("AdPreferencesInterestCategoryOptOutMutation.graphql"));
    function u(e, t, n) {
      var r = function (r) {
        var t = r.get(e);
        t != null && t.setValue(!n, "is_removed");
      };
      return [s, { updater: r, variables: { interestID: t, isUndo: n } }];
    }
    l.makeMutation = u;
  },
  98,
);
