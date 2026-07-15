__d(
  "WAWebExtractMentionFieldsFromScheduledMsg",
  ["WAWebABProps", "WAWebDecodeJid", "WAWebGetScheduledMsgContextInfo"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebGetScheduledMsgContextInfo").getScheduledMsgContextInfo(
        e,
      );
      if (t == null) return {};
      var n = {},
        r = t.groupMentions,
        a = t.mentionedJid,
        i = t.nonJidMentions;
      if (Array.isArray(a) && a.length > 0) {
        var l = [];
        for (var u of a) {
          var c = s(u);
          c != null && l.push(c);
        }
        l.length > 0 && (n.mentionedJidList = l);
      }
      if (Array.isArray(r) && r.length > 0) {
        var d = [];
        for (var m of r) {
          var p = s(m.groupJid);
          p != null && d.push({ groupJid: p, groupSubject: m.groupSubject });
        }
        d.length > 0 && (n.groupMentions = d);
      }
      return (
        i != null &&
          o("WAWebABProps").getABPropConfigValue(
            "enable_mention_everyone_receiver_web",
          ) &&
          (n.nonJidMentions = i),
        n
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
