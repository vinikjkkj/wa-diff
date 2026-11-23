__d(
  "WAWebFavoriteStickerCollection",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebFavoriteStickerModel",
    "WAWebIdleTaskRunner",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaStore",
    "WAWebSchemaFavoriteStickers",
    "WAWebStickerGetters",
    "WAWebStickerModel",
    "WAWebStickerUtils",
    "WAWebUserUtils",
    "WAWebWebpCalculateWebpFilehashWithoutMetadata",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e, t) {
      return e.timestamp < t.timestamp ? 1 : -1;
    }
    var h = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t._comparator = function (e, t) {
            return g(e, t);
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    h.model = r("WAWebFavoriteStickerModel");
    var y = (function (t) {
      function n() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e._comparator = function (e, t) {
            return g(e, t);
          }),
          (e._emojiToCollection = new Map()),
          (e._hasInitializedFromCache = !1),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.add = function (n, r) {
          var e = t.prototype.add.call(this, n, r),
            a = o("WAWebABProps").getABPropConfigValue(
              "web_autodownload_stickers",
            );
          if (a)
            for (var i of e) {
              if (!i) break;
              this._enqueueStickerAutoDownload(i);
            }
          return e;
        }),
        (a._enqueueStickerAutoDownload = function (t) {
          o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
            t.sticker,
            o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA,
          );
        }),
        (a.remove = function (n, r) {
          var e = t.prototype.remove.call(this, n, r);
          return (
            e.forEach(function (e) {
              e != null &&
                o("WAWebStickerGetters").clearStickerGetterCacheFor(e.sticker);
            }),
            e
          );
        }),
        (a.reset = function () {
          (this.forEach(function (e) {
            o("WAWebStickerGetters").clearStickerGetterCacheFor(e.sticker);
          }),
            t.prototype.reset.call(this));
        }),
        (a._addSaveTask = function () {
          var t = this;
          (!this._idleTaskId ||
            !o("WAWebIdleTaskRunner").IdleCallbackTasks.isInQueue(
              this._idleTaskId,
            )) &&
            (this._idleTaskId = o(
              "WAWebIdleTaskRunner",
            ).IdleCallbackTasks.enqueue(function () {
              t._saveToDb().catch(function (t) {
                var n = r("getErrorSafe")(t);
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "FavoriteStickerCollection attempt to save to database failed",
                      ])),
                  )
                  .catching(n)
                  .sendLogs("favorite-sticker-save-to-db-failed");
              });
            }));
        }),
        (a._saveToDb = async function () {
          var e = this.toArray().map(function (e) {
            var t = e.sticker.toDbData();
            return {
              id: e.id,
              timestamp: e.timestamp,
              sticker: {
                index: t.index,
                width: t.width,
                height: t.height,
                size: t.size,
                mimetype: t.mimetype,
                filehash: t.filehash,
                directPath: t.directPath,
                mediaKey: t.mediaKey,
                mediaKeyTimestamp: t.mediaKeyTimestamp,
                encFilehash: t.encFilehash,
                deprecatedMms3Url: t.deprecatedMms3Url,
                type: "sticker",
                stickerAudio: t.stickerAudio,
              },
              stickerHashWithoutMeta: e.stickerHashWithoutMeta,
              isFavorite: e.isFavorite,
              deviceId: e.deviceId,
            };
          });
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[FavStickers] saving to DB, count=",
                "",
              ])),
            e.length,
          );
          try {
            var t = o("WAWebSchemaFavoriteStickers").getFavoriteStickersTable(),
              n = await t.count();
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[FavStickers] before save, DB count=",
                  "",
                ])),
              n,
            ),
              await t.clear(),
              await t.bulkCreateOrReplace(e),
              (n = await t.count()),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Favorite Stickers: after save, stickers in DB with length: ",
                    "",
                  ])),
                n,
              ));
          } catch (e) {
            var a = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "FavoriteStickerCollection attempt to save to database failed",
                  ])),
              )
              .sendLogs(a.message);
          }
        }),
        (a._dbDataToModel = function (t) {
          return new (r("WAWebFavoriteStickerModel"))({
            id: t.id,
            timestamp: t.timestamp,
            stickerHashWithoutMeta: t.stickerHashWithoutMeta,
            sticker: new (o("WAWebStickerModel").StickerModel)(
              babelHelpers.extends({}, t.sticker, { id: t.id }),
            ),
          });
        }),
        (a._getStickerHashWithoutMeta = async function (t, n) {
          var e = await o("WAWebMediaStore").LruMediaStore.get(t);
          if (e == null) return t;
          var a = o("WAWebStickerUtils").getStickerFileType(n);
          return a === o("WAWebStickerUtils").StickerFileType.LOTTIE
            ? o(
                "WAWebStickerUtils",
              ).getLottieStickerFilehashFromZippedStickerBuffer(e, t)
            : r("WAWebWebpCalculateWebpFilehashWithoutMetadata")(e);
        }),
        (a.addOrUpdateStickers = async function (t, n, a) {
          var e = this;
          a === void 0 &&
            (a = r("nullthrows")(
              o("WAWebUserUtils").getMaybeMeDeviceId(),
              "self device ID",
            ));
          var i = t.filter(function (t) {
            return !e.get(t.id);
          });
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Favorite Stickers: length of stickers will be enqueued: ",
                  "",
                ])),
              t.length,
            ),
            i.length !== 0)
          ) {
            var l = await Promise.all(
              i.map(async function (t) {
                return new (r("WAWebFavoriteStickerModel"))({
                  id: t.filehash,
                  sticker: t,
                  stickerHashWithoutMeta: await e._getStickerHashWithoutMeta(
                    t.filehash,
                    t.mimetype,
                  ),
                  timestamp: n,
                  isFavorite: !0,
                  deviceId: a,
                });
              }),
            );
            (this.addAndSort(l),
              this._hasInitializedFromCache &&
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Favorite Stickers: need to save collection to DB.",
                    ])),
                ),
                this._addSaveTask()));
          }
        }),
        (a.addAndSort = function (t) {
          (this.add(t), this.sort());
        }),
        (a.removeAndSave = function (t, n) {
          n === void 0 && (n = {});
          var e = this.remove(t, n);
          return (
            e.length &&
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Favorite Stickers: length of stickers will be removed: ",
                    "",
                  ])),
                e.length,
              ),
              this._addSaveTask()),
            e
          );
        }),
        (a.initializeFromCache = function (t) {
          var e = this;
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[FavStickers] init from DB, count=",
                "",
              ])),
            t.length,
          );
          var n = t.map(function (t) {
            return e._dbDataToModel(t);
          });
          this.addAndSort(n);
          var r = this.toArray();
          if (r.length > 0) {
            var a = new Set(
              n.map(function (e) {
                return e.id;
              }),
            );
            r.some(function (e) {
              return !a.has(e.id);
            }) && this._addSaveTask();
          }
          this._hasInitializedFromCache = !0;
        }),
        (a.updateFavoriteStickerWithNewSticker = function (t, n) {
          var e,
            r = this.get(t);
          if (r != null) {
            var a = r.sticker.stickerAudio,
              i = n.toDbData();
            (o("WAWebStickerGetters").clearStickerGetterCacheFor(r.sticker),
              (r.sticker = new (o("WAWebStickerModel").StickerModel)(
                babelHelpers.extends({}, i, {
                  stickerAudio: (e = i.stickerAudio) != null ? e : a,
                }),
              )),
              this.set([r], { remove: !1, add: !1, silent: !0, sort: !1 }),
              this._addSaveTask());
          }
        }),
        n
      );
    })(o("WAWebBaseCollection").BaseCollection);
    y.model = r("WAWebFavoriteStickerModel");
    var C = new y();
    l.FavoriteStickerCollection = C;
  },
  98,
);
