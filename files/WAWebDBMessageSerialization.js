__d(
  "WAWebDBMessageSerialization",
  [
    "invariant",
    "WAJids",
    "WAWebApiHydrateWidsUtil",
    "WAWebDBMessageUtils",
    "WAWebDBMsgOpaqueDataKeys",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMusicGatingUtils",
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
        g = babelHelpers.extends({}, t);
      (t.quotedMsg && (g.quotedMsg = babelHelpers.extends({}, t.quotedMsg)),
        (a = t.quotedMsg) != null &&
          a.paymentNoteMsg &&
          (g.quotedMsg.paymentNoteMsg = babelHelpers.extends(
            {},
            t.quotedMsg.paymentNoteMsg,
          )),
        t.paymentNoteMsg &&
          (g.paymentNoteMsg = babelHelpers.extends({}, t.paymentNoteMsg)),
        t.groupMentions &&
          (g.groupMentions = t.groupMentions.map(function (e) {
            return {
              groupSubject: e.groupSubject,
              groupJid: o("WAWebWidFactory").createWidFromWidLike(e.groupJid),
            };
          })),
        (g.star = g.isStarred !== void 0),
        (g.isMdHistoryMsg = g.rowId < e),
        g.internalId != null &&
          (((i = g.to) == null ? void 0 : i.server) === "newsletter" ||
            ((l = g.from) != null && l.endsWith("@newsletter"))) &&
          (g.serverId = o("WAWebDBMessageUtils").getInChatMsgId(g.internalId)),
        r("isArrayNullOrEmpty")(g.internalThreadIDs) ||
          (g.threadIds = g.internalThreadIDs.map(function (e) {
            return o("WAWebDBMessageUtils").getThreadIdFromInternalThreadId(e);
          })),
        delete g.internalId,
        delete g.isStarred,
        delete g.count,
        delete g.hasLink,
        delete g.isMediaMsg,
        delete g.isDocMsg,
        delete g.isCallLogMsg,
        delete g.isCarouselMsg,
        delete g.isEventMsg,
        delete g.typeFlag,
        delete g.pendingReadReceipt,
        f(g),
        r("gkx")("22769") && delete g.msgRowOpaqueData,
        o("WAWebApiHydrateWidsUtil").hydrateWids(g),
        c.forEach(function (e) {
          g[e] != null && (g[e] = r("WAWebMsgKey").from(g[e]));
        }),
        ((s = g.quotedMsg) == null ? void 0 : s.id) != null &&
          (g.quotedMsg.id = r("WAWebMsgKey").from(g.quotedMsg.id)),
        ((u = g.groupHistoryIndividualMessageInfo) == null
          ? void 0
          : u.bundleMessageKey) != null &&
          (g.groupHistoryIndividualMessageInfo.bundleMessageKey = r(
            "WAWebMsgKey",
          ).from(g.groupHistoryIndividualMessageInfo.bundleMessageKey)),
        g.groupHistoryBundleMetadata != null &&
          g.groupHistoryBundleMetadata.oldestMessageTimestampInWindow == null &&
          g.groupHistoryBundleMetadata.oldestMessageTimestamp != null &&
          ((g.groupHistoryBundleMetadata = babelHelpers.extends(
            {},
            g.groupHistoryBundleMetadata,
            {
              oldestMessageTimestampInWindow:
                g.groupHistoryBundleMetadata.oldestMessageTimestamp,
            },
          )),
          delete g.groupHistoryBundleMetadata.oldestMessageTimestamp),
        g.messageSecret != null &&
          (g.messageSecret = new Uint8Array(g.messageSecret)),
        g.botMessageSecret != null &&
          (g.botMessageSecret = new Uint8Array(g.botMessageSecret)));
      var h = m(g),
        y = h[0],
        C = h[1],
        b = h[2];
      ((g.futureproofType = y),
        (g.futureproofSubtype = C),
        (g.subtype = b != null ? b : void 0));
      var v = p(g.type, g.subtype);
      return (
        v != null &&
          ((g.type = v.type),
          (g.kind = v.kind),
          (g.subtype = v.subtype),
          (g.futureproofType = v.futureproofType),
          (g.futureproofSubtype = v.futureproofSubtype)),
        _(g),
        g.quotedMsg != null && _(g.quotedMsg),
        (g.viewMode =
          (d = g.viewMode) != null
            ? d
            : o("WAWebViewMode.flow").ViewModeType.VISIBLE),
        g.carouselCardsParsed != null &&
          (g.carouselCardsParsed = g.carouselCardsParsed.map(function (e) {
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
        n == null || n(g),
        g
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
      e.type === o("WAWebMsgType").MSG_TYPE.MUSIC &&
        !o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled() &&
        ((e.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN),
        (e.kind = o("WAWebMsgType").MsgKind.Unknown),
        (e.futureproofType = o("WAWebMsgType").MSG_TYPE.MUSIC));
    }
    function f(e) {
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
    function g(e, t) {
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
        h(o, t),
        o
      );
    }
    function h(e, t) {
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
      (l.movFieldFromOpaqueDataBackToMsg = f),
      (l.dbRowFromMessage = g),
      (l.movEncFieldToOpaqueData = h));
  },
  98,
);
