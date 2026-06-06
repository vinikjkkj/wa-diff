__d(
  "WAWebDBProcessEditProtocolMsgs",
  [
    "$InternalEnum",
    "WAAckLevel",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebAddonQueryUtils",
    "WAWebApiChatUnreadMention",
    "WAWebBackendApi",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreMessageOrphans",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMessageEditGatingUtils",
    "WAWebMessageEditUtils",
    "WAWebMessagingGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadMsgUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "compactMap",
    "cr:375",
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
      f = (e = n("cr:375")) != null ? e : {},
      g = f.ftsLightClient,
      h = n("$InternalEnum").Mirrored(["Added", "Removed"]);
    async function y(e, t) {
      if ((t === void 0 && (t = !1), e.length === 0)) return [];
      var n = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(
          r("compactMap")(e, function (e) {
            return e.protocolMessageKey;
          }),
        ),
        a = b(e, n),
        i = [],
        l = [],
        s = [];
      a.sort(function (e, t) {
        return (
          r("WANullthrows")(t.latestEditSenderTimestampMs) -
          r("WANullthrows")(e.latestEditSenderTimestampMs)
        );
      });
      for (var u of a) {
        var c = u.protocolMessageKey && n.get(u.protocolMessageKey.toString());
        if (!c || c.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) i.push(u);
        else {
          if (
            o(
              "WAWebMessagingGatingUtils",
            ).isWebReportingTokenDelayProcessingEnabled()
          ) {
            var d = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.ProcessReportingTokenInfo,
            );
            (await o(
              "WAWebHandleMsgValidate",
            ).validateAndProcessReportingTokenInfo({ renderableMsgs: [u] }),
              d == null || d());
          }
          (l.push(I(c, u)),
            o("WAWebThreadMsgUtils").isThreadMsg(u) && s.push(u));
        }
      }
      await v(i);
      var m = l.filter(function (e) {
        return e.isLatest;
      });
      return (
        await C(l, m),
        t &&
          (await o(
            "WAWebDBMarkFutureproofMessagesReparsed",
          ).markFutureproofMessagesReparsed(
            e.map(function (e) {
              return e.id.toString();
            }),
          )),
        await o(
          "WAWebDBThreadMetadataBulkHelper",
        ).persistNewMessagesThreadMetadataInBulk(s),
        m
      );
    }
    async function C(e, t) {
      (e.length &&
        (await S(e),
        R(
          e
            .filter(function (e) {
              return (
                e.isLatest &&
                !o("WAWebMsgGetters").getIsNewsletterMsg(e.parentMsg)
              );
            })
            .map(function (e) {
              return e.parentMsg;
            }),
        ),
        await P(e)),
        t.length &&
          o("WAWebBackendApi").frontendFireAndForget(
            "updateEditedMessagesAction",
            { messageEdits: t },
          ));
    }
    function b(e, t) {
      var n = [],
        a = [],
        i = [],
        l = [],
        _ = [],
        f = [],
        g = e.filter(function (e) {
          var s = e.protocolMessageKey;
          if (!s) return (n.length < 3 && n.push(e.id.toString()), !1);
          var u = t.get(s.toString());
          if (u) {
            var c =
              o("WAWebMessageEditUtils").msgTypeSupportsEditing(u.type) ||
              u.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT;
            if (!c)
              return (
                a.length < 3 && a.push({ id: u.id.toString(), type: u.type }),
                !1
              );
            if (u.isForwarded === !0)
              return (i.length < 3 && i.push(u.id.toString()), !1);
            var d = r("WANullthrows")(u.t),
              m = r("WANullthrows")(e.t);
            if (
              !o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
                parentTsInSeconds: d,
                editTsInSeconds: m,
                msgKey: u.id,
              })
            )
              return (l.length < 3 && l.push(u.id.toString()), !1);
            var p = o("WAWebMsgGetters").getSender(u),
              g = o("WAWebMsgGetters").getSender(e);
            if (
              !o("WAWebMsgGetters").getIsNewsletterMsg(u) &&
              (!p ||
                !g ||
                !r("WAWebWid").equals.apply(
                  r("WAWebWid"),
                  o("WAWebLidMigrationUtils").toCommonAddressingMode(p, g),
                ))
            )
              return (_.length < 3 && _.push(u.id.toString()), !1);
          }
          return e.latestEditSenderTimestampMs == null
            ? (f.length < 3 && f.push(e.id.toString()), !1)
            : !0;
        });
      return (
        n.length > 0 &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[message-edit] ",
                  " protocol msgs missing original msg key => ",
                  "",
                ])),
              n.length,
              n,
            )
            .sendLogs("message-edit-missing-original-msg-key"),
        a.length > 0 &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[message-edit] ",
                  " msgs have unsupported type => ",
                  "",
                ])),
              a.length,
              a.map(function (e) {
                return e.id + ":" + e.type;
              }),
            )
            .sendLogs("message-edit-unsupported-msg-type"),
        i.length > 0 &&
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[message-edit] ",
                  " forwarded msgs cannot be edited => ",
                  "",
                ])),
              i.length,
              i,
            )
            .sendLogs("message-edit-forwarded-message"),
        l.length > 0 &&
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[message-edit] ",
                " msgs exceeded edit window => ",
                "",
              ])),
            l.length,
            l,
          ),
        _.length > 0 &&
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[message-edit] ",
                  " senders are not the parent msg sender => ",
                  "",
                ])),
              _.length,
              _,
            )
            .sendLogs("message-edit-sender-mismatch"),
        f.length > 0 &&
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[message-edit] ",
                  " msgs missing sender timestamp => ",
                  "",
                ])),
              f.length,
              f,
            )
            .sendLogs("message-edit-missing-timestamp"),
        g
      );
    }
    async function v(e) {
      e.length &&
        (await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
          e,
          function (e) {
            return e.protocolMessageKey;
          },
          { storeReportingInfo: !0 },
        ));
    }
    async function S(e) {
      if (e.length) {
        var t = [],
          n = [];
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message", "chat", "thread-metadata"], async function (r) {
            var a = r[0],
              i = r[1],
              l = r[2],
              s = [],
              u = new Set(),
              c = new Map();
            e.forEach(function (e) {
              var r,
                a,
                i = e.editedMsgData,
                l = e.isLatest,
                d = e.parentMsg,
                m = e.protocolMsg;
              if (l) {
                if (
                  (s.push(babelHelpers.extends({}, d, i)),
                  !o("WAWebMsgGetters").getIsSentByMe(m))
                ) {
                  var p = d.id.remote.toString();
                  u.add(p);
                  var _ = o("WAWebDBMessageUtils").getThreadIdsFromMessage(d);
                  for (var f of _) c.set(f.toString(), f);
                }
                (t.push(d.id.toString()),
                  n.push([
                    d.id,
                    (r =
                      (a = i.latestEditMsgKey) == null
                        ? void 0
                        : a.id.toString()) != null
                      ? r
                      : "",
                  ]));
              }
            });
            var d = [];
            if (
              (s.length &&
                d.push(
                  a.bulkCreateOrMerge(
                    s.map(function (e) {
                      return o("WAWebDBMessageSerialization").dbRowFromMessage(
                        e,
                      );
                    }),
                  ),
                ),
              u.size || c.size)
            ) {
              var m = o("WATimeUtils").unixTimeMs();
              if (u.size) {
                var p = Array.from(u, function (e) {
                  return { id: e, unreadEditTimestampMs: m };
                });
                (o("WALogger")
                  .LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "storeMessageEdits: bulkCreateOrMerge",
                      ])),
                  )
                  .tags("missing-lid"),
                  d.push(i.bulkCreateOrMerge(p)));
              }
              if (c.size) {
                var f = Array.from(c.values(), function (e) {
                  return { threadId: e, unreadEditTimestampMs: m };
                });
                d.push(
                  o(
                    "WAWebThreadMetadataBulkJob",
                  ).bulkUpdateThreadUnreadEditTimestampWithTable(l, f),
                );
              }
            }
            await Promise.all(d);
          }),
          o(
            "WAWebDBReportingTokenUtils",
          ).handleReportingInfosUpdateOnMessageEdit(n));
      }
    }
    function R(e) {
      if (e.length) {
        var t = Array.from(
          new Set(
            e.map(function (e) {
              return String(r("WANullthrows")(e.rowId));
            }),
          ),
        );
        (g == null || g.purge(t).catch(r("WAWebNoop")),
          r("WAWeb-dexie").ignoreTransaction(async function () {
            (await (g == null ? void 0 : g.addToIndexingTable(t)),
              g == null || g.index().catch(r("WAWebNoop")));
          }));
      }
    }
    function L(e, t) {
      return (
        (o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
          !o("WAWebUserPrefsMeUser").isMeAccount(t.from)) ||
        e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ||
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
        o("WAWebMessageEditGatingUtils").isCrossDeviceMessageEditingEnabled()
      );
    }
    function E(e, t) {
      if (o("WAWebMsgGetters").getIsSentByMe(e))
        return e.local === !0
          ? L(e, t)
            ? o("WAAckLevel").ACK.SENT
            : o("WAAckLevel").ACK.CLOCK
          : o("WAWebMsgKeyUtils").isNoteToSelf(e.id)
            ? o("WAAckLevel").ACK.READ
            : o("WAAckLevel").ACK.SENT;
    }
    var k = new Map();
    function I(e, t) {
      var n,
        a,
        i = r("WANullthrows")(
          o("WAWebMessageEditUtils").getMsgEditType(e.type),
          "Unsupported message type for edits",
        ),
        l = $(e, t, i);
      o("WAWebMsgGetters").getIsSentByMe(e) &&
        t.count != null &&
        (l.count = t.count);
      var s =
          (n =
            (a = k.get(e.id.toString())) != null
              ? a
              : e.latestEditSenderTimestampMs) != null
            ? n
            : 0,
        u = r("WANullthrows")(t.latestEditSenderTimestampMs),
        c = u >= s;
      if (i === o("WAWebMessageEditUtils").MsgEditType.EventEdit) {
        var d = !!e.isEventCanceled,
          m = !!t.isEventCanceled;
        !d && m ? (c = !0) : d && !m && (c = !1);
      }
      c && k.set(e.id.toString(), u);
      var p;
      if (
        i !== o("WAWebMessageEditUtils").MsgEditType.EventEdit &&
        !o("WAWebMsgGetters").getIsSentByMe(e)
      ) {
        var _ = o("WAWebMsgGetters").getHasMentionOfMe(e),
          f = o("WAWebMsgGetters").getHasMentionOfMe(
            babelHelpers.extends({}, e, l),
          );
        _ && !f ? (p = h.Removed) : !_ && f && (p = h.Added);
      }
      if (
        ((o("WAWebMsgGetters").getIsMetaBotResponse(e) ||
          e.botEditType != null) &&
          ((l.botEditType = t.botEditType),
          (l.botEditTargetId = t.botEditTargetId)),
        o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e))
      ) {
        var g = o("WAWebMsgGetters").getGroupHistoryIndividualMessageInfo(e);
        g != null &&
          (l.groupHistoryIndividualMessageInfo = babelHelpers.extends({}, g, {
            isEditedAfterReceivedAsHistory: !0,
          }));
      }
      return {
        parentMsg: e,
        protocolMsg: t,
        editedMsgData: l,
        isLatest: c,
        mentionOfMe: p,
      };
    }
    function T(e) {
      return {
        aiThreadInfo: e.aiThreadInfo,
        botPluginSearchUrl: e.botPluginSearchUrl,
        botPluginSearchProvider: e.botPluginSearchProvider,
        botPluginReferenceIndex: e.botPluginReferenceIndex,
        botPluginType: e.botPluginType,
        botPluginMaybeParent: e.botPluginMaybeParent,
        botReelPluginThumbnailCdnUrl: e.botReelPluginThumbnailCdnUrl,
        botPluginSearchQuery: e.botPluginSearchQuery,
        botMessageDisclaimerText: e.botMessageDisclaimerText,
      };
    }
    function D(e) {
      var t;
      return {
        deprecatedMms3Url: e.deprecatedMms3Url,
        directPath: e.directPath,
        staticUrl: e.staticUrl,
        mimetype: e.mimetype,
        caption: e.caption,
        filehash: e.filehash,
        encFilehash: e.encFilehash,
        size: e.size,
        height: e.height,
        width: e.width,
        mediaKey: e.mediaKey,
        mediaKeyTimestamp: e.mediaKeyTimestamp,
        interactiveAnnotations: e.interactiveAnnotations,
        scanLengths: (t = e.scanLengths) != null ? t : [],
        scansSidecar: e.scansSidecar,
        isViewOnce: e.isViewOnce,
        thumbnailDirectPath: e.thumbnailDirectPath,
        thumbnailSha256: e.thumbnailSha256,
        thumbnailEncSha256: e.thumbnailEncSha256,
        body: r("WANullthrows")(e.body),
        type: "image",
        kind: "image",
      };
    }
    function x(e) {
      return {
        deprecatedMms3Url: e.deprecatedMms3Url,
        directPath: e.directPath,
        staticUrl: e.staticUrl,
        mimetype: e.mimetype,
        caption: e.caption,
        filehash: e.filehash,
        encFilehash: e.encFilehash,
        size: e.size,
        height: e.height,
        width: e.width,
        mediaKey: e.mediaKey,
        mediaKeyTimestamp: e.mediaKeyTimestamp,
        body: r("WANullthrows")(e.body),
        interactiveAnnotations: e.interactiveAnnotations,
        isViewOnce: e.isViewOnce,
        thumbnailDirectPath: e.thumbnailDirectPath,
        thumbnailSha256: e.thumbnailSha256,
        thumbnailEncSha256: e.thumbnailEncSha256,
        isGif: e.isGif,
        gifAttribution: e.gifAttribution,
        accessibilityLabel: e.accessibilityLabel,
        duration: e.duration,
        streamingSidecar: e.streamingSidecar,
        type: "video",
        kind: "video",
      };
    }
    function $(e, t, n) {
      var r = {
        latestEditMsgKey: t.latestEditMsgKey,
        latestEditSenderTimestampMs: t.latestEditSenderTimestampMs,
        errorCode: t.errorCode,
        ack: E(e, t),
        pendingReadReceipt: o("WAWebMsgGetters").getIsSentByMe(e)
          ? void 0
          : o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
        hasPaidPartnershipLabel: t.hasPaidPartnershipLabel,
      };
      switch (n) {
        case o("WAWebMessageEditUtils").MsgEditType.TextEdit: {
          var a,
            i,
            l,
            s,
            u,
            c = !!t.matchedText || !!t.description || !!t.title;
          return babelHelpers.extends({}, r, T(t), {
            subtype: c ? "url" : void 0,
            body: t.body,
            mentionedJidList: t.mentionedJidList,
            groupMentions: t.groupMentions,
            title: t.title,
            description: t.description,
            matchedText: t.matchedText,
            inviteGrpType: t.inviteGrpType,
            thumbnail: t.thumbnail,
            richPreviewType: t.richPreviewType,
            doNotPlayInline: t.doNotPlayInline,
            paymentLinkMetadata: t.paymentLinkMetadata,
            thumbnailDirectPath:
              (a = t.thumbnailDirectPath) != null ? a : void 0,
            thumbnailSha256: (i = t.thumbnailSha256) != null ? i : void 0,
            thumbnailEncSha256: (l = t.thumbnailEncSha256) != null ? l : void 0,
            thumbnailHeight: (s = t.thumbnailHeight) != null ? s : void 0,
            thumbnailWidth: (u = t.thumbnailWidth) != null ? u : void 0,
            mediaKey: t.mediaKey,
            mediaKeyTimestamp: t.mediaKeyTimestamp,
          });
        }
        case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit:
          return babelHelpers.extends({}, r, {
            caption: t.caption,
            mentionedJidList: t.mentionedJidList,
            groupMentions: t.groupMentions,
            isCaptionByUser: !0,
          });
        case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
          return babelHelpers.extends({}, r, {
            eventName: t.eventName,
            eventDescription: t.eventDescription,
            eventLocation: t.eventLocation,
            eventStartTime: t.eventStartTime,
            eventEndTime: t.eventEndTime,
            eventJoinLink: t.eventJoinLink,
            isEventCanceled: t.isEventCanceled,
          });
        case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
          return babelHelpers.extends({}, r, { pollName: t.pollName });
        case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
          return babelHelpers.extends({}, r, T(t), {
            richResponse: t.richResponse,
            unifiedResponse: t.unifiedResponse,
          });
        case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit: {
          var d = t.mimetype;
          if (d != null) {
            if (d.startsWith("image"))
              return babelHelpers.extends({}, r, T(t), D(t), { subtype: null });
            if (d.startsWith("video"))
              return babelHelpers.extends({}, r, T(t), x(t), { subtype: null });
          }
          return babelHelpers.extends({}, r, T(t), { type: "loading_media" });
        }
      }
    }
    async function P(e) {
      var t = new Map(),
        n = new Map();
      for (var r of e) {
        var a = r.mentionOfMe,
          i = r.parentMsg,
          l = i.id.remote.toString();
        if (a)
          switch (a) {
            case h.Removed: {
              var s = i.id.toString(),
                u = t.get(l);
              (u || ((u = []), t.set(l, u)), u.push(s));
              break;
            }
            case h.Added: {
              var c = n.get(l);
              c || ((c = []), n.set(l, c));
              var d = { id: i.id.toString(), timestamp: i.t };
              c.push(d);
            }
          }
      }
      (t.size &&
        (await o("WAWebApiChatUnreadMention").removeUnreadMentionChat(t)),
        n.size &&
          (await o("WAWebApiChatUnreadMention").addUnreadMentionChat(n)));
    }
    ((l.EditedMentionOfMe = h),
      (l.processEditProtocolMsgs = y),
      (l.updateMessageEditsLocally = C),
      (l.generateMessageEdit = I));
  },
  98,
);
