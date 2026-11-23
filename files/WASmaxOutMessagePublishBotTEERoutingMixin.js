__d(
  "WASmaxOutMessagePublishBotTEERoutingMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.teeRoutingTeeRoutingToken,
        n = e.teeRoutingTeeIkId,
        r = o("WASmaxJsx").smax(
          "bot",
          null,
          o("WASmaxJsx").smax("tee_routing", {
            tee_routing_token: o("WAWap").CUSTOM_STRING(t),
            tee_ik_id: o("WAWap").CUSTOM_STRING(n),
          }),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBotTEERoutingMixin = s;
  },
  98,
);
