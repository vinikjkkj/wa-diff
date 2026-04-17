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
    "WAWebBotUtils",
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
    var e, s, u, c, d, m, p;
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, d) {
            var m,
              _,
              f = yield r("WAWebGetMsgUpdatesActionsUtils")(t, a, i, d),
              h = f.filteredRecs,
              y = f.reorderRecs,
              C = f.updates,
              b = yield (p || (p = n("Promise"))).all(C),
              v = b.filter(function (e) {
                return (e == null ? void 0 : e.associationType) != null;
              });
            if (
              (o(
                "WAWebMsgCollection",
              ).MsgCollection.makeParentMessagesVisibleInChat(v),
              h.length === 0 && y.length === 0)
            ) {
              if (t && i.pendingMsgsDone === !0) {
                var S,
                  R =
                    (S = o("WAWebChatCollection").ChatCollection.get(t)) != null
                      ? S
                      : r("WAWebNewsletterCollection").get(t);
                R && (R.pendingMsgs = !1);
              }
              return r("compactMap")(a, function (e) {
                return o("WAWebMsgCollection").MsgCollection.get(e.id);
              });
            }
            if (!t)
              return g(h).then(function () {
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
            var L = self.performance.now(),
              E,
              k = a[0];
            if (o("WAWebMsgGetters").getIsStatus(k)) {
              var I,
                T =
                  (I = o("WAWebMsgGetters").getSender(k)) != null ? I : k.from;
              if (
                (r("WAWebWid").isStatus(t) &&
                  (T = k.id.fromMe
                    ? o("WAWebLidStatusMigrationUtils").matWidConvert(
                        o("WAWebUserPrefsMeUser").getMeUser(),
                      )
                    : k.author),
                T == null)
              ) {
                var D, x, $;
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
                  (D = o("WAWebMsgGetters").getSender(k)) == null
                    ? void 0
                    : D.toLogString(),
                  (x = k.from) == null ? void 0 : x.toLogString(),
                  k.id.fromMe,
                  ($ = k.author) == null ? void 0 : $.toLogString(),
                );
              }
              E = o("WAWebStatusCollection").StatusCollection.find(T);
            } else E = yield o("WAWebFindChatAction").findExistingChat(t, l);
            var P = yield E,
              N = self.performance.now(),
              M = yield g(h),
              w = self.performance.now(),
              A = i.add === "after" || i.add === "last",
              F = !i.isHistory,
              O,
              B,
              W = !1,
              q = P.id.isBot(),
              U =
                ((m = P.contact.businessProfile) == null
                  ? void 0
                  : m.isBizBot3p) === !0;
            if ((q || U) && i.isHistory === !1) {
              var V = P.msgs.last();
              (V == null ? void 0 : V.subtype) ===
                o("WAWebBotGenTypingIndicatorMsg")
                  .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
                (V == null || V.delete({ skipUpdatingSortTime: !0 }));
            }
            (M.forEach(function (e) {
              e.subtype === "biz_bot_1p_disclosure"
                ? P.set({
                    bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P,
                  })
                : e.subtype === "biz_bot_3p_disclosure" &&
                  P.set({
                    bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P,
                  });
            }),
              i.add === "unread"
                ? ((O = d), P.msgChunks.push(O), (B = i.firstUnreadKey))
                : i.add === "last" && i.resume === !0
                  ? ((O = d), (W = !0))
                  : (O = typeof d == "function" ? d() : d));
            var H = typeof O == "function" ? O() : O,
              G = P;
            if (
              ((H == null ? void 0 : H.threadId) != null &&
                P instanceof o("WAWebChatModel").Chat &&
                (G = o("WAWebThreadModelResolver").resolveThreadOrChat(
                  P,
                  H.threadId,
                )),
              r("WAWebAddAndReorderMsgsActionsUtils")(
                a,
                M,
                y,
                G,
                A,
                H != null ? H : P.msgs,
                B,
                W,
                i.anchorMsgKey,
              ),
              w - L >= 500 &&
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[processMM]: ",
                      " msgs findChat=",
                      "ms msgPrepWork=",
                      "ms",
                    ])),
                  a.length,
                  Math.round(N - L),
                  Math.round(w - N),
                ),
              P instanceof o("WAWebChatModel").Chat &&
                (H == null || H.threadId == null) &&
                o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(
                  P,
                  M,
                ),
              i.pendingMsgsDone === !0 && (P.pendingMsgs = !1),
              F &&
                r("WAWebWid").isBroadcast(t) &&
                !r("WAWebWid").isStatus(t) &&
                M.forEach(function (e) {
                  e &&
                    e.recvFresh &&
                    !o("WAWebMsgGetters").getIsNotification(e) &&
                    o("WAWebMsgModelUtils").broadcastFanout(e);
                }),
              !((_ = i.isHistory) != null && _))
            ) {
              var z = r("compactMap")(M, function (e) {
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
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "processed ",
                    " recent sticker messages",
                  ])),
                z.length,
              ),
                z.forEach(function (e) {
                  return o(
                    "WAWebRecentStickerCollectionMd",
                  ).RecentStickerCollectionMd.addNewSticker(
                    e.sticker,
                    e.msgId,
                    e.timestamp,
                  );
                }));
            }
            var j = 0,
              K = r("compactMap")(M, function (e) {
                var t =
                    e.isNewMsg &&
                    o("WAWebMsgGetters").getIsSentByMe(e) &&
                    e.type === o("WAWebMsgType").MSG_TYPE.STICKER,
                  n = e.mediaData;
                if (t) {
                  var r = e.mediaKey;
                  if (r == null) {
                    j++;
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
              (j > 0 &&
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[sticker] Unexpected null media key",
                      ])),
                  )
                  .sendLogs("sticker-unexpected-null-media-key"),
              o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue(
                K,
              ),
              o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled())
            ) {
              var Q = M.filter(function (e) {
                return !o("WAWebMsgGetters").getIsStatus(e);
              });
              r("compactMap")(Q, function (e) {
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
              var X = M.filter(function (e) {
                return (
                  !o("WAWebMsgGetters").getIsSentByMe(e) &&
                  !o("WAWebMsgGetters").getIsStatus(e) &&
                  !o("WAWebMsgGetters").getIsNewsletterMsg(e)
                );
              });
              r("compactMap")(X, function (e) {
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
            var Y = o("WAWebBotUtils").isBotChannelFBID(P.id),
              J = P instanceof o("WAWebChatModel").Chat ? P : null;
            if (
              ((o("WAWebABProps").getABPropConfigValue(
                "download_document_thumb_mms_enabled",
              ) ||
                Y) &&
                r("compactMap")(M, function (e) {
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
                        chat: J,
                        msg: e,
                        isPreload: !0,
                      });
                }),
              o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled())
            ) {
              var Z = r("compactMap")(M, function (e) {
                  return o("WAWebFrontendMsgGetters").getAsDoc(e);
                }),
                ee = Z.some(function (e) {
                  return o(
                    "WAWebTPPdfViewerGatingUtils",
                  ).isWebTPPdfViewerEnabledForMimeType(e.mimetype);
                });
              ee &&
                (n("cr:11804") == null ||
                  n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
                    source: "appStart",
                    force: !0,
                  }));
            }
            if (
              (r("compactMap")(M, function (e) {
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
              var te = o("WAWebUserPrefsGeneral").getLastStatusUsage(),
                ne = 1e3 * 60 * 60 * 24;
              if (te == null || Date.now() - te < 14 * ne) {
                var re = M.filter(function (e) {
                  return o("WAWebMsgGetters").getIsStatus(e);
                });
                r("compactMap")(re, function (e) {
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
            yield (p || (p = n("Promise"))).all(
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
        h.apply(this, arguments)
      );
    }
    l._processMultipleMessages = _;
  },
  98,
);
