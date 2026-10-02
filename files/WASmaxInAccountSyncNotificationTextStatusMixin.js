__d(
  "WASmaxInAccountSyncNotificationTextStatusMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationTextStatusEmojiMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "text_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "emoji");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "text");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrInt(e, "ephemeral_duration_sec");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "last_update_time");
      if (!i.success) return i;
      var l = o(
        "WASmaxInAccountSyncNotificationTextStatusEmojiMixin",
      ).parseNotificationTextStatusEmojiMixin(n.value);
      return l.success
        ? o("WAResultOrError").makeResult({
            text: r.value,
            ephemeralDurationSec: a.value,
            lastUpdateTime: i.value,
            emojiNotificationTextStatusEmojiMixin: l.value,
          })
        : l;
    }
    l.parseNotificationTextStatusMixin = e;
  },
  98,
);
