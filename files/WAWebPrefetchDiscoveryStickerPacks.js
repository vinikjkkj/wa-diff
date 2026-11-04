__d(
  "WAWebPrefetchDiscoveryStickerPacks",
  [
    "WAWebCmd",
    "WAWebDiscoveryStickerGating",
    "WAWebDiscoveryStickerPackCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !1,
      s = !1;
    function u() {
      e ||
        ((e = !0),
        (s = o("WAWebCmd").Cmd.isMainStreamReadyMd === !0),
        s ||
          o("WAWebCmd").Cmd.on(
            "main_stream_mode_ready_from_bridge",
            function () {
              ((s = !0), c());
            },
          ),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", function () {
          c();
        }),
        c());
    }
    function c() {
      !s ||
        !o("WAWebDiscoveryStickerGating").isDiscoveryStickersEnabled() ||
        o(
          "WAWebDiscoveryStickerPackCollection",
        ).DiscoveryStickerPackCollectionMd.fetch(
          o("WAWebDiscoveryStickerGating").getDiscoveryStickerPackCount(),
          o("WAWebDiscoveryStickerGating").getDiscoveryStickerCount(),
        );
    }
    l.initDiscoveryStickerPackPrefetch = u;
  },
  98,
);
