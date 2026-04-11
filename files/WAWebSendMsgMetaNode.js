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
    function s(t, n, r, a, i) {
      var l,
        s,
        _,
        f =
          (l = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(r)) != null
            ? l
            : r,
        g = u(f),
        h = c(f),
        y = m(i),
        C;
      n.type === "addon" &&
        (C = o("WAWebE2EProtoUtils").extractCommentTargetIdAndSenderLid(
          n.data,
        ));
      var b = n.data.botMetricsMetadata,
        v =
          b != null
            ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(
                b.destinationEntryPoint,
              )
            : null,
        S = (s = b == null ? void 0 : b.destinationId) != null ? s : null,
        R = v != null && o("WAWebBotUtils").isMetaAiBot(t) ? v : e(t, i),
        L = d(n, i),
        E = p(n),
        k = ((_ = n.data.mediaData) == null ? void 0 : _.isViewOnce) === !0,
        I =
          g != null ||
          h != null ||
          C != null ||
          R != null ||
          S != null ||
          (i == null ? void 0 : i.appendHostedSenderIntent) === !0 ||
          L != null ||
          k ||
          y != null ||
          E != null;
      if (I) {
        var T, D;
        return o("WAWap").wap("meta", {
          origin:
            R != null ? o("WAWap").CUSTOM_STRING(R) : o("WAWap").DROP_ATTR,
          destination_id:
            S != null ? o("WAWap").CUSTOM_STRING(S) : o("WAWap").DROP_ATTR,
          sender_intent:
            (i == null ? void 0 : i.appendHostedSenderIntent) === !0
              ? "hosted"
              : o("WAWap").DROP_ATTR,
          polltype: g != null ? g : o("WAWap").DROP_ATTR,
          event_type: h != null ? h : o("WAWap").DROP_ATTR,
          thread_msg_id:
            ((T = C) == null ? void 0 : T.threadMsgId) != null
              ? o("WAWap").CUSTOM_STRING(C.threadMsgId)
              : o("WAWap").DROP_ATTR,
          thread_msg_sender_jid:
            (D = C) != null && D.threadMsgSenderLid
              ? o("WAWebCommsWapMd").USER_JID(C.threadMsgSenderLid)
              : o("WAWap").DROP_ATTR,
          appdata:
            L != null ? o("WAWap").CUSTOM_STRING(L) : o("WAWap").DROP_ATTR,
          view_once: k ? "true" : o("WAWap").DROP_ATTR,
          conversation_thread_id:
            y != null ? o("WAWap").CUSTOM_STRING(y) : o("WAWap").DROP_ATTR,
          tag_reason:
            E != null ? o("WAWap").CUSTOM_STRING(E) : o("WAWap").DROP_ATTR,
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
