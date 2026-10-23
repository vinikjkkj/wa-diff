__d(
  "WASmaxWaffleWFNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxInWaffleEnums",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("WFNotification", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "notification_metadata",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "waffle",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(n.value, "event", 1, 9);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "show_user_notif",
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "type",
        0,
        0,
      );
      if (!s.success) return s;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "client_resync",
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "sync_delay",
        0,
        void 0,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "npr",
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "wf_notif_ts",
        15778656e5,
        41024736e5,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "wf_notif_id",
      );
      if (!_.success) return _;
      var f = u(e);
      return f.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                notificationMetadataEvent: i.value,
                notificationMetadataShowUserNotif: l.value,
                notificationMetadataType: s.value,
                notificationMetadataClientResync: c.value,
                notificationMetadataSyncDelay: d.value,
                notificationMetadataNpr: m.value,
                notificationMetadataWfNotifTs: p.value,
                notificationMetadataWfNotifId: _.value,
              },
              f.value,
            ),
          )
        : f;
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
    ((l.receiveWFNotificationRPC = e),
      (l.parseWFNotificationRequest = s),
      (l.parseServerNotificationMixin = u));
  },
  98,
);
