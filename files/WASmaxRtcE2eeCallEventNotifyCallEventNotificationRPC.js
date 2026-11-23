__d(
  "WASmaxRtcE2eeCallEventNotifyCallEventNotificationRPC",
  [
    "WAJids",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("CallEventNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeCallEventNotificationResponseAck: function () {
          return p(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "call_event");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "from");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "fb:call",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseJid").attrJidEnum(n.value, "jid", d);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(n.value, "event_type", u);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "event_time",
        15778656e5,
        41024736e5,
      );
      if (!s.success) return s;
      var p = o("WASmaxParseUtils").attrString(n.value, "server_info_data");
      if (!p.success) return p;
      var _ = o("WASmaxParseJid").attrUserJid(n.value, "event_actor_id");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").attrStringEnum(n.value, "call_type", c);
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "parent_id",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        n.value,
        "duration",
      );
      if (!h.success) return h;
      var y = m(e);
      return y.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                callEventJid: i.value,
                callEventEventType: l.value,
                callEventEventTime: s.value,
                callEventServerInfoData: p.value,
                callEventEventActorId: _.value,
                callEventCallType: f.value,
                callEventParentId: g.value,
                callEventDuration: h.value,
              },
              y.value,
            ),
          )
        : y;
    }
    var u = { ended: "ended", missed: "missed", started: "started" },
      c = { video: "video", voice: "voice" },
      d = {
        validators: [o("WAJids").validateGroupJid, o("WAJids").validateUserJid],
        typeName: "GroupJid|UserJid",
      };
    function m(e) {
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
    function p(e) {
      var t = f(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    function _(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrUserJid,
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
        to: o("WAWap").USER_JID(n.value),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.receiveCallEventNotificationRPC = e),
      (l.parseCallEventNotificationRequest = s),
      (l.ENUM_ENDED_MISSED_STARTED = u),
      (l.ENUM_VIDEO_VOICE = c),
      (l.GROUPJID_USERJID = d),
      (l.makeCallEventNotificationResponseAck = p));
  },
  98,
);
