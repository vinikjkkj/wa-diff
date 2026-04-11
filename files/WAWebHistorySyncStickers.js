__d(
  "WAWebHistorySyncStickers",
  [
    "WABase64",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebHistorySyncLogUtils",
    "WAWebMediaTypes",
    "WAWebRecentStickerCollectionMd",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsTypes",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(t, n) {
      var a;
      if (t.recentStickers == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Recent Stickers: received empty recentStickers protobuf",
            ])),
        );
        return;
      }
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[Recent Stickers] processing ",
            " stickers",
          ])),
        t.recentStickers.length,
      );
      var i = 0,
        l = r("compactMap")(t.recentStickers, function (e) {
          var t,
            n = e.fileSha256;
          if (n == null) return (i++, null);
          var r = e.fileEncSha256,
            a = e.mediaKey;
          return [
            {
              id: o("WABase64").encodeB64(n),
              directPath: e.directPath,
              filehash: o("WABase64").encodeB64(n),
              encFilehash: r != null ? o("WABase64").encodeB64(r) : null,
              mediaKey: a != null ? o("WABase64").encodeB64(a) : "",
              mediaKeyTimestamp: o("WATimeUtils").unixTime(),
              width: e.width,
              height: e.height,
              mimetype: e.mimetype,
              type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
              index: 0,
              weight: e.weight,
            },
            (t = o("WALongInt").maybeNumberOrThrowIfTooLarge(
              e.lastStickerSentTs,
            )) != null
              ? t
              : 0,
            null,
          ];
        });
      i > 0 &&
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[Recent Stickers] ",
              " stickers with null fileSha256",
            ])),
          i,
        );
      var p = t.recentStickers.filter(function (e) {
        return (
          e.fileSha256 != null &&
          (e.fileEncSha256 == null || e.mediaKey == null)
        );
      });
      (p.length > 0 &&
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[Recent Stickers] ",
              " missing encSha256/mediaKey",
            ])),
          p.length,
        ),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[Recent Stickers] adding ",
              " stickers",
            ])),
          l.length,
        ),
        o(
          "WAWebRecentStickerCollectionMd",
        ).RecentStickerCollectionMd.replaceAndEnqueue(l, !0),
        o("WAWebUserPrefsAppStateSync").setNonCriticalDataSyncStatus(
          ((a = {}),
          (a[
            o(
              "WAWebUserPrefsTypes",
            ).NonCriticalDataSyncStatusType.RECENT_STICKER_INITIALIZED
          ] = o(
            "WAWebUserPrefsTypes",
          ).RecentStickerInitializedStatusType.SUCCESS),
          a),
        ),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] Recent Stickers completed, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(n),
        ));
    }
    l.processRecentStickers = p;
  },
  98,
);
