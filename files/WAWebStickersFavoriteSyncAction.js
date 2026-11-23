__d(
  "WAWebStickersFavoriteSyncAction",
  [
    "WABase64",
    "WALogger",
    "WAWebFavoriteStickerCollection",
    "WAWebMiscGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebStickerModel",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.FavoriteSticker;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = 0,
              l = 0,
              d = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation !== "set")
                      return (
                        r++,
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    var n = e.indexParts,
                      s = e.timestamp,
                      u = e.value,
                      c = n[1];
                    if (!c) return t.malformedActionIndex();
                    var d = u.stickerAction;
                    if (d == null)
                      return (
                        a++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          t.collectionName,
                        )
                      );
                    var m = d.deviceIdHint,
                      p = d.directPath,
                      _ = d.fileEncSha256,
                      f = d.height,
                      g = d.isFavorite,
                      h = d.mediaKey,
                      y = d.mimetype,
                      C = d.width;
                    if (g == null)
                      return (
                        a++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          t.collectionName,
                        )
                      );
                    if (!o("WAWebMiscGatingUtils").isFavoriteStickersEnabled())
                      return (
                        i++,
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: c,
                            modelType:
                              o("WAWebSyncdConst").SyncModelType
                                .FavoriteSticker,
                          },
                        }
                      );
                    if (g) {
                      if (
                        o(
                          "WAWebFavoriteStickerCollection",
                        ).FavoriteStickerCollection.get(c)
                      )
                        return (
                          l++,
                          {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Success,
                          }
                        );
                      var b = new (o("WAWebStickerModel").StickerModel)({
                        id: c,
                        directPath: p,
                        filehash: c,
                        encFilehash: _ ? o("WABase64").encodeB64(_) : "",
                        mediaKey: h != null ? o("WABase64").encodeB64(h) : "",
                        mediaKeyTimestamp: s,
                        width: C,
                        height: f,
                        mimetype: y,
                      });
                      await o(
                        "WAWebFavoriteStickerCollection",
                      ).FavoriteStickerCollection.addOrUpdateStickers(
                        [b],
                        s,
                        m,
                      );
                    } else {
                      var v = o(
                        "WAWebFavoriteStickerCollection",
                      ).FavoriteStickerCollection.get(c);
                      if (!v)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        };
                      o(
                        "WAWebFavoriteStickerCollection",
                      ).FavoriteStickerCollection.removeAndSave(c);
                    }
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
                    };
                  } catch (e) {
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              r > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: favorite sticker sync: ",
                      " operations not supported",
                    ])),
                  r,
                ),
              a > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: favorite sticker sync: ",
                      " malformed mutations",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] fav sticker: ",
                      " ops unsupported, orphaned",
                    ])),
                  i,
                ),
              l > 0 &&
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] fav sticker: skipped ",
                      " already added",
                    ])),
                  l,
                ),
              d
            );
          }),
          (a.generateFavoriteSyncMutation = function (t, n, a) {
            var e,
              i,
              l = {
                stickerAction: {
                  fileEncSha256: o("WABase64").decodeB64(
                    (e = t.encFilehash) != null ? e : "",
                  ),
                  mediaKey: o("WABase64").decodeB64(
                    (i = t.mediaKey) != null ? i : "",
                  ),
                  mimetype: t.mimetype,
                  height: t.height,
                  width: t.width,
                  directPath: t.directPath != null ? t.directPath : void 0,
                  isFavorite: n,
                  deviceIdHint: r("nullthrows")(
                    o("WAWebUserUtils").getMaybeMeDeviceId(),
                    "self device ID",
                  ),
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [t.filehash],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              value: l,
              timestamp: a,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
