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
        f = babelHelpers.extends({}, t);
      (t.quotedMsg && (f.quotedMsg = babelHelpers.extends({}, t.quotedMsg)),
        (a = t.quotedMsg) != null &&
          a.paymentNoteMsg &&
          (f.quotedMsg.paymentNoteMsg = babelHelpers.extends(
            {},
            t.quotedMsg.paymentNoteMsg,
          )),
        t.paymentNoteMsg &&
          (f.paymentNoteMsg = babelHelpers.extends({}, t.paymentNoteMsg)),
        t.groupMentions &&
          (f.groupMentions = t.groupMentions.map(function (e) {
            return {
              groupSubject: e.groupSubject,
              groupJid: o("WAWebWidFactory").createWidFromWidLike(e.groupJid),
            };
          })),
        (f.star = f.isStarred !== void 0),
        (f.isMdHistoryMsg = f.rowId < e),
        f.internalId != null &&
          (((i = f.to) == null ? void 0 : i.server) === "newsletter" ||
            ((l = f.from) != null && l.endsWith("@newsletter"))) &&
          (f.serverId = o("WAWebDBMessageUtils").getInChatMsgId(f.internalId)),
        r("isArrayNullOrEmpty")(f.internalThreadIDs) ||
          (f.threadIds = f.internalThreadIDs.map(function (e) {
            return o("WAWebDBMessageUtils").getThreadIdFromInternalThreadId(e);
          })),
        delete f.internalId,
        delete f.isStarred,
        delete f.count,
        delete f.hasLink,
        delete f.isMediaMsg,
        delete f.isDocMsg,
        delete f.isCallLogMsg,
        delete f.isCarouselMsg,
        delete f.isEventMsg,
        delete f.typeFlag,
        delete f.pendingReadReceipt,
        _(f),
        r("gkx")("22769") && delete f.msgRowOpaqueData,
        o("WAWebApiHydrateWidsUtil").hydrateWids(f),
        c.forEach(function (e) {
          f[e] != null && (f[e] = r("WAWebMsgKey").from(f[e]));
        }),
        ((s = f.quotedMsg) == null ? void 0 : s.id) != null &&
          (f.quotedMsg.id = r("WAWebMsgKey").from(f.quotedMsg.id)),
        ((u = f.groupHistoryIndividualMessageInfo) == null
          ? void 0
          : u.bundleMessageKey) != null &&
          (f.groupHistoryIndividualMessageInfo.bundleMessageKey = r(
            "WAWebMsgKey",
          ).from(f.groupHistoryIndividualMessageInfo.bundleMessageKey)),
        f.groupHistoryBundleMetadata != null &&
          f.groupHistoryBundleMetadata.oldestMessageTimestampInWindow == null &&
          f.groupHistoryBundleMetadata.oldestMessageTimestamp != null &&
          ((f.groupHistoryBundleMetadata = babelHelpers.extends(
            {},
            f.groupHistoryBundleMetadata,
            {
              oldestMessageTimestampInWindow:
                f.groupHistoryBundleMetadata.oldestMessageTimestamp,
            },
          )),
          delete f.groupHistoryBundleMetadata.oldestMessageTimestamp),
        f.messageSecret != null &&
          (f.messageSecret = new Uint8Array(f.messageSecret)),
        f.botMessageSecret != null &&
          (f.botMessageSecret = new Uint8Array(f.botMessageSecret)));
      var g = m(f),
        h = g[0],
        y = g[1],
        C = g[2];
      ((f.futureproofType = h),
        (f.futureproofSubtype = y),
        (f.subtype = C != null ? C : void 0));
      var b = p(f.type, f.subtype);
      return (
        b != null &&
          ((f.type = b.type),
          (f.kind = b.kind),
          (f.subtype = b.subtype),
          (f.futureproofType = b.futureproofType),
          (f.futureproofSubtype = b.futureproofSubtype)),
        (f.viewMode =
          (d = f.viewMode) != null
            ? d
            : o("WAWebViewMode.flow").ViewModeType.VISIBLE),
        f.carouselCardsParsed != null &&
          (f.carouselCardsParsed = f.carouselCardsParsed.map(function (e) {
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
        n == null || n(f),
        f
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
          )),
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
        var i = n.originalSelfAuthor;
        (i != null &&
          r("WAWebWid").isWid(i) &&
          (e.originalSelfAuthor = o("WAWebWidFactory").createWid(i)),
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
    function f(e, t) {
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
        g(o, t),
        o
      );
    }
    function g(e, t) {
      var n,
        r,
        a = { currentMsg: {}, quotedMsg: {} };
      if ((n = e.paymentNoteMsg) != null && n.body) {
        var i;
        ((a.currentMsg.paymentNoteMsgBody = e.paymentNoteMsg.body),
          (i = e.paymentNoteMsg) == null || delete i.body);
      }
      ((r = e.quotedMsg) != null &&
        (r = r.paymentNoteMsg) != null &&
        r.body &&
        ((a.quotedMsg.paymentNoteMsgBody = e.quotedMsg.paymentNoteMsg.body),
        delete e.quotedMsg.paymentNoteMsg.body),
        e.correctOptionIndex != null &&
          ((a.currentMsg.correctOptionIndex = e.correctOptionIndex),
          delete e.correctOptionIndex),
        o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach(
          function (t) {
            ((a.currentMsg[o("WAWebDBMsgOpaqueDataKeys").getKey(e.type, t)] =
              e[t]),
              delete e[t]);
          },
        ),
        e.originalSelfAuthor &&
          ((a.currentMsg.originalSelfAuthor = o("WAJids").extractUserJid(
            o("WAWebWidToJid").widToDeviceJid(e.originalSelfAuthor),
          )),
          delete e.originalSelfAuthor),
        (a.currentMsg.pollContentType = o(
          "WAWebPollCreationUtils",
        ).getPollContentTypeAsDBValue(e.pollContentType)),
        delete e.pollContentType,
        (a.currentMsg.pollType = o(
          "WAWebPollCreationUtils",
        ).getPollTypeAsDBValue(e.pollType)),
        delete e.pollType,
        (a.currentMsg.pollOptions = o("WAWebPollsDbUtils").compressPollOptions(
          e.pollOptions,
        )),
        delete e.pollOptions,
        (a.currentMsg.pollVotesSnapshot = o(
          "WAWebPollsDbUtils",
        ).compressPollVotesSnapshot(e.pollVotesSnapshot)),
        delete e.pollVotesSnapshot,
        e.quotedMsg &&
          (o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach(
            function (t) {
              ((a.quotedMsg[t] = e.quotedMsg[t]), delete e.quotedMsg[t]);
            },
          ),
          (a.quotedMsg.pollOptions = o("WAWebPollsDbUtils").compressPollOptions(
            e.quotedMsg.pollOptions,
          )),
          delete e.quotedMsg.pollOptions),
        (t == null ? void 0 : t.storeReportingInfo) === !0 &&
          e.plainProtobufBytes != null &&
          (a.currentMsg.plainProtobufBytes = e.plainProtobufBytes),
        delete e.plainProtobufBytes);
      var l = o("encodeProtobuf").encodeProtobuf(
        o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
        a,
      );
      e.msgRowOpaqueData = l.readBuffer();
    }
    ((l.messageFromDbRow = d),
      (l.getGatedOffStatusMentionFutureproof = p),
      (l.movFieldFromOpaqueDataBackToMsg = _),
      (l.dbRowFromMessage = f),
      (l.movEncFieldToOpaqueData = g));
  },
  98,
);
