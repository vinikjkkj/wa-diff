__d(
  "WAWebDBProcessEditProtocolMsgs",
  [
    "$InternalEnum",
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebAddonQueryUtils",
    "WAWebApiChatUnreadMention",
    "WAWebBackendApi",
    "WAWebBotEditSignatureMetadata",
    "WAWebCoexV2MessageAckProjection",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreMessageOrphans",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebGroupAgentRichResponseLinkIndex",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMaibaAiHubSettledProgressEdit",
    "WAWebMessageEditBotGroupMetadata",
    "WAWebMessageEditGatingUtils",
    "WAWebMessageEditUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgStoreExtensions",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadMsgUtils",
    "WAWebUserUtils",
    "WAWebWid",
    "compactMap",
    "cr:375",
    "justknobx",
    "nullthrows",
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
      t === void 0 && (t = !1);
      var n = await C(e, t),
        r = n.latestMessageEdits;
      return r;
    }
    async function C(e, t) {
      if ((t === void 0 && (t = !1), e.length === 0))
        return {
          latestMessageEdits: [],
          processedProtocolMsgs: [],
          consumedProtocolMsgs: [],
        };
      var n = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(
          r("compactMap")(e, function (e) {
            return e.protocolMessageKey;
          }),
        ),
        a = await Promise.all(
          v(e, n).map(
            o("WAWebMessageEditBotGroupMetadata").addOwnEditBotGroupMetadata,
          ),
        ),
        i = [],
        l = [],
        s = [];
      a.sort(function (e, t) {
        return (
          r("nullthrows")(t.latestEditSenderTimestampMs) -
          r("nullthrows")(e.latestEditSenderTimestampMs)
        );
      });
      for (var u of a) {
        var c = u.protocolMessageKey && n.get(u.protocolMessageKey.toString());
        if (!c || S(c.type)) i.push(u);
        else {
          var d = o(
            "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
          ).msgProcessReporter.startMarker(
            o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
              .msgProcessReporter.stage.ProcessReportingTokenInfo,
          );
          (await o(
            "WAWebHandleMsgValidate",
          ).validateAndProcessReportingTokenInfo({ renderableMsgs: [u] }),
            d == null || d(),
            l.push(D(c, u, { editsNewestFirst: a, parentMsgsByKey: n })),
            o("WAWebThreadMsgUtils").isThreadMsg(u) && s.push(u));
        }
      }
      await R(i);
      var m = l.filter(function (e) {
        return e.isLatest;
      });
      return (
        await b(l, m),
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
        await o(
          "WAWebCoexV2MessageAckProjection",
        ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
          m.map(function (e) {
            var t = e.protocolMsg;
            return t;
          }),
          Promise.resolve(),
          null,
        ),
        {
          latestMessageEdits: m,
          processedProtocolMsgs: a,
          consumedProtocolMsgs: l.map(function (e) {
            return e.protocolMsg;
          }),
        }
      );
    }
    async function b(e, t) {
      (e.length &&
        (await L(e),
        o("WAWebMessageEditBotGroupMetadata").updateBotGroupGossipCache(e),
        E(
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
        await w(e),
        await o("WAWebMsgStoreExtensions").handleStoredMessageEdits(e)),
        t.length &&
          o("WAWebBackendApi").frontendFireAndForget(
            "updateEditedMessagesAction",
            { messageEdits: t },
          ));
    }
    function v(e, t) {
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
              S(u.type);
            if (!c)
              return (
                a.length < 3 && a.push({ id: u.id.toString(), type: u.type }),
                !1
              );
            if (u.isForwarded === !0)
              return (i.length < 3 && i.push(u.id.toString()), !1);
            var d = r("nullthrows")(u.t),
              m = r("nullthrows")(e.t),
              p =
                o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
                  parentTsInSeconds: d,
                  editTsInSeconds: m,
                  msgKey: u.id,
                }) ||
                o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                  msgKey: u.id,
                  msgType: u.type,
                }) ||
                o(
                  "WAWebMessageEditUtils",
                ).shouldDeferMessageYourselfEditWindowCheck({
                  msgKey: u.id,
                  msgType: u.type,
                });
            if (!p) return (l.length < 3 && l.push(u.id.toString()), !1);
            var g = o("WAWebMsgGetters").getSender(u),
              h = o("WAWebMsgGetters").getSender(e);
            if (
              !o("WAWebMsgGetters").getIsNewsletterMsg(u) &&
              (!g ||
                !h ||
                !r("WAWebWid").equals.apply(
                  r("WAWebWid"),
                  o("WAWebLidMigrationUtils").toCommonAddressingMode(g, h),
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
    function S(e) {
      return (
        e === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
        (e === o("WAWebMsgType").MSG_TYPE.QUARANTINED &&
          r("justknobx")._("572"))
      );
    }
    async function R(e) {
      e.length &&
        (await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
          e,
          function (e) {
            return e.protocolMessageKey;
          },
          { storeReportingInfo: !0 },
        ));
    }
    async function L(e) {
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
                      return A(e);
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
    function E(e) {
      if (e.length) {
        var t = Array.from(
          new Set(
            e.map(function (e) {
              return String(r("nullthrows")(e.rowId));
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
    function k(e, t) {
      return (
        (o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
          !o("WAWebUserUtils").isMeAccount(t.from)) ||
        e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ||
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
        o("WAWebMessageEditGatingUtils").isCrossDeviceMessageEditingEnabled() ||
        (t.local !== !0 &&
          o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
            msgKey: e.id,
            msgType: e.type,
          }))
      );
    }
    function I(e, t) {
      if (o("WAWebMsgGetters").getIsSentByMe(e))
        return e.local === !0
          ? k(e, t)
            ? o("WAAckLevel").ACK.SENT
            : o("WAAckLevel").ACK.CLOCK
          : o("WAWebMsgKeyUtils").isNoteToSelf(e.id)
            ? o("WAAckLevel").ACK.READ
            : o("WAAckLevel").ACK.SENT;
    }
    var T = new Map();
    function D(e, t, n) {
      var a,
        i,
        l = r("nullthrows")(
          o("WAWebMessageEditUtils").getMsgEditType(e.type),
          "Unsupported message type for edits",
        ),
        s = M(e, t, l, n);
      o("WAWebMsgGetters").getIsSentByMe(e) &&
        t.count != null &&
        (s.count = t.count);
      var u =
          (a =
            (i = T.get(e.id.toString())) != null
              ? i
              : e.latestEditSenderTimestampMs) != null
            ? a
            : 0,
        c = r("nullthrows")(t.latestEditSenderTimestampMs),
        d = c >= u;
      if (
        (c >= u &&
          o("WAWebMessageEditBotGroupMetadata").applyEditedBotGroupMetadata(
            s,
            e,
            t,
          ),
        l === o("WAWebMessageEditUtils").MsgEditType.EventEdit)
      ) {
        var m = !!e.isEventCanceled,
          p = !!t.isEventCanceled;
        !m && p ? (d = !0) : m && !p && (d = !1);
      }
      d && T.set(e.id.toString(), c);
      var _;
      if (
        l !== o("WAWebMessageEditUtils").MsgEditType.EventEdit &&
        !o("WAWebMsgGetters").getIsSentByMe(e)
      ) {
        var f = o("WAWebMsgGetters").getHasMentionOfMe(e),
          g = o("WAWebMsgGetters").getHasMentionOfMe(
            babelHelpers.extends({}, e, s),
          );
        f && !g ? (_ = h.Removed) : !f && g && (_ = h.Added);
      }
      if (
        ((o("WAWebMsgGetters").getIsMetaBotResponse(e) ||
          o("WAWebMsgGetters").getIsBizBot1pMessage(e) ||
          e.botEditType != null) &&
          ((s.botEditType = t.botEditType),
          (s.botEditTargetId = t.botEditTargetId)),
        x(e, t, s),
        o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e))
      ) {
        var y = o("WAWebMsgGetters").getGroupHistoryIndividualMessageInfo(e);
        y != null &&
          (s.groupHistoryIndividualMessageInfo = babelHelpers.extends({}, y, {
            isEditedAfterReceivedAsHistory: !0,
          }));
      }
      return {
        parentMsg: e,
        protocolMsg: t,
        editedMsgData: s,
        isLatest: d,
        mentionOfMe: _,
      };
    }
    function x(e, t, n) {
      var r = o(
        "WAWebMaibaAiHubSettledProgressEdit",
      ).getMaibaAiHubSettledProgressEditViewMode(e, t);
      r != null && (n.viewMode = r);
    }
    function $(e) {
      return babelHelpers.extends(
        { aiThreadInfo: e.aiThreadInfo },
        e.botResponseId != null ? { botResponseId: e.botResponseId } : null,
        {
          botPluginSearchUrl: e.botPluginSearchUrl,
          botPluginSearchProvider: e.botPluginSearchProvider,
          botPluginReferenceIndex: e.botPluginReferenceIndex,
          botPluginType: e.botPluginType,
          botPluginMaybeParent: e.botPluginMaybeParent,
          botReelPluginThumbnailCdnUrl: e.botReelPluginThumbnailCdnUrl,
          botPluginSearchQuery: e.botPluginSearchQuery,
          botMessageDisclaimerText: e.botMessageDisclaimerText,
        },
      );
    }
    function P(e) {
      var t;
      return {
        deprecatedMms3Url: e.deprecatedMms3Url,
        directPath: e.directPath,
        staticUrl: e.staticUrl,
        qrUrl: e.qrUrl,
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
        body: r("nullthrows")(e.body),
        type: "image",
        kind: "image",
      };
    }
    function N(e) {
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
        body: r("nullthrows")(e.body),
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
    function M(e, t, n, r) {
      var a = babelHelpers.extends(
        {
          latestEditMsgKey: t.latestEditMsgKey,
          latestEditSenderTimestampMs: t.latestEditSenderTimestampMs,
          errorCode: t.errorCode,
          ack: I(e, t),
          pendingReadReceipt: o("WAWebMsgGetters").getIsSentByMe(e)
            ? void 0
            : o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
          hasPaidPartnershipLabel: t.hasPaidPartnershipLabel,
        },
        o("WAWebMsgGetters").getIsNewsletterMsg(e)
          ? { aiProvenance: t.aiProvenance }
          : null,
      );
      switch (n) {
        case o("WAWebMessageEditUtils").MsgEditType.TextEdit: {
          var i,
            l,
            s,
            u,
            c,
            d = !!t.matchedText || !!t.description || !!t.title;
          return babelHelpers.extends({}, a, $(t), {
            subtype: d ? "url" : void 0,
            body: t.body,
            mentionedJidList: t.mentionedJidList,
            groupMentions: t.groupMentions,
            isSpoiler: t.isSpoiler === !0,
            title: t.title,
            description: t.description,
            matchedText: t.matchedText,
            inviteGrpType: t.inviteGrpType,
            thumbnail: t.thumbnail,
            richPreviewType: t.richPreviewType,
            doNotPlayInline: t.doNotPlayInline,
            paymentLinkMetadata: t.paymentLinkMetadata,
            thumbnailDirectPath:
              (i = t.thumbnailDirectPath) != null ? i : void 0,
            thumbnailSha256: (l = t.thumbnailSha256) != null ? l : void 0,
            thumbnailEncSha256: (s = t.thumbnailEncSha256) != null ? s : void 0,
            thumbnailHeight: (u = t.thumbnailHeight) != null ? u : void 0,
            thumbnailWidth: (c = t.thumbnailWidth) != null ? c : void 0,
            mediaKey: t.mediaKey,
            mediaKeyTimestamp: t.mediaKeyTimestamp,
          });
        }
        case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit:
          return babelHelpers.extends({}, a, {
            caption: t.caption,
            mentionedJidList: t.mentionedJidList,
            groupMentions: t.groupMentions,
            isSpoiler: t.isSpoiler === !0,
            isCaptionByUser: !0,
          });
        case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
          return babelHelpers.extends({}, a, {
            eventName: t.eventName,
            eventDescription: t.eventDescription,
            eventLocation: t.eventLocation,
            eventStartTime: t.eventStartTime,
            eventEndTime: t.eventEndTime,
            eventJoinLink: t.eventJoinLink,
            isEventCanceled: t.isEventCanceled,
          });
        case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
          return babelHelpers.extends({}, a, { pollName: t.pollName });
        case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
          return babelHelpers.extends({}, a, $(t), {
            richResponse: t.richResponse,
            unifiedResponse: t.unifiedResponse,
            unifiedResponseRawData: t.unifiedResponseRawData,
            botSignatureVerificationMetadata: o(
              "WAWebBotEditSignatureMetadata",
            ).getEditedBotSignatureMetadata({
              parentMsg: e,
              protocolMsg: t,
              sameBatchEdits: r,
            }),
          });
        case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit: {
          var m = t.mimetype;
          if (m != null) {
            if (m.startsWith("image"))
              return babelHelpers.extends({}, a, $(t), P(t), { subtype: null });
            if (m.startsWith("video"))
              return babelHelpers.extends({}, a, $(t), N(t), { subtype: null });
          }
          return babelHelpers.extends({}, a, $(t), { type: "loading_media" });
        }
      }
    }
    async function w(e) {
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
    function A(e) {
      var t = o("WAWebMsgStoreExtensions").omitColumnsPreservedAcrossEdits(
          o("WAWebDBMessageSerialization").dbRowFromMessage(e),
        ),
        n = e.rowId;
      return n == null ||
        !o(
          "WAWebGroupAgentRichResponseLinkIndex",
        ).shouldIndexGroupAgentRichResponseLink(e, e.id.remote.toString())
        ? t
        : babelHelpers.extends({}, t, { hasLink: n });
    }
    ((l.EditedMentionOfMe = h),
      (l.processEditProtocolMsgs = y),
      (l.processEditProtocolMsgsWithOutcomes = C),
      (l.updateMessageEditsLocally = b),
      (l.generateMessageEdit = D));
  },
  98,
);
