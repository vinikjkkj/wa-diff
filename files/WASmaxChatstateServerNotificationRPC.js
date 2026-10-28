__d(
  "WASmaxChatstateServerNotificationRPC",
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
      var t = u(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("ServerNotification", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = g(e),
        r = c(e);
      if (!r.success) return r;
      var a = d(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            internalTestMixin: n.success ? n.value : null,
            stateSource: r.value,
            stateTypes: a.value,
          })
        : a;
    }
    function c(e) {
      var t = p(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "FromBot",
          value: t.value,
        });
      var n = f(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "FromUser",
          value: n.value,
        });
      var r = _(e);
      return r.success
        ? o("WAResultOrError").makeResult({ name: "FromGroup", value: r.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["FromBot", "FromUser", "FromGroup"],
            [t, n, r],
          );
    }
    function d(e) {
      var t = m(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Composing",
          value: t.value,
        });
      var n = h(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "Paused", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Composing", "Paused"],
            [t, n],
          );
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "composing");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "media",
        "audio",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ composingMedia: r.value })
        : r;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrLidUserJid(e, "participant");
      return r.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            participant: r.value,
          })
        : r;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(e, "participant", y);
      return r.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            participant: r.value,
          })
        : r;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(e, "from", y);
      return n.success ? o("WAResultOrError").makeResult({ from: n.value }) : n;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "test");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t.value,
        "config",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ testConfig: n.value })
        : n;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "chatstate");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "paused");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    var y = {
      validators: [
        (e = o("WAJids")).validateUserJid,
        e.validateUserJid,
        e.validateUserJid,
        e.validateUserJid,
      ],
      typeName: "UserJid|UserJid|UserJid|UserJid",
    };
    ((l.receiveServerNotificationRPC = s),
      (l.parseServerNotificationRequest = u),
      (l.parseStateSource = c),
      (l.parseStateTypes = d),
      (l.parseComposingMixin = m),
      (l.parseFromBotMixin = p),
      (l.parseFromGroupMixin = _),
      (l.parseFromUserMixin = f),
      (l.parseInternalTestMixin = g),
      (l.parsePausedMixin = h),
      (l.USERJID_USERJID_USERJID_USERJID = y));
  },
  98,
);
