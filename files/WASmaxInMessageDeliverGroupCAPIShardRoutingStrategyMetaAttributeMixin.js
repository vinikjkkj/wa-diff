__d(
  "WASmaxInMessageDeliverGroupCAPIShardRoutingStrategyMetaAttributeMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "capi_shard_routing_strategy",
        o("WASmaxInMessageDeliverEnums").ENUM_GROUP_SENDER,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            metaCapiShardRoutingStrategy: r.value,
          })
        : r;
    }
    l.parseGroupCAPIShardRoutingStrategyMetaAttributeMixin = e;
  },
  98,
);
