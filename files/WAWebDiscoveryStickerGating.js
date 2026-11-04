__d(
  "WAWebDiscoveryStickerGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "sticker_discovery_enabled_m1",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "discovery_sticker_packs_count",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("discovery_stickers_count");
    }
    ((l.isDiscoveryStickersEnabled = e),
      (l.getDiscoveryStickerPackCount = s),
      (l.getDiscoveryStickerCount = u));
  },
  98,
);
