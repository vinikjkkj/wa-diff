__d(
  "ProfileActionMutationUtils",
  ["ProfileActionMutationUtils_action.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    e !== void 0 || (e = n("ProfileActionMutationUtils_action.graphql"));
    function s(e, t, n, r) {
      return btoa(
        "profile_action" +
          e +
          ":" +
          t +
          ":" +
          (n != null ? n : "") +
          ":" +
          (r != null ? r : ""),
      );
    }
    l.getProfileActionID = s;
  },
  98,
);
