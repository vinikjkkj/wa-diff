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
    "WAWebTPPreloadingUtils",
    "WAWebThreadModelResolver",
    "WAWebThreadWriteThroughAction",
    "WAWebUserPrefsGeneral",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWid",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(t) {
      var n,
        a = t.chatId,
        i = t.chatMsgsCollection,
        l = t.meta,
        m = t.msgObjs,
        p = t.processMessageOrigin,
        _ = await r("WAWebGetMsgUpdatesActionsUtils")({
          chatId: a,
          chatMsgsCollection: i,
          meta: l,
          msgObjs: m,
        }),
        h = _.filteredRecs,
        y = _.reorderRecs,
        C = _.updates,
        b = await Promise.all(C),
        v = b.filter(function (e) {
          return (e == null ? void 0 : e.associationType) != null;
        });
      if (
        (o("WAWebMessageAssociationUIUtils").makeParentMessagesVisibleInChat(v),
        h.length === 0 && y.length === 0)
      ) {
        if (a && l.pendingMsgsDone === !0) {
          var S,
            R =
              (S = o("WAWebChatCollection").ChatCollection.get(a)) != null
                ? S
                : r("WAWebNewsletterCollection").get(a);
          R && (R.pendingMsgs = !1);
        }
        return r("compactMap")(m, function (e) {
          return o("WAWebMsgCollection").MsgCollection.get(e.id);
        });
      }
      if (!a)
        return g(h).then(function () {
          return m.reduce(function (e, t) {
            var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
            return (
              n != null &&
                o("WAWebFrontendMsgGetters").getChat(n) != null &&
                e.push(n),
              e
            );
          }, []);
        });
      o("WAWebMessageRenderQpl").startMessageRenderFlows(a, m, h);
      var L = self.performance.now(),
        E,
        k = m[0];
      if (o("WAWebMsgGetters").getIsStatus(k)) {
        var I,
          T = (I = o("WAWebMsgGetters").getSender(k)) != null ? I : k.from;
        if (
          (r("WAWebWid").isStatus(a) &&
            (T = k.id.fromMe
              ? o("WAWebUserUtils").getMeLidUserOrThrow()
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
            a.toLogString(),
            (D = o("WAWebMsgGetters").getSender(k)) == null
              ? void 0
              : D.toLogString(),
            (x = k.from) == null ? void 0 : x.toLogString(),
            k.id.fromMe,
            ($ = k.author) == null ? void 0 : $.toLogString(),
          );
        }
        E = o("WAWebStatusCollection").StatusCollection.find(T);
      } else {
        if (await f(a, m))
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "_processMultipleMessages: skipping ghost chat creation for ephemeral_setting-only message ",
                  "",
                ])),
              a.toLogString(),
            ),
            r("compactMap")(m, function (e) {
              return o("WAWebMsgCollection").MsgCollection.get(e.id);
            })
          );
        E = await o("WAWebFindChatAction").findExistingChat(a, p, {
          buildFirstIncomingMsg: function () {
            var e;
            return (e = m.find(function (e) {
              return !o(
                "WAWebGhostEphemeralChatSkip",
              ).isSkippableIncomingEphemeralSettingMsg(e);
            })) != null
              ? e
              : k;
          },
        });
      }
      var P = await E,
        N = self.performance.now(),
        M = await g(h),
        w = self.performance.now(),
        A = o("WAWebMsgGetters").getIsStatus(k)
          ? M.filter(function (e) {
              return e.viewMode !== o("WAWebViewMode.flow").ViewModeType.HIDDEN;
            })
          : M,
        F = l.add === "after" || l.add === "last",
        O = !l.isHistory,
        B,
        W,
        q = !1,
        U = P.id.isBot(),
        V = o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(
          P.contact.businessProfile,
        );
      if ((U || V) && l.isHistory === !1) {
        var H = P.msgs.last();
        (H == null ? void 0 : H.subtype) ===
          o("WAWebBotGenTypingIndicatorMsg")
            .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
          (H == null || H.delete({ skipUpdatingSortTime: !0 }));
      }
      (M.forEach(function (e) {
        e.subtype === "biz_bot_1p_disclosure"
          ? P.set({ bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P })
          : e.subtype === "biz_bot_3p_disclosure" &&
            P.set({
              bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P,
            });
      }),
        l.add === "unread"
          ? ((B = i), P.msgChunks.push(B), (W = l.firstUnreadKey))
          : l.add === "last" && l.resume === !0
            ? ((B = i), (q = !0))
            : (B = typeof i == "function" ? i() : i));
      var G = typeof B == "function" ? B() : B,
        z = P;
      if (
        ((G == null ? void 0 : G.threadId) != null &&
          P instanceof o("WAWebChatModel").Chat &&
          (z = o("WAWebThreadModelResolver").resolveThreadOrChat(
            P,
            G.threadId,
          )),
        r("WAWebAddAndReorderMsgsActionsUtils")({
          anchorMsgKey: l.anchorMsgKey,
          chatMsgsCollection: G != null ? G : P.msgs,
          firstUnreadKey: W,
          insertAfter: F,
          msgHistory: m,
          newMsgs: A,
          reorderMsgs: y,
          resetMostRecentMsgs: q,
          threadOrChat: z,
        }),
        o("WAWebMessageRenderQpl").markMessageRenderAddedToChat(
          M.map(function (e) {
            return e.id;
          }),
        ),
        w - L >= 500 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[processMM]: ",
                " msgs findChat=",
                "ms msgPrepWork=",
                "ms",
              ])),
            m.length,
            Math.round(N - L),
            Math.round(w - N),
          ),
        P instanceof o("WAWebChatModel").Chat &&
          (G == null || G.threadId == null) &&
          o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(P, M),
        l.pendingMsgsDone === !0 && (P.pendingMsgs = !1),
        O &&
          r("WAWebWid").isBroadcast(a) &&
          !r("WAWebWid").isStatus(a) &&
          M.forEach(function (e) {
            e &&
              e.recvFresh &&
              !o("WAWebMsgGetters").getIsNotification(e) &&
              o("WAWebMsgModelUtils").broadcastFanout(e);
          }),
        !((n = l.isHistory) != null && n))
      ) {
        var j = r("compactMap")(M, function (e) {
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
          j.length,
        ),
          j.forEach(function (e) {
            return o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.addNewSticker(
              e.sticker,
              e.msgId,
              e.timestamp,
            );
          }));
      }
      var K = 0,
        Q = r("compactMap")(M, function (e) {
          var t =
              e.isNewMsg &&
              o("WAWebMsgGetters").getIsSentByMe(e) &&
              e.type === o("WAWebMsgType").MSG_TYPE.STICKER,
            n = e.mediaData;
          if (t) {
            var r = e.mediaKey;
            if (r == null) {
              K++;
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
      (K > 0 &&
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[sticker] Unexpected null media key",
              ])),
          )
          .sendLogs("sticker-unexpected-null-media-key"),
        o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue(Q));
      var X = M.filter(function (e) {
        return !o("WAWebMsgGetters").getIsStatus(e);
      });
      if (
        (r("compactMap")(X, function (e) {
          return o("WAWebFrontendMsgGetters").getAsAutoDownloadableMedia(e);
        }).forEach(function (e) {
          o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
            e,
            o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA,
          );
        }),
        !o("WAWebUserPrefsGeneral").getAutoDownloadPhotos())
      ) {
        var Y = M.filter(function (e) {
          return (
            !o("WAWebMsgGetters").getIsSentByMe(e) &&
            !o("WAWebMsgGetters").getIsStatus(e) &&
            !o("WAWebMsgGetters").getIsNewsletterMsg(e)
          );
        });
        r("compactMap")(Y, function (e) {
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
        (r("compactMap")(M, function (e) {
          return o("WAWebFrontendMsgGetters").getAsDoc(e);
        }).forEach(function (e) {
          o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
            e,
            o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MMS_THUMBNAIL,
          );
        }),
        window.setTimeout(function () {
          if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled()) {
            var e = r("compactMap")(M, function (e) {
                return o("WAWebFrontendMsgGetters").getAsDoc(e);
              }),
              t = e.some(function (e) {
                return o(
                  "WAWebTPPdfViewerGatingUtils",
                ).isWebTPPdfViewerEnabledForMimeType(e.mimetype);
              });
            t &&
              o("WAWebTPPreloadingUtils").maybePreloadWebTPIframeForPDFs(
                void 0,
                { source: "appStart", force: !0 },
              );
          }
        }, 0),
        r("compactMap")(M, function (e) {
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
        var J = o("WAWebUserPrefsGeneral").getLastStatusUsage(),
          Z = 1e3 * 60 * 60 * 24;
        if (J == null || Date.now() - J < 14 * Z) {
          var ee = M.filter(function (e) {
            return o("WAWebMsgGetters").getIsStatus(e);
          });
          r("compactMap")(ee, function (e) {
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
      return r("compactMap")(m, function (e) {
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
