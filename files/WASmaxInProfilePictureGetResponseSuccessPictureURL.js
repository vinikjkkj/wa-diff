__d(
  "WASmaxInProfilePictureGetResponseSuccessPictureURL",
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
      var l = o("WASmaxParseUtils").attrString(r.value, "url");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(r.value, "direct_path");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "hash",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "has_staging",
        o("WASmaxInProfilePictureEnums").ENUM_FALSE_TRUE,
      );
      if (!c.success) return c;
      var d = o(
        "WASmaxInProfilePictureIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                pictureId: a.value,
                pictureType: i.value,
                pictureUrl: l.value,
                pictureDirectPath: s.value,
                pictureHash: u.value,
                pictureHasStaging: c.value,
              },
              d.value,
            ),
          )
        : d;
    }
    l.parseGetResponseSuccessPictureURL = e;
  },
  98,
);
