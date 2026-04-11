__d(
  "WASmaxInGroupsGetGroupProfilePicturesSuccessProfilePictureResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsProfilePictureIdMixin",
    "WASmaxInGroupsProfilePictureTypeMixin",
    "WASmaxInGroupsProfilePictureUrlOrBlobResponseMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsProfilePictureIdMixin",
      ).parseProfilePictureIdMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsProfilePictureTypeMixin",
      ).parseProfilePictureTypeMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsProfilePictureUrlOrBlobResponseMixinGroup",
      ).parseProfilePictureUrlOrBlobResponseMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          profilePictureUrlOrBlobResponseMixinGroup: a.success ? a.value : null,
        }),
      );
    }
    l.parseGetGroupProfilePicturesSuccessProfilePictureResponseMixin = e;
  },
  98,
);
