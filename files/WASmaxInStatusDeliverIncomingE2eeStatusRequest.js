__d(
  "WASmaxInStatusDeliverIncomingE2eeStatusRequest",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverFromBroadcastOrGroupMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusDeliverFromBroadcastOrGroupMixinGroup",
      ).parseFromBroadcastOrGroupMixinGroup(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            fromBroadcastOrGroupMixinGroup: r.value,
          })
        : r;
    }
    l.parseIncomingE2eeStatusRequest = e;
  },
  98,
);
