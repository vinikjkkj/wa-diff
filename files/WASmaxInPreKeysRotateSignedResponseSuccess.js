__d(
  "WASmaxInPreKeysRotateSignedResponseSuccess",
  ["WASmaxInPreKeysIQResultResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInPreKeysIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (r.success, r);
    }
    l.parseRotateSignedResponseSuccess = e;
  },
  98,
);
