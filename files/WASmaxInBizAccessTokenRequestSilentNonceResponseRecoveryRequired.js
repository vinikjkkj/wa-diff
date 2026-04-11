__d(
  "WASmaxInBizAccessTokenRequestSilentNonceResponseRecoveryRequired",
  [
    "WAResultOrError",
    "WASmaxInBizAccessTokenHackBaseIQResultResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "result");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "status",
        "RecoveryRequired",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(r.value, "email");
      if (!i.success) return i;
      var l = o(
        "WASmaxInBizAccessTokenHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { resultStatus: a.value, resultEmail: i.value },
              l.value,
            ),
          )
        : l;
    }
    l.parseRequestSilentNonceResponseRecoveryRequired = e;
  },
  98,
);
