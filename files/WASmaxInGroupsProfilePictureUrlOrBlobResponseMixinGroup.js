__d(
  "WASmaxInGroupsProfilePictureUrlOrBlobResponseMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsProfilePictureBlobResponseMixin",
    "WASmaxInGroupsProfilePictureUrlResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsProfilePictureUrlResponseMixin",
      ).parseProfilePictureUrlResponseMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ProfilePictureUrlResponse",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsProfilePictureBlobResponseMixin",
      ).parseProfilePictureBlobResponseMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ProfilePictureBlobResponse",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ProfilePictureUrlResponse", "ProfilePictureBlobResponse"],
            [t, n],
          );
    }
    l.parseProfilePictureUrlOrBlobResponseMixinGroup = e;
  },
  98,
);
