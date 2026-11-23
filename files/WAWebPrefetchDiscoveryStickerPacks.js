__d(
  "WAWebPrefetchDiscoveryStickerPacks",
  [
    "WALogger",
    "WAWebCmd",
    "WAWebDiscoveryStickerGating",
    "WAWebDiscoveryStickerPackCollection",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1;
    function u() {
      return (
        s ||
          ((s = !0),
          o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", function () {
            c().catch(d);
          })),
        c()
      );
    }
    async function c() {
      if (o("WAWebDiscoveryStickerGating").isDiscoveryStickersEnabled()) {
        var e = o("WAWebDiscoveryStickerGating").getDiscoveryStickerPackCount(),
          t = o("WAWebDiscoveryStickerGating").getDiscoveryStickerCount();
        o(
          "WAWebDiscoveryStickerPackCollection",
        ).DiscoveryStickerPackCollectionMd.isLoadedFor(e, t) ||
          (await o(
            "WAWebDiscoveryStickerPackCollection",
          ).DiscoveryStickerPackCollectionMd.fetch(e, t));
      }
    }
    function d(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Discovery sticker pack fetch rejected unexpectedly",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("discovery-sticker-packs-fetch-rejected");
    }
    l.initDiscoveryStickerPackLoading = u;
  },
  98,
);
