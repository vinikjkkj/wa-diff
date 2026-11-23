__d(
  "WASmaxInPreKeysRotateSignedResponseValidationError",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorResponseMixin",
    "WASmaxInPreKeysIdentityKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(r.value, "text");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(r.value, "code", 400, 499);
      if (!i.success) return i;
      var l = o("WASmaxInPreKeysIdentityKeyMixin").parseIdentityKeyMixin(
        r.value,
      );
      if (!l.success) return l;
      var s = o(
        "WASmaxInPreKeysIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                errorText: a.value,
                errorCode: i.value,
                errorIdentityKeyMixin: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseRotateSignedResponseValidationError = e;
  },
  98,
);
