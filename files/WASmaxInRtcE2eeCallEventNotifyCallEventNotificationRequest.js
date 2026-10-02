__d(
  "WASmaxInRtcE2eeCallEventNotifyCallEventNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInRtcE2eeCallEventNotifyEnums",
    "WASmaxInRtcE2eeCallEventNotifyServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
      var i = o("WASmaxParseJid").attrJidEnum(
        n.value,
        "jid",
        o("WASmaxInRtcE2eeCallEventNotifyEnums").GROUPJID_USERJID,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "event_type",
        o("WASmaxInRtcE2eeCallEventNotifyEnums").ENUM_ENDED_MISSED_STARTED,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "event_time",
        15778656e5,
        41024736e5,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrString(n.value, "server_info_data");
      if (!u.success) return u;
      var c = o("WASmaxParseJid").attrUserJid(n.value, "event_actor_id");
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "call_type",
        o("WASmaxInRtcE2eeCallEventNotifyEnums").ENUM_VIDEO_VOICE,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "parent_id",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        n.value,
        "duration",
      );
      if (!p.success) return p;
      var _ = o(
        "WASmaxInRtcE2eeCallEventNotifyServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return _.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                callEventJid: i.value,
                callEventEventType: l.value,
                callEventEventTime: s.value,
                callEventServerInfoData: u.value,
                callEventEventActorId: c.value,
                callEventCallType: d.value,
                callEventParentId: m.value,
                callEventDuration: p.value,
              },
              _.value,
            ),
          )
        : _;
    }
    l.parseCallEventNotificationRequest = e;
  },
  98,
);
