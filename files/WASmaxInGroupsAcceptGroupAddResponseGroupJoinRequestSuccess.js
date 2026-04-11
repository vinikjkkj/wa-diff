__d(
  "WASmaxInGroupsAcceptGroupAddResponseGroupJoinRequestSuccess",
  ["WASmaxInGroupsIQResultResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "membership_approval_request",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return (a.success, a);
    }
    l.parseAcceptGroupAddResponseGroupJoinRequestSuccess = e;
  },
  98,
);
