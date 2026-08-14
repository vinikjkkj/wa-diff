__d(
  "WASmaxOutStatusPublishStatusEncMentionedUsersMixin",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").JID(t) });
      return n;
    }
    function s(t) {
      var n = t.toArgs,
        r = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax(
            "meta",
            null,
            o("WASmaxJsx").smax(
              "mentioned_users",
              null,
              o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 5),
            ),
          ),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeStatusEncMentionedUsersMetaMentionedUsersTo = e),
      (l.mergeStatusEncMentionedUsersMixin = u));
  },
  98,
);
