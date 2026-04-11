__d(
  "WASmaxInProfilePictureGetResponseSuccessPictureBlob",
  [
    "WAResultOrError",
    "WASmaxInProfilePictureEnums",
    "WASmaxInProfilePictureIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "picture");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(r.value, "id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "type",
        o("WASmaxInProfilePictureEnums").ENUM_IMAGE_PREVIEW,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "has_staging",
        o("WASmaxInProfilePictureEnums").ENUM_FALSE_TRUE,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(r.value, 1, void 0);
      if (!s.success) return s;
      var u = o(
        "WASmaxInProfilePictureIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                pictureId: a.value,
                pictureType: i.value,
                pictureHasStaging: l.value,
                pictureElementValue: s.value,
              },
              u.value,
            ),
          )
        : u;
    }
    l.parseGetResponseSuccessPictureBlob = e;
  },
  98,
);
