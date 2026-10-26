__d(
  "WAWebDBProcessEditProtocolMsgs",
  [
    "$InternalEnum",
    "Promise",
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebAddonQueryUtils",
    "WAWebApiChatUnreadMention",
    "WAWebBackendApi",
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
    "WAWebMessagingGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgStoreExtensions",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadMsgUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
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
      f,
      g = (e = n("cr:375")) != null ? e : {},
      h = g.ftsLightClient,
      y = n("$InternalEnum").Mirrored(["Added", "Removed"]);
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var n = yield v(e, t),
            r = n.latestMessageEdits;
          return r;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t === void 0 && (t = !1), e.length === 0))
            return {
              latestMessageEdits: [],
              processedProtocolMsgs: [],
              consumedProtocolMsgs: [],
            };
          var a = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(
              r("compactMap")(e, function (e) {
                return e.protocolMessageKey;
              }),
            ),
            i = yield (f || (f = n("Promise"))).all(
              E(e, a).map(
                o("WAWebMessageEditBotGroupMetadata")
                  .addOwnEditBotGroupMetadata,
              ),
            ),
            l = [],
            s = [],
            u = [];
          i.sort(function (e, t) {
            return (
              r("nullthrows")(t.latestEditSenderTimestampMs) -
              r("nullthrows")(e.latestEditSenderTimestampMs)
            );
          });
          for (var c of i) {
            var d =
              c.protocolMessageKey && a.get(c.protocolMessageKey.toString());
            if (!d || k(d.type)) l.push(c);
            else {
              if (
                o(
                  "WAWebMessagingGatingUtils",
                ).isWebReportingTokenDelayProcessingEnabled()
              ) {
                var m = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(
                  o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                    .msgProcessReporter.stage.ProcessReportingTokenInfo,
                );
                (yield o(
                  "WAWebHandleMsgValidate",
                ).validateAndProcessReportingTokenInfo({ renderableMsgs: [c] }),
                  m == null || m());
              }
              (s.push(w(d, c)),
                o("WAWebThreadMsgUtils").isThreadMsg(c) && u.push(c));
            }
          }
          yield I(l);
          var p = s.filter(function (e) {
            return e.isLatest;
          });
          return (
            yield R(s, p),
            t &&
              (yield o(
                "WAWebDBMarkFutureproofMessagesReparsed",
              ).markFutureproofMessagesReparsed(
                e.map(function (e) {
                  return e.id.toString();
                }),
              )),
            yield o(
              "WAWebDBThreadMetadataBulkHelper",
            ).persistNewMessagesThreadMetadataInBulk(u),
            yield o(
              "WAWebCoexV2MessageAckProjection",
            ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
              p.map(function (e) {
                var t = e.protocolMsg;
                return t;
              }),
              f.resolve(),
              null,
            ),
            {
              latestMessageEdits: p,
              processedProtocolMsgs: i,
              consumedProtocolMsgs: s.map(function (e) {
                return e.protocolMsg;
              }),
            }
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (e.length &&
            (yield D(e),
            o("WAWebMessageEditBotGroupMetadata").updateBotGroupGossipCache(e),
            $(
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
            yield q(e),
            yield o("WAWebMsgStoreExtensions").handleStoredMessageEdits(e)),
            t.length &&
              o("WAWebBackendApi").frontendFireAndForget(
                "updateEditedMessagesAction",
                { messageEdits: t },
              ));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
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
              k(u.type);
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
    function k(e) {
      return (
        e === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
        (e === o("WAWebMsgType").MSG_TYPE.QUARANTINED &&
          r("justknobx")._("572"))
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.length &&
            (yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
              e,
              function (e) {
                return e.protocolMessageKey;
              },
              { storeReportingInfo: !0 },
            ));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length) {
            var t = [],
              r = [];
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message", "chat", "thread-metadata"],
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (a) {
                      var i = a[0],
                        l = a[1],
                        s = a[2],
                        u = [],
                        c = new Set(),
                        d = new Map();
                      e.forEach(function (e) {
                        var n,
                          a,
                          i = e.editedMsgData,
                          l = e.isLatest,
                          s = e.parentMsg,
                          m = e.protocolMsg;
                        if (l) {
                          if (
                            (u.push(babelHelpers.extends({}, s, i)),
                            !o("WAWebMsgGetters").getIsSentByMe(m))
                          ) {
                            var p = s.id.remote.toString();
                            c.add(p);
                            var _ = o(
                              "WAWebDBMessageUtils",
                            ).getThreadIdsFromMessage(s);
                            for (var f of _) d.set(f.toString(), f);
                          }
                          (t.push(s.id.toString()),
                            r.push([
                              s.id,
                              (n =
                                (a = i.latestEditMsgKey) == null
                                  ? void 0
                                  : a.id.toString()) != null
                                ? n
                                : "",
                            ]));
                        }
                      });
                      var m = [];
                      if (
                        (u.length &&
                          m.push(
                            i.bulkCreateOrMerge(
                              u.map(function (e) {
                                return V(e);
                              }),
                            ),
                          ),
                        c.size || d.size)
                      ) {
                        var p = o("WATimeUtils").unixTimeMs();
                        if (c.size) {
                          var g = Array.from(c, function (e) {
                            return { id: e, unreadEditTimestampMs: p };
                          });
                          (o("WALogger")
                            .LOG(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "storeMessageEdits: bulkCreateOrMerge",
                                ])),
                            )
                            .tags("missing-lid"),
                            m.push(l.bulkCreateOrMerge(g)));
                        }
                        if (d.size) {
                          var h = Array.from(d.values(), function (e) {
                            return { threadId: e, unreadEditTimestampMs: p };
                          });
                          m.push(
                            o(
                              "WAWebThreadMetadataBulkJob",
                            ).bulkUpdateThreadUnreadEditTimestampWithTable(
                              s,
                              h,
                            ),
                          );
                        }
                      }
                      yield (f || (f = n("Promise"))).all(m);
                    },
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })(),
              ),
              o(
                "WAWebDBReportingTokenUtils",
              ).handleReportingInfosUpdateOnMessageEdit(r));
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      if (e.length) {
        var t = Array.from(
          new Set(
            e.map(function (e) {
              return String(r("nullthrows")(e.rowId));
            }),
          ),
        );
        (h == null || h.purge(t).catch(r("WAWebNoop")),
          r("WAWeb-dexie").ignoreTransaction(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield h == null ? void 0 : h.addToIndexingTable(t),
                h == null || h.index().catch(r("WAWebNoop")));
            }),
          ));
      }
    }
    function P(e, t) {
      return (
        (o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
          !o("WAWebUserPrefsMeUser").isMeAccount(t.from)) ||
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
    function N(e, t) {
      if (o("WAWebMsgGetters").getIsSentByMe(e))
        return e.local === !0
          ? P(e, t)
            ? o("WAAckLevel").ACK.SENT
            : o("WAAckLevel").ACK.CLOCK
          : o("WAWebMsgKeyUtils").isNoteToSelf(e.id)
            ? o("WAAckLevel").ACK.READ
            : o("WAAckLevel").ACK.SENT;
    }
    var M = new Map();
    function w(e, t) {
      var n,
        a,
        i = r("nullthrows")(
          o("WAWebMessageEditUtils").getMsgEditType(e.type),
          "Unsupported message type for edits",
        ),
        l = W(e, t, i);
      o("WAWebMsgGetters").getIsSentByMe(e) &&
        t.count != null &&
        (l.count = t.count);
      var s =
          (n =
            (a = M.get(e.id.toString())) != null
              ? a
              : e.latestEditSenderTimestampMs) != null
            ? n
            : 0,
        u = r("nullthrows")(t.latestEditSenderTimestampMs),
        c = u >= s;
      if (
        (u >= s &&
          o("WAWebMessageEditBotGroupMetadata").applyEditedBotGroupMetadata(
            l,
            e,
            t,
          ),
        i === o("WAWebMessageEditUtils").MsgEditType.EventEdit)
      ) {
        var d = !!e.isEventCanceled,
          m = !!t.isEventCanceled;
        !d && m ? (c = !0) : d && !m && (c = !1);
      }
      c && M.set(e.id.toString(), u);
      var p;
      if (
        i !== o("WAWebMessageEditUtils").MsgEditType.EventEdit &&
        !o("WAWebMsgGetters").getIsSentByMe(e)
      ) {
        var _ = o("WAWebMsgGetters").getHasMentionOfMe(e),
          f = o("WAWebMsgGetters").getHasMentionOfMe(
            babelHelpers.extends({}, e, l),
          );
        _ && !f ? (p = y.Removed) : !_ && f && (p = y.Added);
      }
      if (
        ((o("WAWebMsgGetters").getIsMetaBotResponse(e) ||
          o("WAWebMsgGetters").getIsBizBot1pMessage(e) ||
          e.botEditType != null) &&
          ((l.botEditType = t.botEditType),
          (l.botEditTargetId = t.botEditTargetId)),
        A(e, t, l),
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
    function A(e, t, n) {
      var r = o(
        "WAWebMaibaAiHubSettledProgressEdit",
      ).getMaibaAiHubSettledProgressEditViewMode(e, t);
      r != null && (n.viewMode = r);
    }
    function F(e) {
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
    function O(e) {
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
    function B(e) {
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
    function W(e, t, n) {
      var r = babelHelpers.extends(
        {
          latestEditMsgKey: t.latestEditMsgKey,
          latestEditSenderTimestampMs: t.latestEditSenderTimestampMs,
          errorCode: t.errorCode,
          ack: N(e, t),
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
          var a,
            i,
            l,
            s,
            u,
            c = !!t.matchedText || !!t.description || !!t.title;
          return babelHelpers.extends({}, r, F(t), {
            subtype: c ? "url" : void 0,
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
            isSpoiler: t.isSpoiler === !0,
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
          return babelHelpers.extends({}, r, F(t), {
            richResponse: t.richResponse,
            unifiedResponse: t.unifiedResponse,
            unifiedResponseRawData: t.unifiedResponseRawData,
            botSignatureVerificationMetadata:
              t.botSignatureVerificationMetadata,
          });
        case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit: {
          var d = t.mimetype;
          if (d != null) {
            if (d.startsWith("image"))
              return babelHelpers.extends({}, r, F(t), O(t), { subtype: null });
            if (d.startsWith("video"))
              return babelHelpers.extends({}, r, F(t), B(t), { subtype: null });
          }
          return babelHelpers.extends({}, r, F(t), { type: "loading_media" });
        }
      }
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            n = new Map();
          for (var r of e) {
            var a = r.mentionOfMe,
              i = r.parentMsg,
              l = i.id.remote.toString();
            if (a)
              switch (a) {
                case y.Removed: {
                  var s = i.id.toString(),
                    u = t.get(l);
                  (u || ((u = []), t.set(l, u)), u.push(s));
                  break;
                }
                case y.Added: {
                  var c = n.get(l);
                  c || ((c = []), n.set(l, c));
                  var d = { id: i.id.toString(), timestamp: i.t };
                  c.push(d);
                }
              }
          }
          (t.size &&
            (yield o("WAWebApiChatUnreadMention").removeUnreadMentionChat(t)),
            n.size &&
              (yield o("WAWebApiChatUnreadMention").addUnreadMentionChat(n)));
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
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
    ((l.EditedMentionOfMe = y),
      (l.processEditProtocolMsgs = C),
      (l.processEditProtocolMsgsWithOutcomes = v),
      (l.updateMessageEditsLocally = R),
      (l.generateMessageEdit = w));
  },
  98,
);
