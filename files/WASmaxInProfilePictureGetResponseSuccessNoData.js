__d(
  "WASmaxInProfilePictureGetResponseSuccessNoData",
  ["WASmaxInProfilePictureIQResultResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInProfilePictureIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    l.parseGetResponseSuccessNoData = e;
  },
  98,
);
