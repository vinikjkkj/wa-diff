__d(
  "WAWebFavoriteStickerCollection",
  [
    "Promise",
    "WABaseGlobals",
    "WAJids",
    "WALogger",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebFavoriteStickerModel",
    "WAWebIdleTaskRunner",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaStore",
    "WAWebSchemaFavoriteStickers",
    "WAWebStickerModel",
    "WAWebStickerUtils",
    "WAWebWebpCalculateWebpFilehashWithoutMetadata",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      function a() {
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
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.add = function (n, r) {
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
        (i._enqueueStickerAutoDownload = function (t) {
          o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
            t.sticker,
            o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA,
          );
        }),
        (i.remove = function (n, r) {
          return t.prototype.remove.call(this, n, r);
        }),
        (i.reset = function () {
          t.prototype.reset.call(this);
        }),
        (i._addSaveTask = function () {
          var e = this;
          (!this._idleTaskId ||
            !o("WAWebIdleTaskRunner").IdleCallbackTasks.isInQueue(
              this._idleTaskId,
            )) &&
            (this._idleTaskId = o(
              "WAWebIdleTaskRunner",
            ).IdleCallbackTasks.enqueue(function () {
              e._saveToDb();
            }));
        }),
        (i._saveToDb = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = this.toArray().map(function (e) {
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
                },
                stickerHashWithoutMeta: e.stickerHashWithoutMeta,
                isFavorite: e.isFavorite,
                deviceId: e.deviceId,
              };
            });
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[FavStickers] saving to DB, count=",
                  "",
                ])),
              t.length,
            );
            try {
              var n = o(
                  "WAWebSchemaFavoriteStickers",
                ).getFavoriteStickersTable(),
                a = yield n.count();
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[FavStickers] before save, DB count=",
                    "",
                  ])),
                a,
              ),
                yield n.clear(),
                yield n.bulkCreateOrReplace(t),
                (a = yield n.count()),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Favorite Stickers: after save, stickers in DB with length: ",
                      "",
                    ])),
                  a,
                ));
            } catch (e) {
              var i = r("getErrorSafe")(e);
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "FavoriteStickerCollection attempt to save to database failed",
                    ])),
                )
                .sendLogs(i.message);
            }
          });
          function a() {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (i._dbDataToModel = function (t) {
          return new (r("WAWebFavoriteStickerModel"))({
            id: t.id,
            timestamp: t.timestamp,
            stickerHashWithoutMeta: t.stickerHashWithoutMeta,
            sticker: new (o("WAWebStickerModel").StickerModel)(t.sticker),
          });
        }),
        (i._getStickerHashWithoutMeta = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield o("WAWebMediaStore").LruMediaStore.get(e);
              if (n == null) return e;
              var a = o("WAWebStickerUtils").getStickerFileType(t);
              return a === o("WAWebStickerUtils").StickerFileType.LOTTIE
                ? o(
                    "WAWebStickerUtils",
                  ).getLottieStickerFilehashFromZippedStickerBuffer(n, e)
                : r("WAWebWebpCalculateWebpFilehashWithoutMetadata")(n);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (i.addOrUpdateStickers = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, a) {
              var i = this;
              a === void 0 &&
                (a = o("WAJids").interpretAsNumber(
                  o("WAJids").extractDeviceId(
                    o("WABaseGlobals").getMyDeviceJid(),
                  ),
                ));
              var l = e.filter(function (e) {
                return !i.get(e.id);
              });
              if (
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Favorite Stickers: length of stickers will be enqueued: ",
                      "",
                    ])),
                  e.length,
                ),
                l.length !== 0)
              ) {
                var s = yield (f || (f = n("Promise"))).all(
                  l.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          return new (r("WAWebFavoriteStickerModel"))({
                            id: e.filehash,
                            sticker: e,
                            stickerHashWithoutMeta:
                              yield i._getStickerHashWithoutMeta(
                                e.filehash,
                                e.mimetype,
                              ),
                            timestamp: t,
                            isFavorite: !0,
                            deviceId: a,
                          });
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
                );
                (this.addAndSort(s),
                  this._hasInitializedFromCache &&
                    (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "Favorite Stickers: need to save collection to DB.",
                        ])),
                    ),
                    this._addSaveTask()));
              }
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (i.addAndSort = function (t) {
          (this.add(t), this.sort());
        }),
        (i.removeAndSave = function (t, n) {
          n === void 0 && (n = {});
          var e = this.remove(t, n);
          return (
            e.length &&
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Favorite Stickers: length of stickers will be removed: ",
                    "",
                  ])),
                e.length,
              ),
              this._addSaveTask()),
            e
          );
        }),
        (i.initializeFromCache = function (t) {
          var e = this;
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        (i.updateFavoriteStickerWithNewSticker = function (t, n) {
          var e = this.get(t);
          e != null &&
            ((e.sticker = new (o("WAWebStickerModel").StickerModel)(
              n.toDbData(),
            )),
            this.set([e], { remove: !1, add: !1, silent: !0, sort: !1 }),
            this._addSaveTask());
        }),
        (i.getSuggestionsFromEmoji = function (t) {
          var e;
          return (e = this._emojiToCollection.get(t)) == null
            ? void 0
            : e.map(function (e) {
                return e.sticker;
              });
        }),
        a
      );
    })(o("WAWebBaseCollection").BaseCollection);
    y.model = r("WAWebFavoriteStickerModel");
    var C = new y();
    l.FavoriteStickerCollection = C;
  },
  98,
);
