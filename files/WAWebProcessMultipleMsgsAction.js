__d(
  "WAWebProcessMultipleMsgsAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddAndReorderMsgsActionsUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTypes",
    "WAWebChatCollection",
    "WAWebChatGetExistingBridge",
    "WAWebChatModel",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebGetMsgUpdatesActionsUtils",
    "WAWebGhostEphemeralChatSkip",
    "WAWebLidStatusMigrationUtils",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaGatingUtils",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaTypes",
    "WAWebMessageAssociationUIUtils",
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
    var e, s, u, c, d, m, p, _;
    function f(e, t, n, r, o) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, m) {
            var p,
              f,
              g = yield r("WAWebGetMsgUpdatesActionsUtils")(t, a, i, m),
              y = g.filteredRecs,
              b = g.reorderRecs,
              v = g.updates,
              S = yield (_ || (_ = n("Promise"))).all(v),
              R = S.filter(function (e) {
                return (e == null ? void 0 : e.associationType) != null;
              });
            if (
              (o(
                "WAWebMessageAssociationUIUtils",
              ).makeParentMessagesVisibleInChat(R),
              y.length === 0 && b.length === 0)
            ) {
              if (t && i.pendingMsgsDone === !0) {
                var L,
                  E =
                    (L = o("WAWebChatCollection").ChatCollection.get(t)) != null
                      ? L
                      : r("WAWebNewsletterCollection").get(t);
                E && (E.pendingMsgs = !1);
              }
              return r("compactMap")(a, function (e) {
                return o("WAWebMsgCollection").MsgCollection.get(e.id);
              });
            }
            if (!t)
              return C(y).then(function () {
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
            var k = self.performance.now(),
              I,
              T = a[0];
            if (o("WAWebMsgGetters").getIsStatus(T)) {
              var D,
                x =
                  (D = o("WAWebMsgGetters").getSender(T)) != null ? D : T.from;
              if (
                (r("WAWebWid").isStatus(t) &&
                  (x = T.id.fromMe
                    ? o("WAWebLidStatusMigrationUtils").matWidConvert(
                        o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                      )
                    : T.author),
                x == null)
              ) {
                var $, P, N;
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
                  ($ = o("WAWebMsgGetters").getSender(T)) == null
                    ? void 0
                    : $.toLogString(),
                  (P = T.from) == null ? void 0 : P.toLogString(),
                  T.id.fromMe,
                  (N = T.author) == null ? void 0 : N.toLogString(),
                );
              }
              I = o("WAWebStatusCollection").StatusCollection.find(x);
            } else {
              if (yield h(t, a))
                return (
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "_processMultipleMessages: skipping ghost chat creation for ephemeral_setting-only message ",
                        "",
                      ])),
                    t.toLogString(),
                  ),
                  r("compactMap")(a, function (e) {
                    return o("WAWebMsgCollection").MsgCollection.get(e.id);
                  })
                );
              I = yield o("WAWebFindChatAction").findExistingChat(t, l);
            }
            var M = yield I,
              w = self.performance.now(),
              A = yield C(y),
              F = self.performance.now(),
              O = i.add === "after" || i.add === "last",
              B = !i.isHistory,
              W,
              q,
              U = !1,
              V = M.id.isBot(),
              H =
                ((p = M.contact.businessProfile) == null
                  ? void 0
                  : p.isBizBot3p) === !0;
            if ((V || H) && i.isHistory === !1) {
              var G = M.msgs.last();
              (G == null ? void 0 : G.subtype) ===
                o("WAWebBotGenTypingIndicatorMsg")
                  .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
                (G == null || G.delete({ skipUpdatingSortTime: !0 }));
            }
            (A.forEach(function (e) {
              e.subtype === "biz_bot_1p_disclosure"
                ? M.set({
                    bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P,
                  })
                : e.subtype === "biz_bot_3p_disclosure" &&
                  M.set({
                    bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P,
                  });
            }),
              i.add === "unread"
                ? ((W = m), M.msgChunks.push(W), (q = i.firstUnreadKey))
                : i.add === "last" && i.resume === !0
                  ? ((W = m), (U = !0))
                  : (W = typeof m == "function" ? m() : m));
            var z = typeof W == "function" ? W() : W,
              j = M;
            if (
              ((z == null ? void 0 : z.threadId) != null &&
                M instanceof o("WAWebChatModel").Chat &&
                (j = o("WAWebThreadModelResolver").resolveThreadOrChat(
                  M,
                  z.threadId,
                )),
              r("WAWebAddAndReorderMsgsActionsUtils")({
                anchorMsgKey: i.anchorMsgKey,
                chatMsgsCollection: z != null ? z : M.msgs,
                firstUnreadKey: q,
                insertAfter: O,
                msgHistory: a,
                newMsgs: A,
                reorderMsgs: b,
                resetMostRecentMsgs: U,
                threadOrChat: j,
              }),
              F - k >= 500 &&
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[processMM]: ",
                      " msgs findChat=",
                      "ms msgPrepWork=",
                      "ms",
                    ])),
                  a.length,
                  Math.round(w - k),
                  Math.round(F - w),
                ),
              M instanceof o("WAWebChatModel").Chat &&
                (z == null || z.threadId == null) &&
                o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(
                  M,
                  A,
                ),
              i.pendingMsgsDone === !0 && (M.pendingMsgs = !1),
              B &&
                r("WAWebWid").isBroadcast(t) &&
                !r("WAWebWid").isStatus(t) &&
                A.forEach(function (e) {
                  e &&
                    e.recvFresh &&
                    !o("WAWebMsgGetters").getIsNotification(e) &&
                    o("WAWebMsgModelUtils").broadcastFanout(e);
                }),
              !((f = i.isHistory) != null && f))
            ) {
              var K = r("compactMap")(A, function (e) {
                var t,
                  n,
                  r,
                  a =
                    o("WAWebMsgGetters").getIsSentByMe(e) &&
                    e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
                if (a && e.isAvatar !== !0) {
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processed ",
                    " recent sticker messages",
                  ])),
                K.length,
              ),
                K.forEach(function (e) {
                  return o(
                    "WAWebRecentStickerCollectionMd",
                  ).RecentStickerCollectionMd.addNewSticker(
                    e.sticker,
                    e.msgId,
                    e.timestamp,
                  );
                }));
            }
            var Q = 0,
              X = r("compactMap")(A, function (e) {
                var t =
                    e.isNewMsg &&
                    o("WAWebMsgGetters").getIsSentByMe(e) &&
                    e.type === o("WAWebMsgType").MSG_TYPE.STICKER,
                  n = e.mediaData;
                if (t) {
                  var r = e.mediaKey;
                  if (r == null) {
                    Q++;
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
            (Q > 0 &&
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[sticker] Unexpected null media key",
                    ])),
                )
                .sendLogs("sticker-unexpected-null-media-key"),
              o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue(
                X,
              ));
            var Y = A.filter(function (e) {
              return !o("WAWebMsgGetters").getIsStatus(e);
            });
            if (
              (r("compactMap")(Y, function (e) {
                return o("WAWebFrontendMsgGetters").getAsAutoDownloadableMedia(
                  e,
                );
              }).forEach(function (e) {
                o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                  e,
                  o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA,
                );
              }),
              !o("WAWebUserPrefsGeneral").getAutoDownloadPhotos())
            ) {
              var J = A.filter(function (e) {
                return (
                  !o("WAWebMsgGetters").getIsSentByMe(e) &&
                  !o("WAWebMsgGetters").getIsStatus(e) &&
                  !o("WAWebMsgGetters").getIsNewsletterMsg(e)
                );
              });
              r("compactMap")(J, function (e) {
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
                    o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                      e,
                      o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                        .PJPEG_THUMBNAIL,
                    );
                }
              });
            }
            if (
              (r("compactMap")(A, function (e) {
                return o("WAWebFrontendMsgGetters").getAsDoc(e);
              }).forEach(function (e) {
                o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                  e,
                  o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                    .MMS_THUMBNAIL,
                );
              }),
              window.setTimeout(function () {
                if (
                  o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled()
                ) {
                  var e = r("compactMap")(A, function (e) {
                      return o("WAWebFrontendMsgGetters").getAsDoc(e);
                    }),
                    t = e.some(function (e) {
                      return o(
                        "WAWebTPPdfViewerGatingUtils",
                      ).isWebTPPdfViewerEnabledForMimeType(e.mimetype);
                    });
                  t &&
                    (n("cr:11804") == null ||
                      n("cr:11804").maybePreloadWebTPIframeForPDFs(void 0, {
                        source: "appStart",
                        force: !0,
                      }));
                }
              }, 0),
              r("compactMap")(A, function (e) {
                return o("WAWebFrontendMsgGetters").getAsUrl(e);
              }).forEach(function (e) {
                o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(e.t) ||
                  o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                    e,
                    o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                      .MMS_THUMBNAIL,
                    null,
                  );
              }),
              o("WAWebABProps").getABPropConfigValue(
                "download_status_thumb_mms_enabled",
              ))
            ) {
              var Z = o("WAWebUserPrefsGeneral").getLastStatusUsage(),
                ee = 1e3 * 60 * 60 * 24;
              if (Z == null || Date.now() - Z < 14 * ee) {
                var te = A.filter(function (e) {
                  return o("WAWebMsgGetters").getIsStatus(e);
                });
                r("compactMap")(te, function (e) {
                  return (
                    o("WAWebFrontendMsgGetters").getAsImage(e) ||
                    o("WAWebFrontendMsgGetters").getAsVideo(e)
                  );
                }).forEach(function (e) {
                  o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                    e,
                    o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                      .MMS_THUMBNAIL,
                  );
                });
              }
            }
            return r("compactMap")(a, function (e) {
              return o("WAWebMsgCollection").MsgCollection.get(e.id);
            });
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !e.isUser() ||
            t.length === 0 ||
            !t.every(function (e) {
              return o(
                "WAWebGhostEphemeralChatSkip",
              ).isSkippableIncomingEphemeralSettingMsg(e);
            })
          )
            return !1;
          var n = yield o("WAWebChatGetExistingBridge").getExisting(e);
          return n == null;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
            yield (_ || (_ = n("Promise"))).all(
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
        b.apply(this, arguments)
      );
    }
    l._processMultipleMessages = f;
  },
  98,
);
