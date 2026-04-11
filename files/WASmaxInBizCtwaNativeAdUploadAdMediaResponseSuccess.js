__d(
  "WASmaxInBizCtwaNativeAdUploadAdMediaResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBizCtwaNativeAdEnums",
    "WASmaxInBizCtwaNativeAdHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "media_list");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInBizCtwaNativeAdEnums").ENUM_IMAGE_VIDEO,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, type: r.value })
        : r;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "media");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInBizCtwaNativeAdEnums").ENUM_IMAGE_VIDEO,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, type: r.value })
        : r;
    }
    function u(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "media", s);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizCtwaNativeAdHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(t, n);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "media_list",
        0,
        10,
        e,
      );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, i.value, {
              media: a.value,
              mediaList: l.value,
            }),
          )
        : l;
    }
    ((l.parseUploadAdMediaResponseSuccessMediaList = e),
      (l.parseUploadAdMediaResponseSuccessMedia = s),
      (l.parseUploadAdMediaResponseSuccess = u));
  },
  98,
);
