__d(
  "WAWebExtractMentionFieldsFromScheduledMsg",
  ["WAWebABProps", "WAWebDecodeJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = (t = e.extendedTextMessage) == null ? void 0 : t.contextInfo;
      if (n == null) return {};
      var r = {},
        a = n.groupMentions,
        i = n.mentionedJid,
        l = n.nonJidMentions;
      if (Array.isArray(i) && i.length > 0) {
        var u = [];
        for (var c of i) {
          var d = s(c);
          d != null && u.push(d);
        }
        u.length > 0 && (r.mentionedJidList = u);
      }
      if (Array.isArray(a) && a.length > 0) {
        var m = [];
        for (var p of a) {
          var _ = s(p.groupJid);
          _ != null && m.push({ groupJid: _, groupSubject: p.groupSubject });
        }
        m.length > 0 && (r.groupMentions = m);
      }
      return (
        l != null &&
          o("WAWebABProps").getABPropConfigValue(
            "enable_mention_everyone_receiver_web",
          ) &&
          (r.nonJidMentions = l),
        r
      );
    }
    function s(e) {
      var t = o("WAWebDecodeJid").decodeJid(e);
      return typeof t == "string" ? null : t;
    }
    l.extractMentionFieldsFromScheduledMsg = e;
  },
  98,
);
