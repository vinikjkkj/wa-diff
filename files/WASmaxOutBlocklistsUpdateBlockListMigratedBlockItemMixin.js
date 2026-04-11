__d(
  "WASmaxOutBlocklistsUpdateBlockListMigratedBlockItemMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBlocklistsBlocklistIdentifierMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.itemJid,
        n = o(
          "WASmaxOutBlocklistsBlocklistIdentifierMixin",
        ).mergeBlocklistIdentifierMixin(
          o("WASmaxJsx").smax("item", { jid: o("WAWap").JID(t) }),
          e,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUpdateBlockListMigratedBlockItemMixin = s;
  },
  98,
);
