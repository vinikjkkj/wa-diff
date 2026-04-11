__d(
  "WASmaxInGroupsGetGroupProfilePicturesPartialProfilePictureResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsPictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsPictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup",
      ).parsePictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup(
        e,
      );
      return o("WAResultOrError").makeResult({
        pictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup:
          n.success ? n.value : null,
      });
    }
    l.parseGetGroupProfilePicturesPartialProfilePictureResponseMixin = e;
  },
  98,
);
