__d(
  "WASmaxOutBlocklistsUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutBlocklistsUpdateBlockListBlockItemMixin",
    "WASmaxOutBlocklistsUpdateBlockListUnblockItemMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.updateBlockListBlockItem)
        return o(
          "WASmaxOutBlocklistsUpdateBlockListBlockItemMixin",
        ).mergeUpdateBlockListBlockItemMixin(e, t.updateBlockListBlockItem);
      if (t.updateBlockListUnblockItem)
        return o(
          "WASmaxOutBlocklistsUpdateBlockListUnblockItemMixin",
        ).mergeUpdateBlockListUnblockItemMixin(e, t.updateBlockListUnblockItem);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup = e;
  },
  98,
);
