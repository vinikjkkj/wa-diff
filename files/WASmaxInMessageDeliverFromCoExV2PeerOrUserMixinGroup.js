__d(
  "WASmaxInMessageDeliverFromCoExV2PeerOrUserMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverFromCoExV2PeerMixin",
    "WASmaxInMessageDeliverFromUserMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverFromCoExV2PeerMixin",
      ).parseFromCoExV2PeerMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "FromCoExV2Peer",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverFromUserMixin").parseFromUserMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "FromUser", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["FromCoExV2Peer", "FromUser"],
            [t, n],
          );
    }
    l.parseFromCoExV2PeerOrUserMixinGroup = e;
  },
  98,
);
