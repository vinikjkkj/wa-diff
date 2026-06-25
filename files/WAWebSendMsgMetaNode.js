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
    var e = "forward";
    function s(e, t) {
      var n = t == null ? void 0 : t.origin;
      return e.isLid() &&
        n != null &&
        n === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
        ? n
        : null;
    }
    function u(t) {
      var n,
        r,
        a,
        i = t.chatId,
        l = t.groupData,
        u = t.includeAttributes,
        f = t.msgProtobuf,
        g = t.msgRecord,
        h =
          (n = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(f)) != null
            ? n
            : f,
        y = c(h),
        C = d(h),
        b = p(u),
        v;
      g.type === "addon" &&
        (v = o("WAWebE2EProtoUtils").extractCommentTargetIdAndSenderLid(
          g.data,
        ));
      var S = g.data.botMetricsMetadata,
        R =
          S != null
            ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(
                S.destinationEntryPoint,
              )
            : null,
        L = (r = S == null ? void 0 : S.destinationId) != null ? r : null,
        E =
          g.data.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
          g.data.isForwarded === !0,
        k;
      R != null && o("WAWebBotUtils").isMetaAiBot(i)
        ? (k = R)
        : E
          ? (k = e)
          : (k = s(i, u));
      var I = m(g, u),
        T = _(g),
        D = ((a = g.data.mediaData) == null ? void 0 : a.isViewOnce) === !0,
        x =
          y != null ||
          C != null ||
          v != null ||
          k != null ||
          L != null ||
          (u == null ? void 0 : u.appendHostedSenderIntent) === !0 ||
          I != null ||
          D ||
          b != null ||
          T != null;
      if (x) {
        var $, P;
        return o("WAWap").wap("meta", {
          origin:
            k != null ? o("WAWap").CUSTOM_STRING(k) : o("WAWap").DROP_ATTR,
          destination_id:
            L != null ? o("WAWap").CUSTOM_STRING(L) : o("WAWap").DROP_ATTR,
          sender_intent:
            (u == null ? void 0 : u.appendHostedSenderIntent) === !0
              ? "hosted"
              : o("WAWap").DROP_ATTR,
          polltype: y != null ? y : o("WAWap").DROP_ATTR,
          event_type: C != null ? C : o("WAWap").DROP_ATTR,
          thread_msg_id:
            (($ = v) == null ? void 0 : $.threadMsgId) != null
              ? o("WAWap").CUSTOM_STRING(v.threadMsgId)
              : o("WAWap").DROP_ATTR,
          thread_msg_sender_jid:
            (P = v) != null && P.threadMsgSenderLid
              ? o("WAWebCommsWapMd").USER_JID(v.threadMsgSenderLid)
              : o("WAWap").DROP_ATTR,
          appdata:
            I != null ? o("WAWap").CUSTOM_STRING(I) : o("WAWap").DROP_ATTR,
          view_once: D ? "true" : o("WAWap").DROP_ATTR,
          conversation_thread_id:
            b != null ? o("WAWap").CUSTOM_STRING(b) : o("WAWap").DROP_ATTR,
          tag_reason:
            T != null ? o("WAWap").CUSTOM_STRING(T) : o("WAWap").DROP_ATTR,
        });
      }
    }
    function c(e) {
      var t, n;
      return e.pollCreationMessage != null ||
        e.pollCreationMessageV2 != null ||
        e.pollCreationMessageV3 != null ||
        e.pollCreationMessageV5 != null ||
        e.pollCreationMessageV6 != null
        ? o("WAWebHandleMsgCommon").POLL_TYPES.creation
        : ((t = e.pollUpdateMessage) == null ? void 0 : t.vote) != null
          ? o("WAWebHandleMsgCommon").POLL_TYPES.vote
          : (e.pollResultSnapshotMessage != null ||
                e.pollResultSnapshotMessageV3 != null) &&
              r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()
            ? o("WAWebHandleMsgCommon").POLL_TYPES.result_snapshot
            : ((n = e.secretEncryptedMessage) == null
                  ? void 0
                  : n.secretEncType) ===
                o("WAWebProtobufsE2E.pb")
                  .Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT
              ? o("WAWebHandleMsgCommon").POLL_TYPES.edit
              : null;
    }
    function d(e) {
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
    function m(e, t) {
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
    function p(e) {
      var t = e != null ? e : {},
        n = t.hashedAiThreadId;
      return n != null ? n : null;
    }
    function _(e) {
      var t,
        n =
          e.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          e.data.subtype === "member_label";
      if (!n) return null;
      var r = (t = e.data.memberLabelData) == null ? void 0 : t.label;
      return r === "" || r == null ? "user_delete" : "user_update";
    }
    ((l.getOriginAttribute = s), (l.genMetaNode = u));
  },
  98,
);
