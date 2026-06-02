__d(
  "WAWebProcessMultipleMsgsAction",
  [
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
    "compactMap",
    "cr:11804",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t, a, i, l, d) {
      var m,
        p,
        f = await r("WAWebGetMsgUpdatesActionsUtils")(t, a, i, d),
        g = f.filteredRecs,
        h = f.reorderRecs,
        y = f.updates,
        C = await Promise.all(y),
        b = C.filter(function (e) {
          return (e == null ? void 0 : e.associationType) != null;
        });
      if (
        (o("WAWebMsgCollection").MsgCollection.makeParentMessagesVisibleInChat(
          b,
        ),
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
        return _(g).then(function () {
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
      var R = self.performance.now(),
        L,
        E = a[0];
      if (o("WAWebMsgGetters").getIsStatus(E)) {
        var k,
          I = (k = o("WAWebMsgGetters").getSender(E)) != null ? k : E.from;
        if (
          (r("WAWebWid").isStatus(t) &&
            (I = E.id.fromMe
              ? o("WAWebLidStatusMigrationUtils").matWidConvert(
                  o("WAWebUserPrefsMeUser").getMeUser(),
                )
              : E.author),
          I == null)
        ) {
          var T, D, x;
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
            (T = o("WAWebMsgGetters").getSender(E)) == null
              ? void 0
              : T.toLogString(),
            (D = E.from) == null ? void 0 : D.toLogString(),
            E.id.fromMe,
            (x = E.author) == null ? void 0 : x.toLogString(),
          );
        }
        L = o("WAWebStatusCollection").StatusCollection.find(I);
      } else L = await o("WAWebFindChatAction").findExistingChat(t, l);
      var $ = await L,
        P = self.performance.now(),
        N = await _(g),
        M = self.performance.now(),
        w = i.add === "after" || i.add === "last",
        A = !i.isHistory,
        F,
        O,
        B = !1,
        W = $.id.isBot(),
        q =
          ((m = $.contact.businessProfile) == null ? void 0 : m.isBizBot3p) ===
          !0;
      if ((W || q) && i.isHistory === !1) {
        var U = $.msgs.last();
        (U == null ? void 0 : U.subtype) ===
          o("WAWebBotGenTypingIndicatorMsg")
            .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE &&
          (U == null || U.delete({ skipUpdatingSortTime: !0 }));
      }
      (N.forEach(function (e) {
        e.subtype === "biz_bot_1p_disclosure"
          ? $.set({ bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_1P })
          : e.subtype === "biz_bot_3p_disclosure" &&
            $.set({
              bizBotSystemMsgType: o("WAWebBotTypes").BizBotType.BIZ_3P,
            });
      }),
        i.add === "unread"
          ? ((F = d), $.msgChunks.push(F), (O = i.firstUnreadKey))
          : i.add === "last" && i.resume === !0
            ? ((F = d), (B = !0))
            : (F = typeof d == "function" ? d() : d));
      var V = typeof F == "function" ? F() : F,
        H = $;
      if (
        ((V == null ? void 0 : V.threadId) != null &&
          $ instanceof o("WAWebChatModel").Chat &&
          (H = o("WAWebThreadModelResolver").resolveThreadOrChat(
            $,
            V.threadId,
          )),
        r("WAWebAddAndReorderMsgsActionsUtils")(
          a,
          N,
          h,
          H,
          w,
          V != null ? V : $.msgs,
          O,
          B,
          i.anchorMsgKey,
        ),
        M - R >= 500 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[processMM]: ",
                " msgs findChat=",
                "ms msgPrepWork=",
                "ms",
              ])),
            a.length,
            Math.round(P - R),
            Math.round(M - P),
          ),
        $ instanceof o("WAWebChatModel").Chat &&
          (V == null || V.threadId == null) &&
          o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads($, N),
        i.pendingMsgsDone === !0 && ($.pendingMsgs = !1),
        A &&
          r("WAWebWid").isBroadcast(t) &&
          !r("WAWebWid").isStatus(t) &&
          N.forEach(function (e) {
            e &&
              e.recvFresh &&
              !o("WAWebMsgGetters").getIsNotification(e) &&
              o("WAWebMsgModelUtils").broadcastFanout(e);
          }),
        !((p = i.isHistory) != null && p))
      ) {
        var G = r("compactMap")(N, function (e) {
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
          G.length,
        ),
          G.forEach(function (e) {
            return o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.addNewSticker(
              e.sticker,
              e.msgId,
              e.timestamp,
            );
          }));
      }
      var z = 0,
        j = r("compactMap")(N, function (e) {
          var t =
              e.isNewMsg &&
              o("WAWebMsgGetters").getIsSentByMe(e) &&
              e.type === o("WAWebMsgType").MSG_TYPE.STICKER,
            n = e.mediaData;
          if (t) {
            var r = e.mediaKey;
            if (r == null) {
              z++;
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
        (z > 0 &&
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[sticker] Unexpected null media key",
                ])),
            )
            .sendLogs("sticker-unexpected-null-media-key"),
        o("WAWebRecentStickerCollection").RecentStickerCollection.enqueue(j),
        o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled())
      ) {
        var K = N.filter(function (e) {
          return !o("WAWebMsgGetters").getIsStatus(e);
        });
        r("compactMap")(K, function (e) {
          return o("WAWebFrontendMsgGetters").getAsAutoDownloadableMedia(e);
        }).forEach(function (e) {
          o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
            e,
            o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes.MEDIA,
          );
        });
      }
      if (!o("WAWebUserPrefsGeneral").getAutoDownloadPhotos()) {
        var Q = N.filter(function (e) {
          return (
            !o("WAWebMsgGetters").getIsSentByMe(e) &&
            !o("WAWebMsgGetters").getIsStatus(e) &&
            !o("WAWebMsgGetters").getIsNewsletterMsg(e)
          );
        });
        r("compactMap")(Q, function (e) {
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
              (o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled()
                ? o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                    e,
                    o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                      .PJPEG_THUMBNAIL,
                  )
                : o(
                    "WAWebDownloadProgressiveJpegThumbnail",
                  ).downloadProgressiveJpegThumbnail({ msg: e, scanCount: r }));
          }
        });
      }
      var X = $ instanceof o("WAWebChatModel").Chat ? $ : null;
      if (
        (r("compactMap")(N, function (e) {
          return o("WAWebFrontendMsgGetters").getAsDoc(e);
        }).forEach(function (e) {
          o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled()
            ? o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
                e,
                o("WAWebMediaAutoDownloadQueue").AutoDownloadTypes
                  .MMS_THUMBNAIL,
              )
            : r("WAWebMediaDownloadMmsThumbnail")({
                chat: X,
                msg: e,
                isPreload: !0,
              });
        }),
        window.setTimeout(function () {
          if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled()) {
            var e = r("compactMap")(N, function (e) {
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
        r("compactMap")(N, function (e) {
          return o("WAWebFrontendMsgGetters").getAsUrl(e);
        }).forEach(function (e) {
          o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(e.t) ||
            (o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled()
              ? o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
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
        var Y = o("WAWebUserPrefsGeneral").getLastStatusUsage(),
          J = 1e3 * 60 * 60 * 24;
        if (Y == null || Date.now() - Y < 14 * J) {
          var Z = N.filter(function (e) {
            return o("WAWebMsgGetters").getIsStatus(e);
          });
          r("compactMap")(Z, function (e) {
            return (
              o("WAWebFrontendMsgGetters").getAsImage(e) ||
              o("WAWebFrontendMsgGetters").getAsVideo(e)
            );
          }).forEach(function (e) {
            o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled()
              ? o("WAWebMediaAutoDownloadQueue").AutoDownloadQueue.enqueue(
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
    }
    async function _(e) {
      var t = o("WAWebMsgCollection").MsgCollection.add(e, { merge: !0 }),
        n = 0,
        r = t.reduce(function (e, t) {
          return (
            t == null && n++,
            t != null && t.subtype !== "is_hosted_group" && e.push(t),
            e
          );
        }, []);
      if (n > 0) {
        var a = e
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
            n,
            a,
          )
          .sendLogs("msgPrepWork-empty-message");
      }
      var i = null,
        l = null;
      return (
        await Promise.all(
          r.map(function (e) {
            return e.waitForPrep().catch(function (t) {
              ((i = t), (l = e));
            });
          }),
        ),
        i != null &&
          l != null &&
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
              l.id.toString(),
              l.type,
              l.subtype,
              l.mediaData != null,
            )
            .catching(i)
            .sendLogs("bad-msg-prep"),
        r
      );
    }
    l._processMultipleMessages = p;
  },
  98,
);
