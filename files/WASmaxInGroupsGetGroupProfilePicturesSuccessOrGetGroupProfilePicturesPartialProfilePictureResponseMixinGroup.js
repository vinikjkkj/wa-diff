__d(
  "WASmaxInGroupsGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsGetGroupProfilePicturesPartialProfilePictureResponseMixin",
    "WASmaxInGroupsGetGroupProfilePicturesSuccessProfilePictureResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsGetGroupProfilePicturesSuccessProfilePictureResponseMixin",
      ).parseGetGroupProfilePicturesSuccessProfilePictureResponseMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GetGroupProfilePicturesSuccessProfilePictureResponse",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsGetGroupProfilePicturesPartialProfilePictureResponseMixin",
      ).parseGetGroupProfilePicturesPartialProfilePictureResponseMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "GetGroupProfilePicturesPartialProfilePictureResponse",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SuccessProfilePictureResponse", "PartialProfilePictureResponse"],
            [t, n],
          );
    }
    l.parseGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup =
      e;
  },
  98,
);
