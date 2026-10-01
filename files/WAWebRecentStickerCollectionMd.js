__d(
  "WAWebRecentStickerCollectionMd",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebIdleTaskRunner",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaStorage",
    "WAWebMsgCollection",
    "WAWebRecentStickerModel",
    "WAWebSchemaRecentStickers",
    "WAWebStickerGetters",
    "WAWebStickerModel",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = 32,
      S = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e._hasInitializedFromCache = !1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.remove = function (n, r) {
            var e = t.prototype.remove.call(this, n, r);
            return (
              e.forEach(function (e) {
                e != null &&
                  o("WAWebStickerGetters").clearStickerGetterCacheFor(
                    e.sticker,
                  );
              }),
              e
            );
          }),
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
          (i.reset = function () {
            (this.forEach(function (e) {
              o("WAWebStickerGetters").clearStickerGetterCacheFor(e.sticker);
            }),
              t.prototype.reset.call(this));
          }),
          (i._comparator = function (t, n) {
            return t.weight !== n.weight
              ? t.weight < n.weight
                ? 1
                : -1
              : t.timestamp < n.timestamp
                ? 1
                : -1;
          }),
          (i._dbDataToModel = function (t) {
            var e;
            return new (r("WAWebRecentStickerModel"))({
              id: t.id,
              timestamp: t.timestamp,
              msgId: t.msgId,
              sticker: new (o("WAWebStickerModel").StickerModel)(t.sticker),
              weight: (e = t.weight) != null ? e : 1,
              isNewSticker: t.isNewSticker,
            });
          }),
          (i._addSaveTask = function () {
            var t = this;
            (!this._idleTaskId ||
              !o("WAWebIdleTaskRunner").IdleCallbackTasks.isInQueue(
                this._idleTaskId,
              )) &&
              (this._idleTaskId = o(
                "WAWebIdleTaskRunner",
              ).IdleCallbackTasks.enqueue(function () {
                t._saveToDb().catch(function (t) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "RecentStickerCollection attempt to save to database failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("recent-sticker-save-failed");
                });
              }));
          }),
          (i._saveToDb = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.toArray().map(function (e) {
                var t = e.sticker.toDbData();
                return {
                  id: e.id,
                  timestamp: e.timestamp,
                  msgId: e.msgId,
                  weight: e.weight,
                  sticker: {
                    id: t.id,
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
                    isAvatar: t.isAvatar,
                    type: "sticker",
                  },
                };
              });
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Recent Stickers: need to save stickers in DB with length: ",
                    "",
                  ])),
                e.length,
              );
              try {
                var t = o("WAWebSchemaRecentStickers").getRecentStickersTable(),
                  n = yield t.count();
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Recent Stickers: before save, stickers in DB with length: ",
                      "",
                    ])),
                  n,
                ),
                  yield t.clear(),
                  yield t.bulkCreateOrReplace(e),
                  (n = yield t.count()),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Recent Stickers: after save, stickers in DB with length: ",
                        "",
                      ])),
                    n,
                  ));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "RecentStickerCollection attempt to save to database failed",
                      ])),
                  )
                  .sendLogs(String(e));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.addStickerWithMediaData = function (t) {
            var e = t.encFilehash,
              n = t.id,
              r = t.mediaData,
              a = t.mediaKey,
              i = t.stickerSentTs;
            this.addNewSticker(
              new (o("WAWebStickerModel").StickerModel)(
                babelHelpers.extends({}, r, {
                  mediaKey: a,
                  encFilehash: e,
                  id: r.filehash,
                }),
              ),
              n.toString(),
              i,
            );
          }),
          (i.addNewSticker = function (t, n, r) {
            t.id || (t.id = t.filehash);
            var e = this.get(t.id) == null;
            this.addStickersAndPersistToDB(
              [
                [
                  t.toDbData(),
                  r != null ? r : o("WATimeUtils").unixTimeMs(),
                  n,
                ],
              ],
              e,
            );
          }),
          (i.addStickersAndPersistToDB = function (t, n) {
            var e = this;
            if (
              (n === void 0 && (n = !1),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Recent Stickers: length of stickers will be enqueued: ",
                    "",
                  ])),
                t.length,
              ),
              t.length !== 0)
            ) {
              var r = new Set(
                  t.map(function (e) {
                    return e[0].id;
                  }),
                ),
                a = t.reduce(function (e, t) {
                  var n = t[0],
                    o = t[1],
                    a = t[2];
                  if (r.has(n.id)) {
                    r.delete(n.id);
                    var i = [[n, o, a]];
                    return i.concat(e);
                  }
                  return e;
                }, []),
                i = [],
                l = [];
              (a.forEach(function (t) {
                var r = t[0],
                  o = t[1],
                  a = t[2],
                  s = e.get(r.id);
                if (s) (s.timestamp <= o && (s.timestamp = o), l.push(s));
                else {
                  var u = e._dbDataToModel({
                    id: r.id,
                    timestamp: o,
                    sticker: {
                      id: r.id,
                      index: r.index,
                      width: r.width,
                      height: r.height,
                      size: r.size,
                      mimetype: r.mimetype,
                      filehash: r.filehash,
                      directPath: r.directPath,
                      mediaKey: r.mediaKey,
                      mediaKeyTimestamp: r.mediaKeyTimestamp,
                      encFilehash: r.encFilehash,
                      deprecatedMms3Url: r.deprecatedMms3Url,
                      isAvatar: r.isAvatar,
                      type: "sticker",
                    },
                    msgId: a,
                    weight: r.weight != null ? Number(r.weight.toFixed(2)) : 1,
                    isNewSticker: n,
                  });
                  (i.push(u), l.push(u));
                }
              }),
                l.length > 0 &&
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Recent Stickers: adjust weight and resort stickers.",
                      ])),
                  ),
                  this.adjustWeight(l),
                  this.addAndSort(i),
                  this._hasInitializedFromCache &&
                    (o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "Recent Stickers: need to save collection to DB.",
                        ])),
                    ),
                    this._addSaveTask())));
            }
          }),
          (i.replaceAndEnqueue = function (t, n) {
            if ((n === void 0 && (n = !1), this.length > 0)) {
              var e = this.map(function (e) {
                return e.id;
              });
              this.remove(e);
            }
            if (t.length === 0) {
              this._addSaveTask();
              return;
            }
            this.addStickersAndPersistToDB(t, n);
          }),
          (i.updateDirectPath = function (t, n) {
            var e = this.get(t);
            e != null && e.sticker
              ? ((e.sticker.directPath = n),
                this.set([e], { remove: !1, add: !1, silent: !0, sort: !1 }),
                this._addSaveTask())
              : o("WALogger").ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "updateDirectPaths: stickerId not found in collection",
                    ])),
                );
          }),
          (i.updateStickerMediaData = function (t, n) {
            var e = this.get(t);
            n == null ||
              e == null ||
              (n.directPath != null && (e.sticker.directPath = n.directPath),
              n.encFilehash != null && (e.sticker.encFilehash = n.encFilehash),
              n.mediaKey && (e.sticker.mediaKey = n.mediaKey),
              n.mediaKeyTimestamp &&
                (e.sticker.mediaKeyTimestamp = n.mediaKeyTimestamp),
              this.set([e], { remove: !1, add: !1, silent: !0, sort: !1 }),
              this._addSaveTask());
          }),
          (i.updateRecentStickerWithNewSticker = function (t, n) {
            var e = this.get(t);
            e != null &&
              (o("WAWebStickerGetters").clearStickerGetterCacheFor(e.sticker),
              (e.sticker = new (o("WAWebStickerModel").StickerModel)(
                n.toDbData(),
              )),
              this.set([e], { remove: !1, add: !1, silent: !0, sort: !1 }),
              this._addSaveTask());
          }),
          (i.associateStickerWithMsg = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield o(
                    "WAWebMsgCollection",
                  ).MsgCollection.getMessagesById([t]),
                  r = n.messages,
                  a = e.mediaObject,
                  i = (a == null ? void 0 : a.associatedMsgs()) || [];
                a &&
                  (i.length === 0 ||
                    !r.some(function (e) {
                      return i.includes(e);
                    })) &&
                  o("WAWebMediaStorage").associateMediaWithMsg(
                    a,
                    r[r.length - 1],
                  );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.initializeFromCache = function (t) {
            var e = this;
            this._hasInitializedFromCache = !0;
            var n = t.map(function (t) {
                var n = e._dbDataToModel(t);
                return (
                  n.msgId != null &&
                    e
                      .associateStickerWithMsg(n.sticker, n.msgId)
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            g ||
                              (g = babelHelpers.taggedTemplateLiteralLoose([
                                "RecentStickerCollection attempt to associate sticker with message failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("recent-sticker-associate-msg-failed");
                      }),
                  n
                );
              }),
              a = this.toArray();
            if (
              (a.length > 0 &&
                n.forEach(function (e) {
                  return (e.weight = Number(
                    (e.weight * Math.pow(0.9, a.length)).toFixed(2),
                  ));
                }),
              this.addAndSort(n),
              a.length)
            ) {
              var i = new Set(
                n.map(function (e) {
                  return e.id;
                }),
              );
              a.some(function (e) {
                return !i.has(e);
              }) && this._addSaveTask();
            }
          }),
          (i.addAndSort = function (t) {
            (this.add(t),
              this.sort(),
              this.length > v &&
                this._hasInitializedFromCache &&
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "Recent Stickers: stickers length ",
                      " is over the limit.",
                    ])),
                  this.length,
                ),
                this.set(this.toArray().slice(0, v))));
          }),
          (i.removeAndSave = function (t, n) {
            n === void 0 && (n = {});
            var e = this.remove(t, n);
            return (
              e.length && this._addSaveTask(),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "Recent Stickers: stickers length ",
                    " after remove.",
                  ])),
                this.length,
              ),
              e
            );
          }),
          (i.removeAllRecentAvatarStickers = function () {
            var e = this.filter(function (e) {
              return e.sticker.isAvatar === !0;
            });
            return e.length === 0
              ? (o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "Recent Stickers: no avatar stickers found, skip removing.",
                    ])),
                ),
                [])
              : (o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "Recent Stickers: removing all ",
                      " avatar stickers.",
                    ])),
                  e.length,
                ),
                this.removeAndSave(e));
          }),
          (i.adjustWeight = function (t) {
            var e = new Set(
              t.map(function (e) {
                return e.id;
              }),
            );
            (this.filter(function (t) {
              return !e.has(t.id);
            }).forEach(function (e) {
              return (e.weight = Number((e.weight * 0.9).toFixed(2)));
            }),
              t.forEach(function (e) {
                e.isNewSticker === !0
                  ? (e.isNewSticker = void 0)
                  : (e.weight = Number((e.weight + 1).toFixed(2)));
              }));
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    S.model = r("WAWebRecentStickerModel");
    var R = new S();
    l.RecentStickerCollectionMd = R;
  },
  98,
);
