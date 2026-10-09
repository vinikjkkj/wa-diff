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
    "WAWebMsgType",
    "WAWebMsmsgMsgSecretCache",
    "WAWebNoop",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadMsgUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "cr:375",
    "getErrorSafe",
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
      g,
      h,
      y = (e = n("cr:375")) != null ? e : {},
      C = y.ftsLightClient,
      b = n("$InternalEnum").Mirrored(["Added", "Removed"]);
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t === void 0 && (t = !1), e.length === 0)) return [];
          var a = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(
              r("compactMap")(e, function (e) {
                return e.protocolMessageKey;
              }),
            ),
            i = yield (h || (h = n("Promise"))).all(E(e, a).map(W)),
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
            if (!d || d.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT)
              l.push(c);
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
              (s.push(M(d, c)),
                o("WAWebThreadMsgUtils").isThreadMsg(c) && u.push(c));
            }
          }
          yield k(l);
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
              h.resolve(),
              null,
            ),
            p
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
            (yield T(e),
            V(e),
            x(
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
            yield G(e)),
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
              u.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT;
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
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.length &&
            (yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
              e,
              function (e) {
                return e.protocolMessageKey;
              },
              { storeReportingInfo: !0 },
            ));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                                return j(e);
                              }),
                            ),
                          ),
                        c.size || d.size)
                      ) {
                        var p = o("WATimeUtils").unixTimeMs();
                        if (c.size) {
                          var _ = Array.from(c, function (e) {
                            return { id: e, unreadEditTimestampMs: p };
                          });
                          (o("WALogger")
                            .LOG(
                              f ||
                                (f = babelHelpers.taggedTemplateLiteralLoose([
                                  "storeMessageEdits: bulkCreateOrMerge",
                                ])),
                            )
                            .tags("missing-lid"),
                            m.push(l.bulkCreateOrMerge(_)));
                        }
                        if (d.size) {
                          var g = Array.from(d.values(), function (e) {
                            return { threadId: e, unreadEditTimestampMs: p };
                          });
                          m.push(
                            o(
                              "WAWebThreadMetadataBulkJob",
                            ).bulkUpdateThreadUnreadEditTimestampWithTable(
                              s,
                              g,
                            ),
                          );
                        }
                      }
                      yield (h || (h = n("Promise"))).all(m);
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      if (e.length) {
        var t = Array.from(
          new Set(
            e.map(function (e) {
              return String(r("nullthrows")(e.rowId));
            }),
          ),
        );
        (C == null || C.purge(t).catch(r("WAWebNoop")),
          r("WAWeb-dexie").ignoreTransaction(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield C == null ? void 0 : C.addToIndexingTable(t),
                C == null || C.index().catch(r("WAWebNoop")));
            }),
          ));
      }
    }
    function $(e, t) {
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
    function P(e, t) {
      if (o("WAWebMsgGetters").getIsSentByMe(e))
        return e.local === !0
          ? $(e, t)
            ? o("WAAckLevel").ACK.SENT
            : o("WAAckLevel").ACK.CLOCK
          : o("WAWebMsgKeyUtils").isNoteToSelf(e.id)
            ? o("WAAckLevel").ACK.READ
            : o("WAAckLevel").ACK.SENT;
    }
    var N = new Map();
    function M(e, t) {
      var n,
        a,
        i = r("nullthrows")(
          o("WAWebMessageEditUtils").getMsgEditType(e.type),
          "Unsupported message type for edits",
        ),
        l = B(e, t, i);
      o("WAWebMsgGetters").getIsSentByMe(e) &&
        t.count != null &&
        (l.count = t.count);
      var s =
          (n =
            (a = N.get(e.id.toString())) != null
              ? a
              : e.latestEditSenderTimestampMs) != null
            ? n
            : 0,
        u = r("nullthrows")(t.latestEditSenderTimestampMs),
        c = u >= s;
      if (
        (u >= s && U(l, e, t),
        i === o("WAWebMessageEditUtils").MsgEditType.EventEdit)
      ) {
        var d = !!e.isEventCanceled,
          m = !!t.isEventCanceled;
        !d && m ? (c = !0) : d && !m && (c = !1);
      }
      c && N.set(e.id.toString(), u);
      var p;
      if (
        i !== o("WAWebMessageEditUtils").MsgEditType.EventEdit &&
        !o("WAWebMsgGetters").getIsSentByMe(e)
      ) {
        var _ = o("WAWebMsgGetters").getHasMentionOfMe(e),
          f = o("WAWebMsgGetters").getHasMentionOfMe(
            babelHelpers.extends({}, e, l),
          );
        _ && !f ? (p = b.Removed) : !_ && f && (p = b.Added);
      }
      if (
        ((o("WAWebMsgGetters").getIsMetaBotResponse(e) ||
          o("WAWebMsgGetters").getIsBizBot1pMessage(e) ||
          e.botEditType != null) &&
          ((l.botEditType = t.botEditType),
          (l.botEditTargetId = t.botEditTargetId)),
        w(e, t, l),
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
    function w(e, t, n) {
      var r = o(
        "WAWebMaibaAiHubSettledProgressEdit",
      ).getMaibaAiHubSettledProgressEditViewMode(e, t);
      r != null && (n.viewMode = r);
    }
    function A(e) {
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
    function F(e) {
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
    function O(e) {
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
    function B(e, t, n) {
      var r = babelHelpers.extends(
        {
          latestEditMsgKey: t.latestEditMsgKey,
          latestEditSenderTimestampMs: t.latestEditSenderTimestampMs,
          errorCode: t.errorCode,
          ack: P(e, t),
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
          return babelHelpers.extends({}, r, A(t), {
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
          return babelHelpers.extends({}, r, A(t), {
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
              return babelHelpers.extends({}, r, A(t), F(t), { subtype: null });
            if (d.startsWith("video"))
              return babelHelpers.extends({}, r, A(t), O(t), { subtype: null });
          }
          return babelHelpers.extends({}, r, A(t), { type: "loading_media" });
        }
      }
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !e.id.remote.isGroup() ||
            !o("WAWebMsgGetters").getIsSentByMeFromWeb(e)
          )
            return e;
          try {
            var t = yield o(
                "WAWebMessageEditBotGroupMetadata",
              ).getOwnEditBotGroupMetadata(e),
              n = t.botGroupParticipant,
              a = t.botGroupParticipants;
            return babelHelpers.extends({}, e, {
              botGroupParticipant: n != null ? n : null,
              botGroupParticipants: a != null ? a : null,
            });
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-edit] own edit BotGroupMetadata failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("message-edit-own-bot-group-metadata-failed"),
              e
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n) {
      var r, o;
      if (t.id.remote.isGroup()) {
        var a = n.botResponseTargetId != null;
        (n.botGroupParticipants == null && !a) ||
          ((e.botGroupParticipant =
            (r = n.botGroupParticipant) != null ? r : null),
          (e.botGroupParticipants =
            (o = n.botGroupParticipants) != null ? o : null));
      }
    }
    function V(e) {
      e.forEach(function (e) {
        var t = e.editedMsgData,
          n = e.isLatest,
          a = e.parentMsg;
        if (!(!n || t.botGroupParticipants === void 0))
          try {
            H(a.id, t.botGroupParticipants, t.botGroupParticipant);
          } catch (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit] bot group gossip cache update failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("message-edit-bot-group-gossip-cache-failed");
          }
      });
    }
    function H(e, t, n) {
      var r = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(t, n);
      [e, o("WAWebLidMigrationUtils").getAlternateMsgKey(e)].forEach(
        function (e) {
          if (e != null) {
            if (r == null) {
              o(
                "WAWebMsmsgMsgSecretCache",
              ).msmsgBotGroupGossipDataCache.deleteMsmsgBotGroupGossipDataFromCache(
                e.toString(),
              );
              return;
            }
            o(
              "WAWebMsmsgMsgSecretCache",
            ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
              e.toString(),
              r.participants,
              r.isLegacySingular,
            );
          }
        },
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            n = new Map();
          for (var r of e) {
            var a = r.mentionOfMe,
              i = r.parentMsg,
              l = i.id.remote.toString();
            if (a)
              switch (a) {
                case b.Removed: {
                  var s = i.id.toString(),
                    u = t.get(l);
                  (u || ((u = []), t.set(l, u)), u.push(s));
                  break;
                }
                case b.Added: {
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
      var t = o("WAWebDBMessageSerialization").dbRowFromMessage(e),
        n = e.rowId;
      return n == null ||
        !o(
          "WAWebGroupAgentRichResponseLinkIndex",
        ).shouldIndexGroupAgentRichResponseLink(e, e.id.remote.toString())
        ? t
        : babelHelpers.extends({}, t, { hasLink: n });
    }
    ((l.EditedMentionOfMe = b),
      (l.processEditProtocolMsgs = v),
      (l.updateMessageEditsLocally = R),
      (l.generateMessageEdit = M));
  },
  98,
);
