__d(
  "WASmaxClientLogLogRPC",
  [
    "WAResultOrError",
    "WASmaxInClientLogServerNotificationMixin",
    "WASmaxJsx",
    "WASmaxOutClientLogNotificationClientAckMixin",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("Log", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeLogResponseAck: function () {
          return u(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "log");
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
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "start_t",
        1577865600,
        4102473600,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "end_t",
        1577865600,
        4102473600,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "bug_id",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "is_bug_reporter",
        c,
      );
      if (!u.success) return u;
      var d = o(
        "WASmaxInClientLogServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: r.value,
                from: a.value,
                logStartT: i.value,
                logEndT: l.value,
                logBugId: s.value,
                logIsBugReporter: u.value,
              },
              d.value,
            ),
          )
        : d;
    }
    function u(e) {
      var t = o(
        "WASmaxOutClientLogNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    var c = { false: "false", true: "true" };
    ((l.receiveLogRPC = e),
      (l.parseLogRequest = s),
      (l.makeLogResponseAck = u),
      (l.ENUM_FALSE_TRUE = c));
  },
  98,
);
