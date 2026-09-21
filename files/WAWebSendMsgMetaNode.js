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
      var n = t.botMetricsOrigin,
        r = t.chatId,
        a = t.includeAttributes,
        i = t.msgRecord;
      if (n != null && o("WAWebBotUtils").isMetaAiBot(r)) return n;
      var l =
        i.data.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
        i.data.isForwarded === !0;
      return l ? e : s(r, a);
    }
    function c(e) {
      var t,
        n,
        r,
        a = e.chatId,
        i = e.groupData,
        l = e.includeAttributes,
        s = e.msgProtobuf,
        c = e.msgRecord,
        m =
          (t = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(s)) != null
            ? t
            : s,
        y = p(m),
        C = d(s),
        b = _(m),
        v = g(l),
        S;
      c.type === "addon" &&
        (S = o("WAWebE2EProtoUtils").extractCommentTargetIdAndSenderLid(
          c.data,
        ));
      var R = c.data.botMetricsMetadata,
        L =
          R != null
            ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(
                R.destinationEntryPoint,
              )
            : null,
        E = (n = R == null ? void 0 : R.destinationId) != null ? n : null,
        k = u({
          botMetricsOrigin: L,
          chatId: a,
          includeAttributes: l,
          msgRecord: c,
        }),
        I = f(c, l),
        T = h(c),
        D = ((r = c.data.mediaData) == null ? void 0 : r.isViewOnce) === !0,
        x =
          y != null ||
          b != null ||
          S != null ||
          k != null ||
          E != null ||
          (l == null ? void 0 : l.appendHostedSenderIntent) === !0 ||
          I != null ||
          D ||
          v != null ||
          T != null ||
          C != null;
      if (x) {
        var $, P;
        return o("WAWap").wap("meta", {
          origin:
            k != null ? o("WAWap").CUSTOM_STRING(k) : o("WAWap").DROP_ATTR,
          destination_id:
            E != null ? o("WAWap").CUSTOM_STRING(E) : o("WAWap").DROP_ATTR,
          sender_intent:
            (l == null ? void 0 : l.appendHostedSenderIntent) === !0
              ? "hosted"
              : o("WAWap").DROP_ATTR,
          polltype: y != null ? y : o("WAWap").DROP_ATTR,
          event_type: b != null ? b : o("WAWap").DROP_ATTR,
          thread_msg_id:
            (($ = S) == null ? void 0 : $.threadMsgId) != null
              ? o("WAWap").CUSTOM_STRING(S.threadMsgId)
              : o("WAWap").DROP_ATTR,
          thread_msg_sender_jid:
            (P = S) != null && P.threadMsgSenderLid
              ? o("WAWebCommsWapMd").USER_JID(S.threadMsgSenderLid)
              : o("WAWap").DROP_ATTR,
          appdata:
            I != null ? o("WAWap").CUSTOM_STRING(I) : o("WAWap").DROP_ATTR,
          view_once: D ? "true" : o("WAWap").DROP_ATTR,
          conversation_thread_id:
            v != null ? o("WAWap").CUSTOM_STRING(v) : o("WAWap").DROP_ATTR,
          tag_reason:
            T != null ? o("WAWap").CUSTOM_STRING(T) : o("WAWap").DROP_ATTR,
          message_association_type:
            C != null ? o("WAWap").CUSTOM_STRING(C) : o("WAWap").DROP_ATTR,
        });
      }
    }
    function d(e) {
      var t,
        n,
        r =
          (t = e.messageContextInfo) == null ||
          (t = t.messageAssociation) == null
            ? void 0
            : t.associationType;
      return r == null ? null : (n = m.get(r)) != null ? n : null;
    }
    var m = new Map([
      [
        o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
          .HD_IMAGE_DUAL_UPLOAD,
        "hd_image_dual_upload",
      ],
    ]);
    function p(e) {
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
    function _(e) {
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
    function f(e, t) {
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
    function g(e) {
      var t = e != null ? e : {},
        n = t.hashedAiThreadId;
      return n != null ? n : null;
    }
    function h(e) {
      var t,
        n =
          e.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          e.data.subtype === "member_label";
      if (!n) return null;
      var r = (t = e.data.memberLabelData) == null ? void 0 : t.label;
      return r === "" || r == null ? "user_delete" : "user_update";
    }
    ((l.getOriginAttribute = s), (l.getMetaOrigin = u), (l.genMetaNode = c));
  },
  98,
);
