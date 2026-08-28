__d(
  "AdsInstagramActorIDUtils",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o =
          e == null || (t = e.creative) == null ? void 0 : t.instagram_actor_id,
        a =
          e == null ||
          (n = e.creative) == null ||
          (n = n.object_story_spec) == null
            ? void 0
            : n.instagram_actor_id;
      return (
        o &&
          a &&
          o !== a &&
          r("FBLogger")("ads").warn(
            "instagram_actor_id does not match on creative and object_story_spec for adgroup ID %s. Unless this is an old ad whose spec is already in this error state, you are doing something wrong",
            e == null ? void 0 : e.id,
          ),
        o || a
      );
    }
    function s(e) {
      var t,
        n,
        o =
          e == null || (t = e.creative) == null ? void 0 : t.instagram_user_id,
        a =
          e == null ||
          (n = e.creative) == null ||
          (n = n.object_story_spec) == null
            ? void 0
            : n.instagram_user_id;
      return (
        o &&
          a &&
          o !== a &&
          r("FBLogger")("ads").warn(
            "instagram_user_id does not match on creative and object_story_spec for adgroup ID %s. Unless this is an old ad whose spec is already in this error state, you are doing something wrong",
            e == null ? void 0 : e.id,
          ),
        o || a
      );
    }
    ((l.getInstagramActorID = e), (l.getInstagramUserID = s));
  },
  98,
);
