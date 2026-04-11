__d(
  "WASmaxOutBlocklistsUpdateBlockListNonMigratedBlockItemMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.itemJid,
        n = o("WASmaxJsx").smax("item", { jid: o("WAWap").USER_JID(t) });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUpdateBlockListNonMigratedBlockItemMixin = s;
  },
  98,
);
