__d(
  "WAWebProcessMultipleMsgsAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddAndReorderMsgsActionsUtils",
    "WAWebAvatarGatingUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTypes",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebGetMsgUpdatesActionsUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMedia",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaGatingUtils",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaTypes",
    "WAWebMiscGatingUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebRecentStickerCollection",
    "WAWebRecentStickerCollectionMd",
    "WAWebStatusCollection",
    "WAWebStickerModel",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebThreadModelResolver",
    "WAWebThreadWriteThroughAction",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "cr:11804",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, c) {
            var d,
              p,
              _ = yield r("WAWebGetMsgUpdatesActionsUtils")(t, a, i, c),
              g = _.filteredRecs,
              h = _.reorderRecs,
              y = _.updates,
              C = yield (m || (m = n("Promise"))).all(y),
              b = C.filter(function (e) {
                return (e == null ? void 0 : e.associationType) != null;
              });
            if (
              (o(
                "WAWebMsgCollection",
              ).MsgCollection.makeParentMessagesVisibleInChat(b),
              g.length === 0 && h.length === 0)
            ) {
              if (t && i.pendingMsgsDone === !0) {
                var v,
                  S =
                    (v = o("WAWebChatCollection").ChatCollection.get(t)) != null
                      ? v
                      : r("WAWebNewsletterCollection").get(t);
                S && (S.pendingMsgs = !1);
              }
              return r("compactMap")(a, function (e) {
                return o("WAWebMsgCollection").MsgCollection.get(e.id);
              });
            }
            if (!t)
              return f(g).then(function () {
                return a.reduce(function (e, t) {
                  var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
                  return (
                    n != null &&
                      o("WAWebFrontendMsgGetters").getChat(n) != null &&
                      e.push(n),
                    e
                  );
                }, []);
              });
            var R,
              L = a[0];
            if (o("WAWebMsgGetters").getIsStatus(L)) {
              var E,
                k =
                  (E = o("WAWebMsgGetters").getSender(L)) != null ? E : L.from;
              if (
                (r("WAWebWid").isStatus(t) &&
                  (k = L.id.fromMe
                    ? o("WAWebLidStatusMigrationUtils").matWidConvert(
                        o("WAWebUserPrefsMeUser").getMeUser(),
                      )
                    : L.author),
                k == null)
              ) {
                var I, T, D;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "statusId null chat=",
                      " sender=",
                      " from=",
                      " fromMe=",
                      " author=",
                      "",
                    ])),
                  t.toLogString(),
                  (I = o("WAWebMsgGetters").getSender(L)) == null
                    ? void 0
                    : I.toLogString(),
                  (T = L.from) == null ? void 0 : T.toLogString(),
                  L.id.fromMe,
                  (D = L.author) == null ? void 0 : D.toLogString(),
                );
              }
              R = o("WAWebStatusCollection").StatusCollection.find(k);
            } else R = yield o("WAWebFindChatAction").findExistingChat(t, l);
            var x = yield R,
              $ = yield f(g),
              P = i.add === "after" || i.add === "last",
              N = !i.isHistory,
              M,
              w,
              A = !1,
              F = x.id.isBot(),
              O =
                ((d = x.contact.businessProfile) == null
                  ? void 0
                  : d.isBizBot3p) === !0;
            if ((F || O) && i.isHistory === !1) {
              var B = x.msgs.last();
              (B == null ? void 0 : B.subtype) ===
                o("WAWebBotGenTypingIndicatorMsg")
                  .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
                (B == null || B.delete({ skipUpdatingSortTime: !0 }));
            }
            ($.forEach(function (e) {
              e.subtype === "biz_bot_1p_disclosure"
                ? x.set({
                    bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P,
                  })
                : e.subtype === "biz_bot_3p_disclosure" &&
                  x.set({
                    bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P,
                  });
            }),
              i.add === "unread"
                ? ((M = c), x.msgChunks.push(M), (w = i.firstUnreadKey))
                : i.add === "last" && i.resume === !0
                  ? ((M = c), (A = !0))
                  : (M = typeof c == "function" ? c() : c));
            var W = typeof M == "function" ? M() : M,
              q = x;
            if (
              ((W == null ? void 0 : W.threadId) != null &&
                x instanceof o("WAWebChatModel").Chat &&
                (q = o("WAWebThreadModelResolver").resolveThreadOrChat(
                  x,
                  W.threadId,
                )),
              r("WAWebAddAndReorderMsgsActionsUtils")(
                a,
                $,
                h,
                q,
                P,
                W != null ? W : x.msgs,
                w,
                A,
                i.anchorMsgKey,
              ),
              x instanceof o("WAWebChatModel").Chat &&
                (W == null || W.threadId == null) &&
                o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(
                  x,
                  $,
                ),
              i.pendingMsgsDone === !0 && (x.pendingMsgs = !1),
              N &&
                r("WAWebWid").isBroadcast(t) &&
                !r("WAWebWid").isStatus(t) &&
                $.forEach(function (e) {
                  e &&
                    e.recvFresh &&
                    !o("WAWebMsgGetters").getIsNotification(e) &&
                    o("WAWebMsgModelUtils").broadcastFanout(e);
                }),
              !((p = i.isHistory) != null && p))
            ) {
              var U = r("compactMap")($, function (e) {
                var t,
                  n,
                  r,
                  a =
                    o("WAWebMsgGetters").getIsSentByMe(e) &&
                    e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
                if (
                  a &&
                  !(
                    e.isAvatar === !0 &&
                    !o("WAWebAvatarGatingUtils").avatarsOnWebEnabled()
                  )
                ) {
                  var i = e.mediaData,
                    l = e.mediaObject,
                    s = e.id.toString(),
                    u = l == null ? void 0 : l.entries.entries[0];
                  return {
                    sticker: new (o("WAWebStickerModel").StickerModel)({
                      id: i.filehash,
                      directPath: i.directPath,
                      filehash: i.filehash,
                      encFilehash:
                        (t = u == null ? void 0 : u.getEncfilehash()) != null
                          ? t
                          : i.encFilehash,
                      mediaKey:
                        (n = u == null ? void 0 : u.getMediaKey()) != null
                          ? n
                          : i.mediaKey,
                      mediaKeyTimestamp:
                        i.mediaKeyTimestamp != null
                          ? i.mediaKeyTimestamp
                          : o("WATimeUtils").unixTime(),
                      width: i.fullWidth,
                      height: i.fullHeight,
                      size: i.size,
                      mimetype: i.mimetype,
                      isAvatar: e.isAvatar,
                      type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
                      index: 0,
                    }),
                    timestamp: (r = e.stickerSentTs) != null ? r : 0,
                    msgId: s,
                  };
                }
              });
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processed ",
                    " recent sticker messages",
                  ])),
                U.length,
              ),
                U.forEach(function (e) {
                  return o(
                    "WAWebRecentStickerCollectionMd",
                  ).RecentStickerCollectionMd.addNewSticker(
                    e.sticker,
                    e.msgId,
                    e.timestamp,
                  );
                }));
            }
            var V = 0,
              H = r("compactMap")($, function (e) {
                var t =
                    e.isNewMsg &&
                    o("WAWebMsgGetters").getIsSentByMe(e) &&
                    e.type === o("WAWebMsgType").MSG_TYPE.STICKER,
                  n = e.mediaData;
                if (t) {
                  var r = e.mediaKey;
                  if (r == null) {
                    V++;
                    return;
                  }
                  return {
                    id: n.filehash,
                    directPath: n.directPath,
                    filehash: n.filehash,
                    encFilehash: n.encFilehash,
                    mediaKey: r,
                    mediaKeyTimestamp:
                      n.mediaKeyTimestamp != null
                        ? n.mediaKeyTimestamp
                        : o("WATimeUtils").unixTime(),
                    width: n.fullWidth,
                    height: n.fullHeight,
                    size: n.size,
                    mimetype: n.mimetype,
                    type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
                    index: 0,
                  };
                }
              });
            if (
              (V > 0 &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[sticker] Unexpected null media key",
                      ])),
                  )
                  .sendLogs("sticker-unexpected-null-media-key"),
              o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue(
                H,
              ),
              o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled())
            ) {
              var G = $.filter(function (e) {
                return !o("WAWebMsgGetters").getIsStatus(e);
              });
              r("compactMap")(G, function (e) {
                return o("WAWebFrontendMsgGetters").getAsAutoDownloadableMedia(
                  e,
                );
              }).forEach(function (e) {
                o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                  e,
                  o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA,
                );
              });
            }
            if (!o("WAWebUserPrefsGeneral").getAutoDownloadPhotos()) {
              var z = $.filter(function (e) {
                return (
                  !o("WAWebMsgGetters").getIsSentByMe(e) &&
                  !o("WAWebMsgGetters").getIsStatus(e) &&
                  !o("WAWebMsgGetters").getIsNewsletterMsg(e)
                );
              });
              r("compactMap")(z, function (e) {
                return o("WAWebFrontendMsgGetters").getAsImage(e);
              }).forEach(function (e) {
                var t, n;
                if (
                  !(
                    ((t = e.mediaObject) == null
                      ? void 0
                      : t.contentInfo.fullPreviewData) != null ||
                    !((n = e.scanLengths) != null && n.length) ||
                    !e.scansSidecar ||
                    !e.encFilehash ||
                    !e.mediaKey
                  )
                ) {
                  var r = o(
                    "WAWebMediaGatingUtils",
                  ).getHQImageThumbnailInChatScans();
                  r > 0 &&
                    (o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled()
                      ? o(
                          "WAWebMediaAutoDownloadQueue",
                        ).AutoDownloadQueue.enqueue(
                          e,
                          o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                            .PJPEG_THUMBNAIL,
                        )
                      : o(
                          "WAWebDownloadProgressiveJpegThumbnail",
                        ).downloadProgressiveJpegThumbnail({
                          msg: e,
                          scanCount: r,
                        }));
                }
              });
            }
            if (
              (o("WAWebABProps").getABPropConfigValue(
                "download_document_thumb_mms_enabled",
              ) &&
                r("compactMap")($, function (e) {
                  return o("WAWebFrontendMsgGetters").getAsDoc(e);
                }).forEach(function (e) {
                  o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled()
                    ? o(
                        "WAWebMediaAutoDownloadQueue",
                      ).AutoDownloadQueue.enqueue(
                        e,
                        o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                          .MMS_THUMBNAIL,
                      )
                    : r("WAWebMediaDownloadMmsThumbnail")({
                        chat: null,
                        msg: e,
                        isPreload: !0,
                      });
                }),
              o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled())
            ) {
              var j = r("compactMap")($, function (e) {
                  return o("WAWebFrontendMsgGetters").getAsDoc(e);
                }),
                K = j.some(function (e) {
                  return o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(e.mimetype);
                });
              K &&
                (n("cr:11804") == null ||
                  n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
                    source: "appStart",
                    force: !0,
                  }));
            }
            if (
              (r("compactMap")($, function (e) {
                return o("WAWebFrontendMsgGetters").getAsUrl(e);
              }).forEach(function (e) {
                o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(e.t) ||
                  (o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled()
                    ? o(
                        "WAWebMediaAutoDownloadQueue",
                      ).AutoDownloadQueue.enqueue(
                        e,
                        o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                          .MMS_THUMBNAIL,
                        null,
                      )
                    : r("WAWebMediaDownloadMmsThumbnail")({
                        msg: e,
                        isPreload: !0,
                        chat: null,
                      }));
              }),
              o("WAWebABProps").getABPropConfigValue(
                "download_status_thumb_mms_enabled",
              ))
            ) {
              var Q = o("WAWebUserPrefsGeneral").getLastStatusUsage(),
                X = 1e3 * 60 * 60 * 24;
              if (Q == null || Date.now() - Q < 14 * X) {
                var Y = $.filter(function (e) {
                  return o("WAWebMsgGetters").getIsStatus(e);
                });
                r("compactMap")(Y, function (e) {
                  return (
                    o("WAWebFrontendMsgGetters").getAsImage(e) ||
                    o("WAWebFrontendMsgGetters").getAsVideo(e)
                  );
                }).forEach(function (e) {
                  o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled()
                    ? o(
                        "WAWebMediaAutoDownloadQueue",
                      ).AutoDownloadQueue.enqueue(
                        e,
                        o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                          .MMS_THUMBNAIL,
                      )
                    : o("WAWebMedia").downloadStatusThumbnail({
                        msg: e,
                        isPreload: !0,
                      });
                });
              }
            }
            return r("compactMap")(a, function (e) {
              return o("WAWebMsgCollection").MsgCollection.get(e.id);
            });
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.add(e, { merge: !0 }),
            r = 0,
            a = t.reduce(function (e, t) {
              return (
                t == null && r++,
                t != null && t.subtype !== "is_hosted_group" && e.push(t),
                e
              );
            }, []);
          if (r > 0) {
            var i = e
              .filter(function (e, n) {
                return t[n] == null;
              })
              .slice(0, 3)
              .map(function (e) {
                return e.id;
              });
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Get ",
                    " empty messages with ids => ",
                    "",
                  ])),
                r,
                i,
              )
              .sendLogs("msgPrepWork-empty-message");
          }
          var l = null,
            s = null;
          return (
            yield (m || (m = n("Promise"))).all(
              a.map(function (e) {
                return e.waitForPrep().catch(function (t) {
                  ((l = t), (s = e));
                });
              }),
            ),
            l != null &&
              s != null &&
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[msgPrepWork] id=",
                      " type=",
                      " subtype=",
                      " hasMedia=",
                      "",
                    ])),
                  s.id.toString(),
                  s.type,
                  s.subtype,
                  s.mediaData != null,
                )
                .catching(l)
                .sendLogs("bad-msg-prep"),
            a
          );
        })),
        g.apply(this, arguments)
      );
    }
    l._processMultipleMessages = p;
  },
  98,
);
