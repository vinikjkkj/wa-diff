__d(
  "WASmaxOutMessagePublishAgentEngagementTypeMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.botAgentEngagementType,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("bot", {
            agent_engagement_type: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              t,
            ),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeAgentEngagementTypeMixin = s;
  },
  98,
);
