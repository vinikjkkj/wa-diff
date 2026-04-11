__d(
  "WASmaxInGroupsGetGroupProfilePicturesResponseSuccessGroupPictures",
  [
    "WAResultOrError",
    "WASmaxInGroupsGetGroupProfilePicturesProfilePicturesResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsGetGroupProfilePicturesProfilePicturesResponseMixin",
      ).parseGetGroupProfilePicturesProfilePicturesResponseMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, a.value),
          )
        : a;
    }
    l.parseGetGroupProfilePicturesResponseSuccessGroupPictures = e;
  },
  98,
);
