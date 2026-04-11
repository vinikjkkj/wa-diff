__d(
  "WAWebStickersFavoriteSyncAction",
  [
    "Promise",
    "WABase64",
    "WABaseGlobals",
    "WAJids",
    "WALogger",
    "WASyncdConst",
    "WAWebFavoriteStickerCollection",
    "WAWebMiscGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebStickerModel",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.FavoriteSticker;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = 0,
                  i = 0,
                  l = 0,
                  m = 0,
                  p = yield (d || (d = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation !== "set")
                                return (
                                  a++,
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState
                                        .Unsupported,
                                  }
                                );
                              var t = e.indexParts,
                                n = e.timestamp,
                                s = e.value,
                                u = t[1];
                              if (!u) return r.malformedActionIndex();
                              var c = s.stickerAction;
                              if (c == null)
                                return (
                                  i++,
                                  o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(r.collectionName)
                                );
                              var d = c.deviceIdHint,
                                p = c.directPath,
                                _ = c.fileEncSha256,
                                f = c.height,
                                g = c.isFavorite,
                                h = c.mediaKey,
                                y = c.mimetype,
                                C = c.width;
                              if (g == null)
                                return (
                                  i++,
                                  o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(r.collectionName)
                                );
                              if (
                                !o(
                                  "WAWebMiscGatingUtils",
                                ).isFavoriteStickersEnabled()
                              )
                                return (
                                  l++,
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: {
                                      modelId: u,
                                      modelType:
                                        o("WASyncdConst").SyncModelType
                                          .FavoriteSticker,
                                    },
                                  }
                                );
                              if (g) {
                                if (
                                  o(
                                    "WAWebFavoriteStickerCollection",
                                  ).FavoriteStickerCollection.get(u)
                                )
                                  return (
                                    m++,
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                var b = new (o(
                                  "WAWebStickerModel",
                                ).StickerModel)({
                                  id: u,
                                  directPath: p,
                                  filehash: u,
                                  encFilehash: _
                                    ? o("WABase64").encodeB64(_)
                                    : "",
                                  mediaKey:
                                    h != null ? o("WABase64").encodeB64(h) : "",
                                  mediaKeyTimestamp: n,
                                  width: C,
                                  height: f,
                                  mimetype: y,
                                });
                                yield o(
                                  "WAWebFavoriteStickerCollection",
                                ).FavoriteStickerCollection.addOrUpdateStickers(
                                  [b],
                                  n,
                                  d,
                                );
                              } else {
                                var v = o(
                                  "WAWebFavoriteStickerCollection",
                                ).FavoriteStickerCollection.get(u);
                                if (!v)
                                  return {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Success,
                                  };
                                o(
                                  "WAWebFavoriteStickerCollection",
                                ).FavoriteStickerCollection.removeAndSave(u);
                              }
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              };
                            } catch (e) {
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Failed,
                              };
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  a > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: favorite sticker sync: ",
                          " operations not supported",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: favorite sticker sync: ",
                          " malformed mutations",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] fav sticker: ",
                          " ops unsupported, orphaned",
                        ])),
                      l,
                    ),
                  m > 0 &&
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] fav sticker: skipped ",
                          " already added",
                        ])),
                      m,
                    ),
                  p
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.generateFavoriteSyncMutation = function (t, n, r) {
            var e,
              a,
              i = {
                stickerAction: {
                  fileEncSha256: o("WABase64").decodeB64(
                    (e = t.encFilehash) != null ? e : "",
                  ),
                  mediaKey: o("WABase64").decodeB64(
                    (a = t.mediaKey) != null ? a : "",
                  ),
                  mimetype: t.mimetype,
                  height: t.height,
                  width: t.width,
                  directPath: t.directPath != null ? t.directPath : void 0,
                  isFavorite: n,
                  deviceIdHint: o("WAJids").interpretAsNumber(
                    o("WAJids").extractDeviceId(
                      o("WABaseGlobals").getMyDeviceJid(),
                    ),
                  ),
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [t.filehash],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              value: i,
              timestamp: r,
              action: this.getAction(),
            });
          }),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      p = new m();
    l.default = p;
  },
  98,
);
