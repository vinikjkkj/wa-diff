__d(
  "WASmaxInProfilePictureGetResponseSuccessAvatarURLs",
  [
    "WAResultOrError",
    "WASmaxInProfilePictureIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "avatar");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "url");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "pose_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "hash",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            url: n.value,
            poseId: r.value,
            hash: a.value,
          })
        : a;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o(
        "WASmaxInProfilePictureIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(t, "avatar", 1, 4, e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { avatar: i.value }),
          )
        : i;
    }
    ((l.parseGetResponseSuccessAvatarURLsAvatar = e),
      (l.parseGetResponseSuccessAvatarURLs = s));
  },
  98,
);
