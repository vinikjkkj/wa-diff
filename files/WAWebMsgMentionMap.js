__d(
  "WAWebMsgMentionMap",
  ["WAWebContactCollection", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!e.mentionedJidList || !e.mentionedJidList.length) return null;
      var t = {};
      return (
        e.mentionedJidList.forEach(function (e) {
          t["@" + (r("WAWebWid").user(e) || "")] = o(
            "WAWebContactCollection",
          ).ContactCollection.gadd(e);
        }),
        t
      );
    }
    function s(e) {
      return !e.groupMentions || !e.groupMentions.length
        ? null
        : e.groupMentions.reduce(function (e, t) {
            var n,
              r = "@" + t.groupJid.toString();
            return ((e[r] = (n = t.groupSubject) != null ? n : ""), e);
          }, {});
    }
    ((l.calculateMsgMentionMap = e), (l.calculateMsgGroupMentionMap = s));
  },
  98,
);
