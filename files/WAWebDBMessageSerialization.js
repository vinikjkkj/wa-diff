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
    "WAWebThreadsGating",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "decodeProtobuf",
    "encodeProtobuf",
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
        _ = babelHelpers.extends({}, t);
      (t.quotedMsg && (_.quotedMsg = babelHelpers.extends({}, t.quotedMsg)),
        (a = t.quotedMsg) != null &&
          a.paymentNoteMsg &&
          (_.quotedMsg.paymentNoteMsg = babelHelpers.extends(
            {},
            t.quotedMsg.paymentNoteMsg,
          )),
        t.paymentNoteMsg &&
          (_.paymentNoteMsg = babelHelpers.extends({}, t.paymentNoteMsg)),
        t.groupMentions &&
          (_.groupMentions = t.groupMentions.map(function (e) {
            return {
              groupSubject: e.groupSubject,
              groupJid: o("WAWebWidFactory").createWidFromWidLike(e.groupJid),
            };
          })),
        (_.star = _.isStarred !== void 0),
        (_.isMdHistoryMsg = _.rowId < e),
        _.internalId != null &&
          (((i = _.to) == null ? void 0 : i.server) === "newsletter" ||
            ((l = _.from) != null && l.endsWith("@newsletter"))) &&
          (_.serverId = o("WAWebDBMessageUtils").getInChatMsgId(_.internalId)),
        !r("isArrayNullOrEmpty")(_.internalThreadIDs) &&
          o("WAWebThreadsGating").isThreadsInfraEnabled() &&
          (_.threadIds = _.internalThreadIDs.map(function (e) {
            return o("WAWebDBMessageUtils").getThreadIdFromInternalThreadId(e);
          })),
        delete _.internalId,
        delete _.isStarred,
        delete _.count,
        delete _.hasLink,
        delete _.isMediaMsg,
        delete _.isDocMsg,
        delete _.isCallLogMsg,
        delete _.isCarouselMsg,
        delete _.isEventMsg,
        delete _.typeFlag,
        delete _.pendingReadReceipt,
        p(_),
        o("WAWebApiHydrateWidsUtil").hydrateWids(_),
        c.forEach(function (e) {
          _[e] != null && (_[e] = r("WAWebMsgKey").from(_[e]));
        }),
        ((s = _.quotedMsg) == null ? void 0 : s.id) != null &&
          (_.quotedMsg.id = r("WAWebMsgKey").from(_.quotedMsg.id)),
        ((u = _.groupHistoryIndividualMessageInfo) == null
          ? void 0
          : u.bundleMessageKey) != null &&
          (_.groupHistoryIndividualMessageInfo.bundleMessageKey = r(
            "WAWebMsgKey",
          ).from(_.groupHistoryIndividualMessageInfo.bundleMessageKey)),
        _.groupHistoryBundleMetadata != null &&
          _.groupHistoryBundleMetadata.oldestMessageTimestampInWindow == null &&
          _.groupHistoryBundleMetadata.oldestMessageTimestamp != null &&
          ((_.groupHistoryBundleMetadata = babelHelpers.extends(
            {},
            _.groupHistoryBundleMetadata,
            {
              oldestMessageTimestampInWindow:
                _.groupHistoryBundleMetadata.oldestMessageTimestamp,
            },
          )),
          delete _.groupHistoryBundleMetadata.oldestMessageTimestamp),
        _.messageSecret != null &&
          (_.messageSecret = new Uint8Array(_.messageSecret)),
        _.botMessageSecret != null &&
          (_.botMessageSecret = new Uint8Array(_.botMessageSecret)));
      var f = m(_),
        g = f[0],
        h = f[1],
        y = f[2];
      return (
        (_.futureproofType = g),
        (_.futureproofSubtype = h),
        (_.subtype = y != null ? y : void 0),
        (_.viewMode =
          (d = _.viewMode) != null
            ? d
            : o("WAWebViewMode.flow").ViewModeType.VISIBLE),
        _.carouselCardsParsed != null &&
          (_.carouselCardsParsed = _.carouselCardsParsed.map(function (e) {
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
        n == null || n(_),
        _
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
    function p(e) {
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
    function _(e, t) {
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
        f(o, t),
        o
      );
    }
    function f(e, t) {
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
      (l.movFieldFromOpaqueDataBackToMsg = p),
      (l.dbRowFromMessage = _),
      (l.movEncFieldToOpaqueData = f));
  },
  98,
);
