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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l = t.chatId,
            m = t.chatMsgsCollection,
            p = t.meta,
            f = t.msgObjs,
            g = t.processMessageOrigin,
            y = yield r("WAWebGetMsgUpdatesActionsUtils")(l, f, p, m),
            b = y.filteredRecs,
            v = y.reorderRecs,
            S = y.updates,
            R = yield (_ || (_ = n("Promise"))).all(S),
            L = R.filter(function (e) {
              return (e == null ? void 0 : e.associationType) != null;
            });
          if (
            (o(
              "WAWebMessageAssociationUIUtils",
            ).makeParentMessagesVisibleInChat(L),
            b.length === 0 && v.length === 0)
          ) {
            if (l && p.pendingMsgsDone === !0) {
              var E,
                k =
                  (E = o("WAWebChatCollection").ChatCollection.get(l)) != null
                    ? E
                    : r("WAWebNewsletterCollection").get(l);
              k && (k.pendingMsgs = !1);
            }
            return r("compactMap")(f, function (e) {
              return o("WAWebMsgCollection").MsgCollection.get(e.id);
            });
          }
          if (!l)
            return C(b).then(function () {
              return f.reduce(function (e, t) {
                var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
                return (
                  n != null &&
                    o("WAWebFrontendMsgGetters").getChat(n) != null &&
                    e.push(n),
                  e
                );
              }, []);
            });
          var I = self.performance.now(),
            T,
            D = f[0];
          if (o("WAWebMsgGetters").getIsStatus(D)) {
            var x,
              $ = (x = o("WAWebMsgGetters").getSender(D)) != null ? x : D.from;
            if (
              (r("WAWebWid").isStatus(l) &&
                ($ = D.id.fromMe
                  ? o("WAWebLidStatusMigrationUtils").matWidConvert(
                      o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                    )
                  : D.author),
              $ == null)
            ) {
              var P, N, M;
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
                l.toLogString(),
                (P = o("WAWebMsgGetters").getSender(D)) == null
                  ? void 0
                  : P.toLogString(),
                (N = D.from) == null ? void 0 : N.toLogString(),
                D.id.fromMe,
                (M = D.author) == null ? void 0 : M.toLogString(),
              );
            }
            T = o("WAWebStatusCollection").StatusCollection.find($);
          } else {
            if (yield h(l, f))
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "_processMultipleMessages: skipping ghost chat creation for ephemeral_setting-only message ",
                      "",
                    ])),
                  l.toLogString(),
                ),
                r("compactMap")(f, function (e) {
                  return o("WAWebMsgCollection").MsgCollection.get(e.id);
                })
              );
            T = yield o("WAWebFindChatAction").findExistingChat(l, g);
          }
          var w = yield T,
            A = self.performance.now(),
            F = yield C(b),
            O = self.performance.now(),
            B = p.add === "after" || p.add === "last",
            W = !p.isHistory,
            q,
            U,
            V = !1,
            H = w.id.isBot(),
            G =
              ((a = w.contact.businessProfile) == null
                ? void 0
                : a.isBizBot3p) === !0;
          if ((H || G) && p.isHistory === !1) {
            var z = w.msgs.last();
            (z == null ? void 0 : z.subtype) ===
              o("WAWebBotGenTypingIndicatorMsg")
                .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
              (z == null || z.delete({ skipUpdatingSortTime: !0 }));
          }
          (F.forEach(function (e) {
            e.subtype === "biz_bot_1p_disclosure"
              ? w.set({
                  bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P,
                })
              : e.subtype === "biz_bot_3p_disclosure" &&
                w.set({
                  bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P,
                });
          }),
            p.add === "unread"
              ? ((q = m), w.msgChunks.push(q), (U = p.firstUnreadKey))
              : p.add === "last" && p.resume === !0
                ? ((q = m), (V = !0))
                : (q = typeof m == "function" ? m() : m));
          var j = typeof q == "function" ? q() : q,
            K = w;
          if (
            ((j == null ? void 0 : j.threadId) != null &&
              w instanceof o("WAWebChatModel").Chat &&
              (K = o("WAWebThreadModelResolver").resolveThreadOrChat(
                w,
                j.threadId,
              )),
            r("WAWebAddAndReorderMsgsActionsUtils")({
              anchorMsgKey: p.anchorMsgKey,
              chatMsgsCollection: j != null ? j : w.msgs,
              firstUnreadKey: U,
              insertAfter: B,
              msgHistory: f,
              newMsgs: F,
              reorderMsgs: v,
              resetMostRecentMsgs: V,
              threadOrChat: K,
            }),
            O - I >= 500 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[processMM]: ",
                    " msgs findChat=",
                    "ms msgPrepWork=",
                    "ms",
                  ])),
                f.length,
                Math.round(A - I),
                Math.round(O - A),
              ),
            w instanceof o("WAWebChatModel").Chat &&
              (j == null || j.threadId == null) &&
              o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(
                w,
                F,
              ),
            p.pendingMsgsDone === !0 && (w.pendingMsgs = !1),
            W &&
              r("WAWebWid").isBroadcast(l) &&
              !r("WAWebWid").isStatus(l) &&
              F.forEach(function (e) {
                e &&
                  e.recvFresh &&
                  !o("WAWebMsgGetters").getIsNotification(e) &&
                  o("WAWebMsgModelUtils").broadcastFanout(e);
              }),
            !((i = p.isHistory) != null && i))
          ) {
            var Q = r("compactMap")(F, function (e) {
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
              Q.length,
            ),
              Q.forEach(function (e) {
                return o(
                  "WAWebRecentStickerCollectionMd",
                ).RecentStickerCollectionMd.addNewSticker(
                  e.sticker,
                  e.msgId,
                  e.timestamp,
                );
              }));
          }
          var X = 0,
            Y = r("compactMap")(F, function (e) {
              var t =
                  e.isNewMsg &&
                  o("WAWebMsgGetters").getIsSentByMe(e) &&
                  e.type === o("WAWebMsgType").MSG_TYPE.STICKER,
                n = e.mediaData;
              if (t) {
                var r = e.mediaKey;
                if (r == null) {
                  X++;
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
          (X > 0 &&
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[sticker] Unexpected null media key",
                  ])),
              )
              .sendLogs("sticker-unexpected-null-media-key"),
            o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue(
              Y,
            ));
          var J = F.filter(function (e) {
            return !o("WAWebMsgGetters").getIsStatus(e);
          });
          if (
            (r("compactMap")(J, function (e) {
              return o("WAWebFrontendMsgGetters").getAsAutoDownloadableMedia(e);
            }).forEach(function (e) {
              o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                e,
                o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA,
              );
            }),
            !o("WAWebUserPrefsGeneral").getAutoDownloadPhotos())
          ) {
            var Z = F.filter(function (e) {
              return (
                !o("WAWebMsgGetters").getIsSentByMe(e) &&
                !o("WAWebMsgGetters").getIsStatus(e) &&
                !o("WAWebMsgGetters").getIsNewsletterMsg(e)
              );
            });
            r("compactMap")(Z, function (e) {
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
            (r("compactMap")(F, function (e) {
              return o("WAWebFrontendMsgGetters").getAsDoc(e);
            }).forEach(function (e) {
              o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                e,
                o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                  .MMS_THUMBNAIL,
              );
            }),
            window.setTimeout(function () {
              if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled()) {
                var e = r("compactMap")(F, function (e) {
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
            r("compactMap")(F, function (e) {
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
            var ee = o("WAWebUserPrefsGeneral").getLastStatusUsage(),
              te = 1e3 * 60 * 60 * 24;
            if (ee == null || Date.now() - ee < 14 * te) {
              var ne = F.filter(function (e) {
                return o("WAWebMsgGetters").getIsStatus(e);
              });
              r("compactMap")(ne, function (e) {
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
          return r("compactMap")(f, function (e) {
            return o("WAWebMsgCollection").MsgCollection.get(e.id);
          });
        })),
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
