__d(
  "WASmaxAbPropsRefreshRPC",
  [
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Refresh", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeRefreshResponseAck: function () {
          return c(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "abprops");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "server",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(n.value, "protocol", 1, 10);
      if (!i.success) return i;
      var l = u(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { type: r.value, from: a.value, abpropsProtocol: i.value },
              l.value,
            ),
          )
        : l;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "offline",
        0,
        1024,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            t: n.value,
            id: r.value,
            offline: a.value,
          })
        : a;
    }
    function c(e) {
      var t = m(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    function d(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        ["from"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WAWap").DEVICE_JID(n.value),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function m(e, t) {
      var n = d(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.receiveRefreshRPC = e),
      (l.parseRefreshRequest = s),
      (l.makeRefreshResponseAck = c));
  },
  98,
);
