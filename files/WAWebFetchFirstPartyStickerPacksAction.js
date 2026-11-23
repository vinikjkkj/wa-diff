__d(
  "WAWebFetchFirstPartyStickerPacksAction",
  [
    "WAWebL10N",
    "WAWebL10NCountryCodes",
    "WAWebPonyfillsFetch",
    "WAWebRecentStickerCollectionMd",
    "WAWebServerErrors",
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
          params: new URLSearchParams(i).toString(),
          queryType: o("WAWebWamEnumQueryType").QUERY_TYPE.STICKER_PACK_DATA,
        }),
        s.commit(),
        !u.ok)
      )
        throw new (o("WAWebServerErrors").InvalidServerResponseError)(
          l,
          u.status.toString(),
          "Invalid response from WhatsApp stickers endpoint",
        );
      var c = await u.json();
      if (c == null || c.length === 0)
        throw new (o("WAWebServerErrors").InvalidServerResponseError)(
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
          {
            cat: "suggest_sticker_packs",
            lg: n,
            country: a,
            pack_num_limit: String(e.packCount),
            num_in_pack: String(e.stickerCount),
          },
        ),
        l = await s(i, { signal: e.signal });
      return l.map(function (e, t) {
        var n;
        return {
          stickerPack: u(e, t),
          stickers: ((n = e.stickers) != null ? n : []).map(m),
        };
      });
    }
    function m(e, t) {
      return {
        mimetype: e.mimetype,
        width: e.width,
        height: e.height,
        emojis: Array.isArray(e.emojis)
          ? e.emojis.filter(function (e) {
              return typeof e == "string";
            })
          : void 0,
        index: t,
        filehash: e["file-hash"],
        directPath: e["direct-path"],
        mediaKey: e["media-key"],
        id: e["file-hash"],
        deprecatedMms3Url: e.url,
        encFilehash: e["enc-file-hash"],
        isAvatar: !1,
        mediaKeyTimestamp: 0,
        size: e["file-size"],
        type: "sticker",
        weight: void 0,
      };
    }
    async function p(e) {
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
    ((l.fetchFirstPartyStickerPacks = c),
      (l.fetchDiscoveryStickerPacks = d),
      (l.fetchFirstPartyStickerPack = p));
  },
  98,
);
