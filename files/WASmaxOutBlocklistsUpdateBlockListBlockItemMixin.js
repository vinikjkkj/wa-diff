__d(
  "WASmaxOutBlocklistsUpdateBlockListBlockItemMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBlocklistsUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
          e.updateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroupArgs,
        n = o(
          "WASmaxOutBlocklistsUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup",
        ).mergeUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup(
          o("WASmaxJsx").smax("item", { action: "block" }),
          t,
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUpdateBlockListBlockItemMixin = s;
  },
  98,
);
