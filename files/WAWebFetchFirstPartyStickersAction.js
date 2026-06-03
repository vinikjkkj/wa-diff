__d(
  "WAWebFetchFirstPartyStickersAction",
  [
    "WAWebL10N",
    "WAWebMiscErrors",
    "WAWebPonyfillsFetch",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerCommonQueryToStaticServerWamEvent",
    "WAWebStickerUtils",
    "WAWebURLUtils",
    "WAWebWamEnumQueryType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "https://static.whatsapp.net/sticker";
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebStickerUtils").getStickerFetchParamsFromABConfig(),
            i = babelHelpers.extends(
              {},
              a,
              o("WAWebStickerUtils").getPremiumParams(
                o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd
                  .length,
              ),
              {
                cat: "sticker_pack_data",
                id: t,
                lg: r("WAWebL10N").getNormalizedLocale(),
              },
            ),
            l = r("WAWebURLUtils").build(e, i),
            s = new (o(
              "WAWebStickerCommonQueryToStaticServerWamEvent",
            ).StickerCommonQueryToStaticServerWamEvent)();
          s.startQueryLatencyMs();
          var u = yield r("WAWebPonyfillsFetch")(l, {
            signal: n == null ? void 0 : n.signal,
          });
          if (
            (s.markQueryLatencyMs(),
            s.set({
              httpResponseCode: u.status,
              params: new (r("WAWebPonyfillsUrlSearchParams"))(i).toString(),
              queryType: o("WAWebWamEnumQueryType").QUERY_TYPE
                .STICKER_PACK_DATA,
            }),
            s.commit(),
            !u.ok)
          )
            throw new (o("WAWebMiscErrors").InvalidServerResponseError)(
              l,
              u.status.toString(),
              "Invalid response from WhatsApp stickers endpoint",
            );
          var c = yield u.json();
          if (c == null || c.length === 0)
            throw new (o("WAWebMiscErrors").InvalidServerResponseError)(
              l,
              u.status.toString(),
              "Invalid response from WhatsApp stickers endpoint: " +
                JSON.stringify(c),
            );
          return c[0].stickers.map(function (e, t) {
            return {
              mimetype: e.mimetype,
              width: e.width,
              height: e.height,
              index: t,
              filehash: e["file-hash"],
              directPath: e["direct-path"],
              mediaKey: e["media-key"],
              id: e["file-hash"],
              deprecatedMms3Url: e.url,
              encFilehash: e["enc-file-hash"],
              mediaKeyTimestamp: 0,
            };
          });
        })),
        u.apply(this, arguments)
      );
    }
    l.fetchFirstPartyStickers = s;
  },
  98,
);
