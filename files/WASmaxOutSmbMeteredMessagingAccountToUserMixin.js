__d(
  "WASmaxOutSmbMeteredMessagingAccountToUserMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.toJid,
        n = o("WASmaxJsx").smax("to", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeToUserMixin = s;
  },
  98,
);
