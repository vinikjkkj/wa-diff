__d(
  "WAWebProcessMultipleMsgsAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddAndReorderMsgsActionsUtils",
    "WAWebBizBotProfileUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTypes",
    "WAWebChatCollection",
    "WAWebChatGetExistingBridge",
    "WAWebChatModel",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebGetMsgUpdatesActionsUtils",
    "WAWebGhostEphemeralChatSkip",
    "WAWebMediaAutoDownloadQueue",
    "WAWebMediaGatingUtils",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaTypes",
    "WAWebMessageAssociationUIUtils",
    "WAWebMessageRenderQpl",
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
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWid",
    "compactMap",
    "cr:11804",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(t) {
      var a,
        i = t.chatId,
        l = t.chatMsgsCollection,
        m = t.meta,
        p = t.msgObjs,
        _ = t.processMessageOrigin,
        h = await r("WAWebGetMsgUpdatesActionsUtils")({
          chatId: i,
          chatMsgsCollection: l,
          meta: m,
          msgObjs: p,
        }),
        y = h.filteredRecs,
        C = h.reorderRecs,
        b = h.updates,
        v = await Promise.all(b),
        S = v.filter(function (e) {
          return (e == null ? void 0 : e.associationType) != null;
        });
      if (
        (o("WAWebMessageAssociationUIUtils").makeParentMessagesVisibleInChat(S),
        y.length === 0 && C.length === 0)
      ) {
        if (i && m.pendingMsgsDone === !0) {
          var R,
            L =
              (R = o("WAWebChatCollection").ChatCollection.get(i)) != null
                ? R
                : r("WAWebNewsletterCollection").get(i);
          L && (L.pendingMsgs = !1);
        }
        return r("compactMap")(p, function (e) {
          return o("WAWebMsgCollection").MsgCollection.get(e.id);
        });
      }
      if (!i)
        return g(y).then(function () {
          return p.reduce(function (e, t) {
            var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
            return (
              n != null &&
                o("WAWebFrontendMsgGetters").getChat(n) != null &&
                e.push(n),
              e
            );
          }, []);
        });
      o("WAWebMessageRenderQpl").startMessageRenderFlows(i, p, y);
      var E = self.performance.now(),
        k,
        I = p[0];
      if (o("WAWebMsgGetters").getIsStatus(I)) {
        var T,
          D = (T = o("WAWebMsgGetters").getSender(I)) != null ? T : I.from;
        if (
          (r("WAWebWid").isStatus(i) &&
            (D = I.id.fromMe
              ? o("WAWebUserUtils").getMeLidUserOrThrow()
              : I.author),
          D == null)
        ) {
          var x, $, P;
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
            i.toLogString(),
            (x = o("WAWebMsgGetters").getSender(I)) == null
              ? void 0
              : x.toLogString(),
            ($ = I.from) == null ? void 0 : $.toLogString(),
            I.id.fromMe,
            (P = I.author) == null ? void 0 : P.toLogString(),
          );
        }
        k = o("WAWebStatusCollection").StatusCollection.find(D);
      } else {
        if (await f(i, p))
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "_processMultipleMessages: skipping ghost chat creation for ephemeral_setting-only message ",
                  "",
                ])),
              i.toLogString(),
            ),
            r("compactMap")(p, function (e) {
              return o("WAWebMsgCollection").MsgCollection.get(e.id);
            })
          );
        k = await o("WAWebFindChatAction").findExistingChat(i, _, {
          buildFirstIncomingMsg: function () {
            var e;
            return (e = p.find(function (e) {
              return !o(
                "WAWebGhostEphemeralChatSkip",
              ).isSkippableIncomingEphemeralSettingMsg(e);
            })) != null
              ? e
              : I;
          },
        });
      }
      var N = await k,
        M = self.performance.now(),
        w = await g(y),
        A = self.performance.now(),
        F = o("WAWebMsgGetters").getIsStatus(I)
          ? w.filter(function (e) {
              return e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN;
            })
          : w,
        O = m.add === "after" || m.add === "last",
        B = !m.isHistory,
        W,
        q,
        U = !1,
        V = N.id.isBot(),
        H = o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(
          N.contact.businessProfile,
        );
      if ((V || H) && m.isHistory === !1) {
        var G = N.msgs.last();
        (G == null ? void 0 : G.subtype) ===
          o("WAWebBotGenTypingIndicatorMsg")
            .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
          (G == null || G.delete({ skipUpdatingSortTime: !0 }));
      }
      (w.forEach(function (e) {
        e.subtype === "biz_bot_1p_disclosure"
          ? N.set({ bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P })
          : e.subtype === "biz_bot_3p_disclosure" &&
            N.set({
              bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P,
            });
      }),
        m.add === "unread"
          ? ((W = l), N.msgChunks.push(W), (q = m.firstUnreadKey))
          : m.add === "last" && m.resume === !0
            ? ((W = l), (U = !0))
            : (W = typeof l == "function" ? l() : l));
      var z = typeof W == "function" ? W() : W,
        j = N;
      if (
        ((z == null ? void 0 : z.threadId) != null &&
          N instanceof o("WAWebChatModel").Chat &&
          (j = o("WAWebThreadModelResolver").resolveThreadOrChat(
            N,
            z.threadId,
          )),
        r("WAWebAddAndReorderMsgsActionsUtils")({
          anchorMsgKey: m.anchorMsgKey,
          chatMsgsCollection: z != null ? z : N.msgs,
          firstUnreadKey: q,
          insertAfter: O,
          msgHistory: p,
          newMsgs: F,
          reorderMsgs: C,
          resetMostRecentMsgs: U,
          threadOrChat: j,
        }),
        o("WAWebMessageRenderQpl").markMessageRenderAddedToChat(
          w.map(function (e) {
            return e.id;
          }),
        ),
        A - E >= 500 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[processMM]: ",
                " msgs findChat=",
                "ms msgPrepWork=",
                "ms",
              ])),
            p.length,
            Math.round(M - E),
            Math.round(A - M),
          ),
        N instanceof o("WAWebChatModel").Chat &&
          (z == null || z.threadId == null) &&
          o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(N, w),
        m.pendingMsgsDone === !0 && (N.pendingMsgs = !1),
        B &&
          r("WAWebWid").isBroadcast(i) &&
          !r("WAWebWid").isStatus(i) &&
          w.forEach(function (e) {
            e &&
              e.recvFresh &&
              !o("WAWebMsgGetters").getIsNotification(e) &&
              o("WAWebMsgModelUtils").broadcastFanout(e);
          }),
        !((a = m.isHistory) != null && a))
      ) {
        var K = r("compactMap")(w, function (e) {
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
                stickerAudio: e.stickerAudio,
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
        X = r("compactMap")(w, function (e) {
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
        o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue(X));
      var Y = w.filter(function (e) {
        return !o("WAWebMsgGetters").getIsStatus(e);
      });
      if (
        (r("compactMap")(Y, function (e) {
          return o("WAWebFrontendMsgGetters").getAsAutoDownloadableMedia(e);
        }).forEach(function (e) {
          o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
            e,
            o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA,
          );
        }),
        !o("WAWebUserPrefsGeneral").getAutoDownloadPhotos())
      ) {
        var J = w.filter(function (e) {
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
            var r = o("WAWebMediaGatingUtils").getHQImageThumbnailInChatScans();
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
        (r("compactMap")(w, function (e) {
          return o("WAWebFrontendMsgGetters").getAsDoc(e);
        }).forEach(function (e) {
          o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
            e,
            o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL,
          );
        }),
        window.setTimeout(function () {
          if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled()) {
            var e = r("compactMap")(w, function (e) {
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
        r("compactMap")(w, function (e) {
          return o("WAWebFrontendMsgGetters").getAsUrl(e);
        }).forEach(function (e) {
          o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(e.t) ||
            o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
              e,
              o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL,
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
          var te = w.filter(function (e) {
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
              o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL,
            );
          });
        }
      }
      return r("compactMap")(p, function (e) {
        return o("WAWebMsgCollection").MsgCollection.get(e.id);
      });
    }
    async function f(e, t) {
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
      var n = await o("WAWebChatGetExistingBridge").getExisting(e);
      return n == null;
    }
    async function g(e) {
      var t = o("WAWebMsgCollection").MsgCollection.add(e, { merge: !0 }),
        n = 0,
        a = t.reduce(function (e, t) {
          return (
            t == null && n++,
            t != null && t.subtype !== "is_hosted_group" && e.push(t),
            e
          );
        }, []);
      if (n > 0) {
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
            n,
            i,
          )
          .sendLogs("msgPrepWork-empty-message");
      }
      var l = null,
        s = null;
      if (
        (await Promise.all(
          a.map(function (e) {
            return e.waitForPrep().catch(function (t) {
              ((l = t), (s = e));
            });
          }),
        ),
        l != null && s != null)
      ) {
        var u = r("getErrorSafe")(l);
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
          .catching(u)
          .sendLogs("bad-msg-prep");
      }
      return a;
    }
    l._processMultipleMessages = _;
  },
  98,
);
