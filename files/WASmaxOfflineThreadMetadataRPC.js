__d(
  "WASmaxOfflineThreadMetadataRPC",
  [
    "WAJids",
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = c(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("ThreadMetadata", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(e, "from", p);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ from: n.value, t: r.value })
        : r;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ib");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "thread_metadata");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = y(n.value),
        i = m(n.value),
        l = o("WASmaxParseUtils").mapChildrenWithTag(n.value, "item", 0, 50, u);
      return l.success
        ? o("WAResultOrError").makeResult({
            from: r.value,
            threadMetadataThreadMetadataDelayedMixin: a.success
              ? a.value
              : null,
            threadMetadataThreadMetadataWatermarkMixin: i.success
              ? i.value
              : null,
            threadMetadataItem: l.value,
          })
        : l;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(e, "from", _);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "sts",
        15778656e8,
        41024736e8,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "read_self_sts",
        15778656e8,
        41024736e8,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            sts: r.value,
            readSelfSts: a.value,
          })
        : a;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "thread_metadata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "watermark");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "item",
        0,
        5e3,
        d,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ watermarkItem: r.value })
        : r;
    }
    var p = {
        validators: [
          (e = o("WAJids")).validateGroupJid,
          e.validateUserJid,
          e.validateUserJid,
          e.validateUserJid,
        ],
        typeName: "GroupJid|UserJid|UserJid|UserJid",
      },
      _ = {
        validators: [
          e.validateUserJid,
          e.validateGroupJid,
          e.validateUserJid,
          e.validateUserJid,
          e.validateUserJid,
        ],
        typeName: "UserJid|GroupJid|UserJid|UserJid|UserJid",
      };
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "from");
      return n.success ? o("WAResultOrError").makeResult({ from: n.value }) : n;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status_msgs");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "count", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "item", 1, 1 / 0, f);
      return r.success
        ? o("WAResultOrError").makeResult({ count: n.value, item: r.value })
        : r;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notifications");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "count", 0, void 0);
      return n.success
        ? o("WAResultOrError").makeResult({ count: n.value })
        : n;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "thread_metadata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "status_msgs", g);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "notifications", h);
      return r.success
        ? o("WAResultOrError").makeResult({
            statusMsgs: n.value,
            notifications: r.value,
          })
        : r;
    }
    ((l.receiveThreadMetadataRPC = s),
      (l.parseThreadMetadataRequestThreadMetadataItem = u),
      (l.parseThreadMetadataRequest = c),
      (l.parseThreadMetadataWatermarkWatermarkItem = d),
      (l.parseThreadMetadataWatermarkMixin = m),
      (l.GROUPJID_USERJID_USERJID_USERJID = p),
      (l.USERJID_GROUPJID_USERJID_USERJID_USERJID = _),
      (l.parseThreadMetadataDelayedStatusMsgsItem = f),
      (l.parseThreadMetadataDelayedStatusMsgs = g),
      (l.parseThreadMetadataDelayedNotifications = h),
      (l.parseThreadMetadataDelayedMixin = y));
  },
  98,
);
