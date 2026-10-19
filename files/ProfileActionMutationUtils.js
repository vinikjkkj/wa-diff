__d(
  "ProfileActionMutationUtils",
  [
    "ProfileActionMutationUtils_action.graphql",
    "ProfileActionRenderLocation",
    "enumUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      if (e != null)
        return o("enumUtils").assertFromKey(
          e,
          r("ProfileActionRenderLocation"),
        );
    }
    e !== void 0 || (e = n("ProfileActionMutationUtils_action.graphql"));
    function u(e, t, n, r) {
      var o = s(n);
      return btoa(
        "profile_action" +
          e +
          ":" +
          t +
          ":" +
          (o != null ? o : "") +
          ":" +
          (r != null ? r : ""),
      );
    }
    l.getProfileActionID = u;
  },
  98,
);
