__d(
  "WAWebStatusMentionFormatMsgText",
  ["fbt", "WAWebContactCollection"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = t.safe(),
        r = n.id.fromMe,
        a = n.subtype === "status_group_mention_message";
      if (a)
        return r
          ? s._(/*BTDS*/ "\u0040 You mentioned this group.")
          : s._(/*BTDS*/ "\u0040 This group was mentioned.");
      if (r) {
        var i = o("WAWebContactCollection").ContactCollection.get(n.id.remote),
          l =
            (i == null ? void 0 : i.name) ||
            (i == null ? void 0 : i.pushname) ||
            "";
        return s._(/*BTDS*/ "\u0040 You mentioned {name}", [
          s._param("name", l),
        ]);
      }
      return s._(/*BTDS*/ "\u0040 You were mentioned.");
    }
    l.default = e;
  },
  226,
);
