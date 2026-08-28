__d(
  "fximGetIdentityPictureV2",
  ["CometRelay", "fximGetIdentityPictureV2_identity.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0 ? e : (e = n("fximGetIdentityPictureV2_identity.graphql"));
    function u(e, t, n) {
      var r;
      (t === void 0 && (t = "PROFILE_PHOTO"), n === void 0 && (n = null));
      var a = o("CometRelay").readInlineData(s, e);
      switch (t) {
        case "PROFILE_PHOTO":
          return (r = a.profile_picture_info) == null
            ? void 0
            : r.profile_picture_url;
        case "AVATAR": {
          var i = a.avatar_preview_url;
          return i == null ? n : i;
        }
        default:
          return null;
      }
    }
    l.default = u;
  },
  98,
);
