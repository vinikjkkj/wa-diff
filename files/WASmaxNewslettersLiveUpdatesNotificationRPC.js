__d(
  "WASmaxNewslettersLiveUpdatesNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "LiveUpdatesNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeLiveUpdatesNotificationResponseAck: function () {
          return u(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "live_updates");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "messages");
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
      ).parseNewsletterMessageResponsePayloadMixin(r.value);
      if (!a.success) return a;
      var i = m(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                liveUpdatesMessagesNewsletterMessageResponsePayloadMixin:
                  a.value,
              },
              i.value,
            ),
          )
        : i;
    }
    function u(e) {
      var t = d(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    function c(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrNewsletterJid,
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
        to: o("WAWap").JID(n.value),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function d(e, t) {
      var n = c(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "newsletter",
      );
      if (!r.success) return r;
      var a = p(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: n.value, type: r.value }, a.value),
          )
        : a;
    }
    function p(e) {
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
    ((l.receiveLiveUpdatesNotificationRPC = e),
      (l.parseLiveUpdatesNotificationRequest = s),
      (l.makeLiveUpdatesNotificationResponseAck = u),
      (l.mergeNotificationClientAckMixin = d),
      (l.parseCommonNotificationMixin = m),
      (l.parseServerNotificationMixin = p));
  },
  98,
);
