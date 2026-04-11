__d(
  "WASmaxOutBlocklistsUpdateBlockListUnblockItemMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.itemJid,
        n = o("WASmaxJsx").smax("item", {
          action: "unblock",
          jid: o("WAWap").USER_JID(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUpdateBlockListUnblockItemMixin = s;
  },
  98,
);
