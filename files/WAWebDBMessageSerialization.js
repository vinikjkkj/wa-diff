__d(
  "WAWebDBMessageSerialization",
  [
    "invariant",
    "WAJids",
    "WAWebABProps",
    "WAWebApiHydrateWidsUtil",
    "WAWebDBMessageUtils",
    "WAWebDBMsgOpaqueDataKeys",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMusicGatingUtils",
    "WAWebMusicParsingUtils",
    "WAWebPollCreationUtils",
    "WAWebPollsDbUtils",
    "WAWebProtobufsMdStorageMsgRowOpaqueData.pb",
    "WAWebStatusGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "decodeProtobuf",
    "encodeProtobuf",
    "gkx",
    "isArrayNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 1e9,
      u = new Set(Object.values(o("WAWebMsgType").MSG_TYPE)),
      c = [
        "id",
        "parentMsgId",
        "protocolMessageKey",
        "paymentRequestMessageKey",
        "keptMessageKey",
        "pollUpdateParentKey",
        "kicKey",
        "latestEditMsgKey",
        "targetMessageKey",
        "pinParentKey",
        "reactionParentKey",
        "parentMsgKey",
        "groupHistoryBundleMessageKey",
      ];
    function d(t, n) {
      var a,
        i,
        l,
        s,
        u,
        d,
        h = babelHelpers.extends({}, t);
      (t.quotedMsg && (h.quotedMsg = babelHelpers.extends({}, t.quotedMsg)),
        (a = t.quotedMsg) != null &&
          a.paymentNoteMsg &&
          (h.quotedMsg.paymentNoteMsg = babelHelpers.extends(
            {},
            t.quotedMsg.paymentNoteMsg,
          )),
        t.paymentNoteMsg &&
          (h.paymentNoteMsg = babelHelpers.extends({}, t.paymentNoteMsg)),
        t.groupMentions &&
          (h.groupMentions = t.groupMentions.map(function (e) {
            return {
              groupSubject: e.groupSubject,
              groupJid: o("WAWebWidFactory").createWidFromWidLike(e.groupJid),
            };
          })),
        (h.star = h.isStarred !== void 0),
        (h.isMdHistoryMsg = h.rowId < e),
        h.internalId != null &&
          (((i = h.to) == null ? void 0 : i.server) === "newsletter" ||
            ((l = h.from) != null && l.endsWith("@newsletter"))) &&
          (h.serverId = o("WAWebDBMessageUtils").getInChatMsgId(h.internalId)),
        r("isArrayNullOrEmpty")(h.internalThreadIDs) ||
          (h.threadIds = h.internalThreadIDs.map(function (e) {
            return o("WAWebDBMessageUtils").getThreadIdFromInternalThreadId(e);
          })),
        delete h.internalId,
        delete h.isStarred,
        delete h.count,
        delete h.hasLink,
        delete h.isMediaMsg,
        delete h.isDocMsg,
        delete h.isCallLogMsg,
        delete h.isCarouselMsg,
        delete h.isEventMsg,
        delete h.typeFlag,
        delete h.pendingReadReceipt,
        g(h),
        r("gkx")("22769") && delete h.msgRowOpaqueData,
        o("WAWebApiHydrateWidsUtil").hydrateWids(h),
        c.forEach(function (e) {
          h[e] != null && (h[e] = r("WAWebMsgKey").from(h[e]));
        }),
        ((s = h.quotedMsg) == null ? void 0 : s.id) != null &&
          (h.quotedMsg.id = r("WAWebMsgKey").from(h.quotedMsg.id)),
        ((u = h.groupHistoryIndividualMessageInfo) == null
          ? void 0
          : u.bundleMessageKey) != null &&
          (h.groupHistoryIndividualMessageInfo.bundleMessageKey = r(
            "WAWebMsgKey",
          ).from(h.groupHistoryIndividualMessageInfo.bundleMessageKey)),
        h.groupHistoryBundleMetadata != null &&
          h.groupHistoryBundleMetadata.oldestMessageTimestampInWindow == null &&
          h.groupHistoryBundleMetadata.oldestMessageTimestamp != null &&
          ((h.groupHistoryBundleMetadata = babelHelpers.extends(
            {},
            h.groupHistoryBundleMetadata,
            {
              oldestMessageTimestampInWindow:
                h.groupHistoryBundleMetadata.oldestMessageTimestamp,
            },
          )),
          delete h.groupHistoryBundleMetadata.oldestMessageTimestamp),
        h.messageSecret != null &&
          (h.messageSecret = new Uint8Array(h.messageSecret)),
        h.botMessageSecret != null &&
          (h.botMessageSecret = new Uint8Array(h.botMessageSecret)));
      var y = m(h),
        C = y[0],
        b = y[1],
        v = y[2];
      ((h.futureproofType = C),
        (h.futureproofSubtype = b),
        (h.subtype = v != null ? v : void 0));
      var S = p(h.type, h.subtype);
      return (
        S != null &&
          ((h.type = S.type),
          (h.kind = S.kind),
          (h.subtype = S.subtype),
          (h.futureproofType = S.futureproofType),
          (h.futureproofSubtype = S.futureproofSubtype)),
        _(h),
        f(h),
        h.quotedMsg != null && (_(h.quotedMsg), f(h.quotedMsg)),
        (h.viewMode =
          (d = h.viewMode) != null
            ? d
            : o("WAWebViewMode.flow").ViewModeType.VISIBLE),
        h.carouselCardsParsed != null &&
          (h.carouselCardsParsed = h.carouselCardsParsed.map(function (e) {
            return babelHelpers.extends({}, e, {
              id:
                e.id instanceof r("WAWebMsgKey")
                  ? e.id
                  : new (r("WAWebMsgKey"))(e.id),
              parentMsgId:
                e.parentMsgId instanceof r("WAWebMsgKey")
                  ? e.parentMsgId
                  : new (r("WAWebMsgKey"))(e.parentMsgId),
            });
          })),
        n == null || n(h),
        h
      );
    }
    function m(e) {
      var t = e.futureproofSubtype,
        n = e.futureproofType,
        r = e.subtype;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
        e.futureproofType == null &&
        e.subtype != null
      ) {
        switch (e.subtype) {
          case "poll_update": {
            ((n = o("WAWebMsgType").MSG_TYPE.POLL_UPDATE), (t = "poll_vote"));
            break;
          }
          case "message_edit": {
            ((n = o("WAWebMsgType").MSG_TYPE.PROTOCOL), (t = "message_edit"));
            break;
          }
          case "phone":
          case "phone_only_feature":
            break;
          default:
            (u.has(e.subtype) || s(0, 67194), (n = e.subtype));
        }
        e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          n != null &&
          (r = void 0);
      }
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE &&
          r == null &&
          (r = "poll_vote"),
        [n, t, r]
      );
    }
    function p(e, t) {
      return e === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        (t === "status_mention_message" ||
          t === "status_group_mention_message") &&
        !o("WAWebStatusGatingUtils").isStatusMentionMessageEnabled()
        ? {
            futureproofSubtype: t,
            futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Unknown,
            subtype: void 0,
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          }
        : null;
    }
    function _(e) {
      var t;
      e.type === o("WAWebMsgType").MSG_TYPE.MUSIC &&
        (!o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled() ||
          o("WAWebMusicParsingUtils").renderableMusicStyle(
            (t = e.musicData) == null ? void 0 : t.style,
          ) == null) &&
        ((e.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN),
        (e.kind = o("WAWebMsgType").MsgKind.Unknown),
        (e.futureproofType = o("WAWebMsgType").MSG_TYPE.MUSIC));
    }
    function f(e) {
      e.type === o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE &&
        !o("WAWebABProps").getABPropConfigValue("instants_receiver_enabled") &&
        ((e.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN),
        (e.kind = o("WAWebMsgType").MsgKind.Unknown));
    }
    function g(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
          e.msgRowOpaqueData,
        ),
        n = t.currentMsg,
        a = t.quotedMsg;
      if (n) {
        (n.paymentNoteMsgBody != null &&
          e.paymentNoteMsg &&
          (e.paymentNoteMsg.body = n.paymentNoteMsgBody),
          o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach(
            function (t) {
              e[t] = n[o("WAWebDBMsgOpaqueDataKeys").getKey(e.type, t)];
            },
          ),
          (e.pollOptions = o("WAWebPollsDbUtils").expandPollOptions(
            n.pollOptions,
          )),
          (e.pollVotesSnapshot = o("WAWebPollsDbUtils").expandPollVotesSnapshot(
            n.pollVotesSnapshot,
          )));
        var i = o("WAWebPollsDbUtils").expandPollAddedOption(
          n.pollAddedOptionName,
        );
        (i != null && (e.pollAddedOption = i),
          n.correctOptionIndex != null &&
            (e.correctOptionIndex = n.correctOptionIndex),
          (e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            e.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT) &&
            ((e.pollContentType = o(
              "WAWebPollCreationUtils",
            ).getPollContentTypeFromDBValue(n.pollContentType)),
            (e.pollType = o("WAWebPollCreationUtils").getPollTypeFromDBValue(
              n.pollType,
            ))));
        var l = n.originalSelfAuthor;
        (l != null &&
          r("WAWebWid").isWid(l) &&
          (e.originalSelfAuthor = o("WAWebWidFactory").createWid(l)),
          n.plainProtobufBytes != null &&
            (e.plainProtobufBytes = new Uint8Array(n.plainProtobufBytes)));
      }
      e.quotedMsg &&
        a &&
        (a.paymentNoteMsgBody != null &&
          (e.quotedMsg.paymentNoteMsg.body = a.paymentNoteMsgBody),
        o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach(
          function (t) {
            e.quotedMsg[t] = a[o("WAWebDBMsgOpaqueDataKeys").getKey(e.type, t)];
          },
        ),
        (e.quotedMsg.pollOptions = o("WAWebPollsDbUtils").expandPollOptions(
          a.pollOptions,
        )));
    }
    function h(e, t) {
      var n,
        r,
        o = babelHelpers.extends({}, e);
      return (
        e.quotedMsg && (o.quotedMsg = babelHelpers.extends({}, e.quotedMsg)),
        (n = e.quotedMsg) != null &&
          n.paymentNoteMsg &&
          (o.quotedMsg.paymentNoteMsg = babelHelpers.extends(
            {},
            e.quotedMsg.paymentNoteMsg,
          )),
        e.paymentNoteMsg &&
          (o.paymentNoteMsg = babelHelpers.extends({}, e.paymentNoteMsg)),
        e.from && (o.from = e.from.toString()),
        (t == null ? void 0 : t.storeReportingInfo) === !0 &&
          ((o.preMatChat = e.preMatChat),
          (o.senderWithDevice = e.senderWithDevice)),
        c.forEach(function (e) {
          o[e] != null && (o[e] = o[e].toString());
        }),
        ((r = o.groupHistoryIndividualMessageInfo) == null
          ? void 0
          : r.bundleMessageKey) != null &&
          (o.groupHistoryIndividualMessageInfo.bundleMessageKey =
            o.groupHistoryIndividualMessageInfo.bundleMessageKey.toString()),
        delete o.notifyName,
        delete o.isNewMsg,
        delete o.clearMedia,
        delete o.multicast,
        delete o.urlNumber,
        delete o.urlText,
        delete o.linkPreview,
        delete o.star,
        delete o.forwardedFromWeb,
        y(o, t),
        o
      );
    }
    function y(e, t) {
      var n,
        r,
        a,
        i = { currentMsg: {}, quotedMsg: {} };
      if ((n = e.paymentNoteMsg) != null && n.body) {
        var l;
        ((i.currentMsg.paymentNoteMsgBody = e.paymentNoteMsg.body),
          (l = e.paymentNoteMsg) == null || delete l.body);
      }
      ((r = e.quotedMsg) != null &&
        (r = r.paymentNoteMsg) != null &&
        r.body &&
        ((i.quotedMsg.paymentNoteMsgBody = e.quotedMsg.paymentNoteMsg.body),
        delete e.quotedMsg.paymentNoteMsg.body),
        e.correctOptionIndex != null &&
          ((i.currentMsg.correctOptionIndex = e.correctOptionIndex),
          delete e.correctOptionIndex),
        o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach(
          function (t) {
            ((i.currentMsg[o("WAWebDBMsgOpaqueDataKeys").getKey(e.type, t)] =
              e[t]),
              delete e[t]);
          },
        ),
        e.originalSelfAuthor &&
          ((i.currentMsg.originalSelfAuthor = o("WAJids").extractUserJid(
            o("WAWebWidToJid").widToDeviceJid(e.originalSelfAuthor),
          )),
          delete e.originalSelfAuthor),
        (i.currentMsg.pollContentType = o(
          "WAWebPollCreationUtils",
        ).getPollContentTypeAsDBValue(e.pollContentType)),
        delete e.pollContentType,
        (i.currentMsg.pollType = o(
          "WAWebPollCreationUtils",
        ).getPollTypeAsDBValue(e.pollType)),
        delete e.pollType,
        (i.currentMsg.pollOptions = o("WAWebPollsDbUtils").compressPollOptions(
          e.pollOptions,
        )),
        delete e.pollOptions,
        (i.currentMsg.pollVotesSnapshot = o(
          "WAWebPollsDbUtils",
        ).compressPollVotesSnapshot(e.pollVotesSnapshot)),
        delete e.pollVotesSnapshot,
        (i.currentMsg.pollAddedOptionName =
          (a = e.pollAddedOption) == null ? void 0 : a.name),
        delete e.pollAddedOption,
        e.quotedMsg &&
          (o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach(
            function (t) {
              ((i.quotedMsg[t] = e.quotedMsg[t]), delete e.quotedMsg[t]);
            },
          ),
          (i.quotedMsg.pollOptions = o("WAWebPollsDbUtils").compressPollOptions(
            e.quotedMsg.pollOptions,
          )),
          delete e.quotedMsg.pollOptions),
        (t == null ? void 0 : t.storeReportingInfo) === !0 &&
          e.plainProtobufBytes != null &&
          (i.currentMsg.plainProtobufBytes = e.plainProtobufBytes),
        delete e.plainProtobufBytes);
      var s = o("encodeProtobuf").encodeProtobuf(
        o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
        i,
      );
      e.msgRowOpaqueData = s.readBuffer();
    }
    ((l.messageFromDbRow = d),
      (l.getGatedOffStatusMentionFutureproof = p),
      (l.movFieldFromOpaqueDataBackToMsg = g),
      (l.dbRowFromMessage = h),
      (l.movEncFieldToOpaqueData = y));
  },
  98,
);
