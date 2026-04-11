__d(
  "WASmaxInGroupsGetGroupProfilePicturesProfilePicturesResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup",
    "WASmaxInGroupsParentOrSubGroupMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsParentOrSubGroupMixinGroup",
      ).parseParentOrSubGroupMixinGroup(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup",
      ).parseGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup(
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            parentOrSubGroupMixinGroup: n.value,
            getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup:
              r.value,
          })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t, "pictures");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "picture",
        1,
        1e3,
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ picturesPicture: r.value })
        : r;
    }
    ((l.parseGetGroupProfilePicturesProfilePicturesResponsePicturesPicture = e),
      (l.parseGetGroupProfilePicturesProfilePicturesResponseMixin = s));
  },
  98,
);
