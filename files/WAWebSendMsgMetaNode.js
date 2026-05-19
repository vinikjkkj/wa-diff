__d(
  "WAWebSendMsgMetaNode",
  [
    "WAWap",
    "WAWebBotLoggingUtils",
    "WAWebBotUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgCommon",
    "WAWebMsgType",
    "WAWebPollResultSnapshotPollTypeEnvelopeEnabled",
    "WAWebProtobufsE2E.pb",
    "WAWebUsernameTypes",
    "WAWebVerifyProtobufMsgObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t == null ? void 0 : t.origin;
      return e.isLid() &&
        n != null &&
        n === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
        ? n
        : null;
    }
    function s(t) {
      var n,
        r,
        a,
        i = t.chatId,
        l = t.groupData,
        s = t.includeAttributes,
        _ = t.msgProtobuf,
        f = t.msgRecord,
        g =
          (n = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(_)) != null
            ? n
            : _,
        h = u(g),
        y = c(g),
        C = m(s),
        b;
      f.type === "addon" &&
        (b = o("WAWebE2EProtoUtils").extractCommentTargetIdAndSenderLid(
          f.data,
        ));
      var v = f.data.botMetricsMetadata,
        S =
          v != null
            ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(
                v.destinationEntryPoint,
              )
            : null,
        R = (r = v == null ? void 0 : v.destinationId) != null ? r : null,
        L = S != null && o("WAWebBotUtils").isMetaAiBot(i) ? S : e(i, s),
        E = d(f, s),
        k = p(f),
        I = ((a = f.data.mediaData) == null ? void 0 : a.isViewOnce) === !0,
        T =
          h != null ||
          y != null ||
          b != null ||
          L != null ||
          R != null ||
          (s == null ? void 0 : s.appendHostedSenderIntent) === !0 ||
          E != null ||
          I ||
          C != null ||
          k != null;
      if (T) {
        var D, x;
        return o("WAWap").wap("meta", {
          origin:
            L != null ? o("WAWap").CUSTOM_STRING(L) : o("WAWap").DROP_ATTR,
          destination_id:
            R != null ? o("WAWap").CUSTOM_STRING(R) : o("WAWap").DROP_ATTR,
          sender_intent:
            (s == null ? void 0 : s.appendHostedSenderIntent) === !0
              ? "hosted"
              : o("WAWap").DROP_ATTR,
          polltype: h != null ? h : o("WAWap").DROP_ATTR,
          event_type: y != null ? y : o("WAWap").DROP_ATTR,
          thread_msg_id:
            ((D = b) == null ? void 0 : D.threadMsgId) != null
              ? o("WAWap").CUSTOM_STRING(b.threadMsgId)
              : o("WAWap").DROP_ATTR,
          thread_msg_sender_jid:
            (x = b) != null && x.threadMsgSenderLid
              ? o("WAWebCommsWapMd").USER_JID(b.threadMsgSenderLid)
              : o("WAWap").DROP_ATTR,
          appdata:
            E != null ? o("WAWap").CUSTOM_STRING(E) : o("WAWap").DROP_ATTR,
          view_once: I ? "true" : o("WAWap").DROP_ATTR,
          conversation_thread_id:
            C != null ? o("WAWap").CUSTOM_STRING(C) : o("WAWap").DROP_ATTR,
          tag_reason:
            k != null ? o("WAWap").CUSTOM_STRING(k) : o("WAWap").DROP_ATTR,
        });
      }
    }
    function u(e) {
      var t;
      return e.pollCreationMessage != null ||
        e.pollCreationMessageV2 != null ||
        e.pollCreationMessageV3 != null
        ? o("WAWebHandleMsgCommon").POLL_TYPES.creation
        : ((t = e.pollUpdateMessage) == null ? void 0 : t.vote) != null
          ? o("WAWebHandleMsgCommon").POLL_TYPES.vote
          : (e.pollResultSnapshotMessage != null ||
                e.pollResultSnapshotMessageV3 != null) &&
              r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()
            ? o("WAWebHandleMsgCommon").POLL_TYPES.result_snapshot
            : null;
    }
    function c(e) {
      var t;
      return e.eventMessage != null
        ? o("WAWebHandleMsgCommon").EVENT_TYPES.creation
        : e.encEventResponseMessage != null
          ? o("WAWebHandleMsgCommon").EVENT_TYPES.response
          : ((t = e.secretEncryptedMessage) == null
                ? void 0
                : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT
            ? o("WAWebHandleMsgCommon").EVENT_TYPES.edit
            : null;
    }
    function d(e, t) {
      var n =
        e.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        e.data.subtype === "member_label";
      if (n) return "member_tag";
      var r =
          e.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          e.data.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSyncResponse,
        a = (t == null ? void 0 : t.isCategoryPeerMessage) === !0;
      return r || a
        ? "default"
        : e.data.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE
          ? "group_history"
          : null;
    }
    function m(e) {
      var t = e != null ? e : {},
        n = t.hashedAiThreadId;
      return n != null ? n : null;
    }
    function p(e) {
      var t,
        n =
          e.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          e.data.subtype === "member_label";
      if (!n) return null;
      var r = (t = e.data.memberLabelData) == null ? void 0 : t.label;
      return r === "" || r == null ? "user_delete" : "user_update";
    }
    ((l.getOriginAttribute = e), (l.genMetaNode = s));
  },
  98,
);
