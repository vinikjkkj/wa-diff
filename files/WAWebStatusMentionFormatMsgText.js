__d(
  "WAWebStatusMentionFormatMsgText",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusMentionFutureproofMsgText",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg;
      if (!o("WAWebStatusGatingUtils").isStatusMentionMessageEnabled())
        return r("WAWebStatusMentionFutureproofMsgText")({ msg: t });
      var n = t.safe(),
        a = n.id.fromMe,
        i = n.subtype === "status_group_mention_message";
      if (i) return a ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
      if (a) {
        var l = o("WAWebContactCollection").ContactCollection.get(n.id.remote),
          u =
            (l == null ? void 0 : l.name) ||
            (l == null ? void 0 : l.pushname) ||
            "";
        return s._(/*BTDS*/ "", [s._param("name", u)]);
      }
      return s._(/*BTDS*/ "");
    }
    l.default = e;
  },
  226,
);
