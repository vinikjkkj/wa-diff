__d(
  "WASmaxOutProfilePictureAvatarMixin",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.avatarPoseId,
        n = o("WASmaxJsx").smax("avatar", {
          pose_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t) {
      var n = t.avatarArgs,
        r = o("WASmaxJsx").smax(
          "picture",
          { type: "avatar" },
          o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 4),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeAvatarAvatar = e), (l.mergeAvatarMixin = u));
  },
  98,
);
