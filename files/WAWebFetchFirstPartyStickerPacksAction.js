__d(
  "WAWebFetchFirstPartyStickerPacksAction",
  [
    "WAWebL10N",
    "WAWebL10NCountryCodes",
    "WAWebMiscErrors",
    "WAWebPonyfillsFetch",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerCommonQueryToStaticServerWamEvent",
    "WAWebStickerUtils",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumQueryType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "https://static.whatsapp.net/sticker";
    async function s(t, n) {
      var a = o("WAWebStickerUtils").getStickerFetchParamsFromABConfig(),
        i = babelHelpers.extends({}, a, t),
        l = r("WAWebURLUtils").build(e, i),
        s = new (o(
          "WAWebStickerCommonQueryToStaticServerWamEvent",
        ).StickerCommonQueryToStaticServerWamEvent)();
      s.startQueryLatencyMs();
      var u = await r("WAWebPonyfillsFetch")(l, { signal: n.signal });
      if (
        (s.markQueryLatencyMs(),
        s.set({
          httpResponseCode: u.status,
          params: new (r("WAWebPonyfillsUrlSearchParams"))(i).toString(),
          queryType: o("WAWebWamEnumQueryType").QUERY_TYPE.STICKER_PACK_DATA,
        }),
        s.commit(),
        !u.ok)
      )
        throw new (o("WAWebMiscErrors").InvalidServerResponseError)(
          l,
          u.status.toString(),
          "Invalid response from WhatsApp stickers endpoint",
        );
      var c = await u.json();
      if (c == null || c.length === 0)
        throw new (o("WAWebMiscErrors").InvalidServerResponseError)(
          l,
          u.status.toString(),
          "Invalid response from WhatsApp stickers endpoint: " +
            JSON.stringify(c),
        );
      return c;
    }
    function u(e, t) {
      var n,
        r = {
          id: e["sticker-pack-id"],
          name: e.name,
          publisher: e.publisher,
          description: e.description,
          fileSize: Number(e["file-size"]),
          imageDataHash: e["image-data-hash"],
          animated: e.animated === 1,
          isLottie: e.lottie === 1,
          premium: (n = e.premium) != null ? n : 0,
          previewImageIds: e["preview-image-ids"],
          trayImageId: e["tray-image-id"],
          trayImagePreview: e["tray-image-preview"],
          index: t != null ? t : 0,
        };
      return r;
    }
    async function c(e) {
      var t,
        n = r("WAWebL10N").getNormalizedLocale(),
        a =
          o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
            (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
              ? void 0
              : t.user,
          ) || "default",
        i = babelHelpers.extends(
          {},
          o("WAWebStickerUtils").getPremiumParams(
            o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd
              .length,
          ),
          { cat: "sticker_store_data", id: "all", lg: n, country: a },
        ),
        l = await s(i, { signal: e.signal });
      return l.map(function (e, t) {
        return u(e, t);
      });
    }
    async function d(e) {
      var t = r("WAWebL10N").getNormalizedLocale(),
        n = babelHelpers.extends(
          {},
          o("WAWebStickerUtils").getPremiumParams(
            o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd
              .length,
          ),
          { cat: "sticker_pack_data", id: e.id, lg: t },
        ),
        a = await s(n, { signal: e.signal }),
        i = a[0];
      return u(i);
    }
    ((l.fetchFirstPartyStickerPacks = c), (l.fetchFirstPartyStickerPack = d));
  },
  98,
);
