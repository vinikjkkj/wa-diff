__d(
  "WASmaxPresenceServerUpdateRPC",
  [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("ServerUpdate", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = u(e);
      return n.success
        ? o("WAResultOrError").makeResult({ presenceUpdates: n.value })
        : n;
    }
    function u(e) {
      var t = m(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupAvailable",
          value: t.value,
        });
      var n = p(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "GroupUnavailable",
          value: n.value,
        });
      var r = _(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "LastSeenWithOtherValue",
          value: r.value,
        });
      var a = c(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "UserUnavailable",
          value: a.value,
        });
      var i = d(e);
      return i.success
        ? o("WAResultOrError").makeResult({ name: "Available", value: i.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "GroupAvailable",
              "GroupUnavailable",
              "LastSeenWithOtherValue",
              "UserUnavailable",
              "Available",
            ],
            [t, n, r, a, i],
          );
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "unavailable",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "last",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            type: r.value,
            last: a.value,
          })
        : a;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "available",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "last",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            type: r.value,
            last: a.value,
          })
        : a;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "count", 1, 1024);
      return r.success
        ? o("WAResultOrError").makeResult({ from: n.value, count: r.value })
        : r;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "unavailable",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ from: n.value, type: r.value })
        : r;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "unavailable",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "last",
        f,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            type: r.value,
            last: a.value,
          })
        : a;
    }
    var f = { deny: "deny", error: "error", none: "none" };
    ((l.receiveServerUpdateRPC = e),
      (l.parseServerUpdateRequest = s),
      (l.parsePresenceUpdates = u),
      (l.parseUserUnavailableMixin = c),
      (l.parseAvailableMixin = d),
      (l.parseGroupAvailableMixin = m),
      (l.parseGroupUnavailableMixin = p),
      (l.parseLastSeenWithOtherValueMixin = _),
      (l.ENUM_DENY_ERROR_NONE = f));
  },
  98,
);
