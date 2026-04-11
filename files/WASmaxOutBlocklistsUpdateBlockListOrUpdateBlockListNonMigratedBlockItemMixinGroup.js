__d(
  "WASmaxOutBlocklistsUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutBlocklistsUpdateBlockListMigratedBlockItemMixin",
    "WASmaxOutBlocklistsUpdateBlockListNonMigratedBlockItemMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.updateBlockListMigratedBlockItem)
        return o(
          "WASmaxOutBlocklistsUpdateBlockListMigratedBlockItemMixin",
        ).mergeUpdateBlockListMigratedBlockItemMixin(
          e,
          t.updateBlockListMigratedBlockItem,
        );
      if (t.updateBlockListNonMigratedBlockItem)
        return o(
          "WASmaxOutBlocklistsUpdateBlockListNonMigratedBlockItemMixin",
        ).mergeUpdateBlockListNonMigratedBlockItemMixin(
          e,
          t.updateBlockListNonMigratedBlockItem,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeUpdateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroup = e;
  },
  98,
);
