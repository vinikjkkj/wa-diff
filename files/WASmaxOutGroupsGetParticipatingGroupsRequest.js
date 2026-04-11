__d(
  "WASmaxOutGroupsGetParticipatingGroupsRequest",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxOutGroupsBaseGetServerMixin"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("participants", null);
      return e;
    }
    function s() {
      var e = o("WASmaxJsx").smax("description", null);
      return e;
    }
    function u(t) {
      var n = t.hasParticipants,
        r = t.hasDescription,
        a = o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "participating",
              null,
              o("WASmaxChildren").HAS_OPTIONAL_CHILD(e, n),
              o("WASmaxChildren").HAS_OPTIONAL_CHILD(s, r),
            ),
          ),
        );
      return a;
    }
    ((l.makeGetParticipatingGroupsRequestParticipatingParticipants = e),
      (l.makeGetParticipatingGroupsRequestParticipatingDescription = s),
      (l.makeGetParticipatingGroupsRequest = u));
  },
  98,
);
