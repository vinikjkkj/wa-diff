__d(
  "WASmaxInWaffleWFNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInWaffleEnums",
    "WASmaxInWaffleServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
      var i = o("WASmaxParseUtils").attrIntRange(n.value, "event", 1, 7);
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
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "client_resync",
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "sync_delay",
        0,
        void 0,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "npr",
        o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE,
      );
      if (!d.success) return d;
      var m = o(
        "WASmaxInWaffleServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return m.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                notificationMetadataEvent: i.value,
                notificationMetadataShowUserNotif: l.value,
                notificationMetadataType: s.value,
                notificationMetadataClientResync: u.value,
                notificationMetadataSyncDelay: c.value,
                notificationMetadataNpr: d.value,
              },
              m.value,
            ),
          )
        : m;
    }
    l.parseWFNotificationRequest = e;
  },
  98,
);
